import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function ServiceEcommercePage() {
  const highlights = [
    {
      title: 'Goal',
      description:
        'Simplify and streamline the online process of contracting internet service, making it fully agentless.',
    },
    {
      title: 'Process',
      description:
        'Redesigned and optimized the user flow, reducing the number of steps, improving clarity, and integrating a payment option for a seamless experience.',
    },
    {
      title: 'Outcome',
      description:
        'Increased conversion rates, reduced drop-offs, and improved user satisfaction by making the process faster and more intuitive.',
    },
  ];

  const features = [
    {
      title: 'Coverage check',
      description:
        'Before anything else, users can quickly see if the service is available in their area and wasting no time!',
      icon: '🗺️',
    },
    {
      title: 'Basic contact info',
      description:
        "We keep it simple: just the essentials to continue, plus a way to follow up in case they don't complete the process.",
      icon: '📱',
    },
    {
      title: 'Location info',
      description:
        'Users can add building numbers, floors, or landmarks to ensure technicians find their location.',
      icon: '📍',
    },
    {
      title: 'Payment gateway',
      description:
        'With a built-in payment option, a faster, more convenient way to complete the process.',
      icon: '💳',
    },
    {
      title: 'Thank you',
      description:
        'What happens next? Users get a clear summary of what to expect after signing up, keeping them informed and reassured.',
      icon: '✅',
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
              className='text-xl font-bold text-white hover:text-purple-300 transition-colors'
            >
              Portfolio
            </Link>
          </div>
          <nav className='flex gap-8'>
            <Link
              href='/'
              className='text-white font-medium hover:text-purple-200 transition-colors'
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
              className='text-purple-300 font-medium hover:text-purple-200 transition-colors'
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
        <div className='max-w-6xl mx-auto px-6'>
          {/* Project Header */}
          <div className='text-center mb-16'>
            <div className='flex justify-center mb-6'>
              <div className='w-20 h-20 bg-purple-600 rounded-lg flex items-center justify-center'>
                <span className='text-3xl'>🛒</span>
              </div>
            </div>
            <h1 className='text-6xl font-bold text-white mb-6'>
              Service E-commerce
            </h1>
            <div className='flex flex-wrap justify-center gap-3 mb-8'>
              <Badge className='bg-purple-400 text-white border-0'>
                E-commerce
              </Badge>
              <Badge className='bg-purple-400 text-white border-0'>
                User Flows
              </Badge>
              <Badge className='bg-purple-400 text-white border-0'>
                Conversion Optimization
              </Badge>
              <Badge className='bg-purple-400 text-white border-0'>
                Payment Integration
              </Badge>
              <Badge className='bg-purple-400 text-white border-0'>
                Web Design
              </Badge>
            </div>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              An e-commerce platform focused on selling internet services in a
              new agentless experience.
            </p>
          </div>

          {/* Highlights Section */}
          <div className='mb-20'>
            <h2 className='text-4xl font-bold text-white mb-12 text-center'>
              Highlights
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {highlights.map((highlight, index) => (
                <Card key={index} className='bg-gray-800 border-gray-700'>
                  <CardHeader>
                    <CardTitle className='text-white text-xl'>
                      {highlight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-300'>{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className='mb-20'>
            <h2 className='text-4xl font-bold text-white mb-12 text-center'>
              Key Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className='bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300'
                >
                  <CardHeader>
                    <div className='flex items-center gap-3 mb-3'>
                      <span className='text-2xl'>{feature.icon}</span>
                      <CardTitle className='text-white text-lg'>
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-300 text-sm'>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className='mb-20'>
            <h2 className='text-4xl font-bold text-white mb-12 text-center'>
              Project Details
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Left Column */}
              <div className='space-y-8'>
                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    Background
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Users previously had to complete the process with the help
                    of agents, leading to friction and abandonment.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    What problem did you aim to solve?
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    The contracting process was complex, time-consuming, and
                    lacked an easy way to complete payments online.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    Who was the user?
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Customers looking to sign up for internet services online.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    What challenges did you have?
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Reducing perceived complexity, ensuring trust in the
                    agentless process, and integrating secure payment options.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className='space-y-8'>
                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    My Role
                  </h3>
                  <p className='text-gray-300 text-xl font-medium'>
                    UX Designer
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    Activities
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    User flow analysis, wireframing, prototyping, usability
                    testing, and payment integration.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    Results
                  </h3>
                  <div className='space-y-4'>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-2'>
                        What was the outcome?
                      </h4>
                      <p className='text-gray-300'>
                        Increased conversion rates, reduced drop-offs, and
                        improved user satisfaction by making the process faster
                        and more intuitive.
                      </p>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-2'>
                        How did the solution change the game?
                      </h4>
                      <p className='text-gray-300'>
                        A streamlined three-step process with clear guidance,
                        fewer friction points, and built-in payment options.
                      </p>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-2'>
                        What did you learn from working on this experience?
                      </h4>
                      <p className='text-gray-300'>
                        Simplification and transparency are key to reducing
                        drop-offs in high-commitment online processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className='text-center'>
            <Link href='/#projects'>
              <Button className='bg-purple-400 hover:bg-purple-500 text-white px-8 py-3 text-lg'>
                ← Back to Projects
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='border-t border-gray-800 py-8 bg-gray-900/30'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
