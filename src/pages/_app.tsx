import type { AppProps } from "next/app";
import { GlobalLayout } from "@/components/GlobalLayout";
import { getLayoutMenus } from "@/lib/shopify";
import "@/styles/global.scss";

type InitialProps = {
  menus: Awaited<ReturnType<typeof getLayoutMenus>>;
};

type Props = AppProps & { initialProps: InitialProps };

const App = ({ Component, pageProps, initialProps }: Props) => {
  return (
    <GlobalLayout menus={initialProps.menus}>
      <Component {...pageProps} />
    </GlobalLayout>
  );
};

App.getInitialProps = async () => {
  const menus = await getLayoutMenus();
  return { initialProps: { menus } };
};

export default App;
