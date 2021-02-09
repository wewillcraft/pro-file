import { LoginButton, LogoutButton } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

interface Props {
  title: string;
}

const App = ({ title }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <nav>
        <LoginButton />
        <LogoutButton />
      </nav>
    </>
  );
};

export default App;
