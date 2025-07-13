import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faBrain,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Small delay for smooth effect
  }, []);

  return (
    <div
      className={`w-full transition-opacity duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {/* 🔹 Header Section */}
      <section
        className="bg-gradient-to-r from-blue-400 to-black
 py-16 text-center text-white shadow-lg"
      >
        <h1 className="text-7xl font-extrabold">MedVoice AI 🩺</h1>
        <p className="m-8  text-lg text-left text-white">
          Revolutionizing Healthcare with AI-Driven Voice Assistance: Enhancing
          Patient Care and Efficiency Artificial Intelligence (AI) is
          transforming the healthcare industry, and voice-assisted AI solutions
          are at the forefront of this revolution. From improving patient
          interactions to streamlining administrative workflows, AI-driven voice
          technology is reshaping how healthcare professionals operate. <br />{" "}
          <br />
          According to AI TNFLA, "The integration of voice-enabled AI in
          healthcare not only enhances efficiency but also ensures personalized
          patient experiences, reducing physician burnout and optimizing medical
          workflows." This advancement is enabling hands-free documentation,
          real-time clinical decision support, and even remote patient
          monitoring, making healthcare more accessible and efficient than ever
          before.
        </p>
      </section>

      {/* 🔹 Product Info */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-black-600">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            {
              icon: faMicrophone,
              color: "text-blue-500",
              title: "Voice Recognition",
              desc: "Accurately transcribes and processes voice commands in real time.",
            },
            {
              icon: faBrain,
              color: "text-yellow-500",
              title: "AI-Powered Insights",
              desc: "Provides intelligent medical assistance and decision support.",
            },
            {
              icon: faShieldAlt,
              color: "text-red-500",
              title: "Privacy & Compliance",
              desc: "Ensures secure handling of medical data with strict compliance.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                size="3x"
                className={`${feature.color} bounce-icon`}
              />
              <h4 className="mt-4 text-xl font-semibold">{feature.title}</h4>
              <p className="mt-2 text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Impact on Healthcare */}
      <section className="impact-section text-center py-16 px-6 bg-gradient-to-br from-blue-100 to-blue-300">
        <h2 className="text-3xl font-bold text-gray-800">
          Impact on Healthcare
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: "Enhanced Communication",
              description:
                "AI-driven voice assistance improves communication between doctors, nurses, and patients, enabling seamless real-time interactions and reducing misunderstandings in critical care environments.",
            },
            {
              title: "AI-Powered Diagnoses",
              description:
                "Leveraging advanced machine learning, AI enhances diagnostic accuracy by analyzing medical data, identifying patterns, and assisting doctors in making informed, data-driven decisions.",
            },
            {
              title: "Reducing Workload",
              description:
                "By automating administrative tasks like documentation, scheduling, and patient record management, AI reduces physician burnout and allows medical professionals to focus on patient care.",
            },
            {
              title: "Faster Patient Assistance",
              description:
                "AI-enabled systems provide instant access to patient histories, symptoms, and treatment recommendations, ensuring quicker response times and improved emergency care efficiency.",
            },
            {
              title: "Seamless Integration",
              description:
                "Designed for interoperability, AI effortlessly integrates with Electronic Health Record (EHR) systems, medical databases, and hospital workflows, ensuring a smooth transition to AI-enhanced healthcare.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105"
            >
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="mt-2 text-gray-700 hover:text-blue-600 transition-all duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Abstract Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800">Abstract</h2>
          <div className="mt-6 space-y-6 text-left">
            <p className="text-lg text-gray-700 hover:text-blue-600 transition-all duration-300">
              MedVoice AI is a cutting-edge voice assistant tailored for
              healthcare, offering advanced speech recognition and AI-driven
              natural language processing. It enables healthcare professionals
              to seamlessly interact with medical systems, retrieve patient
              data, and dictate notes hands-free, optimizing workflow
              efficiency.
            </p>
            <p className="text-lg text-gray-700 hover:text-blue-600 transition-all duration-300">
              The system leverages a fine-tuned AI model trained on medical
              datasets, ensuring contextually relevant responses and enhancing
              clinical decision-making. With its intuitive interface and
              intelligent recommendations, MedVoice AI bridges the gap between
              technology and patient care, fostering improved healthcare
              outcomes.
            </p>
            <p className="text-lg text-gray-700 hover:text-blue-600 transition-all duration-300">
              Designed with strict compliance and security measures, MedVoice AI
              ensures the confidentiality of patient information while offering
              multilingual support. It seamlessly integrates with existing
              Electronic Health Records (EHR) systems, enabling professionals to
              streamline medical documentation and enhance patient engagement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
