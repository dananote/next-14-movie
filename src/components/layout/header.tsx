import Link from "next/link";
import { ClapperboardIcon } from "lucide-react";
import HeaderSearch from "../search/search";
import { Sheet, SheetTrigger } from "../ui/sheet";

// TODO sheet trigger과 함께 button사용하면 버튼태그에 버튼태그가 있다고 에러 발생
export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6 border-zinc-800">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <ClapperboardIcon className="h-6 w-6 text-accent" />
      </Link>
      <Sheet>
        <SheetTrigger>
          click
          {/* <Button className="flex items-center">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button> */}
        </SheetTrigger>
        <HeaderSearch />
      </Sheet>
    </header>
  );
}
