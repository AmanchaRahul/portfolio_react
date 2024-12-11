
import { Link } from 'react-router-dom';

export interface FeaturedItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const featuredContent: FeaturedItem[] = [
  {
    title: "Health Web App",
    description: "Empowering users with real-time communication tools for nutritionists and health experts, leveraging AI-driven insights.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/health-web-app",
  },
  {
    title: "AI Image-Hub",
    description: "A Django-based marketplace for AI-generated images with Razorpay integration and WhatsApp delivery.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/ai-image-hub",
  },
  {
    title: "PodStream",
    description: "Multi-language podcast platform hosting Telugu, Hindi, and English content with intuitive browsing.",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/podstream",
  },
  {
    title: "Quad Portal",
    description: "A comprehensive platform featuring Cricket, AI, Movies, and Trading content with user authentication.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/quad-portal",
  },
];

export default function FeaturedContent() {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {featuredContent.map((item) => (
        <Link
          key={item.title}
          to={item.link}
          className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-primary-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
              {item.title}
            </h3>
            <p className="mt-2 text-primary-800 dark:text-gray-300">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}