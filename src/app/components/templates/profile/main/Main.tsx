import React from "react";
import styles from "./Main.module.css";
import About from "@/app/components/organisms/profile/about/About";
import profileAvatar from "@/app/static/png/index/profileAvatara.png";
import Qualifications from "@/app/components/organisms/profile/qualifications/Qualifications";
import Skills from "@/app/components/organisms/profile/skills/Skills";
import Info from "@/app/components/organisms/profile/info/Info";
import Enroll from "@/app/components/organisms/profile/enroll/Enroll";
import ReviewsHeading from "@/app/components/organisms/reviewsHeading/ReviewsHeading";
import Reviews from "@/app/components/organisms/reviews/Reviews";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__about}>
        <div className={styles.about__info}>
          <About
            avatar={profileAvatar.src}
            name="Чудинов Георгий Валерьевич"
            description="Привет! Я специалист по работе с детьми и подростками. Мой опыт включает работу в школьной психологии и семейной терапии. Я помогаю хорошо! Я специалист по работе с детьми и подростками. Мой опыт включает работу в школьной психологии и семейной терапии. 
Я помогаю всем..."
            rating={4}
            likes={30}
            experience={3}
          />
          <Skills />
        </div>
        <Qualifications />
      </div>
      <div className={styles.main__other}>
        <Info />
        <Enroll />
      </div>
      <ReviewsHeading />
      <Reviews />
    </div>
  );
}
