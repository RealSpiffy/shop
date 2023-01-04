import createImageUrlBuilder from "@sanity/image-url";
import { config } from "./sanity.client";

export const imageBuilder = (source) =>
  createImageUrlBuilder(config).image(source);
