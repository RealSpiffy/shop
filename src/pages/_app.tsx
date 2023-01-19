import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import { PreviewAlert } from "@/components/PreviewAlert";
import "@/styles/global.scss";

// TODO: move
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {pageProps.preview && <PreviewAlert />}
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
