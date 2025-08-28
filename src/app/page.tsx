import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: 'Design System',
      subtitle: 'Mercurius 2.0',
      description:
        'A comprehensive design system for consistent and efficient UI development.',
      tags: ['Design System', 'UI Design', 'Documentation'],
      visual: 'DESIGN SYSTEM',
      image: '/design-system.jpg',
    },
    {
      title: 'Service ecommerce',
      subtitle: 'xtrim',
      description:
        'An e-commerce platform focused on selling internet services in a new agentless experience.',
      tags: ['E-commerce', 'User Flows', 'Conversion Optimization'],
      visual: 'Self-Service Internet Subscription',
      image: '/ecommerce.jpg',
    },
    {
      title: 'Meyo App',
      subtitle: 'Mobile App',
      description:
        'A mobile app that connects people looking for gigs with those offering them.',
      tags: ['Mobile App', 'User Research', 'Prototyping'],
      visual: 'MEYO',
      image: '/meyo.jpg',
    },
    {
      title: 'Chatbot',
      subtitle: 'WhatsApp Bot',
      description:
        'A WhatsApp chatbot designed to assist users account status and payments.',
      tags: ['Chatbot', 'Conversational Design', 'User Research'],
      visual: 'CHATBOT',
      image: '/chatbot.jpg',
    },
  ];

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Header */}
      <header className='border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 border-2 border-purple-300 rounded flex items-center justify-center'>
              <span className='text-white font-bold text-sm'>DJ</span>
            </div>
            <Link
              href='/'
              className='text-xl font-bold text-white hover:text-green-400 transition-colors'
            >
              Portfolio
            </Link>
          </div>
          <nav className='flex gap-8'>
            <Link
              href='/#home'
              className='text-purple-300 font-medium hover:text-purple-200 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='text-white font-medium hover:text-purple-200 transition-colors'
            >
              About
            </Link>
            <Link
              href='/#projects'
              className='text-white font-medium hover:text-purple-200 transition-colors'
            >
              Projects
            </Link>
          </nav>
          <Button
            variant='outline'
            size='sm'
            className='border-gray-600 text-white hover:bg-gray-800'
          >
            🌙
          </Button>
        </div>
      </header>

      {/* Hero Section - Two Column Layout */}
      <section id='home' className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Left Column - Text Content */}
            <div className='space-y-8'>
              <div className='space-y-6'>
                <h1 className='text-6xl lg:text-7xl font-bold text-white leading-tight'>
                  It's me Domenica! ⚡
                </h1>
                <p className='text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl'>
                  I learn fast, build fast, and design with purpose, passionate
                  about{' '}
                  <span className='text-purple-300 font-semibold'>
                    Design Systems
                  </span>
                  , intuitive experiences and scalable UX. UX/UI Designer at
                  Xtrim EC.
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <span className='text-lg text-gray-300'>
                  Crypto enthusiast and evangelist.
                </span>
                <div className='w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-xs font-bold'>₿</span>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <span className='text-xl font-semibold text-white'>
                  Domenica Jaramillo
                </span>
                <div className='flex gap-3'>
                  <span className='text-2xl hover:scale-110 transition-transform cursor-pointer'>
                    📸
                  </span>
                  <span className='text-2xl hover:scale-110 transition-transform cursor-pointer'>
                    🕹️
                  </span>
                  <span className='text-2xl hover:scale-110 transition-transform cursor-pointer'>
                    🌄
                  </span>
                  <span className='text-2xl hover:scale-110 transition-transform cursor-pointer'>
                    🎨
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Picture */}
            <div className='relative flex justify-center lg:justify-end'>
              <div className='relative'>
                {/* Profile Picture Placeholder */}
                <div className='w-80 h-80 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full flex items-center justify-center relative overflow-hidden profile-glow'>
                  <div className='w-full h-full bg-purple-400 flex items-center justify-center'>
                    <span className='text-6xl'>👩‍💻</span>
                  </div>
                </div>

                {/* Annotation */}
                <div className='absolute -bottom-4 -left-20'>
                  <div className='bg-white text-black px-4 py-2 rounded-lg font-medium text-sm relative'>
                    UX Designer Here
                    <div className='absolute top-1/2 -right-2 w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent transform -translate-y-1/2'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 bg-gray-900/50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold mb-4 text-white'>My Projects</h2>
            <p className='text-xl text-gray-400'>
              Check the latests and greatests.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <Card
                key={index}
                className='group bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 overflow-hidden project-card-hover'
              >
                <div className='grid grid-cols-2'>
                  {/* Left Side - Visual */}
                  <div className='bg-purple-600 p-6 flex flex-col justify-center items-center text-white relative overflow-hidden'>
                    <div className='text-center space-y-2'>
                      <div className='text-sm font-medium opacity-80'>
                        {project.visual}
                      </div>
                      <div className='text-2xl font-bold'>
                        {project.subtitle}
                      </div>
                    </div>
                    {/* Background Pattern */}
                    <div className='absolute inset-0 opacity-10'>
                      <div className='w-full h-full bg-gradient-to-br from-purple-400 to-purple-800'></div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className='p-6 bg-gray-800'>
                    <CardTitle className='text-xl text-white mb-4'>
                      {project.title}
                    </CardTitle>

                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant='secondary'
                          className='bg-purple-400 text-white border-0 text-xs'
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge
                          variant='secondary'
                          className='bg-gray-600 text-white border-0 text-xs'
                        >
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <CardDescription className='text-gray-300 mb-6 text-sm leading-relaxed'>
                      {project.description}
                    </CardDescription>

                    <Link href={`/projects/${index + 1}`}>
                      <Button
                        variant='outline'
                        size='sm'
                        className='w-full border-gray-600 text-white hover:bg-gray-700 hover:border-gray-500 transition-all duration-300'
                      >
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='about' className='py-20'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-5xl font-bold mb-12 text-white'>
            Let's work together
          </h2>

          <div className='mb-12'>
            <a
              href='mailto:domenica@example.com'
              className='text-3xl font-semibold text-purple-300 hover:text-purple-200 transition-colors hover:scale-105 inline-block'
            >
              domenica@example.com
            </a>
          </div>

          <Separator className='max-w-md mx-auto mb-12 bg-gray-700' />

          {/* Footer with Logo and Info */}
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 border-2 border-purple-300 rounded flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>DJ</span>
              </div>
              <div className='text-left'>
                <h3 className='text-xl font-semibold text-white'>
                  Domenica Jaramillo
                </h3>
                <p className='text-gray-400'>UX Designer & Developer</p>
              </div>
            </div>

            <div className='text-gray-400'>
              © 2025 Domenica Jaramillo. All rights reserved.
            </div>

            <div className='flex flex-col items-center gap-4'>
              <div className='flex gap-4'>
                <a
                  href='#'
                  className='w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:border-purple-300 transition-colors'
                >
                  📷
                </a>
                <a
                  href='#'
                  className='w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:border-purple-300 transition-colors'
                >
                  💼
                </a>
              </div>
              <Button className='bg-green-500 hover:bg-green-600 text-white px-6 py-2'>
                📧 Contact
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
