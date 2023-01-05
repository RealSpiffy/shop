import { ShopifyLink } from "@/components/Link";

type PageProps = {
  collections: ShopifyBuy.Collection[];
};

export const Homepage = ({ collections }: PageProps) => {
  return (
    <>
      <h1>Real Spiffy Shop</h1>
      <section>
        <h2>Collections</h2>
        <ul>
          {collections.map((collection) => (
            <li key={collection.handle}>
              <ShopifyLink object={collection}>{collection.title}</ShopifyLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
