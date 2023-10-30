/** @jsxImportSource @emotion/react */

"use client"

import Link from "next/link"
import tw from "twin.macro"

interface Props {
  href: string
  children: React.ReactNode
}

function ButtonOutline({ href, children }: Props) {
  return (
    <>
      <Link css={tw`btn btn-outline`} href={href}>
        {children}
      </Link>
    </>
  )
}

export default ButtonOutline
