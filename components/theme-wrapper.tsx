
import { cn } from "../lib/utils"
import { useConfig } from "../hooks/use-config"

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const [config] = useConfig()

  console.log(defaultTheme, config.theme)

  return (
    <div
      className={cn(
        `theme-zinc`,
        "w-full",
        className
      )}
      style={
        {
          "--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
