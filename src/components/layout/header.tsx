import Link from "next/link";
import { Input } from "../ui/input";
import { ClapperboardIcon, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 border-zinc-800">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <ClapperboardIcon className="h-6 w-6 text-accent" />
      </Link>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search Movie"
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </form>
      </div>
    </header>
  );
}
