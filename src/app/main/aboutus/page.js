import Container from "@/component/container/Container";
import styles from "./page.module.css";
import Image from "next/image";
import about1 from "../../../../public/about1.jpg";
import about2 from "../../../../public/about2.jpg";
import PageNameRedetection from "@/component/PageNameRedetection";
export const metadata = {
  title: "About Us",
  description: "",
};
const AboutUs = () => {
  return (
    <Container>
      <PageNameRedetection />
      <div className={styles.logo}>
        <Image priority src="/logo.png" alt="logo" width={100} height={100} />
        <p>
          <span>COOLDOWN</span>
          <br />
          من نحن؟
        </p>
      </div>
      <div className={styles.textBox}>
        <h1>من نحن</h1>
        <p>
          مرحبًا بكم في Cooldown Cyber Cafe، وجهتكم المثالية للاستمتاع بأفضل
          التجارب الإلكترونية والترفيهية. نحن هنا لنقدم لكم مزيجًا فريدًا من
          أحدث ألعاب الفيديو، والأجواء الودية، والمشروبات اللذيذة.
        </p>
        <div className={styles.img1}>
          <Image priority src={about1} alt="about" fill />
        </div>
        <h2>رؤيتنا</h2>
        <p>
          نطمح لأن نكون المركز الأول لعشاق الألعاب في المنطقة، حيث يجتمع
          الأصدقاء والعائلات للاستمتاع بالألعاب المثيرة وتجربة تكنولوجية حديثة.
        </p>

        <h2>مهمتنا</h2>
        <p>
          نسعى لتقديم بيئة مريحة وملهمة تجمع بين الترفيه والابتكار. نقدم
          لعملائنا أحدث الألعاب وأفضل الأجهزة، بالإضافة إلى مجموعة متنوعة من
          المشروبات الساخنة والباردة التي ترضي جميع الأذواق.
        </p>

        <h2>ما الذي يجعلنا مميزين؟</h2>
        <h3>1. أحدث الألعاب والتكنولوجيا</h3>
        <p>
          نحن نوفر أحدث الإصدارات من ألعاب الفيديو وأحدث الأجهزة، لنضمن لكم
          تجربة لعب ممتعة وسلسة.
        </p>
        <div className={styles.img2}>
          <Image priority src={about2} alt="about" fill />
        </div>

        <h3>2. بيئة مريحة وممتعة</h3>
        <p>
          تصميم مقهانا يعكس طابعًا عصريًا ووديًا، حيث يمكن للجميع الاسترخاء
          وقضاء وقت ممتع سواء كانوا يلعبون أو يتحدثون مع الأصدقاء.
        </p>

        <h3>3. فريق عمل ودود ومحترف</h3>
        <p>
          فريقنا مكون من محترفين يحبون الألعاب بقدر ما تحبونها أنتم. نحن هنا
          لمساعدتكم في كل ما تحتاجونه وضمان حصولكم على تجربة مميزة.
        </p>

        <h3>4. مناسب للجميع</h3>
        <p>
          سواء كنت لاعبًا محترفًا تبحث عن تحديات جديدة، أو مجرد هاوٍ يريد
          الاستمتاع ببعض الوقت مع الأصدقاء، فإن Cooldown Cyber Cafe هو المكان
          المثالي لك.
        </p>

        <h2>انضم إلينا</h2>
        <p>
          تعال واختبر بنفسك ما يجعل Cooldown Cyber Cafe مكانًا مميزًا. نتطلع
          للترحيب بك ومشاركتك في رحلتك في عالم الألعاب.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
