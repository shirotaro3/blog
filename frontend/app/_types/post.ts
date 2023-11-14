export type Post = {
  id: string
  title: string
  description: string
  category: string
  cover: {
    url: string
    width: number
    height: number
  }
  date: string
  lastUpdated: string
  useToc: boolean
  content: React.ReactNode
  toc: React.ReactNode
}
