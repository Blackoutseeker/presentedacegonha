import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Felipe Pereira de Souza Silva" />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/Blackoutseeker/presentedacegonha/main/src/assets/images/Logo.jpg"
          />
          <meta
            property="og:image:secure_url"
            content="https://raw.githubusercontent.com/Blackoutseeker/presentedacegonha/main/src/assets/images/Logo.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="78" />
          <meta property="og:image:height" content="76" />
          <meta property="og:image:alt" content="Presente da Cegonha" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
