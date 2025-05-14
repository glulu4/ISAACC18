"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {config} from "@/config";
import {cn} from "@/lib/utils";
import {Menu} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {FunctionComponent} from "react";
import clsx from "clsx";
import FormButton from "./FormButton";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

const menuItems: MenuItem[] = [
  {name: "Home", href: "/"},
  {name: "Register", href: "https://docs.google.com/forms/d/e/1FAIpQLSelA1lfdxSPDi2PUAAVh5TMTuoQXyzfLzsLW7yFXjEAfVd0Ow/viewform"},

  {name: "Leadership", href: "/leadership"},
  // {name: "Announcements", href: "/announcements"},
  // {name: "Testimonials", href: "/testimonials"},
  {name: "Donate", href: "https://buy.stripe.com/5kA15W4iQfdv0XSbII",},
  {name: "Sign In", href: "/contact"},


];

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();
  return (
    <nav className=" flex justify-end sm:justify-center items-center px-4 ">



      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="mx-4">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-gray-900 text-gray-800 font-serif text-xl",
                pathname === item.href && "font-semibold"
              )}
            >

              {item.name}
            </a>
          </div>
        ))}
      </div>

      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent
            className={clsx("bg-blue-900 text-white [&_[data-radix-sheet-close]]:text-white")}
          >
            <SheetHeader>
              <SheetDescription>

                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2 cursor-pointer text-white font-serif font-normal text-lg sm:text-xl text-left",
                      pathname === item.href && "font-bold font-serif"
                    )}
                  >

                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>


    </nav >
  );
};

export const Header: FunctionComponent = () => {
  return (


    <section className=" flex items-center justify-between shadow-lg py-4 bg-white w-full z-50 px-4 sm:px-6">
      <meta name="theme-color" content="white" />
      <Link href="/" className="flex items-center">
        <div className="">
          <Image
            src="/images/icon2.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full w-16 sm:w-20"
          />
        </div>
      </Link>

      <Navigation />

      <div className="hidden md:flex items-center">
        <FormButton inverted />
      </div>
    </section>
  );
};