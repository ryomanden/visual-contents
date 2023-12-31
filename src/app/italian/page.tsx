/** @jsxImportSource @emotion/react */
"use client"

import { css } from "@emotion/react"
import Image from "next/image"
import tw from "twin.macro"

import { KodawariCard } from "@/components"

const headerStyle = css({
  ...tw`
        w-screen h-20
        fixed
        flex flex-row
        justify-center items-center
        bg-white
        shadow
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
        w-full
        pt-20
    `,
  "&::After": {
    content: "''",
    background: "linear-gradient(90deg, rgba(0,0,0,0.5), transparent)",
    ...tw`
      absolute
      top-0 left-0
      w-full h-full
    `,
  },
})

const topImageWrap = css({
  ...tw`
        relative
        w-full h-96
        max-h-96
        // aspect-video
        flex flex-row
        justify-start items-center
    `,
})

const topImageText = css({
  ...tw`
        pl-10
        text-white
        font-bold text-4xl
        z-10
    `,
})

const cardContent = [
  {
    title: "こだわり１",
    subtitle: "日替わりメニュー",
    image: [
      "/italian/kodawari1.jpg",
      "/italian/kodawari1-2.jpg",
      "/italian/kodawari1-pasta.jpg",
    ],
    description:
      "豊富な日替わりメニュー！！旬の美味しいお野菜、魚、お肉で美味しい料理を提供しております。毎日変わるおすすめメニューも大人気です。ワインと一緒にお楽しみ下さい。",
  },
  {
    title: "こだわり２",
    subtitle: "気軽に立ち寄れる",
    image: ["/italian/kodawari2.jpg", "/italian/kodawari2campaign.jpg"],
    description:
      "気軽に立ち寄れるワイン酒場。ワインに合わせたリーズナブルで美味しいアラカルトメニューも豊富です！！オーナーが美味しいと思うワインを取り揃えてます。お気軽にふらっとお立ち寄り下さいね",
  },
  {
    title: "こだわり３",
    subtitle: "パーティーコース",
    image: ["/italian/kodawari3.jpg"],
    description:
      "美味しいパーティーコース。お得なコースメニューは2980円から3種類ございます。飲み放題付きコースも人気です。女子会、お仲間とのご宴会におすすめです。",
  },
  {
    title: "こだわり４",
    subtitle: "グラスワイン",
    image: ["/italian/kodawari2or4.jpg"],
    description:
      "リーズナブルな日替わりグラスワイン。コスパ最高の美味しいワインを取り揃えております。日替わりグラスワインは580円〜美味しいワインを気軽にお楽しみください。ボトルワインも各種ご用意しております。",
  },
  {
    title: "こだわり５",
    subtitle: "チーズ",
    image: [
      "/italian/kodawari5(2).jpg",
      "/italian/kodawari5.jpg",
      "/italian/kodawari5cheese.jpg",
    ],
    description:
      "絶品！！CHEESE。ワインとチーズをお楽しみください。オーナーシェフが厳選した絶品チーズを使ったメニューも人気です。",
  },
]

function App() {
  return (
    <div tw={"flex flex-col items-center"}>
      <header css={headerStyle}>
        <img tw={"w-40"} src="/italian/Logo_italianCIT.svg" />
      </header>
      <div tw={"hero min-h-screen"}>
        <div tw={"h-full -z-1"}>
          <Image
            tw={"object-cover"}
            src="/italian/exterior.jpg"
            quality={100}
            alt="image"
            fill
          />
        </div>
        <div tw={"hero-overlay bg-opacity-60"} />
        <div tw={"hero-content text-center text-neutral-content"}>
          <div tw={"max-w-md"}>
            <h1 tw={"mb-5 text-5xl font-bold"}>Italian CIT</h1>
            <p tw={"mb-5"}>
              幸せを呼ぶ...ワインと国産牛肉とチーズの美味しいお店です。
            </p>
          </div>
        </div>
      </div>
      <div tw={"w-full max-w-7xl px-10"}>
        {cardContent.map(content => (
          // eslint-disable-next-line react/jsx-key
          <KodawariCard
            title={content.title}
            subtitle={content.subtitle}
            image={content.image}
            description={content.description}
          />
        ))}
        <div tw={"my-20"}>
          <h2 tw={"text-3xl w-full mb-5 font-bold text-center"}>
            コスパ最高のコースメニューも人気
          </h2>
          <div tw={"stats shadow w-full mb-5"}>
            <div tw={"stat place-items-center"}>
              <div tw={"stat-title"}>カジュアルコース</div>
              <div tw={"stat-value"}>2980円</div>
              <div tw={"stat-desc"}>リーズナブルながら満足度大。</div>
            </div>
            <div tw={"stat place-items-center"}>
              <div tw={"stat-title"}>スタンダードコース</div>
              <div tw={"stat-value"}>3980円</div>
              <div tw={"stat-desc"}>充実の内容でリーズナブル。</div>
            </div>
            <div tw={"stat place-items-center"}>
              <div tw={"stat-title"}>プレミアムコース</div>
              <div tw={"stat-value"}>5980円</div>
              <div tw={"stat-desc"}>特別なひとときを贅沢に。</div>
            </div>
          </div>
        </div>
      </div>
      <footer tw={"footer p-10 bg-neutral text-neutral-content"}>
        <aside tw={"flex flex-row h-max"}>
          <img tw={"w-44 h-auto"} src="/italian/Logo_italianCIT_white.svg" />
        </aside>
        <nav>
          <header tw={"footer-title"}>Address</header>
          <p>〒999-999</p>
          <p>奈良氏之市都田沼１２３</p>
        </nav>
        <nav>
          <header tw={"footer-title"}>Tel</header>
          <p>000-1234-5678</p>
        </nav>
      </footer>
    </div>
  )
}

export default App
