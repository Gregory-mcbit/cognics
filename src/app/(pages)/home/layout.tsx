import "../../styles/fonts/benzin/benzin.css";
import "../../styles/fonts/haurora/haurora.css";
import "../../styles/globals.css";

export const metadata = {
  title: "Index page",
  description: "Come back soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
