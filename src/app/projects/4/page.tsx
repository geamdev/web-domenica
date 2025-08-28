import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function ChatbotPage() {
  const highlights = [
    {
      title: 'Goal',
      description:
        'Streamline the most frequent user activities by providing an automated and user-friendly chatbot experience.',
    },
    {
      title: 'Process',
      description:
        'Researched user needs, designed conversational flows, implemented NLP for better understanding, and integrated with the billing system.',
    },
    {
      title: 'Outcome',
      description: 'Reduced customer support workload and improved security.',
    },
  ];

  const features = [
    {
      title: 'Conversation Flow',
      description:
        'Mapping out user interactions to ensure a natural and efficient conversation experience.',
      icon: '💬',
    },
    {
      title: 'User Interface',
      description:
        'The chatbot interface was designed to be clear, intuitive, and accessible through WhatsApp.',
      icon: '📱',
    },
    {
      title: 'Performance Analytics',
      description:
        "Tracking user interactions and feedback to continuously enhance the chatbot's efficiency.",
      icon: '📊',
    },
    {
      title: 'Figma file organization',
      description:
        'The file has been organized by functionality and user flow.',
      icon: '📁',
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
                <span className='text-3xl'>🤖</span>
              </div>
            </div>
            <h1 className='text-6xl font-bold text-white mb-6'>Chatbot</h1>
            <div className='flex flex-wrap justify-center gap-3 mb-8'>
              <Badge className='bg-purple-400 text-white border-0'>
                Chatbot
              </Badge>
              <Badge className='bg-purple-400 text-white border-0'>
                Conversational Design
              </Badge>
              <Badge className='bg-purple-400 text-white border-0'>
                User Research
              </Badge>
              <Badge className='bg-purple-400 text-white border-0'>
                Integration
              </Badge>
              <Badge className='bg-purple-400 text-white border-0'>
                Automation
              </Badge>
            </div>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              A WhatsApp chatbot designed to assist users account status and
              payments.
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
                    Users frequently contacted support to request invoices,
                    making the business spend money with human agents.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    What problem did you aim to solve?
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Manually requesting invoices was time-consuming,
                    frustrating, and required multiple interactions with support
                    agents.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    Who was the user?
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Customers needing quick access to their invoices without
                    human intervention.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    What challenges did you have?
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    Ensuring accurate invoice retrieval, handling various user
                    queries effectively, and providing a seamless experience
                    across platforms.
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
                    UX Designer & Conversational Designer
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-white mb-4'>
                    Activities
                  </h3>
                  <p className='text-gray-300 leading-relaxed'>
                    User research, conversation design, chatbot prototyping,
                    usability testing, and integration planning.
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
                        Reduced customer support workload and improved security.
                      </p>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-2'>
                        How did the solution change the game?
                      </h4>
                      <p className='text-gray-300'>
                        Developed a chatbot with guided and free-text
                        interactions, capable of retrieving invoices and
                        answering related queries.
                      </p>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-2'>
                        What did you learn from working on this experience?
                      </h4>
                      <p className='text-gray-300'>
                        Balancing automation with human support is crucial to
                        maintaining a positive user experience.
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
