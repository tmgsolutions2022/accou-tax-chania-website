'use client';

import Link from "next/link";
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const t = useTranslations('hero');

  return (
    <section id="home">
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage:
                'linear-gradient(rgba(41, 39, 36, 0.7) 0%, rgba(41, 39, 36, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcWt6pKtDrJ_tZI_NJEWov1ZScvxmsvk1cLgq4gxmqfCxEEtPiJL_8n0I9zWb3OySz0OBojpy-lDds-zvm06R84H6S0OcXvham4FNqsmnv2eYi3BDjBKH8g1o2GTPMhDMdzQTSAEuNdtAIrpDHap3kDY5IQbwjEptnYJEIv8oyVJGFCUksF0r6E4JM0WcC-es-iIPas1UHXEV0RR26qGnwFRFKTUwxCO7mRmg0ZU4fn5EG2qHXV2p_8pBHf-Z0GunGaF2UUPBSqeYg")',
            }}
          >
            <div className="flex flex-col gap-2 text-center max-w-2xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                {t('title')}
              </h1>
              <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                {t('subtitle')}
              </h2>
            </div>
            <Link
              href="#contact"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-opacity-90 text-white text-base font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">{t('cta')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
