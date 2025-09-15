import { Separator } from "@/components/ui/separator";
import {
  HeadphonesIcon,
  ToolCaseIcon,
} from "lucide-react";
import Link from "next/link";
import {
  FaDiscord,
  FaFacebookF,
  FaFigma,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";

interface Profile {
  github?: string;
  figma?: string;
  discord?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

const FooterComponent = ({ profile }: { profile: Profile }) => {
  const navItems = [
    { title: "Home", link: "#about", accessKey: "a", icon: <IconHome className="h-4 w-4" /> },
    { title: "Experience", link: "#experiences", accessKey: "e", icon: <IconUser className="h-4 w-4" /> },
    { title: "Projects", link: "#projects", accessKey: "p", icon: <IconMessage className="h-4 w-4" /> },
    { title: "Skills", link: "#skills", accessKey: "s", icon: <ToolCaseIcon className="h-4 w-4" /> },
    { title: "Contact", link: "#contact", accessKey: "c", icon: <HeadphonesIcon className="h-4 w-4" /> },
  ];

  return (
    <div className="flex flex-col">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            {/* Logo */}
            <div className="flex gap-2 items-center relative h-8">
              <Image src="/images/logo.svg" alt="Logo" className="h-8" fill/>
            </div>

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {navItems.map(({ title, link, accessKey, icon }) => (
                <li key={title}>
                  <Link
                    href={link}
                    accessKey={accessKey}
                    className="flex items-center gap-2 text-muted-foreground font-medium hover:text-primary"
                  >
                    {icon}
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; 2025 | &nbsp;
              {profile?.email && (
                <Link href={`mailto:${profile.email}`} target="_blank">
                  {profile.email}
                </Link>
              )}
            </span>

            {/* Socials */}
            <div className="flex items-center gap-5 text-muted-foreground">
              {profile?.facebook && <Link href={profile.facebook} target="_blank"><FaFacebookF className="h-5 w-5" /></Link>}
              {profile?.instagram && <Link href={profile.instagram} target="_blank"><FaInstagram className="h-5 w-5" /></Link>}
              {profile?.discord && <Link href={profile.discord} target="_blank"><FaDiscord className="h-5 w-5" /></Link>}
              {profile?.linkedin && <Link href={profile.linkedin} target="_blank"><FaLinkedinIn className="h-5 w-5" /></Link>}
              {profile?.github && <Link href={profile.github} target="_blank"><FaGithub className="h-5 w-5" /></Link>}
              {profile?.figma && <Link href={profile.figma} target="_blank"><FaFigma className="h-5 w-5 font-bold" /></Link>}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
