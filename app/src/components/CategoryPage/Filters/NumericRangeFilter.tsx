import { FilterObject } from '~/components/CategoryPage/Filters';

interface NumericRangeFilterProps {
  filter: FilterObject<'NumericRangeFilter'>;
}

function NumericRangeFilter(props: NumericRangeFilterProps) {
  return <h3>{props.filter.name}</h3>;
}

export default NumericRangeFilter;
