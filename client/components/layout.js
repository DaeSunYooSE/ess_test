import MainLayout from 'layouts/MainLayout';
import Main from 'Main';
import Head from 'next/head';

export const CustomLayout = props => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2c7be5" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700|Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <title>STND: ESS System</title>
      </Head>
      <div className="main">
        <Main>
          <div className="container-fluid">
            <MainLayout>{props.children}</MainLayout>
          </div>
        </Main>
      </div>
    </>
  );
};
