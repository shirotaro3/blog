import clsx from 'clsx'

export function Introduction() {
  return (
    <div className={clsx('flex flex-col lg:h-full box-white text-sm')}>
      <div className={clsx('font-bold text-lg p-2 border-b border-grayscale-400')}>YSK</div>
      <ul className={clsx('list-disc list-inside py-5 px-2')}>
        <li>199X年生まれ</li>
        <li>首都圏在住</li>
        <li>Webエンジニア風</li>
        <li>趣味：旅行</li>
        <li>動物好き</li>
      </ul>
      <p className="px-4 pb-2">趣味の旅行や技術に関する記事を書いています。</p>
    </div>
  )
}
