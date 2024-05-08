import { cn } from "../../../../../lib/utils";
import { buttonVariants } from "../../../../../registry/new-york/ui/button";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
  pathname: string | null;
}
export function NavigationLink(props: Props) {
  const { href, title, pathname } = props;

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        pathname === href
          ? "bg-muted hover:bg-muted"
          : "hover:bg-transparent hover:underline",
        "justify-start"
      )}
    >
      {title}
    </Link>
  )
}
