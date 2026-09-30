import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// Make sure this exact export exists:
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
