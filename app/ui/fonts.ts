import { Inter, Lusitana } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  //weight: ['400', '500', '600', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const lusitana = Lusitana({
   weight: ['400','700'],
   subsets: ['latin'],
  
})