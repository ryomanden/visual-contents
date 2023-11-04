/** @jsxImportSource @emotion/react */

"use client"

import { css } from "@emotion/react"
import Image from "next/image"
import tw from "twin.macro"

interface Props {
  src: string
  alt: string
  quality?: number
}

const style = css({
  ...tw`
        relative
        w-fit h-fit
    `,
})

function WrappedImage({ src, alt, quality = 100 }: Props) {
  return (
    <>
      <Image css={style} src={src} alt={alt} quality={quality} fill />
    </>
  )
}

export default WrappedImage
