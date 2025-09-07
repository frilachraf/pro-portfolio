import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import { title } from "process";



interface heroProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  button2Text?: string;

}
const Hero06 = ({badge,title,description,buttonText,button2Text}: heroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-2xl">
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          {badge}
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          {title || "Build Beautiful Apps with Shadcn UI"}
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          {description}
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            {buttonText}<ArrowUpRight className="!h-5 !w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="!h-5 !w-5" /> {button2Text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero06;
