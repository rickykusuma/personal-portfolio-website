import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ricky | Front-End Developer</title>
        <meta name="description" content="Personal Website" />
        <link rel="icon" href="/assets/RK_3.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
