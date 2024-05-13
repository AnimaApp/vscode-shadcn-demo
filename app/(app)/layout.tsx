'use client'

import Link from "next/link"
import { SiteFooter } from "../../components/site-footer"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <nav className="container flex gap-8 px-16 py-8">
        <Link className="underline" href="/sink">Sink</Link>
        <Link className="underline" href="/examples">Examples</Link>
      </nav>
      <main className="flex-1">
        {children}</main>
      <SiteFooter />
    </>
  )
}
