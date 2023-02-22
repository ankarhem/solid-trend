import { PageObject } from '~/routes/(layout)/[...route]';

interface CategoryPageProps {
  object: PageObject<'Category'>;
}

function CategoryPage(props: CategoryPageProps) {
  return <div>{props.object.name}</div>;
}

export default CategoryPage;
