import { Outlet, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import { NavTreeDocument } from '~/graphql-operations';
import { gqlRequest } from '@norce/storefront-lib/graphql';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export const routeData = () => {
  return createServerData$(
    async () => {
      const response = await gqlRequest({
        endpoint: 'https://storeapi.jetshop.io',
        query: NavTreeDocument,
        variables: {
          levels: 1,
        },
        headers: {
          shopid: 'demostore',
          token: '359fd7c1-8e72-4270-b899-2bda9ae6ef57',
        },
      }).then((res) => res.json());

      return response;
    },
    { key: () => ['navtree'] }
  );
};

export default function ShopLayout() {
  const data = useRouteData<typeof routeData>();

  return (
    <>
      <Header navTree={data} />
      <main class="min-h-[80vh] bg-base-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
