import type { FC, PropsWithChildren } from 'react';
import { Footer } from '~/components/Sections/Footer.tsx';
import { Header } from '~/components/Sections/Header.tsx';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="container mx-auto py-8 flex-1">{children}</main>
    <Footer />
  </>
);
