import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import SocialLinks from '../components/SocialLinks';
import Services from '../components/Services';
import FeaturedContent from '../components/FeaturedContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-primary-100 dark:border-gray-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
          <Link to="/" className="text-2xl font-bold text-primary-900 dark:text-white">
            AmanchaCodes
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/blog"
              className="text-primary-700 hover:text-primary-900 dark:text-gray-300 dark:hover:text-white"
            >
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I'm Rahul Amancha
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-primary-800 dark:text-gray-300">
              A passionate tech enthusiast with a focus on AI tools, technologies, and web applications. 
              I build AI-powered projects and share my journey in tech. Open to collaborations and innovative problem-solving.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:amanchacodes@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-primary-600"
              >
                Contact for Collaboration
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <SocialLinks />
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-full bg-primary-100/50 blur-3xl dark:bg-primary-900/30" />
            <div className="relative aspect-square w-[400px] mx-auto">
            <img
                src="/images/propic.JPG"
                alt="Amancha Rahul"
                className="h-full w-full rounded-full object-cover ring-4 ring-white/10 dark:ring-gray-800/10"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary-900 dark:text-white">
            Services
          </h2>
          <p className="mt-4 text-center text-lg text-primary-800 dark:text-gray-300">
            Innovative AI development and web application solutions
          </p>
          <Services />
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary-900 dark:text-white">
            Featured Projects
          </h2>
          <FeaturedContent />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary-100 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-primary-600 dark:text-gray-400">
            © {new Date().getFullYear()} Amancha Rahul. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}