import { GlobalLayout } from '@/components/GlobalLayout';
import { ProjectHeader } from '@/components/ProjectHeader';
import { ProjectHighlights } from '@/components/ProjectHighlights';
import { ProjectFeatures } from '@/components/ProjectFeatures';
import { ProjectNavigation } from '@/components/ProjectNavigation';

export default function MeyoAppPage() {
  const highlights = [
    {
      title: 'Goal',
      description:
        'Create a platform that connects people looking for gig work with those offering gigs.',
    },
    {
      title: 'Process',
      description:
        'Designed the entire UX from scratch, including user flows, wireframes, prototypes, and usability testing, ensuring an intuitive experience for both gig workers and employers.',
    },
    {
      title: 'Outcome',
      description:
        'A functional MVP that allows users to easily find gigs or post job opportunities, enhancing flexibility and accessibility in the job market.',
    },
  ];

  const features = [
    {
      title: 'Friendly login',
      description:
        "A warm welcome, the login screen keeps things simple, only asking for what's truly needed to get started.",
      icon: '🔐',
    },
    {
      title: 'Onboarding',
      description:
        'A quick intro to help users understand how the app works, highlighting the most important actions they can take.',
      icon: '🚀',
    },
    {
      title: 'Home',
      description:
        'The heart of the app, the two main actions are front and center, making it super easy for users to navigate.',
      icon: '🏠',
    },
    {
      title: 'Notifications',
      description:
        'Users can track their gig applications and requests in one place, so they never miss an opportunity.',
      icon: '🔔',
    },
    {
      title: 'GPS based location',
      description:
        "Less typing, more doing! Automatically detects the user's location to make posting or finding gigs effortless.",
      icon: '📍',
    },
  ];

  return (
    <GlobalLayout currentPage='projects'>
      <div className='max-w-6xl mx-auto px-4 md:px-6'>
        <ProjectHeader
          title='Meyo App'
          description='A gig economy platform connecting job seekers with opportunities through an intuitive mobile-first design.'
          tags={[
            'Mobile App',
            'UX Design',
            'Gig Economy',
            'User Flows',
            'Prototyping',
          ]}
          icon='📱'
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
                  The gig economy was growing rapidly, but existing platforms
                  had complex interfaces that made it difficult for users to
                  quickly find or post opportunities.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  What problem did you aim to solve?
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  Complex user interfaces that created barriers for both gig
                  workers and employers, leading to low engagement and poor user
                  experience.
                </p>
              </div>

              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-black dark:text-white mb-3 md:mb-4'>
                  Who was the user?
                </h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base'>
                  Gig workers looking for flexible work opportunities and
                  employers needing quick access to skilled workers.
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
                  User research, wireframing, prototyping, usability testing,
                  and collaboration with development team for MVP
                  implementation.
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
                      A functional MVP with intuitive user flows that
                      significantly improved user engagement and task completion
                      rates.
                    </p>
                  </div>
                  <div>
                    <h4 className='text-base md:text-lg font-semibold text-black dark:text-white mb-2'>
                      How did the solution change the game?
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base'>
                      Created a mobile-first platform that simplified the gig
                      economy experience through thoughtful UX design and
                      streamlined workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectNavigation prevProject={2} nextProject={4} />
      </div>
    </GlobalLayout>
  );
}
