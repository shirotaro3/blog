import './globals.css'
import { SITE_TITLE, SITE_DESCRIPTION } from '@consts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
  // appdirでページ遷移時のスクロール挙動が謎なので一旦別コンポーネントで対応
  // return (
  //   <html lang="ja">
  //     <body className="text-gray-600">
  //       <div id="1" />
  //       <Header />
  //       <div className={`flex-grow bg-gray-200 flex flex-col bg-silhouette bg-repeat-x`}>
  //         <main className="base-container pt-20 pb-8 min-h-main overflow-hidden">{children}</main>
  //         <Footer />
  //       </div>
  //     </body>
  //   </html>
  // )
}
