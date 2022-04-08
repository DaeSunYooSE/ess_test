import { AppProps } from "next/app";
import { wrapper } from "../store";
import "bootstrap/dist/css/bootstrap.css";
import Main from "components/Main";
import { useEffect } from "react";
import { CustomLayout } from "components/layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {}, []);
  return (
    <Main>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </Main>
  );
};

export default wrapper.withRedux(MyApp);
