import React from "react";
import styles from "./Reason.module.css";
import reason1 from "@/app/static/png/index/reason1.png";
import reason2 from "@/app/static/png/index/reason2.png";
import reason3 from "@/app/static/png/index/reason3.png";
import reason4 from "@/app/static/png/index/reason4.png";
import Reason from "./reason/Reason";

const star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M21 10.4925C16.8809 10.8667 14.5143 11.211 13.0613 12.3485C11.3538 13.6807 10.9494 16.1205 10.5 21C10.0357 15.9408 9.61626 13.516 7.74394 12.2138C6.29101 11.196 3.93937 10.8667 0 10.5075C4.10414 10.1333 6.48574 9.78902 7.92368 8.66643C9.64622 7.31932 10.0506 4.89451 10.5 0C10.9194 4.50535 11.2939 6.91518 12.6869 8.3072C14.0799 9.69922 16.5064 10.0884 21 10.4925Z"
        fill="#8D8BE5"
      />
    </svg>
  );
};

const reasons = [
  {
    maxWidth: 448,
    gap: 125,
    img: reason1.src,
    title: "Как я выбирал психолога: критерии и поиски",
    text: `Еще будучи студентом 2-го курса психологического факультета (2018 год), я решил посмотреть в живую, как работает психолог в России, и записался на прием, благо тогда уже существовали подобные психологические сервисы.\n
Меня интересовала тема депрессивных расстройств, и выбрав в каталоге "Депрессивное расстройство", я начал выбирать психолога, подходящего под мои потребности. Заранее, посоветовавшись с преподавателем, я составил для себя критерии выбора. Но один критерий не давал мне покоя.`,
  },
  {
    maxWidth: 436,
    gap: 87,
    img: reason2.src,
    title: "Сложности выбора метода психотерапии",
    text: `Я думал, это проще простого, но увидев бесчисленное количество используемых психологами методов, я растерялся. Неясно было, какой метод мне выбрать. Более половины методов, представленных на рынке, для меня, как для молодого студента психологического факультета, были неизвестны.\n
Понадобилось много времени, чтобы ознакомиться и хотя бы немного понять суть работы подобных специалистов. Психологи убеждали меня в том, что их метод правильный и благодаря ему я смогу побороть свои проблемы. Я выявил несколько на тот момент важных для меня проблем. Я хотел понять, являются ли заявления психологов пустыми обещаниями или мне стоит им довериться.`,
  },
  {
    maxWidth: 410,
    gap: 164,
    img: reason3.src,
    title: "Значение доказательной базы в психологии",
    text: `При выборе психолога мы часто акцентируем внимание на его профессиональном опыте и внешности, но совершенно забываем, что психология, как и все науки, должна обладать доказательной базой.\n 
Однако в большинстве методов, используемых психологами, эта доказательная база отсутствует.\n
Спустя много времени напряженных поисков я наткнулся на метод, который в будущем станет для меня основным методом в работе. Он назывался методом когнитивно-поведенческой терапии. `,
  },
  {
    maxWidth: 470,
    gap: 119,
    img: reason4.src,
    title: "Преимущества КПТ: логика и самостоятельность",
    text: `Уже когда я начал свою профессиональную жизнь, я заметил, что пациенты психологов других методов после терапии спустя месяц или два возвращаются к психологу с той же проблемой.\n 
И в тот момент я почувствовал всю прелесть когнитивно-поведенческой терапии. Будучи основанной на логике, она не только помогала моим клиентам решить их проблему в данный конкретный момент, но и учила самостоятельно решать их внутренние противоречия. Им не нужно было возвращаться ко мне, так как они уже знали, как решить свою проблему (возможно, даже не осознавая этого).\n
В этом и заключалась прелесть этого метода - он работает с когнитивами, то есть с мыслями, возникающими автоматически, и учит, как с ними бороться`,
  },
];

export default function Reasons() {
  return (
    <div className={styles.reasons}>
      <div className={styles.reasons__title}>
        <span className={styles.title__text}>
          Почему мы
          <span className={styles.text__custom}> это делаем?{star()}</span>
        </span>
      </div>
      <div className={styles.reasons__list}>
        {reasons.map((item, index) => (
          <Reason key={`reason-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
