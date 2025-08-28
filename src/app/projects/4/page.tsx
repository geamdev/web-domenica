import { GlobalLayout } from '@/components/GlobalLayout';
import { ProjectHeader } from '@/components/ProjectHeader';
import { ProjectHighlights } from '@/components/ProjectHighlights';
import { ProjectFeatures } from '@/components/ProjectFeatures';
import { ProjectNavigation } from '@/components/ProjectNavigation';

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
    <GlobalLayout currentPage='projects'>
      <div className='max-w-6xl mx-auto px-4 md:px-6'>
        <ProjectHeader
          title='Chatbot Platform'
          description='An intelligent chatbot solution designed to streamline customer support and automate common user interactions.'
          tags={[
            'Chatbot',
            'UX Design',
            'Conversational AI',
            'Customer Support',
            'WhatsApp Integration',
          ]}
          icon='🤖'
        />

        <ProjectHighlights highlights={highlights} />

        <ProjectFeatures features={features} title='Key Features' />

        {/* Project Details */}
        <div className='mb-16 md:mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold text-black dark:text-white mb-8 md:mb-12 text-center'>
            Project Details
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
            {/* Left Column */}
            <div className='space-y-6 md:space-y-8'>
              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  Background
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  Customer support teams were overwhelmed with repetitive
                  inquiries, leading to long response times and decreased
                  customer satisfaction.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  What problem did you aim to solve?
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  High volume of repetitive customer inquiries that could be
                  automated, reducing support workload and improving response
                  times.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  Who was the user?
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  Customers seeking quick answers to common questions and
                  support teams looking to reduce repetitive workload.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className='space-y-6 md:space-y-8'>
              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  My Role
                </h3>
                <p className='text-gray-600 dark:text-gray-300 text-lg md:text-xl font-medium'>
                  UX Designer
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  Activities
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  User research, conversational flow design, interface design,
                  usability testing, and collaboration with development team.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  Results
                </h3>
                <div className='space-y-4'>
                  <div>
                    <h4 className='text-base md:text-lg font-semibold text-black dark:text-white mb-2'>
                      What was the outcome?
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
                      Reduced customer support workload by 60% and improved
                      response times from hours to minutes.
                    </p>
                  </div>
                  <div>
                    <h4 className='text-base md:text-lg font-semibold text-black dark:text-white mb-2'>
                      How did the solution change the game?
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
                      Created an intelligent chatbot that handles 80% of common
                      inquiries automatically, freeing support teams for complex
                      issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectNavigation prevProject={3} />
      </div>
    </GlobalLayout>
  );
}
