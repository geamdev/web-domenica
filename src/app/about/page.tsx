import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GlobalLayout } from '@/components/GlobalLayout';
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
    <GlobalLayout currentPage='about'>
      <div className='max-w-4xl mx-auto px-6'>
        {/* Page Title */}
        <div className='text-center mb-16'>
          <h1 className='text-6xl font-bold text-black dark:text-white mb-6'>
            About Me
          </h1>
          <div className='w-32 h-32 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8'>
            <span className='text-4xl'>👩‍💻</span>
          </div>
          <h2 className='text-3xl font-semibold text-black dark:text-white mb-4'>
            So who is this guy? 🤔
          </h2>
        </div>

        {/* Introduction */}
        <div className='mb-16'>
          <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8'>
            Hello! I&apos;m Domenica, a passionate UX designer with a focus on
            creating intuitive and engaging user experiences.
          </p>

          <h3 className='text-2xl font-semibold text-black dark:text-white mb-6'>
            Want to learn more?
          </h3>

          <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
            Great! let&apos;s continue, I believe in the power of user-centered
            design to solve complex problems and create meaningful digital
            experiences, with 2 years of experience in the field, I&apos;ve had
            the opportunity to work on a diverse range of projects, from mobile
            apps to web platforms.
          </p>

          <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
            My approach combines research, empathy, and creativity to deliver
            solutions that not only meet user needs but also provide value to
            both client and service.
          </p>

          <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
            When I&apos;m not designing, you can find me taking photos or
            exploring new technologies to stay current with industry trends.
          </p>
        </div>

        {/* Skills Section */}
        <div className='mb-16'>
          <h3 className='text-2xl font-semibold text-black dark:text-white mb-8 text-center'>
            My Skills
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {skills.map((skill, index) => (
              <Card
                key={index}
                className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              >
                <CardContent className='p-4'>
                  <p className='text-gray-700 dark:text-gray-300 text-center'>
                    {skill}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className='mb-16'>
          <h3 className='text-2xl font-semibold text-black dark:text-white mb-8 text-center'>
            Experience
          </h3>
          <div className='space-y-6'>
            <Card className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'>
              <CardHeader>
                <CardTitle className='text-black dark:text-white'>
                  UX Designer - Freelance
                </CardTitle>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  2023 - Present
                </p>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 dark:text-gray-300'>
                  Working with various clients to create user-centered design
                  solutions, from wireframes to high-fidelity prototypes.
                </p>
              </CardContent>
            </Card>

            <Card className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'>
              <CardHeader>
                <CardTitle className='text-black dark:text-white'>
                  UX Designer - Company Projects
                </CardTitle>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  2022 - 2023
                </p>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 dark:text-gray-300'>
                  Collaborated with development teams to implement design
                  systems and improve user experience across multiple digital
                  products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className='text-center'>
          <h3 className='text-2xl font-semibold text-black dark:text-white mb-6'>
            Let&apos;s Connect!
          </h3>
          <p className='text-gray-600 dark:text-gray-300 mb-8'>
            I&apos;m always open to discussing new opportunities and exciting
            projects.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/#projects'>
              <Button className='bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg'>
                View My Work
              </Button>
            </Link>
            <Link href='mailto:domejaramillo2017@hotmail.com'>
              <Button
                variant='outline'
                className='border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-8 py-3 text-lg'
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}
