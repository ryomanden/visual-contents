/** @jsxImportSource @emotion/react */
"use client"

import { css } from "@emotion/react"
import tw from "twin.macro"

const headerStyle = css({
  ...tw`
        w-screen h-20
        fixed
        flex flex-row
        justify-center items-center
        bg-white
    `,
})

const titleStyle = css({
  ...tw`
        block
        h-fit
        text-xl font-bold
    `,
})

const coverStyle = css({
  ...tw`
        w-screen h-screen
        
    `,
})

function App() {
  return (
    <div>
      <div css={headerStyle}>
        <h1 css={titleStyle}>イタリアン　CIT</h1>
      </div>
      <div css={coverStyle}></div>
    </div>
  )
}

export default App
