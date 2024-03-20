import { GridItemInterface } from "@/config/site-config";
import Icon from "../icon";
import Link from "next/link";

const MentorshipBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.buttonLink ?? ""}
      target="_blank"
      className="flex items-center gap-3 justify-between"
    >
      <div className="flex justify-between items-center gap-2">
        {/* Icon */}
        <div>
          <Icon type={item.icon ?? ""} color={item.color} />
        </div>
        {/* Title */}
        <div className="w-full text-base @md:text-lg font-semibold">{item.title}</div>
      </div>

      {/* Container */}
      <div>
        {/* Top container */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-neutral-500">PROMO</div>
          <div className="flex items-center gap-1">
            <span className="text-xs line-through text-neutral-500">
              {item.oldPrice}
            </span>
            <span>{item.price}</span>
          </div>
        </div>
        {/* Bottom container */}
        <div className="text-primary font-bold">{item.promotion}</div>
      </div>
    </Link>
  );
};

export default MentorshipBox;
