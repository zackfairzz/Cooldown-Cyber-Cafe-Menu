import "./globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Cooldown cafe menu",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${cairo.className} bgColor`}>{children}</body>
    </html>
  );
}
