import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

export const queryCollectionByHandle = groq`
  *[_type == "collection" && handle.current == $handle]{
    featured,
    title,
    description,
    "imageUrl": image.asset->url,
  }[0]
`;

export interface CollectionType {
  featured: string[];
  title: string;
  description: string;
  imageUrl: string;
}

export const fetchCollectionByHandle: (
  handle: string
) => Promise<CollectionType> = async (handle: string) =>
  await client.fetch(queryCollectionByHandle, { handle });
