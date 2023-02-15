import {
  CollectionLink,
  collectionLinkPropsAdapter,
} from "@/components/CollectionLink";
import { LayoutGrid } from "@/components/LayoutGrid";
import { CollectionType } from "@/lib/shopify";
import styles from "./CollectionLinkGrid.module.scss";

interface CollectionsProps {
  collections: CollectionType[];
}

export const CollectionLinkGrid: React.FC<CollectionsProps> = ({
  collections,
}) => {
  return (
    <LayoutGrid>
      <ul className={styles.gridContainer}>
        {collections.map((collection) => {
          const linkProps = collectionLinkPropsAdapter(collection);
          return (
            <li key={collection.handle}>
              <CollectionLink {...linkProps} />
            </li>
          );
        })}
      </ul>
    </LayoutGrid>
  );
};
