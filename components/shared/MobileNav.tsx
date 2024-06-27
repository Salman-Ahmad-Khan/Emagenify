"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      

      <HoverCard>
        <HoverCardTrigger asChild>
          <Link href="/" className="sidebar-logo">
            <Image
              src="/assets/images/logo-text.svg"
              alt="logo"
              width={180}
              height={28}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="">
         


          <div className="space-y-1">
                <h1 className="text-3xl font-bold text-dark-600">About</h1>
                <p className="text-base text-dark-500">
                Creatively transform your images, using AI to automatically generate pixels that integrate seamlessly into the picture.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-dark-600">
                      Generative fill
                    </AccordionTrigger>
                    <AccordionContent className="text-dark-500">
                    Naturally extend your images to fit new dimensions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-dark-600">
                      Generative recolor
                    </AccordionTrigger>
                    <AccordionContent className="text-dark-500">
                    Recolor elements of your images.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-dark-600">
                      Generative remove
                    </AccordionTrigger>
                    <AccordionContent className="text-dark-500">
                    Seamlessly remove parts of your images.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-dark-600">
                      Generative restore
                    </AccordionTrigger>
                    <AccordionContent className="text-dark-500">
                    Restore degraded and poor quality images.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
        </HoverCardContent>
      </HoverCard>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger asChild>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                  style={{ width: "auto", height: "auto" }}
                />

                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                      >
                        <Link
                          className="sidebar-link cursor-pointer"
                          href={link.route}
                        >
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                            style={{ width: "auto", height: "auto" }}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button
            asChild
            className="button bg-purple-gradient bg-cover hover:scale-95"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
