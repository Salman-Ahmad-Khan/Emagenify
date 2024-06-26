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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      {/* <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link> */}

      {/* <HoverCard>
  <HoverCardTrigger> <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
        </Link></HoverCardTrigger>
  <HoverCardContent>
  Creatively transform your images, using AI to automatically generate pixels that integrate seamlessly into the picture. Use these transformations to extend your images to new dimensions, remove, replace or recolor items, or restore degraded images.
  </HoverCardContent>
</HoverCard> */}

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
          <div className="">
            <div className="space-y-1">
              <h1 className="font-bold text-purple-700">About</h1>
              <p className="text-base text-purple-700">
              Creatively transform your images, using AI to automatically generate pixels that integrate seamlessly into the picture.
              </p>

              <h4 className="text-sm font-semibold text-purple-700">Generative fill</h4>
              <p className="text-sm text-dark-600">
              Naturally extend your images to fit new dimensions.
              </p>
              <h4 className="text-sm font-semibold text-purple-700">Generative recolor</h4>
              <p className="text-sm text-dark-600">
              Recolor elements of your images.
              </p>
              <h4 className="text-sm font-semibold text-purple-700">Generative remove</h4>
              <p className="text-sm text-dark-600">
              Seamlessly remove parts of your images.
              </p>
              <h4 className="text-sm font-semibold text-purple-700">Generative restore</h4>
              <p className="text-sm text-dark-600">
              Restore degraded and poor quality images.
              </p>
            </div>
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
