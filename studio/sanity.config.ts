import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Real Spiffy Template",
  projectId: import.meta.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_API_DATASET,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
