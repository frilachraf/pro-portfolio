import React, { ReactNode } from 'react';
import { ThemeProvider } from '../theme-provider';
import Header from '../Header';
import { Footer } from 'flowbite-react';

type DefaultLayoutProps = {
    children: ReactNode;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div className="default-layout">
            <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        </div>
    );
};

export default DefaultLayout;