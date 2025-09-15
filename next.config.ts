import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zyhcnekabfmxmvkxelao.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
      },
      {
        hostname: 'img.icons8.com',
      },
      {
        hostname: 'appwrite.io',
      },
    ],
  },
};
 

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);