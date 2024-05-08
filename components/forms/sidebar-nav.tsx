"use client"

import { usePathname } from "next/navigation"
import { cn } from "../../lib/utils"
import { NavigationLink } from "./navigation-link"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <NavigationLink title={item.title} pathname={pathname} href={item.href} key={item.href} />
      ))}
    </nav>
  )
}
