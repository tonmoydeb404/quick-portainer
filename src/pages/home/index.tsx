import LoginForm from "./login-form";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <header className="flex w-full min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-2 text-center">Quick Portainer</h1>
      <p className="text-sm text-center mb-14">
        Manage Portainer Quick & Easily
      </p>

      <LoginForm />
    </header>
  );
};

export default HomePage;
