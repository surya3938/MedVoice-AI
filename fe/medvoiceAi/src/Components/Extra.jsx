import React, { useState } from "react";

const Extra = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Prescription Upload",
      description: "Upload your prescriptions and get instant analysis",
      icon: "📄",
      details:
        "Our AI system can extract text from prescription documents, analyze the information, and provide you with a simplified breakdown. Get details about medications, dosages, and treatment plans in plain language that's easy to understand.",
      implementation:
        "Using advanced OCR technology, our system scans the document, extracts all text content, and sends it to our proprietary AI model. The model then identifies medications, dosages, and instructions, providing a simple explanation of each component.",
      benefits: [
        "Save time understanding complex prescriptions",
        "Never miss important medication instructions",
        "Keep track of all your prescriptions in one place",
      ],
      imageSrc: "images/one.jpg",
      imageAlt: "Prescription Upload and Analysis Process",
    },
    {
      id: 2,
      title: "Doctor Prescription Analysis",
      description: "Understand your medications better",
      icon: "💊",
      details:
        "Upload prescriptions from your doctor and our AI will analyze them to provide detailed information about each medicine. Learn about the purpose of each medication, potential side effects, and proper usage instructions in simple, understandable language.",
      implementation:
        "Our system uses a comprehensive medical database to match the identified medications with detailed information about their uses, side effects, and proper administration methods. This information is then presented in easy-to-understand language.",
      benefits: [
        "Know exactly what each medicine is for",
        "Understand how to take medications properly",
        "Be aware of potential side effects",
      ],
      imageSrc: "images/two.jpg",
      imageAlt: "Doctor Prescription Analysis Visual",
    },
    {
      id: 3,
      title: "Voice-Guided Medical Instructions",
      description: "Get step-by-step guidance through voice",
      icon: "🔊",
      details:
        "Our voice assistant provides clear, step-by-step instructions for taking medications, performing simple medical procedures, or following treatment plans. Perfect for those who prefer audio instructions or have visual impairments.",
      implementation:
        "Using advanced natural language processing and text-to-speech technology, our system converts complex medical instructions into clear, step-by-step verbal guidance that can be played back at the user's convenience.",
      benefits: [
        "Hands-free medical guidance",
        "Accessible for visually impaired users",
        "Step-by-step instructions in natural language",
      ],
      imageSrc: "images/three.png",
      imageAlt: "Voice-Guided Medical Instructions Demo",
    },
    {
      id: 4,
      title: "Medication Reminders",
      description: "Never miss a dose with smart reminders",
      icon: "⏰",
      details:
        "Set up personalized medication reminders through our voice assistant. MedvoiceAI will remind you when it's time to take your medication and can even answer questions about your prescriptions when prompted.",
      implementation:
        "Our scheduling system integrates with your device's notification system and our voice AI to deliver timely reminders. The system can adapt to your schedule and can be triggered by voice commands for flexibility.",
      benefits: [
        "Improve medication adherence",
        "Personalized reminder schedule",
        "Voice-activated medication information",
      ],
      imageSrc: "images/four.jpg",
      imageAlt: "Medication Reminder System Interface",
    },
    {
      id: 5,
      title: "Medical Term Simplification",
      description: "Complex terms explained simply",
      icon: "🔍",
      details:
        "Our AI can translate complex medical terminology into simple, easy-to-understand language. Ask about any medical term, condition, or procedure, and receive a clear explanation without the medical jargon.",
      implementation:
        "Using a specialized dictionary of medical terms and our AI language model, we convert technical medical language into plain English explanations, complete with analogies and examples to aid understanding.",
      benefits: [
        "Better understand your health conditions",
        "Learn about medical procedures in plain language",
        "Reduce anxiety from medical uncertainty",
      ],
      imageSrc: "images/five.png",
      imageAlt: "Medical Term Simplification Example",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Main content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Individual Feature Sections with Left/Right Layout */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={feature.id} className="relative">
              {/* Background accent (alternating) */}
              {index % 2 === 0 && (
                <div className="absolute inset-0 bg-blue-50 rounded-3xl -z-10 opacity-50"></div>
              )}

              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-3">{feature.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {feature.title}
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-6">{feature.details}</p>

                  <div className="bg-white bg-opacity-70 rounded-xl p-6 shadow-sm mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      How It Works:
                    </h3>
                    <p className="text-gray-700">{feature.implementation}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setActiveFeature(feature)}
                    className="mt-6 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="bg-white p-2 rounded-xl shadow-lg">
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center italic">
                      {feature.imageAlt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-24 bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">
            What's Coming Next?
          </h2>
          <p className="text-indigo-700 mb-6">
            Our team is constantly working on new features to enhance your
            healthcare experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium text-lg text-gray-900">
                Health Analytics Dashboard
              </h3>
              <p className="text-gray-600 mt-2">
                Visualize your health data trends and medication adherence over
                time.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium text-lg text-gray-900">
                Multi-language Support
              </h3>
              <p className="text-gray-600 mt-2">
                Access all features in multiple languages to serve diverse
                populations.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium text-lg text-gray-900">
                Telemedicine Integration
              </h3>
              <p className="text-gray-600 mt-2">
                Connect with healthcare providers directly through the
                MedvoiceAI platform.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium text-lg text-gray-900">
                Community Health Resources
              </h3>
              <p className="text-gray-600 mt-2">
                Find local health resources and support groups based on your
                conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Modal */}
      {activeFeature && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full mx-auto overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <span className="mr-3 text-3xl">{activeFeature.icon}</span>
                  {activeFeature.title}
                </h2>
                <button
                  onClick={() => setActiveFeature(null)}
                  className="text-gray-400 hover:text-gray-500 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-600 mb-4">{activeFeature.details}</p>
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Implementation:
                    </h3>
                    <p className="text-gray-600">
                      {activeFeature.implementation}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-1">
                      {activeFeature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <img
                    src={activeFeature.imageSrc}
                    alt={activeFeature.imageAlt}
                    className="w-full h-auto rounded-lg shadow"
                  />
                  <div className="bg-blue-50 p-4 rounded-lg mt-4">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      How it Works:
                    </h3>
                    <ol className="list-decimal pl-5 space-y-1 text-blue-700">
                      <li>Upload your document or speak your request</li>
                      <li>Our AI processes and analyzes the information</li>
                      <li>Receive simplified explanations and guidance</li>
                      <li>Ask follow-up questions for more details</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveFeature(null)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Extra;
