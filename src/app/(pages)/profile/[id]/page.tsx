import ProfileHeader from "@/app/components/organisms/profileHeader/ProfileHeader";
import styles from "./styles/Profile.module.css";
import Footer from "@/app/components/organisms/footer/Footer";
import Main from "@/app/components/templates/profile/main/Main";

export default function Catalog() {
  return (
    <div className={styles.catalog}>
      <main className={styles.catalog__main}>
        <ProfileHeader />
        <Main />
        <Footer />
      </main>
    </div>
  );
}
