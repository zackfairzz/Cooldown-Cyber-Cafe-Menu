import Header from "@/component/header/Header.jsx";
import Footer from "@/component/footer/Footer.jsx";
import LangChecker from "@/component/LangChecker";

export const metadata = {
  title: "Cooldown cafe menu",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <div className="bgColor">
      <LangChecker>
        {children}
        <Footer />
        <Header />
      </LangChecker>
    </div>
  );
}
