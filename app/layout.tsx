import "./globals.css";
import Provider from "./provider/provider";
import Navbar from "./nav_components/navbar";
import StarsCanvas from "./star_mode/background_stars";
import SmoothScrollProvider from "./smooth_scroll_provider";

export const metadata = {
  title: "Htet Myat",
  description: "Htet Myat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-[#030014] overflow-y-scroll overflow-x-hidden transition_">
        <Provider>
          <StarsCanvas />
          <Navbar />
          <SmoothScrollProvider />
          {children}
        </Provider>
      </body>
    </html>
  );
}
