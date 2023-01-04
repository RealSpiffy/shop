import { groq } from "next-sanity";

export const query = groq`*[_type == "article"]`;
