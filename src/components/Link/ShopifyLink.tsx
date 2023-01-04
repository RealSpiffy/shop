import Link from "next/link";
import { useRouter } from "next/router";
import { TypeName } from "@/types/shopify-buy";

type ShopifyLinkProps = {
  children: React.ReactNode;
  item: ShopifyBuy.Product | ShopifyBuy.Collection;
};

export const ShopifyLink: React.FC<ShopifyLinkProps> = ({ children, item }) => {
  const router = useRouter();

  let href;
  switch (item.type.name) {
    case TypeName.Collection:
      href = `/collection/${item.handle}`;
      break;
    case TypeName.Product:
      href = `/product/${item.handle}`;
      break;
    default:
      href = "/";
  }

  const isActive = router.pathname === href;

  return (
    <Link href={href} aria-current={isActive ? "page" : false}>
      {children}
    </Link>
  );
};
