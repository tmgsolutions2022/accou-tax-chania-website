'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

const TeamSection = () => {
  const t = useTranslations('team');

  const team = [
    {
      nameKey: 'member1.name',
      descKey: 'member1.description',
      phone: '+30 6980 600457',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCpAZBt4UJHn-nxA4SGC77Suwj723_K0py_zDh6d7NWsL_MxY0C1CTGdXM_vIbVcvjtGkptvAbScyqnUGNBE3U-WFUBn2YNTy-2zuqLHsQk1xc8hMkaVBun7FtMx5m183QeeBzdJc9h4tQrfvTNtR9YKVidWWJigeqKIbDghQ4xXpy7SCfFVzroxUFnSkbvErHoqy-SiwK1kpWsOk5p4VMeKT0iLOe5pmi7h_3wHHpuJCl9Qht-4PgJTA2Mwzhef3S53YyC8b8MSQim'
    },
    {
      nameKey: 'member2.name',
      descKey: 'member2.description',
      phone: '+30 6980 887437',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAQg6Vbx7ZDkJb7JQouFd22-mHBpg9cbn6HJ2gYXrMfa1Q74gVogrdgBmP5On4oRAZFtnlF0cntsr6-vNY4BwGiYs4ERuFsbc1xVHzBTDED4p3laaUwk-8-tapEk2RzvDx9q2N4wXKDtPe7R_z9GMOal_Bbdu6ZsM0Vxc8vVOxb6lsa9chCrgfgmAEEiBGwdet7EcB4mMjqeajCA9ZdaS5Bii8cHW4hpbtZnVrlolp0_64jembNFzXPsPh1ztJirQnciaA0354yWTpz'
    },
    {
      nameKey: 'member3.name',
      descKey: 'member3.description',
      phone: '+30 6982 386622',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDLdCTGmcbf-AUTZTgj4Sd3wl5daBJKBiIPW76lOTRmPQOUjnsmjnDVBXuneRFmE8uTYvrqCiqJLMkunutlFgIRVqq_0n_NVWdeHOGh-2n7gB-e92u_INC-GuHZD5tSb71WwzB1PdnZ3SeVRpvqGAPYJx1WQqHBTW4KrxPeBixmUi1F1-R7cpXiovdpVqlnhZHPotJ2VekV8aPgCKWfVBbNpkgg0OLb3jV7nsQu8QW3iGR9t70Q_6ayU5FbiNQlXGstyMhKnsd3DYTk'
    }
  ];

  return (
    <section
      className='py-16 bg-background-light dark:bg-background-dark'
      id='about'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-center text-neutral-text dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8'>
          {t('title')}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {team.map((member, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center gap-4 rounded-xl p-6 border border-stone-200 dark:border-stone-700 bg-neutral-background dark:bg-dark-neutral-background'
            >
              <img
                src={member.image}
                alt={`Headshot of ${t(member.nameKey)}`}
                width={128}
                height={128}
                className='w-32 h-32 rounded-full object-cover shrink-0 border-4 border-primary/50'
              />
              <div className='flex flex-col items-center'>
                <h3 className='text-neutral-text dark:text-white text-xl font-bold'>
                  {t(member.nameKey)}
                </h3>
                <p className='text-stone-600 dark:text-dark-subtext text-sm mb-2'>
                  {t(member.descKey)}
                </p>
                <Link
                  href={`tel:${member.phone}`}
                  className='flex items-center gap-2 text-primary font-semibold'
                >
                  <span className='material-symbols-outlined text-lg'>
                    call
                  </span>
                  <span>{member.phone}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
