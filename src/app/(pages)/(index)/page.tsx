import Header from "@/app/components/organisms/header/Header";
import styles from "./styles/Index.module.css";
import About from "@/app/components/templates/index/about/About";
import WhyUs from "@/app/components/templates/index/whyUs/WhyUs";
import Specialists from "@/app/components/templates/index/specialists/Specialists";
import HelpHeading from "@/app/components/templates/index/helpHeading/Help";
import HelpImages from "@/app/components/templates/index/helpImages/HelpImages";
import AdditionalInfo from "@/app/components/molecules/index/additionalInfo/AdditionalInfo";
import ReviewsHeading from "@/app/components/organisms/reviewsHeading/ReviewsHeading";
import Reviews from "@/app/components/organisms/reviews/Reviews";
import Footer from "@/app/components/organisms/footer/Footer";
import StartNow from "@/app/components/templates/index/startNow/StartNow";

export default function Index() {
  return (
    <div className={styles.index}>
      <main className={styles.index__main}>
        <div className={styles.main__items}>
          <Header />
          <About />
          <WhyUs />
          <Specialists />
          <HelpHeading />
          <HelpImages />
          <AdditionalInfo />
          <ReviewsHeading />
        </div>
        <Reviews />
        <div className={styles.main__items}>
          <StartNow />
          <Footer />
        </div>
      </main>
    </div>
  );
}
