'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundPattern } from "./background-pattern";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import Link from "next/link";
import { downloadFile } from "@/services/storage";


interface heroProps {
  badge?: string;
  title?: string;
  headline?: string;
  description?: string;
  buttonText?: string;
  button2Link?: string;
  mobileDescription?: string;
  // onClickButton?: any;

}
const Hero06 = ({badge,title,description,button2Link, mobileDescription}: heroProps) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-3 grid-cols-1">
      <BackgroundPattern />
      <div className="relative col-span-1 flex justify-center  items-center sm:hidden ">
        <Image src='/images/profile.jpg' alt="fril achraf" width={200} height={200} className="rounded-full "/>
      </div>
      <div className="lg:col-span-2 h-fit sm:h-full relative text-center sm:text-start flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 sm:py-24 py-10 ">
        {badge && 
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          {badge}
        </Badge>
        }
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold !leading-[1.2] tracking-tight mx-auto sm:mx-0">
          {title}
        </h1>
        {description && <p className="font text-xl sm:text-2xl md:text-3xl text-muted-foreground hidden sm:block">{description}</p>}
        {mobileDescription && <p className="font-medium text-xl text-muted-foreground sm:hidden">{mobileDescription}</p>}
        <div className="mt-12 flex items-center gap-4 mx-auto sm:mx-0">
          <Button onClick={async ()=>{
            downloadFile('resume.pdf')
          }} size="lg" className="rounded-full text-base dark:bg-white dark:hover:bg-primary transition-colors duration-75 ">
            Get my resume <HiDownload className="!h-5 !w-5" />
          </Button>
          {button2Link &&
            <Link
            href={button2Link}
            target="_blank"
            className="rounded-full shadow-none bg-muted p-3"
          >
            <SlSocialLinkedin className="" />
            
          </Link>
          }
        </div>
      </div>
      <div className="relative col-span-1 justify-center  items-center hidden sm:flex">
        <Image src='/images/profile.jpg' alt="fril achraf" width={300} height={300} className="rounded-full "/>
      </div>
      <div className="col-span-1 justify-center  items-center bg- hidden">
      {/* <canvas className="bg-primary rounded-full absolute -z-8 translate-" width={310} height={310}  />   */}
      
      <div className="relative group">
        <Image src='/images/profile.jpg' alt="fril achraf" width={310} height={310} className="rounded-full hidden sm:block"/>
        
            {/* <PixelatedCanvas
        src="./images/profile.jpg"
        width={310}
        height={310}
        cellSize={3} //3
        dotScale={1} //1
      
        shape="circle"
        // backgroundColor="#000000"
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
        // backgroundColor="bg-white"
        tintStrength={0.2}
        className="rounded-full aspect-square bg-neutral-800- "
      />  */}

      </div>
      
      </div>
    </div>
  );
};

export default Hero06;
