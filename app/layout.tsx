import "./globals.css";
import Provider from "./provider/provider";
import Navbar from "./nav_components/navbar";
import StarsCanvas from "./star_mode/background_stars";
import SmoothScrollProvider from "./smooth_scroll_provider";

const BASE_URL = "https://www.bite-point.com";

export const metadata = {
  title: "Htet Myat | Senior Full-Stack Engineer",
  description:
    "Senior full-stack engineer with 4+ years of experience at Innorder. Specializing in React, Next.js, NestJS, and clean architecture. View my portfolio, projects, and technical skills.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Htet Myat | Senior Full-Stack Engineer",
    description:
      "Senior full-stack engineer with 4+ years of experience at Innorder. Specializing in React, Next.js, NestJS, and clean architecture.",
    url: BASE_URL,
    siteName: "Htet Myat",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Htet Myat",
    description:
      "Senior full-stack engineer specializing in React, Next.js, NestJS, and clean architecture.",
  },
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
