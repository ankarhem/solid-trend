import { PageObject } from '~/routes/(layout)/[...route]';

interface StartPagePageProps {
  object: PageObject<'StartPage'>;
}

function StartPagePage(props: StartPagePageProps) {
  return <div>{props.object.name}</div>;
}

export default StartPagePage;
