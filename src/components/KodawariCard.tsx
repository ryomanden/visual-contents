/** @jsxImportSource @emotion/react */

"use client"

import { css } from "@emotion/react"
import Image from "next/image"
import tw from "twin.macro"

interface Props {
  title: string
  subtitle?: string
  image: string[]
  description?: string
}
const contentWrap = css({
  ...tw`
        w-full h-auto
        flex flex-col
        justify-center items-center
        py-20
        border-b-2 border-gray-100
    `,
})

const textWrap = css({
  ...tw`
        flex
        py-5
        w-full max-w-3xl flex-col
        justify-center
        items-center
    `,
})

function KodawariCard({ title, subtitle, image, description }: Props) {
  return (
    <>
      <div css={contentWrap}>
        <h3 tw={"badge badge-neutral badge-lg"}>{title}</h3>
        <h2 tw={"block pt-2 text-3xl font-bold"}>{subtitle}</h2>
        <p css={textWrap}>{description}</p>
        <div
          tw={"w-full flex-wrap h-auto grid grid-flow-col gap-2 max-w-4xl h-96"}
        >
          {image.map(img => (
            // eslint-disable-next-line react/jsx-key
            <div tw={"relative w-full h-auto aspect-square"}>
              <Image
                tw={"object-cover rounded-lg shadow"}
                src={img}
                alt="image"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default KodawariCard
