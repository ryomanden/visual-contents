/** @jsxImportSource @emotion/react */

"use client"

import { css } from "@emotion/react"
import Link from "next/link"
import tw from "twin.macro"

const button = css({
  ...tw`
        fixed
        bottom-2 right-2
        btn
        z-10
    `,
})

function MenuButton() {
  return (
    <>
      <Link css={button} href={"/"}>
        HOME
      </Link>
    </>
  )
}

export default MenuButton
