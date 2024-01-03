import Header from "@/app/components/organisms/header/Header";
import styles from "./styles/About.module.css";
import Footer from "@/app/components/organisms/footer/Footer";
import Info from "@/app/components/organisms/about/info/Info";
import Illustration from "@/app/components/organisms/about/illustration/Illustration";
import Advantages from "@/app/components/organisms/about/advantages/Advantages";
import Subtext from "@/app/components/organisms/about/subtext/Subtext";
import Reasons from "@/app/components/organisms/about/reasons/Reasons";
import WhyKpt from "@/app/components/organisms/about/whyKpt/WhyKpt";
import Quote from "@/app/components/organisms/about/quote/Quote";

export default function About() {
  return (
    <div className={styles.about}>
      <main className={styles.about__main}>
        <Header />
        <div className={styles.main__item}>
          <Info />
          <Illustration />
        </div>
        <Advantages />
        <Subtext />
        <Reasons />
        <WhyKpt />
        <Quote />
        <Footer />
      </main>
    </div>
  );
}
