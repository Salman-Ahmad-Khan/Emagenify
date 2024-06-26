"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        {/* <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
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
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-1/3 m-20">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/assets/images/logo-text.svg"/>
            <AvatarFallback>Logo</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-purple-700">About</h1>
            <p className="text-base text-purple-700">
            Creatively transform your images, using AI to automatically generate pixels that integrate seamlessly into the picture. Use these transformations to extend your images to new dimensions, remove, replace or recolor items, or restore degraded images.
            </p>
            
            <h4 className="text-sm font-semibold text-purple-700">Generative fill</h4>
            <p className="text-sm text-dark-600">
            Generative fill, utilized with various cropping methods, uses AI to expand original images, aiding in orientation changes. It seamlessly integrates AI-generated backgrounds with existing content, facilitating creative solutions and reducing workflow time.
            </p>
            <h4 className="text-sm font-semibold text-purple-700">Generative recolor</h4>
            <p className="text-sm text-dark-600">
            Generative recolor enables color alterations in images using natural language, through AI and NLP. This feature simplifies creating color variants, especially beneficial for e-commerce products, 
            </p>
            <h4 className="text-sm font-semibold text-purple-700">Generative remove</h4>
            <p className="text-sm text-dark-600">
            Generative remove effortlessly eliminates unwanted objects, text, or user-defined regions from images,enabling scalable object removal tasks which traditionally would require significant time and effort.
            </p>
            <h4 className="text-sm font-semibold text-purple-700">Generative restore</h4>
            <p className="text-sm text-dark-600">
            Generative restore uses AI to mend image imperfections like compression artifacts, noise, and blurriness. Through a two-step restoration process, it recovers lost details and refines the image, enhancing the clarity and quality of old or damaged photos and user-generated content.
            </p>
               
            </div>
          </div>
        
      </HoverCardContent>
    </HoverCard>


















        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>


            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover hover:scale-95">
              <Link href="/sign-in">Login</Link>
            </Button>
            <div
  className="relative grid w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div
    className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('/assets/images/side-img.avif')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 px-6 py-14 md:px-12">
    <h2 className="mb-6 block text-3xl font-bold leading-[1.5] tracking-normal text-white antialiased">
    Perfect your visuals with top-notch image editing tools
    </h2>
   
  </div>
</div>  
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar