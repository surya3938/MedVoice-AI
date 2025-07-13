import React, { useState, useEffect, useRef } from "react";
import "regenerator-runtime/runtime";

import {
  Send,
  Stethoscope,
  Mic,
  MicOff,
  Volume2,
  MessageCircle,
  XCircle,
} from "lucide-react";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Med() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mode, setMode] = useState("chat"); // "chat" or "voice"
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en-US");
  const [availableVoices, setAvailableVoices] = useState([]);
  const currentUtteranceRef = useRef(null);

  const languageOptions = [
    { code: "en-US", label: "English (US)" },
    { code: "en-GB", label: "English (UK)" },
    { code: "hi-IN", label: "Hindi" },
    { code: "es-ES", label: "Spanish (Spain)" },
    { code: "es-US", label: "Spanish (US)" },
    { code: "fr-FR", label: "French" },
    { code: "de-DE", label: "German" },
    { code: "zh-CN", label: "Chinese (Mainland)" },
    { code: "zh-TW", label: "Chinese (Taiwan)" },
    { code: "ja-JP", label: "Japanese" },
    { code: "ko-KR", label: "Korean" },
    { code: "it-IT", label: "Italian" },
    { code: "pt-BR", label: "Portuguese (Brazil)" },
    { code: "ru-RU", label: "Russian" },
  ];

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      console.warn("Speech recognition is not supported in this browser.");
    }
  }, [browserSupportsSpeechRecognition]);

  // Load and handle voices
  useEffect(() => {
    if (!window.speechSynthesis) {
      console.error("Speech synthesis not supported in this browser");
      return;
    }

    const loadVoices = () => {
      try {
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();

        if (voices.length > 0) {
          setAvailableVoices(voices);
          console.log("Available voices loaded:", voices.length);
        } else {
          console.warn("No voices available");
        }
      } catch (error) {
        console.error("Error loading voices:", error);
      }
    };

    // Initial load attempt
    loadVoices();

    // Set up event listener for voices changed
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Poll for voices as a fallback (some browsers need this)
    const voiceCheckInterval = setInterval(() => {
      if (availableVoices.length === 0) {
        loadVoices();
      } else {
        clearInterval(voiceCheckInterval);
      }
    }, 500);

    // Cleanup
    return () => {
      clearInterval(voiceCheckInterval);
      if (window.speechSynthesis?.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = null;
      }

      // Make sure to cancel any speech when unmounting
      try {
        window.speechSynthesis?.cancel();
      } catch (e) {
        console.error("Error canceling speech on unmount:", e);
      }
    };
  }, []);

  const [lastProcessedTranscript, setLastProcessedTranscript] = useState("");

  useEffect(() => {
    if (
      mode === "voice" &&
      transcript &&
      !isRecording &&
      transcript.length > 0 &&
      transcript !== lastProcessedTranscript // Prevent duplicate processing
    ) {
      setLastProcessedTranscript(transcript); // Update last processed transcript
      handleSendMessage(transcript);
      resetTranscript();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript, isRecording]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = { text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/chat/", {
        user_input: text,
        language: selectedLang,
      });

      const botResponse = response.data.response;
      const botMessage = { text: botResponse, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);

      if (mode === "voice") {
        speakText(botResponse);
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = {
        text: "Sorry, I couldn't process that request. Please try again.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    SpeechRecognition.startListening({
      continuous: false,
      language: selectedLang,
    });
  };

  const stopRecording = () => {
    setIsRecording(false);
    SpeechRecognition.stopListening();
  };

  const stopSpeaking = () => {
    try {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (currentUtteranceRef.current) {
        currentUtteranceRef.current = null;
      }
      setIsSpeaking(false);
    } catch (e) {
      console.error("Error stopping speech:", e);
    }
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    if (newMode === "voice") {
      speakText("Voice mode activated. Start speaking when ready.");
    }
  };

  const findBestVoiceForLanguage = (langCode) => {
    if (!availableVoices || availableVoices.length === 0) {
      return null;
    }

    const langPrefix = langCode.split("-")[0].toLowerCase();

    // Try strategies in order of preference:

    // 1. Try exact match first
    const exactMatch = availableVoices.find(
      (voice) => voice.lang.toLowerCase() === langCode.toLowerCase()
    );
    if (exactMatch) return exactMatch;

    // 2. Try matching just the main language code with same region
    const regionMatch = availableVoices.find((voice) =>
      voice.lang.toLowerCase().includes(langCode.toLowerCase())
    );
    if (regionMatch) return regionMatch;

    // 3. Try any voice with the same language base (e.g. 'en' part of 'en-US')
    const languageMatch = availableVoices.find((voice) =>
      voice.lang.toLowerCase().startsWith(langPrefix)
    );
    if (languageMatch) return languageMatch;

    // 4. Default to first available voice as fallback
    console.warn(`No matching voice found for ${langCode}, using default`);
    return availableVoices[0];
  };

  const speakText = (text) => {
    if (!window.speechSynthesis) {
      console.error("Speech synthesis not supported");
      return;
    }

    try {
      // Cancel any ongoing speech
      stopSpeaking();

      // Create a new utterance
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = selectedLang;

      // Find the best matching voice
      const voice = findBestVoiceForLanguage(selectedLang);
      if (voice) {
        speech.voice = voice;
        console.log(`Using voice: ${voice.name} (${voice.lang})`);
      }

      // Keep track of current utterance
      currentUtteranceRef.current = speech;

      // Set properties
      speech.rate = 1;
      speech.pitch = 1;
      speech.volume = 1;

      // Add event handlers
      speech.onstart = () => setIsSpeaking(true);
      speech.onend = () => {
        setIsSpeaking(false);
        currentUtteranceRef.current = null;
      };
      speech.onerror = (e) => {
        console.error("Speech synthesis error:", e);
        // Only set speaking to false if it was the current utterance
        if (currentUtteranceRef.current === speech) {
          setIsSpeaking(false);
          currentUtteranceRef.current = null;
        }
      };

      // Speak the text
      window.speechSynthesis.speak(speech);
    } catch (error) {
      console.error("Error in speech synthesis:", error);
      setIsSpeaking(false);
    }
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLang(newLang);

    // Log available voices for this language for debugging
    const langPrefix = newLang.split("-")[0].toLowerCase();
    const matchingVoices = availableVoices.filter((voice) =>
      voice.lang.toLowerCase().startsWith(langPrefix)
    );

    if (matchingVoices.length > 0) {
      console.log(
        `Available voices for ${newLang}:`,
        matchingVoices.map((v) => `${v.name} (${v.lang})`)
      );
    } else {
      console.warn(`No matching voices found for ${newLang}`);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-600 flex items-center gap-2">
          <Stethoscope className="w-10 h-10 text-blue-500" /> MedVoice AI
        </h1>
        <p className="text-gray-600 mt-4 text-left">
          This system is designed to provide accurate and contextually relevant
          medical information, catering to both healthcare professionals and
          patients. It supports both chat and voice interactions, allowing users
          to engage in a way that best suits their needs. With a focus on
          usability, the platform features a clean, medical-themed user
          interface that ensures a seamless and intuitive experience.
        </p>
        <div className="flex gap-4 mt-4 justify-center">
          <button
            className={`px-4 py-2 rounded-lg shadow ${
              mode === "chat"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleModeChange("chat")}
          >
            <MessageCircle className="w-5 h-5 inline-block mr-2" /> Chat Mode
          </button>
          <button
            className={`px-4 py-2 rounded-lg shadow ${
              mode === "voice"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleModeChange("voice")}
          >
            <Mic className="w-5 h-5 inline-block mr-2" /> Voice Mode
          </button>
        </div>
        <div className="mt-4 m-0">
          <label className="text-gray-700 font-semibold">
            Select Language:{" "}
          </label>
          <select
            className="ml-2 p-2 border rounded"
            value={selectedLang}
            onChange={handleLanguageChange}
          >
            {languageOptions.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 border border-blue-200 flex flex-col"
        style={{ height: "70vh" }}
      >
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md p-3 rounded-lg shadow-md ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.text}
                {message.sender === "bot" && (
                  <button
                    onClick={() => speakText(message.text)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                    title="Read aloud"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center mt-4 border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 outline-none text-gray-700"
            placeholder="Type your message..."
            readOnly={mode === "voice"}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage(input);
            }}
          />

          {mode === "chat" ? (
            <button
              onClick={() => handleSendMessage(input)}
              className="bg-blue-500 text-white p-3 hover:bg-blue-600"
              disabled={!input.trim()}
            >
              <Send className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`p-3 text-white ${
                isRecording
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isRecording ? (
                <MicOff className="w-6 h-6" />
              ) : (
                <Mic className="w-6 h-6" />
              )}
            </button>
          )}
        </div>

        {isSpeaking && (
          <button
            onClick={stopSpeaking}
            className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 mt-4 flex items-center justify-center"
          >
            <XCircle className="w-5 h-5 mr-2" /> Stop Speaking
          </button>
        )}
      </div>
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => setMessages([])}
          className="bg-blue-400 text-white p-2 rounded-lg hover:bg-red-400"
        >
          Clear Chat
        </button>

        {availableVoices.length === 0 && (
          <button
            onClick={() => window.location.reload()}
            className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600"
            title="Reload to try loading voices again"
          >
            Reload Voices
          </button>
        )}
      </div>

      {/* Voice support status indicator */}
      <div className="mt-4 text-sm">
        <span
          className={`inline-flex items-center ${
            availableVoices.length > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          <span
            className={`w-3 h-3 mr-2 rounded-full ${
              availableVoices.length > 0 ? "bg-green-600" : "bg-red-600"
            }`}
          ></span>
          {availableVoices.length > 0
            ? `Voice Support: Active (${availableVoices.length} voices available)`
            : "Voice Support: Not Available"}
        </span>
      </div>

      {/* Debug section - can be collapsed */}
      <details className="mt-4 text-left w-full max-w-4xl text-xs text-gray-500">
        <summary className="cursor-pointer">Voice Support Details</summary>
        <div className="mt-2 p-2 bg-gray-100 rounded">
          <p>Selected Language: {selectedLang}</p>
          <p>
            Best matching voice:{" "}
            {findBestVoiceForLanguage(selectedLang)?.name || "None"}
          </p>
          <p>
            Browser speech recognition:{" "}
            {browserSupportsSpeechRecognition ? "Supported" : "Not supported"}
          </p>
          <p>Available Voices: {availableVoices.length}</p>
          <div className="max-h-40 overflow-y-auto mt-2">
            <ul className="pl-5 list-disc">
              {availableVoices.map((voice, i) => (
                <li
                  key={i}
                  className={
                    voice.lang.startsWith(selectedLang.split("-")[0])
                      ? "text-blue-600"
                      : ""
                  }
                >
                  {voice.name} ({voice.lang})
                </li>
              ))}
              {availableVoices.length === 0 && <li>No voices found</li>}
            </ul>
          </div>
        </div>
      </details>
    </div>
  );
}

export default Med;
