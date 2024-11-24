import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imagnify | Home",
  description: "AI-powered solutions to effortlessly remove backgrounds, restore old photos, recolor objects, eliminate unwanted elements, and expand images with generative fill.",
};

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="home">
        <h1 className="home-heading uppercase">
          {/* Elevate Your Creativity with Imaginify */}
          Use AI and get creative with your images
        </h1>

        <ul className="flex-center w-full gap-20">
          {/* <ul className="w-full hidden gap-20 sm:flex-center"> */}
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2 hover:scale-95"
            >
              <li className="flex-center w-fit rounded-lg bg-green-200 p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="block sm:hidden">
        <h1 className="home-heading-mobile ">
          {/* Get creative with your images,  */}
          Use AI to transform your images to new dimensions, remove, recolor and
          restore degraded images
        </h1>
      </section>

      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />

        <Separator />

        <footer className="container text-center mt-4">
          <p className="text-[10px]">
            © 2024 Imagnify with <span className="text-green-500">♥</span> for the people of the internet.
          </p>
        </footer>
      </section>
    </>
  );
};

export default Home;
