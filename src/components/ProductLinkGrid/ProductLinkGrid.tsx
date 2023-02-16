/* eslint-disable @next/next/no-img-element */
import { ProductLink, productLinkPropsAdapter } from "@/components/ProductLink";
import { ProductType } from "@/lib/shopify";
import styles from "./styles.module.scss";

export interface ProductLinkGridProps {
  products: ProductType[];
}

export const ProductLinkGrid: React.FC<ProductLinkGridProps> = ({
  products,
}) => {
  return (
    <div>
      <ul className={styles.gridContainer}>
        {products.map((product) => {
          const productLinkProps = productLinkPropsAdapter(product);
          return (
            <li key={productLinkProps.label}>
              <ProductLink {...productLinkProps} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
