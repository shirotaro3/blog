import clsx from 'clsx'
import { profile } from './data/profile'

export function Introduction() {
  return (
    <div className={clsx('flex flex-col lg:h-full box-white text-sm')}>
      <div className={clsx('font-bold text-lg p-2 border-b border-primary-main')}>
        {profile.name}
      </div>
      <ul className={clsx('list-disc list-inside py-5 px-2')}>
        {profile.characteristics.map((characteristic) => (
          <li key={characteristic}>{characteristic}</li>
        ))}
      </ul>
      <p className="px-4 pb-2">{profile.introduction}</p>
    </div>
  )
}
