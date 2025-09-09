import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import { title } from "process";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { PixelatedCanvas } from "../ui/pixelated-canvas";



interface heroProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  button2Text?: string;

}
const Hero06 = ({badge,title,description,buttonText,button2Text}: heroProps) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-3 grid-cols-2">
      <BackgroundPattern />

      <div className="lg:col-span-2 h-full relative text-start flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 py-24">
        {badge && 
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          {badge}
        </Badge>
        }
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          {title || "Build Beautiful Apps with Shadcn UI"}
        </h1>
        {description && <TextGenerateEffect words={description} filter={false} className="font-medium"/>}
        <div className="mt-12 flex items-center gap-4">
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
      <div className="col-span-1 flex justify-center items-center p-6 sm:p-12 lg:p-24 py-24">
        
      <canvas className="bg-muted rounded-xl absolute -z-2 translate-x-2- translate-y-2- translate-2" width={300} height={300}  />  
      <PixelatedCanvas
        src="./images/profile.jpg"
        width={300}
        height={300}
        cellSize={3}
        dotScale={1}
        shape="square"
        backgroundColor="#000000"
        dropoutStrength={0.3}
        interactive
        distortionStrength={3}
        distortionRadius={80}
        distortionMode="swirl"
        // distortionMode="attract"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={4}
        sampleAverage
        // tintColor="#63b3ee5"
        tintStrength={0.2}
        className="rounded-xl aspect-square "
      />
      </div>
    </div>
  );
};

export default Hero06;
