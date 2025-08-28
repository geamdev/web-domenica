import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function AboutPage() {
  const skills = [
    'User Research and Analysis',
    'Wireframing and Prototyping',
    'Interaction Design',
    'Usability Testing',
    'Information Architecture',
    'UI Design',
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
              href='/'
              className='text-white font-medium hover:text-green-400 transition-colors'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='text-purple-300 font-medium hover:text-purple-200 transition-colors'
            >
              About
            </Link>
            <Link
              href='/#projects'
              className='text-white font-medium hover:text-green-400 transition-colors'
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

      {/* Main Content */}
      <main className='py-20'>
        <div className='max-w-4xl mx-auto px-6'>
          {/* Page Title */}
          <div className='text-center mb-16'>
            <h1 className='text-6xl font-bold text-white mb-6'>About Me</h1>
            <div className='w-32 h-32 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8'>
              <span className='text-4xl'>👩‍💻</span>
            </div>
            <h2 className='text-3xl font-semibold text-white mb-4'>
              So who is this guy? 🤔
            </h2>
          </div>

          {/* Introduction */}
          <div className='mb-16'>
            <p className='text-xl text-gray-300 leading-relaxed mb-8'>
              Hello! I'm Jaime, a passionate UX designer with a focus on
              creating intuitive and engaging user experiences.
            </p>

            <h3 className='text-2xl font-semibold text-white mb-6'>
              Want to learn more?
            </h3>

            <p className='text-lg text-gray-300 leading-relaxed mb-6'>
              Great! let's continue, I believe in the power of user-centered
              design to solve complex problems and create meaningful digital
              experiences, with 2 years of experience in the field, I've had the
              opportunity to work on a diverse range of projects, from mobile
              apps to web platforms.
            </p>

            <p className='text-lg text-gray-300 leading-relaxed mb-6'>
              My approach combines research, empathy, and creativity to deliver
              solutions that not only meet user needs but also provide value to
              both client and service.
            </p>

            <p className='text-lg text-gray-300 leading-relaxed'>
              When I'm not designing, you can find me taking photos or gaming.
              I'm always eager to learn and grow, both as a profesional and as a
              person.
            </p>
          </div>

          {/* Skills Section */}
          <div className='mb-16'>
            <h3 className='text-3xl font-semibold text-white mb-8 text-center'>
              Skills
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {skills.map((skill, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                  <span className='text-gray-300'>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className='mb-16'>
            <h3 className='text-3xl font-semibold text-white mb-8 text-center'>
              Education
            </h3>
            <Card className='bg-gray-800 border-gray-700 max-w-2xl mx-auto'>
              <CardHeader>
                <CardTitle className='text-white text-center'>
                  Bachelor's in Graphic Design
                </CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='text-gray-300'>
                  Universidad Católica Santiago de Guayaquil
                </p>
                <p className='text-green-500 font-medium mt-2'>
                  Expected Feb 2026
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className='text-center mb-16'>
            <h3 className='text-2xl font-semibold text-white mb-6'>
              Take a look at my work
            </h3>
            <Link href='/#projects'>
              <Button className='bg-purple-400 hover:bg-purple-500 text-white px-8 py-3 text-lg'>
                Check projects
              </Button>
            </Link>
          </div>

          {/* Footer Section */}
          <div className='border-t border-gray-800 pt-12'>
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

              <div className='text-gray-400 text-center lg:text-right'>
                <p>© 2025 Jaime Freire. All rights reserved.</p>
                <Link
                  href='/#about'
                  className='text-purple-300 hover:text-purple-200 transition-colors block mt-2'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
