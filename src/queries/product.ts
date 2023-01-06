import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

export const queryProductByHandle = groq`
  *[_type == "product" && handle.current == $handle]{
    related,
    title,
    description,
    "imageUrl": image.asset->url,
  }[0]
`;

export interface ProductType {
  related: string[];
  title: string;
  description: string;
  imageUrl: string;
}

export const fetchProductByHandle: (
  handle: string
) => Promise<ProductType> = async (handle: string) =>
  await client.fetch(queryProductByHandle, { handle });
