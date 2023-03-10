import { For, Show } from 'solid-js';
import { useRouteData } from 'solid-start';
import { Get } from 'type-fest';
import { RouteQuery } from '~/graphql-operations';
import { routeData } from '~/routes/(layout)/[...route]';

interface BreadcrumbsProps {
  route: Get<RouteQuery, 'route'>;
}

function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <Show when={props.route?.breadcrumbs?.length}>
      <nav
        aria-label="Breadcrumb"
        class="mx-4 xl:max-w-7xl xl:mx-auto py-6 text-sm text-base-content"
      >
        <ul class="flex flex-wrap">
          <For each={props.route?.breadcrumbs}>
            {(crumb) => (
              <li class='after:inline last:after:hidden after:content-["/"] after:mx-2'>
                <a>{crumb}</a>
              </li>
            )}
          </For>
        </ul>
      </nav>
    </Show>
  );
}

export default Breadcrumbs;
