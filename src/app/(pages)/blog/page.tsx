import Header from "@/app/components/organisms/header/Header";
import styles from "./styles/Blog.module.css";
import Main from "@/app/components/templates/blog/main/Main";
import Description from "@/app/components/templates/blog/description/Description";

export default function Blog() {
  return (
    <div className={styles.blog}>
      <main className={styles.blog__main}>
        <Header />
        <Main />
        <Description />
      </main>
    </div>
  );
}
