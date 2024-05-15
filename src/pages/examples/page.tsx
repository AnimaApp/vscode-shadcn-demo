import { ExamplesNav } from "@/components/examples-nav"
import { Navigation } from "@/components/navigation"
import { Outlet } from "react-router-dom"

export default function Examples() {
  return (
    <>
      <div className="container relative py-8">
        <Navigation />

        <div className="p-4">

          <div className="overflow-hidden rounded-[0.5rem] flex border bg-background shadow-md md:shadow-xl">
            <ExamplesNav />
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
              <div className="flex items-center justify-between space-y-2">
                <Outlet />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
