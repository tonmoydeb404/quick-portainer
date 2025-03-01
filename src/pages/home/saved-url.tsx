import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import localStorageKeys from "@/config/local-storage-keys";
import useLocalStorageArray from "@/hooks/use-local-storage-array";
import { LucideMoreHorizontal } from "lucide-react";

type Props = {
  onSelect: (url: string) => void;
};

const SavedUrl = (props: Props) => {
  const { onSelect } = props;
  const { items } = useLocalStorageArray<string>(localStorageKeys.SAVED_URLS);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline" type="button">
          <LucideMoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <DropdownMenuLabel>Saved Portainer URL's</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((url, index) => (
          <DropdownMenuItem key={index} onClick={() => onSelect(url)}>
            {url}
          </DropdownMenuItem>
        ))}
        {items.length === 0 && (
          <div className="text-center py-10 text-sm text-muted-foreground">
            Nothing saved yet!
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SavedUrl;
