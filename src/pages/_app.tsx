import type { AppProps } from "next/app";
import { PreviewAlert } from "@/components/PreviewAlert";
import "@/styles/global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {pageProps.preview && <PreviewAlert />}
      <Component {...pageProps} />
    </>
  );
};

export default App;
