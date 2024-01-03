import HomeMain from "@/app/components/organisms/home/Home";
import styles from "./styles/Home.module.css";
import HomeHeader from "@/app/components/organisms/homeHeader/HomeHeader";

export default function Home() {
  return (
    <div className={styles.home}>
      <main className={styles.home__main}>
        <HomeHeader />
        <HomeMain />
      </main>
    </div>
  );
}
