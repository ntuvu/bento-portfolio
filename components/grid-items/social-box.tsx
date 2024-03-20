import { GridItemInterface } from "@/config/site-config";
import Icon from "../icon";
import Button from "../button";

const SocialBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        {/* Icon */}
        <div>
          <Icon type={item.icon ?? ""} color={item.color} />
        </div>
        <div>
          {item.layout === "2x2" && (
            <div>
              <Button
                text={item.buttonTitle ?? ""}
                secondaryText={item.buttonSecondaryText}
                color={item.color}
              />
            </div>
          )}
        </div>
      </div>
      {/* Content container */}
      <div className="mt-2">
        <div className="@md:text-lg font-semibold">{item.title}</div>
        <div className="text-sm text-neutral-500">{item.username}</div>
        <div className="text-sm text-neutral-500 mt-1 line-clamp-2">{item.description}</div>
      </div>
      {/* Button */}
      <div>
        {item.layout === "1x2" && (
          <div className="mt-2">
            <Button
              text={item.buttonTitle ?? ""}
              secondaryText={item.buttonSecondaryText}
              color={item.color}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialBox;
