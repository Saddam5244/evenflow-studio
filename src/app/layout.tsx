import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Evenflow Studio — Launch Your Startup in 3 Weeks', description: 'From idea to launch-ready MVP. Product design and development for ambitious founders.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
