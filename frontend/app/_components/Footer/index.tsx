export function Footer() {
  return (
    <footer className="bg-yellow-700 bg-opacity-20">
      <div className="h-[var(--footer)] base-container text-sm flex flex-col gap-2 justify-center items-center">
        <div className="flex w-full text-xs">
          <ul className="w-1/2 text-center">
            <li className="font-bold">サイトマップ</li>
            <li></li>
          </ul>
          <ul className="w-1/2 text-center">
            <li className="font-bold">外部リンク</li>
          </ul>
        </div>
        <div>©︎ 2023 YSK</div>
      </div>
    </footer>
  )
}
