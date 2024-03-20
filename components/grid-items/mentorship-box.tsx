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
        {/* Title */}
        <div className="w-full text-base @md:text-lg font-semibold mx-4">{item.title} ⬇️⬇️⬇️</div>
      </div>
      <div>
      </div>
    </Link>
  );
};

export default MentorshipBox;
