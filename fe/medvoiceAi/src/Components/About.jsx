import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
  {
    name: "Pradhyumna",
    id: "21bd1a1214",
    img: "21bd1a1214.jpg",
    role: "Frontend UI/UX & Dashboard Design",
    contribution:
      "Designed and implemented an intuitive MedVoice AI interface, optimizing user experience and ensuring seamless, secure API integration for real-time data processing. This highlights both UI/UX design and dashboard functionality.",
  },
  {
    name: "Sathwik Paladugu",
    id: "21bd1a1243",
    img: "21bd1a1243.jpg",
    role: "Frontend Development & Performance Optimization",
    contribution:
      "Developed the Tech Stack Page using React and Tailwind, focusing on improving load times and responsiveness. Optimized UI components for a seamless user experience. Followed Pradhyumna’s design and performance guidelines, ensuring a smooth and efficient interface. Collaborated with the team to integrate individual pages and finalize the project.",
  },
  {
    name: "Surya Nannuri",
    id: "21bd1a1256",
    img: "21bd1a1256.jpg",
    role: "Frontend UI/UX Development & Interaction Design",
    contribution:
      "Designed and developed the Home and About Pages using React and Tailwind, implementing interactive UI elements for better engagement. Improved page load speeds and ensured a mobile-friendly layout. Incorporated Pradhyumna’s recommendations for a consistent design system. Worked closely with the team to refine the overall frontend experience and finalize the project.",
  },
  {
    name: "Manichandra",
    id: "21bd1a1230",
    img: "21bd1a1230.jpg",
    role: "Frontend Security & Advanced UI Components",
    contribution:
      "Built the Extra Features Page using React and Tailwind, focusing on advanced UI components and smooth transitions. Enhanced performance by optimizing code structure and asset loading. Ensured compliance with security best practices while implementing Pradhyumna’s design principles. Collaborated with the team to integrate all pages and complete the final project.",
  },
];
const carouselItems = [
  {
    title: "Reducing Documentation Burden",
    description:
      "MedVoice AI enables hands-free dictation, automating medical note-taking and seamlessly updating patient records. This reduces administrative strain, allowing doctors to dedicate more time to patient care while ensuring accurate and efficient documentation.",
  },
  {
    title: "Enhancing Medical Workflow Efficiency",
    description:
      "Our AI-powered voice assistant streamlines healthcare operations by enabling instant retrieval of patient records and critical data. By eliminating time-consuming searches in complex databases, it optimizes workflow speed and enhances clinical efficiency.",
  },
  {
    title: "Improving Patient Engagement & Accessibility",
    description:
      "MedVoice AI empowers patients with voice-enabled assistance, enabling them to effortlessly book appointments, receive medication reminders, and access essential healthcare information—enhancing convenience and accessibility for all.",
  },
  {
    title: "AI-Powered Decision Support",
    description:
      "With advanced AI and natural language processing (NLP), MedVoice AI delivers real-time clinical insights and intelligent recommendations. This assists doctors in making faster, data-driven decisions, ultimately improving patient outcomes.",
  },
  {
    title: "Seamless Healthcare Integration",
    description:
      "Designed for seamless interoperability, MedVoice AI integrates effortlessly with existing Electronic Health Record (EHR) systems, ensuring smooth voice-to-data synchronization and enhancing overall healthcare management efficiency.",
  },
  {
    title: "Real-Time AI Assistance",
    description:
      "Acting as an intelligent medical assistant, MedVoice AI provides instant access to critical patient information, including medical history, allergies, and prior treatments—enhancing response times in emergencies and improving clinical decision-making.",
  },
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Auto-move every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* 🔹 Team & Contributions */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-600">
          Meet the Team & Our Contributions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105"
            >
              <img
                src={`/images/${member.img}`}
                className="w-54 h-54 mx-auto rounded-full shadow-md"
                alt={member.name}
              />
              <h4 className="mt-4 text-xl font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600">ID: {member.id}</p>
              <p className="mt-2 font-medium text-gray-700">{member.role}</p>
              <p className="mt-2 text-gray-500">{member.contribution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Why This Project (Auto-Moving Carousel) */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-100 to-blue-300 transition-all">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Why MedVoice AI?
        </h2>
        <div className="relative max-w-3xl mx-auto mt-10 bg-white p-10 rounded-lg shadow-lg text-center transition-all duration-300 transform hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-600">
            {carouselItems[currentIndex].title}
          </h3>
          <p className="mt-4 text-gray-700">
            {carouselItems[currentIndex].description}
          </p>

          {/* 🔹 Carousel Controls Below */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? carouselItems.length - 1 : prev - 1
                )
              }
              className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
              }
              className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          {/* 🔹 Dots Indicator */}
          <div className="flex justify-center mt-4">
            {carouselItems.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
