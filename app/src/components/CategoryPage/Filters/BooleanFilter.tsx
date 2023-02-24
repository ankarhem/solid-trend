import { FilterObject } from '~/components/CategoryPage/Filters';

interface BooleanFilterProps {
  filter: FilterObject<'BooleanFilter'>;
}

function BooleanFilter(props: BooleanFilterProps) {
  return <h3>{props.filter.name}</h3>;
}

export default BooleanFilter;
