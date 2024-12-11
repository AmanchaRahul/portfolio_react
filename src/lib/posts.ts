import { marked } from 'marked';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

const POSTS = [
  {
    slug: "health-web-app",
    title: "Building a Health-Focused Web Application",
    date: "March 25, 2024",
    excerpt: "Creating a platform that connects health experts with users through AI-driven insights.",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000",
    content: `
# Building a Health-Focused Web Application

A comprehensive platform designed to bridge the gap between health experts and users, leveraging AI technology for personalized health insights.

## Key Features

* Real-time communication between nutritionists and users
* AI-powered health insights and recommendations
* Secure data handling and privacy protection
* Interactive dashboard for tracking progress

## Technical Implementation

The application is built using Django for the backend, with Tailwind CSS for the frontend design, and AI integration for personalized recommendations.
    `,
  },
  {
    slug: "ai-image-hub",
    title: "AI Image-Hub: AI-Powered Image Marketplace",
    date: "September 2024",
    excerpt: "A Django-based marketplace for AI-generated images with secure payment integration.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    content: `
# AI Image-Hub: AI-Powered Image Marketplace

An innovative platform that enables users to purchase and receive AI-generated images with automated delivery through WhatsApp integration.

## Key Features

* AI-generated image marketplace
* Razorpay payment integration
* WhatsApp automated delivery
* User-friendly interface

## Technical Stack

* Python
* HTML
* CSS
* Django
* Razorpay API
* WhatsApp Business API

## Implementation Details

The platform provides a seamless experience for users to browse, purchase, and receive AI-generated images automatically through WhatsApp integration.
    `,
  },
  {
    slug: "podstream",
    title: "PodStream: Multi-Language Podcast Platform",
    date: "September 2024",
    excerpt: "A Django-powered podcast platform hosting Telugu, Hindi, and English content.",
    coverImage: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=2000",
    content: `
# PodStream: Multi-Language Podcast Platform

A comprehensive podcast website hosting content in Telugu, Hindi, and English, organized by podcasters and their shows.

## Key Features

* Multi-language podcast support
* Content organization by podcasters
* Random video streaming
* Simple and intuitive interface

## Technical Stack

* Python
* HTML
* CSS
* Django

## Implementation Details

The platform offers a simple interface where users can discover and stream randomly placed podcast videos from different content creators across multiple languages.
    `,
  },
  {
    slug: "quad-portal",
    title: "Quad Portal: Multi-Category Content Platform",
    date: "February 2024",
    excerpt: "A comprehensive platform featuring Cricket, AI, Movies, and Trading content.",
    coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2000",
    content: `
# Quad Portal: Multi-Category Content Platform

A user-friendly platform featuring four distinct categories: Cricket, AI, Movies, and Trading Journal, with robust user authentication and dynamic content delivery.

## Key Features

* Four distinct content categories
* User authentication system
* Dynamic content delivery
* Intuitive navigation
* Interactive user experience

## Technical Stack

* Python
* HTML
* CSS
* Django

## Implementation Details

Each category includes dedicated pages with enhanced user engagement through intuitive design and seamless navigation. The platform showcases proficiency in web development with a focus on user experience and content organization.
    `,
  },
];

export async function getPost(slug: string): Promise<Post | null> {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return null;

  const content = await marked(post.content);
  return {
    ...post,
    content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    POSTS.map(async (post) => ({
      ...post,
      content: await marked(post.content),
    }))
  );
  return posts;
}