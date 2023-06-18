import Head from "next/head"
import Image from "next/image"
import styles from "./home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | scaleIT</title>
      </Head>

      <main className={styles.contentContainer}>
        <Image
          src="/images/logo.jpg"
          alt="scaleit logo"
          width={800}
          height={380}
        />
      </main>
    </>
  );
}
