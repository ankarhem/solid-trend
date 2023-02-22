// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from 'solid-start';
import ServerErrorMessage from '~/components/ServerErrorMessage';
import './root.css';

export default function Root() {
  return (
    <Html lang="en" class="font-text">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></Link>
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@400;600&display=swap"
          rel="stylesheet"
        ></Link>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary
            fallback={(e, reset) => <ServerErrorMessage {...e} reset={reset} />}
          >
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
