import { MenuButton } from "@/components"
import GlobalStyles from "@/styles/GlobalStyles"

export const metadata = {
  title: "Visual Contents Design 課題",
  description: "",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MenuButton />
        <GlobalStyles />
        {children}
      </body>
    </html>
  )
}
