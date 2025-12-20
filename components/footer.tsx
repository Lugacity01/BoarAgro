import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="relative w-16 h-16 mb-4">
              <Image src="/boar_logo.png" alt="BOAR Agro" fill className="object-contain" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              BOAR Agro connects Nigerian farms directly to international cocoa processors and priority export buyers
              across the world, zero middlemen.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>info@boaragro@gmail.com</p>
              <p>+234 813 961 7941</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-600 hover:text-[#2D7A3E]">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-gray-600 hover:text-[#2D7A3E]">
                Contact Us
              </Link>
              <Link href="/company-profile" className="block text-sm text-gray-600 hover:text-[#2D7A3E]">
                Company Profile
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Socials</h3>
            <div className="space-y-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-[#2D7A3E]"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-[#2D7A3E]"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-[#2D7A3E]"
              >
                Twitter (X)
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-gray-600">
          <p>Copyright 2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
