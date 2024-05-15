import { ExamplesNav } from "@/components/examples-nav"
import {
  PageHeader,
  PageHeaderHeading,
} from "@/components/page-header"
import { Outlet } from "react-router-dom"

export default function Examples() {
  return (
    <>
      <div className="container relative">
        <PageHeader>
          <PageHeaderHeading className="hidden md:block">
            Demo
          </PageHeaderHeading>
        </PageHeader>
        <section>
          <div className="overflow-hidden rounded-[0.5rem] flex border bg-background shadow-md md:shadow-xl">
            <ExamplesNav />
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
              <div className="flex items-center justify-between space-y-2">
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
