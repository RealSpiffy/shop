import Link from "next/link";
import { useRouter } from "next/router";

type ShopifyLinkProps = {
  children: React.ReactNode;
  type: "collection" | "product";
  handle: string;
};

export const ShopifyLink: React.FC<ShopifyLinkProps> = ({
  children,
  type,
  handle,
}) => {
  const router = useRouter();

  const href = `/${type}/${handle}`;

  const isActive = router.pathname === href;

  return (
    <Link href={href} aria-current={isActive ? "page" : false}>
      {children}
    </Link>
  );
};
