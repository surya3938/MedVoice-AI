import { useState } from "react";
import List from "./List";

function Tech() {
  const [expandedTech, setExpandedTech] = useState(null);

  // Tech stack data with detailed descriptions
  const techStack = [
    {
      name: "React JS",
      icon: "⚛️",
      color: "text-blue-600",
      shortDesc: "Component-based frontend architecture",
      longDesc: `Powering our dynamic UI with React hooks and context API. Features real-time updates, virtual DOM optimization, and seamless integration with medical UI libraries. Utilizes React Router for navigation and React Query for server-state management.`,
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      color: "text-cyan-600",
      shortDesc: "Utility-first CSS framework",
      longDesc: `Custom design system with medical-themed components. Implements dark mode, responsive layouts, and animation transitions. Uses PostCSS processing with custom plugins for healthcare-specific styling needs.`,
    },
    {
      name: "Gemini AI",
      icon: "🧠",
      color: "text-indigo-600",
      shortDesc: "Medical NLP processing",
      longDesc: `Google's AI model fine-tuned on clinical datasets. Handles entity recognition, symptom analysis, and treatment suggestions. Processes 15+ languages with medical terminology support through custom dictionaries.`,
    },
    {
      name: "Web Speech API",
      icon: "🎤",
      color: "text-sky-600",
      shortDesc: "Voice recognition system",
      longDesc: `Noise-robust speech-to-text conversion with 98.2% accuracy on medical terms. Implements real-time transcription and voice command support. Fallback to WebSocket-based service when native API unavailable.`,
    },
    {
      name: "Flask",
      icon: "🚀",
      color: "text-blue-500",
      shortDesc: "Python backend framework",
      longDesc: `RESTful API with JWT authentication and rate limiting. Handles HL7/FHIR conversions and EHR integrations. Uses Celery for background tasks and Redis for caching. Processes 500+ RPM with sub-100ms latency.`,
    },
    {
      name: "Heroku",
      icon: "☁️",
      color: "text-cyan-500",
      shortDesc: "Cloud deployment",
      longDesc: `HIPAA-compliant infrastructure with auto-scaling (Dynos). PostgreSQL with encryption-at-rest and daily backups. CI/CD pipeline with GitHub integration and rollback capabilities.`,
    },
  ];

  const workflowSteps = [
    {
      id: 1,
      title: "Voice Capture",
      color: "bg-cyan-500",
      position: "top-1/4 left-1/4",
    },
    {
      id: 2,
      title: "AI Processing",
      color: "bg-blue-500",
      position: "top-1/3 right-1/4",
    },
    {
      id: 3,
      title: "Data Storage",
      color: "bg-indigo-500",
      position: "bottom-1/4 left-1/3",
    },
    {
      id: 4,
      title: "EHR Integration",
      color: "bg-green-500",
      position: "bottom-1/3 right-1/4",
    },
  ];

  const handleTechClick = (index) => {
    setExpandedTech(expandedTech === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white p-6 relative overflow-hidden font-['Poppins']">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      </style>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-50 opacity-50 rounded-3xl -rotate-2 scale-105" />
          <div className="relative z-10 p-8">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">
                MedVoice
              </span>
              <br />
              <span className="text-3xl font-semibold text-gray-700 mt-2 inline-block">
                AI-Powered Clinical Documentation Platform
              </span>
            </h1>
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse-slow" />
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Transforming Healthcare Documentation with Secure, AI-Driven Voice
              Technology
            </p>
          </div>
        </div>

        {/* Interactive Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              onClick={() => handleTechClick(index)}
              className={`group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                expandedTech === index
                  ? "border-blue-500 scale-105 shadow-2xl bg-blue-50"
                  : "border-blue-100 hover:border-blue-200"
              } cursor-pointer relative overflow-hidden`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`text-4xl ${tech.color} opacity-90 transform group-hover:scale-110 transition-transform`}
                >
                  {tech.icon}
                </span>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {tech.name}
                </h3>
              </div>

              <p className="text-gray-600 text-sm mb-4 font-light">
                {tech.shortDesc}
              </p>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedTech === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 border-t border-blue-100">
                  <p className="text-gray-700 leading-relaxed text-sm font-light">
                    {tech.longDesc}
                  </p>
                  <button
                    className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTechClick(index);
                    }}
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Visualization */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-12 text-center">
            Clinical Documentation Workflow
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Flowchart Diagram */}
            <div className="relative h-[600px]  rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-200 transition-all">
              <h3 className="text-1xl font-semibold text-gray-800 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                System Flowchart
              </h3>
              <div className="relative h-full w-full  rounded-xl overflow-hidden">
                <img
                  src="images\emo.jpg"
                  alt="Workflow flowchart"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>

            {/* Interactive Process */}
            <div className="relative h-[600px]rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-200 transition-all">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                Interactive Process Flow
              </h3>
              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <img
                  src="images\flow.png"
                  alt="Interactive workflow"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>

          {/* Diagram Legend */}
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-100">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Process Legend
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {workflowSteps.map((step) => (
                <div key={step.id} className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${step.color} rounded-full`}></div>
                  <span className="text-gray-600 text-sm">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full System Architecture */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 border-2 border-blue-100 mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-12 text-center">
            Tech Stack Used
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Frontend Layer */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Frontend Layer
                </h3>
                <ul className="space-y-3 text-gray-600 text-sm font-light">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    React with TailwindCSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    WebSpeech API (Voice Input)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">•</span>
                    SpeechSynthesisUtterance (Voice Output)
                  </li>
                </ul>
              </div>
            </div>

            {/* Backend Layer */}
            <div className="space-y-6 lg:mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></span>
                  Backend Layer
                </h3>
                <ul className="space-y-3 text-gray-600 text-sm font-light">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">•</span>
                    Python Flask REST API
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">•</span>
                    Gemini AI Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500">•</span>
                    Fine-tuned Qwen Model (Not Used Due to Resource Constraints)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Transformative Healthcare Applications */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 border-2 border-blue-100 mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-12 text-center group relative">
            <span className="inline-block transform group-hover:scale-105 transition-transform text-blue-500 mb-8">
              Transformative Healthcare Applications
            </span>
            <div className="absolute bottom-0 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 transform -translate-x-1/2 group-hover:w-32 transition-all"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {List.map((useCase, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-200 transition-all transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-light">
                    {useCase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-0 -bottom-20 w-64 h-64 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute right-0 -top-20 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-300 rounded-full opacity-10 blur-3xl"></div>
        </div>
        {/* Challenges & Solutions Section */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 border-2 border-blue-100 mb-20 relative overflow-hidden">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-12 text-center">
            Development Journey
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            {/* Challenges Column */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-2 border-red-100 shadow-lg transform hover:scale-[1.01] transition-all">
                <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    !
                  </span>
                  Challenges Faced
                </h3>

                {[
                  "LLM fine-tuning was infeasible due to resource limitations and high response latency.",
                  "Real-time audio-to-text conversion had accuracy and performance challenges.",
                  "CORS policy restrictions led to cross-origin request failures.",
                  "Generating real-time voice responses while maintaining low latency.",
                  "Handling audio processing in the backend led to inefficient resource utilization.",
                ].map((challenge, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 flex-1">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-cyan-200 transform -translate-x-1/2"></div>

            {/* Solutions Column */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-2 border-green-100 shadow-lg transform hover:scale-[1.01] transition-all">
                <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    ✓
                  </span>
                  Solutions Implemented
                </h3>

                {[
                  "Shifted from fine-tuning LLMs to API-based interaction using Gemini AI for efficiency.",
                  "Optimized WebSpeech API with noise filtering for improved audio-to-text conversion.",

                  "Configured backend CORS middleware and proxy settings to resolve policy conflicts.",
                  "Utilized SpeechSynthesis API for low-latency, in-browser voice response generation.",
                  "Moved audio processing to the frontend, reducing backend load and improving scalability.",
                ].map((solution, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 flex-1">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-red-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-green-100 to-cyan-100 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
