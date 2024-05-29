"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Image from "next/image"
import { NavigationMenu } from "./ui/navigation-menu"
import { NavigationMenuDemo } from "@/app/_components/navigation-menu"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <div className="flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* <Icons.logo className="h-6 w-6" /> */}
          <Image src={"/dev.png"} alt="site logo" width={"30"} height={"30"}/>
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <NavigationMenuDemo />
      </div>
    </div>
  )
}