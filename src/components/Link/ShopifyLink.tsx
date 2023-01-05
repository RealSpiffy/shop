import Link from "next/link";
import { useRouter } from "next/router";
import { TypeName } from "@/types/shopify-buy";

type ShopifyLinkProps = {
  children: React.ReactNode;
  object: ShopifyBuy.Product | ShopifyBuy.Collection;
};

export const ShopifyLink: React.FC<ShopifyLinkProps> = ({
  children,
  object,
}) => {
  const router = useRouter();

  let href;
  switch (object.type.name) {
    case TypeName.Collection:
      href = `/collection/${object.handle}`;
      break;
    case TypeName.Product:
      href = `/product/${object.handle}`;
      break;
    default:
      console.warn("Unsupported object:", object.type.name);
      href = "/";
  }

  const isActive = router.pathname === href;

  return (
    <Link href={href} aria-current={isActive ? "page" : false}>
      {children}
    </Link>
  );
};
