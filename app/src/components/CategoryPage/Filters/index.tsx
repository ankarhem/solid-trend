import { For, lazy, Suspense } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { Get } from 'type-fest';
import { PageObject } from '~/routes/(layout)/[...route]';
import BooleanFilter from '~/components/CategoryPage/Filters/BooleanFilter';
import ListFilter from '~/components/CategoryPage/Filters/ListFilter';
import NumericRangeFilter from '~/components/CategoryPage/Filters/NumericRangeFilter';
import MultiListFilter from '~/components/CategoryPage/Filters/MultiListFilter';

interface FiltersProps {
  filters: NonNullable<Get<PageObject<'Category'>, 'products.filters'>>;
}

export type FilterType = NonNullable<
  Get<PageObject<'Category'>, 'products.filters[0].__typename'>
>;

export type FilterObject<F extends FilterType> = Extract<
  Get<PageObject<'Category'>, 'products.filters[0]'>,
  { __typename: F }
>;

const filters = {
  BooleanFilter,
  ListFilter,
  NumericRangeFilter,
  MultiListFilter,
  // BooleanFilter: lazy(
  //   () => import('~/components/CategoryPage/Filters/BooleanFilter')
  // ),
  // ListFilter: lazy(
  //   () => import('~/components/CategoryPage/Filters/ListFilter')
  // ),
  // NumericRangeFilter: lazy(
  //   () => import('~/components/CategoryPage/Filters/NumericRangeFilter')
  // ),
  // MultiListFilter: lazy(
  //   () => import('~/components/CategoryPage/Filters/MultiListFilter')
  // ),
};

function Filters(props: FiltersProps) {
  const sortedFilters = () =>
    [...props.filters].sort((a, b) =>
      a?.name && b?.name && a.name > b.name ? 1 : -1
    );
  return (
    <For each={sortedFilters()}>
      {(filter) => (
        <Dynamic
          component={filters[filter?.__typename!]}
          filter={filter as any}
        />
      )}
    </For>
  );
}

export default Filters;
