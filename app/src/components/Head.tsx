import { For, Show } from 'solid-js';
import { Meta, Title } from 'solid-start';
import { Get } from 'type-fest';
import { RouteQuery } from '~/graphql-operations';

interface HeadProps {
  route: Get<RouteQuery, 'route'>;
}

function Head(props: HeadProps) {
  return (
    <>
      <Title>{props.route?.object?.name}</Title>
      <Meta
        name="title"
        content={props.route?.object?.head?.title || props.route?.object?.name}
      />
      <For each={props.route?.object?.head?.metaTags}>
        {(tag) => <Meta {...(tag as any)} />}
      </For>
    </>
  );
}

export default Head;
