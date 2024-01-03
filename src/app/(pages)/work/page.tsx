import Header from "@/app/components/organisms/header/Header";
import styles from "./styles/Work.module.css";
import Footer from "@/app/components/organisms/footer/Footer";
import About from "@/app/components/templates/work/about/About";
import Advantages from "@/app/components/templates/work/advantages/Advantages";
import RequirementsHeading from "@/app/components/templates/work/requirements/RequirementsHeading";
import Body from "@/app/components/templates/work/requirements/body/Body";
import Faq from "@/app/components/templates/work/faq/Faq";
import FillForm from "@/app/components/templates/work/fillForm/FillForm";

export default function Work() {
  return (
    <div className={styles.work}>
      <main className={styles.work__main}>
        <Header />
        <About />
        <Advantages />
        <RequirementsHeading />
        <Body />
        <Faq />
        <FillForm />
        <Footer />
      </main>
    </div>
  );
}
