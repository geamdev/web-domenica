import { GlobalLayout } from '@/components/GlobalLayout';
import { ProjectHeader } from '@/components/ProjectHeader';
import { ProjectHighlights } from '@/components/ProjectHighlights';
import { ProjectFeatures } from '@/components/ProjectFeatures';
import { ProjectNavigation } from '@/components/ProjectNavigation';

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
    <GlobalLayout currentPage='projects'>
      <div className='max-w-6xl mx-auto px-4 md:px-6'>
        <ProjectHeader
          title='Service E-commerce'
          description='A streamlined, agentless internet service contracting platform designed for maximum user convenience and conversion.'
          tags={[
            'E-commerce',
            'UX Design',
            'User Flow',
            'Payment Integration',
            'Service Platform',
          ]}
          icon='🛒'
        />

        <ProjectHighlights highlights={highlights} />

        <ProjectFeatures features={features} title='Key Features' columns={2} />

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
                  The existing service contracting process was complex, required
                  agent intervention, and had high drop-off rates due to poor
                  user experience.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  What problem did you aim to solve?
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  Complex multi-step process that required agent assistance,
                  leading to high abandonment rates and poor user satisfaction.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  Who was the user?
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  Customers looking to contract internet services online,
                  preferring self-service options over phone calls.
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
                  User research, flow optimization, wireframing, prototyping,
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
                      Increased conversion rates by 40% and reduced drop-offs by
                      60% through streamlined user experience.
                    </p>
                  </div>
                  <div>
                    <h4 className='text-base md:text-lg font-semibold text-black dark:text-white mb-2'>
                      How did the solution change the game?
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
                      Created a fully self-service platform that eliminated the
                      need for agent intervention while improving user
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectNavigation prevProject={1} nextProject={3} />
      </div>
    </GlobalLayout>
  );
}
