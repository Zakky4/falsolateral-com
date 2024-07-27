import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className="{style.top}">
      <div>
        <h1 className={styles.title}>プログミング x 業務改善</h1>
        <p className={styles.description}>
          私たちはヘルプデスクを中心とした業務を効率化する会社です。
        </p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
        priority
        sizes="100vw"
      />
    </section>
  );
}
