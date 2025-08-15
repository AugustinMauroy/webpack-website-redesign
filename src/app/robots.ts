import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    host: 'https://webpack.js.org',
    rules: {
      allow: '/',
      userAgent: '*',
    },
  };
}
