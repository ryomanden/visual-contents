/** @jsxImportSource @emotion/react */
"use client"

import { css } from "@emotion/react"
import Image from "next/image"
import tw from "twin.macro"

import WrappedImage from "@/components/WrappedImage"

const headerStyle = css({
  ...tw`
        w-screen h-20
        fixed
        flex flex-row
        justify-center items-center
        bg-white
        z-10
    `,
})

const titleStyle = css({
  ...tw`
        block
        h-fit
        text-xl font-bold
    `,
})

const topImage = css({
  ...tw`
        relative
        w-screen
        pt-20
    `,
})

const topImageWrap = css({
  ...tw`
        relative
        w-full h-full
        aspect-video
        flex flex-row
        justify-start items-center
    `,
})

const topImageText = css({
  ...tw`
        pl-10
        text-white
        font-bold text-lg
        z-10
    `,
})

const contentWrap = css({
  ...tw`
        w-full
        p-5
        border
    `,
})

function App() {
  return (
    <div>
      <div css={headerStyle}>
        <h1 css={titleStyle}>イタリアン　CIT</h1>
      </div>
      <div css={topImage}>
        <div css={topImageWrap}>
          <Image
            css={{ ...tw`object-cover` }}
            src="/italian/こだわり１.jpg"
            quality={100}
            alt="image"
            fill
          />
          <p css={topImageText}>
            幸せを呼ぶ…ワインと国産牛肉とチーズの美味しいお店です。
          </p>
        </div>
      </div>
      <div css={contentWrap}>
        <h2 css={tw`text-2xl font-bold`}>こだわり１</h2>
        <WrappedImage src="/italian/こだわり１.jpg" alt="こだわり１" />
      </div>
    </div>
  )
}

export default App
