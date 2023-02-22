import { PageObject } from '~/routes/(layout)/[...route]';

interface ProductPageProps {
  object: PageObject<'Product'>;
}

function ProductPage(props: ProductPageProps) {
  return <div>{props.object.name}</div>;
}

export default ProductPage;
