import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideMoreHorizontal } from "lucide-react";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <form className="flex flex-col gap-2 max-w-sm w-full">
      <div className="flex gap-[inherit]">
        <Input placeholder="Portainer URL" />
        <Button size="icon" variant="outline" type="button">
          <LucideMoreHorizontal />
        </Button>
      </div>
      <Input placeholder="Username" />
      <Input placeholder="Password" className="mb-5" />

      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default LoginForm;
