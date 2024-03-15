import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Head from "next/head";
import { LayoutRouter } from "next/dist/server/app-render/entry-base";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hydra_Coder</title>
      </Head>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
