import "@/app/scss/globals.scss";
import Footer from "./components/layouts/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
