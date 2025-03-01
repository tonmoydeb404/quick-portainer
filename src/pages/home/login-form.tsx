import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEventHandler, useState } from "react";
import SavedUrl from "./saved-url";

type Props = {};

const LoginForm = (props: Props) => {
  const [values, setValues] = useState({
    url: "",
    username: "",
    password: "",
  });

  const handleChange = (key: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 max-w-sm w-full">
      <div className="flex gap-[inherit]">
        <Input
          placeholder="Portainer URL"
          value={values.url}
          onChange={(e) => handleChange("url", e.target.value)}
        />
        <SavedUrl onSelect={(value) => handleChange("url", value)} />
      </div>
      <Input
        placeholder="Username"
        onChange={(e) => handleChange("username", e.target.value)}
      />
      <Input
        placeholder="Password"
        className="mb-5"
        onChange={(e) => handleChange("password", e.target.value)}
      />

      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default LoginForm;
