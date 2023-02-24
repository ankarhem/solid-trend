import { A } from '@solidjs/router';
import { For } from 'solid-js';
import { routeData } from '~/routes/(layout)';

interface HeaderProps {
  navTree: ReturnType<typeof routeData>;
}

export default function Header(props: HeaderProps) {
  return (
    <header class="bg-base-100 px-4 shadow-md flex py-4">
      <A href="/">
        <img src="/NorceLogo.svg" alt="logo" class="h-6 block" />
      </A>
      <nav>
        <ul class="flex items-center gap-4 pl-6 pr-4">
          <For each={props.navTree()?.data?.categories}>
            {(category) => {
              if (!category?.primaryRoute?.path) return null;

              return (
                <li>
                  <A
                    href={category?.primaryRoute?.path}
                    class="hover:underline underline-offset-2"
                    activeClass="font-semibold"
                    // rel="prefetch"
                  >
                    {category?.name}
                  </A>
                </li>
              );
            }}
          </For>
        </ul>
      </nav>
    </header>
  );
}
