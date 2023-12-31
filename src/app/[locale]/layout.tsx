"use client"
import { Inter } from 'next/font/google'
import '../globals.css'
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {locales} from '../../config';
import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple,indigo } from '@mui/material/colors';
// export function generateStaticParams() {
//   return locales.map((locale) => ({locale}));
// }

type Props = {
  children: ReactNode;
  params: {locale: string};
};

// export async function generateMetadata({
//   params: {locale}
// }: Omit<Props, 'children'>) {
//   const t = await getTranslations({locale, namespace: 'LocaleLayout'});

//   return {
//     title: t('title')
//   };
// }

export default function RootLayout({
  children,
  params: {locale}
}: Props) {
  const theme = createTheme({
    palette: {
      primary: lime,
      secondary: purple,
      mode:"light"
    },
    
  });
  return (
    <html  lang={locale}>
      <body className='h-screen'>
      <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>

        <div className='h-screen'>
        {children}
        </div>
      </ThemeProvider>
      </AppRouterCacheProvider>
        </body>
    </html>
  )
}
