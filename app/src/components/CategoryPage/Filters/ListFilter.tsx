import { createEffect, createSignal, For, JSX, Show } from 'solid-js';
import { FilterObject } from '~/components/CategoryPage/Filters';
import { onClickOutside } from 'solidjs-use';
import { Portal } from 'solid-js/web';

interface ListFilterProps {
  filter: FilterObject<'ListFilter'>;
}

function ChevronDownIcon(props: JSX.IntrinsicElements['svg']): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function ListFilter(props: ListFilterProps) {
  const [open, setOpen] = createSignal(false);

  return (
    <div>
      <button
        class="flex w-full px-2 py-1 rounded font-heading items-center justify-between hover:bg-base-200 truncate"
        onClick={() => setOpen(!open())}
      >
        <span>{props.filter.name}</span>
        <ChevronDownIcon class="w-4 h-4" />
      </button>
      <Show when={open()}>
        <ul class="grid gap-1 m-2 text-base-content">
          <For each={props.filter.items}>
            {(item) => {
              return (
                <li class="flex gap-1.5 py-0.5 items-center rounded hover:bg-base-200 px-2">
                  <input
                    class="rounded py-1"
                    id={item?.id}
                    type="checkbox"
                    name={item?.id}
                    value={item?.value}
                  />
                  <label class="flex-1 text-sm truncate" for={item?.id}>
                    {item?.text}
                  </label>
                  <span class="text-xs opacity-50">{item?.resultCount}</span>
                </li>
              );
            }}
          </For>
        </ul>
      </Show>
    </div>
  );
}

export default ListFilter;
