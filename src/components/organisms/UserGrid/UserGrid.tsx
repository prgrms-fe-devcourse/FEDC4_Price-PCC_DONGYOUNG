'use client'

import CardUserItem from '@/components/organisms/CardUserItem'
import { CardUserPropsType } from '@/components/organisms/CardUserItem/CardUserItem'
import Assets from '@/config/assets'
import { UserSummary } from '@/types/user'
import './index.scss'

type PropsType = {
  data: UserSummary[]
}
export default function CardGridTemplate({ data }: PropsType) {
  return (
    <div className="card-grid-container">
      {data?.map(
        ({ _id, image, fullName, followers, following }: CardUserPropsType) => (
          <CardUserItem
            key={_id}
            _id={_id}
            image={image || Assets.PCCImage}
            fullName={fullName}
            followers={followers}
            following={following}
          />
        ),
      )}
    </div>
  )
}
