import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const OtherLink = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            size="lg"
            className="transtion-all text-md fixed right-4 bottom-4 h-12 w-12 cursor-pointer bg-olive-500 duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          />
        }
      >
        Aç
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-md">
            Digər keçidlər
          </DropdownMenuLabel>
          <DropdownMenuItem
            className="text-md cursor-pointer"
            render={<a href="#projects" />}
          >
            Layihələr
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-md cursor-pointer"
            render={<a href="#experience" />}
          >
            İş təcrübəm
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
