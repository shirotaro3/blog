import './globals.css'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'
import { SITE_TITLE, SITE_DESCRIPTION } from './_consts/config'
import Head from 'next/head'

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <body className="text-gray-600">
        <div id="1" />
        <Header />
        <div
          className={`flex-grow bg-gray-200 flex flex-col bg-silhouette md:bg-left-top-80 bg-repeat-x md:pt-[var(--header)] md:bg-fixed`}
        >
          <main className="base-container pt-20 pb-8 min-h-main overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
