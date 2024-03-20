import { GridItemInterface } from "@/config/site-config";
import Link from "next/link";
import Icon from "../icon";
import { Star } from "lucide-react";

const ProjectBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.buttonLink ?? ""}
      target="_blank"
      className="flex items-center"
    >
      {/* Icon */}
      <Icon type={item.icon ?? ""} color={item.color} />
      {/* Title */}
      <div className="w-full @md:text-lg text-base font-semibold">{item.title}</div>
      {/* Stars */}
      <div className="flex items-center gap-1">
        <span className="mt-[1px]">{item.stars}</span>
        <Star size="16" fill="currentColor" />
      </div>
    </Link>
  );
};

export default ProjectBox;
