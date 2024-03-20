"use client";

import { siteConfig } from "@/config/site-config";
import GridItem from "./grid-item";
import SocialBox from "./grid-items/social-box";
import MentorshipBox from "./grid-items/mentorship-box";
import ProjectBox from "./grid-items/project-box";
import EquipmentsBox from "./grid-items/equipments-box";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <div className="flex flex-1 h-full px-4">
      {/* Grid container */}
      <div className="grid w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-1 xl:overflow-y-auto auto-rows-[76px] ">
        {siteConfig.items.map((item, index) => {
          return (
            <GridItem key={item.title + index} size={item.layout}>
              {item.type === "social" ? (
                <SocialBox item={item} />
              ) : item.type === "mentor" ? (
                <MentorshipBox item={item} />
              ) : item.type === "project" ? (
                <ProjectBox item={item} />
              ) : item.type === "equipment" ? (
                <EquipmentsBox item={item} />
              ) : (
                <div>Not implemented yet</div>
              )}
            </GridItem>
          );
        })}
      </div>
    </div>
  );
};

export default RightSide;
