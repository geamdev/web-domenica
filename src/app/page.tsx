import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GlobalLayout } from '@/components/GlobalLayout';
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
    <GlobalLayout currentPage='home'>
      {/* Hero Section - Two Column Layout */}
      <section id='home'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Left Column - Text Content */}
            <div>
              <div className='space-y-6'>
                <h1 className='md:text-6xl text-4xl lg:text-7xl font-bold text-black dark:text-white leading-tight'>
                  It&apos;s me Domenica! ⚡
                </h1>
                <p className='md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl'>
                  I learn fast, build fast, and design with purpose, passionate
                  about{' '}
                  <span className='dark:text-purple-300 text-purple-500 font-semibold'>
                    Design Systems
                  </span>
                  , intuitive experiences and scalable UX.
                </p>
              </div>

              <div className='flex items-center gap-4'>
                <span className='text-xl font-semibold text-gray-600 dark:text-white'>
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
                <div className='absolute -bottom-4 -left-20 hidden md:block'>
                  <div className='dark:bg-white bg-gray-900 dark:text-black text-white px-4 py-2 rounded-lg font-medium text-sm relative'>
                    UX Designer Here
                    <div className='absolute top-1/2 -right-2 w-0 h-0 border-l-4  dark:border-l-white border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent transform -translate-y-1/2'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id='projects'
        className='py-20 bg-gray-100/50 dark:bg-gray-900/50'
      >
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='md:text-5xl text-4xl font-bold mb-4 text-black dark:text-white'>
              My Projects
            </h2>
            <p className='md:text-xl text-lg text-gray-600 dark:text-gray-400'>
              Check the latests and greatests.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <Card
                key={index}
                className='group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 overflow-hidden project-card-hover'
              >
                <div className='grid grid-cols-1 md:grid-cols-2'>
                  {/* Left Side - Visual */}
                  <div className='bg-purple-600 p-6 flex flex-col justify-center items-center text-white relative overflow-hidden mx-4 rounded-2xl'>
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
                  <div className='p-6 bg-white dark:bg-gray-800'>
                    <CardTitle className='text-xl text-black dark:text-white mb-4'>
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

                    <CardDescription className='text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed'>
                      {project.description}
                    </CardDescription>

                    <Link href={`/projects/${index + 1}`}>
                      <Button
                        variant='outline'
                        size='sm'
                        className='w-full border-gray-600 dark:border-gray-300 text-gray-600 dark:text-white hover:bg-gray-300 hover:text-gray-600 dark:hover:bg-gray-300 hover:border-gray-500 transition-all duration-300'
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
      <section id='about' className='mt-12'>
        <div className='mx-auto md:px-6 text-center'>
          <h2 className='md:text-5xl text-4xl font-bold mb-4 md:mb-12 text-black dark:text-white'>
            Let&apos;s work together
          </h2>

          <div className='mb-8 px-4'>
            <Link
              target='_blank'
              href='mailto:domejaramillo2017@hotmail.com'
              className='md:text-3xl text-xl font-semibold dark:text-purple-300 text-purple-500 hover:text-purple-300 dark:hover:text-purple-200 transition-colors hover:scale-105 block text-center break-all leading-relaxed max-w-full'
            >
              domejaramillo2017@hotmail.com
            </Link>
          </div>
        </div>
      </section>
    </GlobalLayout>
  );
}
