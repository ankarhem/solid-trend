import { children } from 'solid-js';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

export default function Layout({ children }) {
  return (
    <>
      {/* <ProgressBar /> */}
      <Header />
      <main class="flex flex-col flex-1">{children}</main>
      <Footer />
      {/* <Toaster
    position='top-right'
    containerStyle={{ top: '48px' }}
    toastOptions={{ duration: 1500 }}
  /> */}
    </>
  );
}
