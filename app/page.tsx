import Image from "next/image";

import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";
import { News } from "@/app/_libs/microcms";
import NewsList from "./_components/NewsList";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "渋谷のオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

export default function Home() {
  // 件数を2件に絞り込むように修正
  const sliceData = data.contents.slice(0, 2);
  // JavaScriptの定数や式などを書くことができる
  const name = "世界";

  // HTMLのようなマークアップを書くことができる
  // JavaScriptを書いたり、参照する際には{}で囲む
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          src="/img-mv.jpg"
          alt=""
          className={styles.bgimg}
          width={4000}
          height={1200}
        />
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
