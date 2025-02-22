"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex gap-6 ml-6">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-[#008000]" : "text-muted-foreground",
        )}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/about" ? "text-[#008000]" : "text-muted-foreground",
        )}
      >
        About
      </Link>
      <Link
        href="/events"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/events" ? "text-[#008000]" : "text-muted-foreground",
        )}
      >
        Events
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/blog" ? "text-[#008000]" : "text-muted-foreground",
        )}
      >
        Blog
      </Link>
      <Link
        href="/resources"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/resources" ? "text-[#008000]" : "text-muted-foreground",
        )}
      >
        Resources
      </Link>
      <Link
        href="/projects"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/projects" ? "text-[#008000]" : "text-muted-foreground",
        )}
      >
        Projects
      </Link>
      <Link
        href="/contact"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/contact" ? "text-[#008000]" : "text-muted-foreground",
        )}
      >
        Contact
      </Link>
    </nav>
  )
}

