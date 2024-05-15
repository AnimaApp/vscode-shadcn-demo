import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const examples = [
  {
    name: "Forms",
    href: "/examples/forms",
  },
  {
    name: "Music",
    href: "/examples/music",
  },
  {
    name: "Authentication",
    href: "/examples/authentication",
  },
  {
    name: "Cards",
    href: "/examples/cards",
  },
  {
    name: "Dashboard",
    href: "/examples/dashboard",
  },
  {
    name: "Mail",
    href: "/examples/mail",
  },
  {
    name: "Tasks",
    href: "/examples/tasks",
  },
  {
    name: "Playground",
    href: "/examples/playground",
  },
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> { }

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const { pathname } = useLocation()

  return (
    <div className="relative space-y-8 p-8">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("mb-4 flex gap-4 flex-col items-start", className)} {...props}>
          {examples.map((example, index) => (
            <Link
              to={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                pathname?.startsWith(example.href) ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}
