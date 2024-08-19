import Container from "@/component/container/Container";
import styles from "./page.module.css";
import Categories from "@/component/categories/Categories";
import Banner from "@/component/banner/Banner";
import PageNameRedetection from "@/component/PageNameRedetection";
import TopHeader from "@/component/topHeader/TopHeader";

export const metadata = {
  title: "الرئيسية",
  description: "",
};
function Home() {
  return (
    <div className={styles.main}>
      <Container>
        <PageNameRedetection />
        <TopHeader />
        <Banner />
        <Categories />
      </Container>
    </div>
  );
}
export default Home;
