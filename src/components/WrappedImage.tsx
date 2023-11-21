/** @jsxImportSource @emotion/react */

"use client"

import { css } from "@emotion/react"
import Image from "next/image"
import tw from "twin.macro"

interface Props {
  src: string
  alt: string
  quality?: number
  isCover?: boolean
}

const containStyle = css({
  ...tw`
    relative
    w-fit
    -z-1
    object-contain
  `,
})

const coverStyle = css({
  ...tw`
      relative
      w-full
      -z-1
      object-cover
    `,
})

function WrappedImage({ src, alt, quality = 100, isCover = false }: Props) {
  return (
    <>
      <Image
        css={isCover ? coverStyle : containStyle}
        src={src}
        alt={alt}
        quality={quality}
        fill
      />
    </>
  )
}

export default WrappedImage
