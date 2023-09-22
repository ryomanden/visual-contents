/** @jsxImportSource @emotion/react */

"use client"

import { css } from "@emotion/react"
import Image from "next/image"
import tw from "twin.macro"

import { TopMenu } from "@/components"

const cakeMenu = [
  {
    name: "ショートケーキ",
    comment:
      "イチゴがのった一番人気のスポンジケーキです。大人から子供まで、年中愛されるケーキです。",
    image: "/cake/cake01.jpg",
  },
  {
    name: "モンブラン",
    comment: "栗をふんだんに使ったケーキです。様々な形状があります。",
    image: "/cake/cake02.jpg",
  },
  {
    name: "ザッハトルテ",
    comment: "こってりとしたチョコレートの濃厚な味わい",
    image: "/cake/cake03.jpg",
  },
  {
    name: "シュークリーム",
    comment: "サクサク生地と濃厚クリームは相性抜群",
    image: "/cake/cake04.jpg",
  },
]

const wrap = css({
  ...tw`
        relative
        w-screen h-screen
        p-2
    `,
})

const topImageWrap = css({
  ...tw`
        relative
        aspect-video
        w-full
        h-80
    `,
})

const menuWrap = css({
  ...tw`
        flex flex-wrap
    `,
})

function App() {
  return (
    <div css={wrap}>
      <div css={topImageWrap}>
        <Image
          css={{ ...tw`object-cover` }}
          src="/cake/shop.jpg"
          quality={100}
          alt="top image"
          fill
        />
      </div>
      <div css={menuWrap}>
        {cakeMenu?.map((cake, index) => (
          <TopMenu
            key={index}
            name={cake.name}
            comment={cake.comment}
            image={cake.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App
