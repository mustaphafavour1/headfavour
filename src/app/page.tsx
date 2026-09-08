import { MotionConfig } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Identity } from "@/components/Identity";
import { ShippingLog } from "@/components/ShippingLog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main className="grid min-h-0 flex-1 grid-cols-1 grid-rows-[auto_1fr] gap-x-10 gap-y-2 overflow-hidden px-[4%] py-1 md:grid-cols-[minmax(240px,32%)_1fr] md:grid-rows-[1fr] md:gap-x-14 md:py-2">
        <Identity />
        <ShippingLog />
      </main>
      <Footer />
    </MotionConfig>
  );
}
