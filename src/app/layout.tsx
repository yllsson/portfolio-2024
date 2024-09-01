import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';
import '../styles/styles.scss';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ylva Turner',
    description: "Ylva Turner's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
