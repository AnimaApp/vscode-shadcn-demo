import { NavLink } from "react-router-dom";

const getClassName = ({ isActive }: { isActive: boolean }) => {
  return [
    "transition-colors hover:text-foreground/100 text-foreground/60",
    isActive ? "text-foreground/100 underline" : "",
  ].join(" ");
}

export function Navigation() {
  return (
    <nav className="px-6 flex items-center gap-6 text-lg">
      <NavLink to="/sink"
        className={getClassName}>Sink</NavLink>
      <NavLink to="/examples" className={getClassName}>Examples</NavLink>
    </nav >
  )
}
