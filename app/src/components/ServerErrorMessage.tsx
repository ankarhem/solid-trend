import { mergeProps, Show } from 'solid-js';
import { A, ServerError } from 'solid-start';
import { HttpStatusCode } from 'solid-start/server';

export interface ServerErrorMessageProps {
  status?: number;
  message?: string;
  stack?: string;
  reset?: () => void;
}

const defaultProps = {
  status: 500,
  message: 'Internal Server Error',
} satisfies ServerErrorMessageProps;

export default function ServerErrorMessage(_props: ServerErrorMessageProps) {
  const props = mergeProps(defaultProps, _props);
  return (
    <>
      <HttpStatusCode code={props.status} />
      <div class="grid gap-4 mx-auto text-center max-w-sm sm:max-w-md">
        <div class="flex flex-col gap-2 justify-center items-center text-4xl mt-16 mb-8">
          <span class="font-text text-6xl">{props.status}</span>
          <span class="divider divider-horizontal"></span>
          <h1 class="font-text whitespace-nowrap">{props.message}</h1>
        </div>

        <A
          href="/"
          class="w-full py-2 rounded bg-primary hover:bg-primary-focus text-primary-content"
          // onClick={() => props.reset()}
        >
          Startpage
        </A>

        <Show when={props.status === 500 && props.stack}>
          <details class="max-w-md py-4 text-base-content" open={true}>
            <summary class="py-4">Trace</summary>
            <pre class="text-left whitespace-pre-wrap break-words">
              {props.stack}
            </pre>
          </details>
        </Show>
      </div>
    </>
  );
}

export const badRequest = (message: string = 'Bad Request', e?: Error) => {
  throw new ServerError(message, {
    status: 400,
    stack: e?.stack,
  });
};

export const unauthorized = (
  message: string = "You're not authorized to see this",
  e?: Error
) => {
  throw new ServerError(message, {
    status: 401,
    stack: e?.stack,
  });
};

export const notFound = (message: string = 'Page Not Found', e?: Error) => {
  throw new ServerError(message, {
    status: 404,
    stack: e?.stack,
  });
};

export const imATeaPot = (message: string = '🫖', e?: Error) => {
  throw new ServerError(message, {
    status: 418,
    stack: e?.stack,
  });
};

export const serverError = (
  message: string = 'Internal Server Error',
  e?: Error
) => {
  throw new ServerError(message, {
    status: 500,
    stack: e?.stack,
  });
};

export const serviceUnavailable = (
  message: string = 'Looks like our API is down',
  e?: Error
) => {
  throw new ServerError(message, {
    status: 503,
    stack: e?.stack,
  });
};
