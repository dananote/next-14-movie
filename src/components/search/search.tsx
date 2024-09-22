import {
  Command,
  CommandInput,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandEmpty,
} from "../ui/command";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

const ITEMS = ["taehee", "taehyen"];
export default function HeaderSearch() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when re done.
        </SheetDescription>
        <div>
          <Command>
            <CommandInput placeholder="hi" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {ITEMS.map((item, index) => {
                  return <CommandItem key={index}>{item}</CommandItem>;
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </SheetHeader>
    </SheetContent>
  );
}
