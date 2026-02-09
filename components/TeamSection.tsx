import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimation';

const TeamSection = () => {
  const team = [
    {
      name: 'Kiki Stavroulaki',
      title: 'Associate',
      description:
        'Dedicated to precision and client success, Kiki ensures every financial detail is handled with care.',
      phone: '+30 6980 600457',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCpAZBt4UJHn-nxA4SGC77Suwj723_K0py_zDh6d7NWsL_MxY0C1CTGdXM_vIbVcvjtGkptvAbScyqnUGNBE3U-WFUBn2YNTy-2zuqLHsQk1xc8hMkaVBun7FtMx5m183QeeBzdJc9h4tQrfvTNtR9YKVidWWJigeqKIbDghQ4xXpy7SCfFVzroxUFnSkbvErHoqy-SiwK1kpWsOk5p4VMeKT0iLOe5pmi7h_3wHHpuJCl9Qht-4PgJTA2Mwzhef3S53YyC8b8MSQim'
    },
    {
      name: 'Giorgos Stavroulakis',
      title: 'Associate',
      description:
        'With deep expertise in tax planning, Giorgos provides reliable guidance for complex financial landscapes.',
      phone: '+30 6980 887437',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAQg6Vbx7ZDkJb7JQouFd22-mHBpg9cbn6HJ2gYXrMfa1Q74gVogrdgBmP5On4oRAZFtnlF0cntsr6-vNY4BwGiYs4ERuFsbc1xVHzBTDED4p3laaUwk-8-tapEk2RzvDx9q2N4wXKDtPe7R_z9GMOal_Bbdu6ZsM0Vxc8vVOxb6lsa9chCrgfgmAEEiBGwdet7EcB4mMjqeajCA9ZdaS5Bii8cHW4hpbtZnVrlolp0_64jembNFzXPsPh1ztJirQnciaA0354yWTpz'
    },
    {
      name: 'G. Michelogiannakis',
      title: 'Associate',
      description:
        'A strategic thinker committed to optimizing business performance through sound financial management.',
      phone: '+30 6982 386622',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDLdCTGmcbf-AUTZTgj4Sd3wl5daBJKBiIPW76lOTRmPQOUjnsmjnDVBXuneRFmE8uTYvrqCiqJLMkunutlFgIRVqq_0n_NVWdeHOGh-2n7gB-e92u_INC-GuHZD5tSb71WwzB1PdnZ3SeVRpvqGAPYJx1WQqHBTW4KrxPeBixmUi1F1-R7cpXiovdpVqlnhZHPotJ2VekV8aPgCKWfVBbNpkgg0OLb3jV7nsQu8QW3iGR9t70Q_6ayU5FbiNQlXGstyMhKnsd3DYTk'
    }
  ];

  return (
    <section
      className='py-24 bg-background-light dark:bg-background-dark'
      id='about'
    >
      <div className='container mx-auto px-4'>
        <FadeIn>
          <div className='text-center max-w-2xl mx-auto mb-16'>
            <h2 className='text-3xl sm:text-4xl font-extrabold text-neutral-text dark:text-white tracking-tight mb-4'>
              The Experts Behind Your Success
            </h2>
            <p className='text-lg text-stone-600 dark:text-dark-subtext'>
              Meet the dedicated professionals committed to your financial
              stability and growth.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {team.map((member, index) => (
            <StaggerItem
              key={index}
              className='group flex flex-col items-center text-center rounded-2xl p-8 bg-neutral-background dark:bg-dark-neutral-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
            >
              <div className='relative mb-6'>
                <div className='absolute inset-0 rounded-full bg-primary blur-md opacity-20 group-hover:opacity-40 transition-opacity'></div>
                <img
                  src={member.image}
                  alt={`Headshot of ${member.name}`}
                  width={140}
                  height={140}
                  className='relative w-36 h-36 rounded-full object-cover border-4 border-white dark:border-stone-800 shadow-md'
                />
              </div>

              <h3 className='text-xl font-bold text-neutral-text dark:text-white mb-1'>
                {member.name}
              </h3>
              {/* <div className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">{member.title}</div> */}

              <p className='text-stone-600 dark:text-dark-subtext text-sm mb-6 leading-relaxed'>
                {member.description}
              </p>

              <Link
                href={`tel:${member.phone}`}
                className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white'
              >
                <span className='material-symbols-outlined text-lg'>call</span>
                <span>{member.phone}</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TeamSection;
