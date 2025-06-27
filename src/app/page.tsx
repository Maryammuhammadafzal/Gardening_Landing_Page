import Image from "next/image";
import AboutPage from "./about/page";
import ServicePage from "./services/page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <AboutPage />
      <ServicePage />
    </div>
  );
}
