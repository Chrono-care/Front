import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from '@/theme/theme';
import { Header } from '@/app/components/modules/Header/Header';
import { Footer } from '@/app/components/modules/Footer/Footer';
import './app.css';
import { ReactNode } from 'react';
import ReactQueryProvider from '@/utils/providers/ReactQueryProvider';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page of the app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <ReactQueryProvider>
                            <Box
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Header />
                                <Box
                                    marginY={8}
                                    height={'100%'}
                                    component={'main'}
                                >
                                    {children}
                                </Box>
                                <Footer />
                            </Box>
                        </ReactQueryProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
