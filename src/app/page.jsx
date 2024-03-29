import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
//need to check page.jsx and layout.js
export default function Home() {
  return (
    <div className={styles.container}>
      <Featured></Featured>
      <CategoryList></CategoryList>
      <div className={styles.content}>
        <CardList></CardList>
        <Menu></Menu>
      </div>
    </div>
  );
}
