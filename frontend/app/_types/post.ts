import { getPostByCategoryAndId } from '@libs'

type PromiseType<T extends Promise<any>> = T extends Promise<infer P> ? P : never
export type Post = PromiseType<ReturnType<typeof getPostByCategoryAndId>>
