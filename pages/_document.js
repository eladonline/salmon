import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import { ServerStyleSheet } from 'styled-components';
import Helmet from 'react-helmet';

export default class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args);
    const styles = flush();
    return { ...documentProps, helmet: Helmet.renderStatic(), styles };
  }
  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent();
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent());
  }

  get helmetJsx() {
    return (
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Isomorphic"
        meta={[{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]}
      />
    );
  }
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
          <style>{'body { margin: 0 }'}</style>
          <link rel="apple-touch-icon" sizes="57x57" href="/static/icons/favico/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/icons/favico/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/icons/favico/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/icons/favico/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/icons/favico/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/icons/favico/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/icons/favico/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/favico/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/favico/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/favico/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favico/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/favico/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favico/favicon-16x16.png" />
          <link rel="manifest" href="/static/icons/favico/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
            integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
          />

          {/* <link rel="stylesheet" href="/static/css/ionicons.min.css" /> */}
          <link rel="stylesheet" href="/static/css/global.css" />
          <link rel="stylesheet" href="/static/css/fonts.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />

          {/* <link
            rel="stylesheet"
            href="https://unpkg.com/react-instantsearch-theme-algolia@4.0.0/style.min.css"
          /> */}
          {/* <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
            integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
            crossOrigin=""
            async
          /> */}
          {styleTags}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}
