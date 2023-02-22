import { PageObject } from '~/routes/(layout)/[...route]';

interface PagePageProps {
  object: PageObject<'Page'>;
}

function PagePage(props: PagePageProps) {
  return <div>{props.object.name}</div>;
}

export default PagePage;
