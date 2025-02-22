import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/nacos.png"
            alt="NACOS Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
        <MainNav />
        <MobileNav />
        <div className="ml-auto flex items-center space-x-4">
          <Button className="bg-[#008000] hover:bg-[#008000]/90" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

