import Document, { Html, Head, Main, NextScript } from "next/document";

/*Tudo que estiver em _documents.tsx e em _app.tsx é global para toda a aplicação*/
/*O que é posto em _documents.tsx, tudo é carregado apenas uma vez - coloca tudo que é estático*/
/*O que é posto em _app.tsx, é reaproveitado, mas recalculado*/

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main /> {/*Aqui será mostrada a aplicação */}
          <NextScript />
        </body>
      </Html>
    );
  }
}
