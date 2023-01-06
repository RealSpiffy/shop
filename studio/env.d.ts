/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_PROJECT_ID: string;
  readonly SANITY_STUDIO_DATASET: string;
  readonly SANITY_STUDIO_SHOPIFY_STORE_FRONT_ACCESS_TOKEN: string;
  readonly SANITY_STUDIO_SHOPIFY_STORE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
