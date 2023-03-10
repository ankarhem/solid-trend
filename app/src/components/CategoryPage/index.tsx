import { For, Show, splitProps, Suspense } from 'solid-js';
import { Get } from 'type-fest';
import Filters from '~/components/CategoryPage/Filters';
import { PageObject } from '~/routes/(layout)/[...route]';

interface CategoryPageProps {
  object: PageObject<'Category'>;
}

interface ProductCardProps {
  product: NonNullable<Get<PageObject<'Category'>, 'products.result[0]'>>;
}

function ProductCart(props: ProductCardProps) {
  const images = () => props.product.images;

  const formatter = new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
  });

  return (
    <a href="#" class="group">
      <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 bg-white">
        <img
          src={images()?.[0]?.url}
          alt={images()?.[0]?.alt || props.product.name}
          class="h-48 w-full object-contain object-center group-hover:opacity-75"
        />
      </div>
      <h3 class="mt-4 text-sm text-gray-700">{props.product.name}</h3>
      <p class="mt-1 text-lg font-medium text-gray-900">
        {formatter.format(props.product.price?.incVat)}
      </p>
    </a>
  );
}

function CategoryPage(props: CategoryPageProps) {
  return (
    <div class="mx-4 xl:max-w-7xl xl:mx-auto flex h-full gap-8">
      <div class="grid w-80 gap-2 p-1 bg-white rounded self-start">
        <Show when={props.object.products?.filters} keyed>
          {(filters) => <Filters filters={filters} />}
        </Show>
      </div>
      <div class="flex-1">
        <div class="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <For each={props.object.products?.result}>
              {(product) => {
                return (
                  <Show when={product} keyed>
                    {(p) => <ProductCart product={p} />}
                  </Show>
                );
              }}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
