"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaFilter } from "react-icons/fa6";
import CollectionFilterData from "../collectionComponents/CollectionFilterData";
import CollectionDropdownMenu from "../collectionComponents/CollectionDropDwonMenu";

export function SideBar() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <FaFilter size={30} className="text-primary cursor-pointer " />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Elegant Gems</SheetTitle>
            <SheetDescription className="sr-only">
              Welcome to ElegantJewels! Explore our exquisite jewelry collection
              that suits all tastes, from timeless classics to modern designs.
            </SheetDescription>
          </SheetHeader>
    <div className="mt-4">
      {/* <CollectionDropdownMenu /> */}
      <CollectionFilterData />
    </div>
          {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  );
}
