import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Building scalable and user-friendly web applications.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Social media and problem-solving platforms",
      "Specialized in Django web framework",
      "Scalable architecture",
      "User-friendly interfaces",
    ],
  },
  {
    title: "AI-Powered Applications",
    description: "Custom AI integrations and innovative solutions.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    features: [
      "AI marketplace solutions",
      "Health-focused AI-driven tools",
      "Custom AI integrations",
      "Innovative applications",
    ],
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance on AI and web app development.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      "Performance optimization for apps",
      "Tech stack recommendations",
      "Architecture review",
      "Best practices guidance",
    ],
  },
];

export default function Services() {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="group rounded-2xl bg-primary-50 p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
        >
          <div className="mb-4 inline-block rounded-lg bg-primary-100 p-3 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-primary-900 dark:text-white">
            {service.title}
          </h3>
          <p className="mt-2 text-primary-800 dark:text-gray-300">
            {service.description}
          </p>
          <ul className="mt-4 space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center text-primary-700 dark:text-gray-300">
                <svg className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}