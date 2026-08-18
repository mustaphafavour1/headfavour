import { MotionConfig } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Bio } from "@/components/Bio";
import { ShippingLog } from "@/components/ShippingLog";
import { Socials } from "@/components/Socials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Bio />
        <ShippingLog />
        <Socials />
      </main>
      <Footer />
    </MotionConfig>
  );
}
