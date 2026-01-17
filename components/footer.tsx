import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/boaragro",
    icon: Instagram,
  },
  {
    name: "Twitter / X",
    href: "https://x.com/BOAR_Agro",
    icon: Twitter,
  },
];

const companyLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Company Profile",
    href: "/company-profile",
  },
];


export function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 xl:px-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:mx-auto  xl:px-6 lg:grid-cols-12 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src="/boar_logo.png"
                alt="BOAR Agro"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#44464B] text-[14px] lg:text-[16px] leading-relaxed">
              BOAR Agro connects Nigerian farms directly to global markets, with zero middlemen.
            </p>
          </div>

          <div className="xl:col-span-2 lg:col-span-1 lg:flex hidden"></div>

          {/* Contact Us */}
          <div className="lg:col-span-2 lg:text-[16px] text-[14px]">
            <h3 className="font-bold  text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-2  text-[#44464B]">
              <p>info@boaragro.com</p>
              <p>+234 813 961 7941</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:text-[16px] text-[14px]">
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2 text-[#44464B]">
              {companyLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block font-normal text-gray-600 hover:text-[#2D7A3E]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2 ">
            <h3 className="font-bold text-gray-900 mb-4">Socials</h3>

            <div className="flex font-medium items-center gap-4">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-gray-600 hover:text-[#2D7A3E] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-gray-600">
          <p>Copyright 2026, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
