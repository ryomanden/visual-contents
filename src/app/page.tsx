/** @jsxImportSource @emotion/react */

"use client"

import { css } from "@emotion/react"
import tw from "twin.macro"

import { ButtonOutline } from "@/components"

const wrapStyle = css({
  ...tw`
        flex flex-col
        items-center justify-center
        w-screen h-screen
    `,
})

const titleStyle = css({
  ...tw`
        text-4xl
    `,
})

function App() {
  return (
    <div css={wrapStyle}>
      <div css={tw`prose`}>
        <h1>Visual Contents Design 課題</h1>
        <h2>ケーキ屋さん</h2>
        <ButtonOutline href={"/cake"}>Cake</ButtonOutline>
        <h2>中間課題</h2>
        <ButtonOutline href={"/italian"}>italian</ButtonOutline>
      </div>
    </div>
  )
}

export default App
