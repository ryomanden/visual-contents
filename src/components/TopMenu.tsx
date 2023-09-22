/** @jsxImportSource @emotion/react */

"use client"

import { css } from "@emotion/react"
import Image from "next/image"
import tw from "twin.macro"

interface Props {
  name: string
  comment: string
  image: string
}

const wrap = css({
  ...tw`
        w-80
        
    `,
})

const imageWrap = css({
  ...tw`
        relative
        w-full
        aspect-video
    `,
})

function TopMenu({ name, comment, image }: Props) {
  return (
    <div css={wrap}>
      <div css={imageWrap}>
        <Image
          css={{ ...tw`absolute object-cover` }}
          src={image}
          alt={name}
          fill
        />
      </div>
      <p>{name}</p>
      <p>{comment}</p>
    </div>
  )
}

export default TopMenu
