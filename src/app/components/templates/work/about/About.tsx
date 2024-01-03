import React from "react";
import styles from "./About.module.css";
import ilstr from "@/app/static/png/index/workilstr.png";
import LinkButton from "@/app/components/atoms/buttons/linkButton/LinkButton";
import { purpleLink40 } from "../../../../../../public/assets/svg/links/Links";
import Advantage from "./advantage/Advantage";
import handshake from "@/app/static/png/index/handshake.png";

const star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
    >
      <path
        d="M20.6934 9.99287C16.7704 10.3493 14.5165 10.6771 13.1327 11.7605C11.5065 13.0292 11.1213 15.3528 10.6934 20C10.2511 15.1818 9.85171 12.8724 8.06854 11.6322C6.6848 10.6629 4.44514 10.3493 0.693359 10.0071C4.60206 9.65075 6.87025 9.32288 8.23972 8.25374C9.88024 6.97078 10.2654 4.66144 10.6934 0C11.0928 4.29081 11.4494 6.58589 12.7761 7.91162C14.1028 9.23735 16.4138 9.60798 20.6934 9.99287Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

const advantages = [
  {
    title: "удобный личный кабинет",
    description:
      "У нас простой и удобный личный кабинет, упрощающий работу в работу с клиентами.",
    index: "01",
  },
  {
    title: "маленький срок обработки заявки",
    description:
      "У нас вам не придётся очень долго ждать  обработки заявки, как на других сервисах.",
    index: "02",
  },
  {
    title: "мягкие требования к специалистам",
    description:
      "У нас нет суровых требований, из-за которых многие профи работают оффлайн.",
    index: "03",
  },
];

export default function About() {
  const buttonStyles: React.CSSProperties = {
    padding: "8px 9px 7px 20px",
  };

  const buttonBlockStyles: React.CSSProperties = {
    background: "#fff",
    borderRadius: "90px",
    border: "none",
  };

  const illustrationStyles: React.CSSProperties = {
    backgroundImage: `url(${ilstr.src})`,
  };

  return (
    <div className={styles.about}>
      <div className={styles.about__upper}>
        <div className={styles.upper__info}>
          <div className={styles.info__inner}>
            <div className={styles.inner__title}>
              <span className={styles.title__text}>
                Вступайте в нашу дружную
                <span className={styles.text__custom}> команду{star()}</span>
              </span>
            </div>
            <div className={styles.inner__description}>
              <span className={styles.description__text}>
                Вступайте к нам в Сognics и помогайте справится людям со своими
                проблемами проще вместе с нами!
              </span>
            </div>
          </div>
        </div>
        <div style={illustrationStyles} className={styles.upper__illustration}>
          <div className={styles.illustration__button}>
            <LinkButton
              title="Стать психологом"
              image={purpleLink40()}
              innerStyle={buttonStyles}
              blockStyle={buttonBlockStyles}
            />
          </div>
        </div>
      </div>
      <div className={styles.about__advantages}>
        {advantages.map((item, _) => (
          <Advantage key={`advantage-${item.index}`} {...item} />
        ))}
      </div>
      <div className={styles.about__subtext}>
        <span className={styles.subtext__text}>
          Cognics всегда рад
          <span className={styles.text__custom}> специалистам</span>, которые
          хотят <img src={handshake.src} />
          <span className={styles.text__custom}> помогать</span> людям и{" "}
          <span className={styles.text__custom}>любят свою профессию</span> так
          же, как и наш сервис.
        </span>
      </div>
    </div>
  );
}
