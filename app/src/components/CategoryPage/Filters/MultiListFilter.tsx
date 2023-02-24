import { FilterObject } from '~/components/CategoryPage/Filters';

interface MultiListFilterProps {
  filter: FilterObject<'MultiListFilter'>;
}

function MultiListFilter(props: MultiListFilterProps) {
  return <h3>{props.filter.name}</h3>;
}

export default MultiListFilter;
