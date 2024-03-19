import GridItem from "@/components/grid-item";
import SocialBox from "@/components/grid-items/social-box";
import { ThemeToggle } from "@/components/theme-toogle";
import { siteConfig } from "@/config/site-config";
import { GridIcon, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 gap-10 w-full h-full">
      {/* Left side */}
      <div className="flex-1 p-6 h-full max-w-md">
        <div className="flex flex-col h-full rounded-md">
          {/* Avatar */}
          <div>
            <Image
              src="/avatar.jpg"
              alt="avatar"
              width="120"
              height="120"
              className="rounded-full"
              priority
              loading="eager"
            />
          </div>
          {/* Infor */}
          <div>
            {/* Fullname */}
            <div>
              <h1 className="text-4xl font-bold mt-4">{siteConfig.name}</h1>
            </div>
            {/* TItle */}
            <div>
              <h2 className="text-2xl text-primary font-semibold">
                {siteConfig.title}
              </h2>
            </div>
            {/* Bio */}
            <div>
              <p className="text-xl text-neutral-500">{siteConfig.bio}</p>
            </div>
            {/* Button */}
            <div className="mt-4 flex gap-6 justify-center items-center text-sm">
              <a
                className="border flex-1 rounded-md border-neutral-200 dark:border-neutral-700 px-2 py-1 flex items-center gap-2"
                href={siteConfig.locationLink}
                target="_blank"
              >
                <MapPin size="16" />
                {siteConfig.location}
              </a>
              <a
                className="border flex-1 rounded-md border-neutral-200 dark:border-neutral-700 px-2 py-1 flex items-center gap-2"
                href={`mailto:${siteConfig.email}`}
              >
                <Mail size="16" />
                Contact me
              </a>

              <div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1 h-full">
        {/* Grid container */}
        <div className="w-full h-full grid grid-cols-4 auto-rows-[76px] gap-10 overflow-y-auto p-4">
          {siteConfig.items.map((item, index) => {
            return (
              <GridItem key={item.title + index} size={item.layout}>
                {item.type === "social" ? (
                  <SocialBox item={item} />
                ) : (
                  <div>Not implemented yet</div>
                )}
              </GridItem>
            );
          })}
        </div>
      </div>
    </main>
  );
}
