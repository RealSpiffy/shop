import {
  CollectionLink,
  collectionLinkPropsAdapter,
} from "@/components/CollectionLink";
import styles from "./styles.module.scss";

export const CollectionLinkGrid = ({ collections }) => {
  return (
    <ul className={styles.gridContainer}>
      {collections.map((collection) => {
        const data = collectionLinkPropsAdapter(collection);
        return (
          <li key={collection.handle} className={styles.gridItem}>
            <CollectionLink {...data} />
          </li>
        );
      })}
    </ul>
  );
};
