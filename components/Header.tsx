"use client"
import React from 'react';

import { HeadphonesIcon, Moon, Sun, ToolCaseIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconMessage,
  IconNewSection,
  IconTerminal2,
  IconUser,
} from "@tabler/icons-react";
import { FloatingNav } from './ui/floating-navbar';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ContactForm from './contact/contact-form';

const Header: React.FC = () => {

  const navItems = [
    {
      title: "",
      link: "#about",
      accessKey: "a",
      icon: <IconHome className="h-4 w-4 " />,
    },
    {
      title: "Experience",
      link: "#experiences",
      accessKey: "e",
      icon: <IconUser className="h-4 w-4 " />,
    },
    {
      title: "Projects",
      link: "#projects",
      accessKey: "p",
      icon: (
        <IconMessage className="h-4 w-4 " />
      ),
    },
    {
      title: "Skills",
      link: "#skills",
      accessKey: "s",
      icon: (
        <ToolCaseIcon className="h-4 w-4 " />
      ),
    },
    {
      title: "Contact",
      link: "#contact",
      accessKey: "c",
      icon: (
        <HeadphonesIcon className="h-4 w-4 " />
      ),
    },
  ];

  const { theme, setTheme } = useTheme();
  const toggleTheme = ()=>{
    setTheme(theme === "dark" ? "light": "dark")
  }
  return (
    <header >
      {/* <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
        /> */}
      <div className="absolute left-10 top-10 h-14 p-2 flex">
        <img src="./images/logo.svg" alt="" className='h-full aspect-square' />
      </div>

      <FloatingNav navItems={navItems} className="z-[90] p-4" />
      <div className="flex gap-2 px-2 fixed top-10 right-10 w-fit  p-2 rounded-full z-[10]">
        <Drawer>
          <DrawerTrigger>
            {/* <div accessKey="f" className='px-4 relative  items-center flex space-x-1  font-medium cursor-pointer '>
              <HeadphonesIcon className="h-4 w-4 " />
            </div> */}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <ContactForm />
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <div className="z-[12]">
              <Button  onClick={toggleTheme} size="icon" variant="outline" className="rounded-full cursor-pointer !bg-background !dark:bg-muted">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>

            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>


    </header>
  );
};

export default Header;