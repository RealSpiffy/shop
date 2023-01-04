import type { GetStaticProps } from "next";
import { PreviewSuspense } from "next-sanity/preview";
import { lazily } from "react-lazily";
import { AllDocuments } from "@/components/SanityPreviewDemo";
import { client } from "@/lib/sanity.client";
import { query } from "@/queries/all-articles";

const { PreviewAllDocuments } = lazily(
  () => import("@/components/SanityPreviewDemo")
);

type PageProps = {
  preview: boolean;
  data: any[];
};

export default function Index({ preview, data }: PageProps) {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <>
          <h1>Real Spiffy Template</h1>
          <h2>Preview Documents</h2>
          <PreviewAllDocuments />
        </>
      </PreviewSuspense>
    );
  }

  return (
    <>
      <h1>Real Spiffy Template</h1>
      <h2>Documents</h2>
      <AllDocuments data={data} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data } };
};
