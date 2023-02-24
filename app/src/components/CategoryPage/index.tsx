import { Show, splitProps, Suspense } from 'solid-js';
import Filters from '~/components/CategoryPage/Filters';
import { PageObject } from '~/routes/(layout)/[...route]';

interface CategoryPageProps {
  object: PageObject<'Category'>;
}

function CategoryPage(props: CategoryPageProps) {
  return (
    <div class="mx-4 xl:max-w-7xl xl:mx-auto flex h-full gap-4 my-10">
      <div class="grid w-96 bg-base-200">
        <Show when={props.object.products?.filters} keyed>
          {(filters) => <Filters filters={filters} />}
        </Show>
      </div>
      <div class="flex-1 bg-base-300">grid</div>
    </div>
  );
}

export default CategoryPage;
