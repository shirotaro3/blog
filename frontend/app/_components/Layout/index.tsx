import { Header } from '../Header'
import { Footer } from '../Footer'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={`flex-grow bg-gray-200 flex flex-col bg-silhouette bg-repeat-x`}>
        <main className="base-container pt-20 pb-8 min-h-main overflow-hidden">{children}</main>
        <Footer />
      </div>
    </>
  )
}
