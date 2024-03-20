import Footer from "@/components/footer";
import GridItem from "@/components/grid-item";
import EquipmentsBox from "@/components/grid-items/equipments-box";
import MentorshipBox from "@/components/grid-items/mentorship-box";
import ProjectBox from "@/components/grid-items/project-box";
import SocialBox from "@/components/grid-items/social-box";
import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";
import { ThemeToggle } from "@/components/theme-toogle";
import { siteConfig } from "@/config/site-config";
import { GridIcon, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container flex flex-col xl:flex-row flex-1 gap-10 w-full h-full">
      {/* Left side */}
      <LeftSide />
      {/* Right side */}
      <RightSide />
    </main>
  );
}
