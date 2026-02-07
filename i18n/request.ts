import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

const isLocaleType = (
  x: string | undefined
): x is (typeof routing.locales)[number] =>
  typeof x === typeof routing.locales[0];

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale =
    !!requested && isLocaleType(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
