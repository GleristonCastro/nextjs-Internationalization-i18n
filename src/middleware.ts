import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ar', 'bn' ,'en', 'es', 'fr', 'hi', 'ja', 'pt', 'ru', 'zh'],

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|bn|en|es|fr|hi|ja|pt|ru|zh)/:path*']
};