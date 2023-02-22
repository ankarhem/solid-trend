import { gqlRequest } from '@norce/storefront-lib/graphql';
import { lazy } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { RouteDataArgs, useRouteData } from 'solid-start';
import { createServerData$, redirect, ServerError } from 'solid-start/server';
import { Get } from 'type-fest';
import { notFound, serverError } from '~/components/ServerErrorMessage';
import { RouteDocument, RouteQuery } from '~/graphql-operations';

export type PageType = NonNullable<Get<RouteQuery, 'route.object.__typename'>>;
export type PageObject<P extends PageType> = Extract<
  Get<RouteQuery, 'route.object'>,
  { __typename: P }
>;

export const routeData = ({ location }: RouteDataArgs) => {
  return createServerData$(
    async ([, pathname]) => {
      try {
        const response = await gqlRequest({
          endpoint: 'https://storeapi.jetshop.io',
          query: RouteDocument,
          variables: {
            path: pathname,
          },
          headers: {
            shopid: 'demostore',
            token: '359fd7c1-8e72-4270-b899-2bda9ae6ef57',
          },
        }).then((res) => res.json());

        if (!response.data?.route) {
          throw notFound();
        }

        // If the path is a redirect, redirect to the target.
        if (
          response.data?.route?.path &&
          response.data?.route?.path !== pathname
        ) {
          throw redirect(response.data?.route?.path);
        }

        return response;
      } catch (error) {
        if (error instanceof ServerError) {
          throw error;
        }

        throw serverError();
      }
    },
    { key: () => ['route', location.pathname] }
  );
};

const Pages = {
  Category: lazy(() => import('~/components/CategoryPage')),
  Page: lazy(() => import('~/components/Page')),
  Product: lazy(() => import('~/components/ProductPage')),
  StartPage: lazy(() => import('~/components/StartPage')),
};

export default function DynamicRoute() {
  const query = useRouteData<typeof routeData>();

  return (
    <Dynamic
      component={Pages[query()?.data?.route?.object?.__typename!]}
      object={query()?.data?.route?.object as any}
    />
  );
}
