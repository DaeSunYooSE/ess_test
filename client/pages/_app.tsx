import { CustomLayout } from "components/layout";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { wrapper } from "../store";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.min.css";
import "helpers/initFA";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) return <div></div>;
  return (
    <CustomLayout>
      <Component {...pageProps} children={<CustomLayout />} />
    </CustomLayout>
  );
};

export default wrapper.withRedux(MyApp);
