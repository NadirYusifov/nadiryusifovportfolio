import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListCollapse } from "lucide-react";

export const OtherLink = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            size="lg"
            className="transtion-all text-md border-border hover:bg-muted fixed right-4 bottom-4 h-12 w-12 cursor-pointer border bg-white text-neutral-800 duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <ListCollapse />
          </Button>
        }
      ></DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-md">
            Digər keçidlər
          </DropdownMenuLabel>
          <DropdownMenuItem
            className="text-md cursor-pointer text-neutral-800"
            render={<a href="#projects" />}
          >
            Layihələr
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-md cursor-pointer text-neutral-800"
            render={<a href="#experience" />}
          >
            İş təcrübəm
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
