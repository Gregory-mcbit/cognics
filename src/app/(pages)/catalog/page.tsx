import Header from "@/app/components/organisms/header/Header";
import styles from "./styles/Catalog.module.css";
import Footer from "@/app/components/organisms/footer/Footer";
import CatalogSearch from "@/app/components/templates/catalog/Catalog";
import Results from "@/app/components/templates/catalog/results/Results";

export default function Catalog() {
  return (
    <div className={styles.catalog}>
      <main className={styles.catalog__main}>
        <Header />
        <CatalogSearch />
        <Results />
        <Footer />
      </main>
    </div>
  );
}
