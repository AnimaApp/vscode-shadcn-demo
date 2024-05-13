'use client'

import { ExamplesNav } from "@/components/examples-nav"
import {
  PageHeader,
  PageHeaderHeading,
} from "../../../components/page-header"

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <div className="container relative">
        <PageHeader>
          <PageHeaderHeading className="hidden md:block">
            Demo
          </PageHeaderHeading>
        </PageHeader>
        <section>
          <ExamplesNav />
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
            {children}
          </div>
        </section>
      </div>
    </>
  )
}
