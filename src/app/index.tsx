import Router from "@/router";
import { BrowserRouter } from "react-router";

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
