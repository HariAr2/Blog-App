import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="\p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Loren ipsm dolor sit amet consectetur adipiscing elit.</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sint eaque
          dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam
          totam libero ipsa aliquam obcaecati, in facere molestiae architecto
          asperiores?...
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default card;
