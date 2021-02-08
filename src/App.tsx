import { LoginButton, LogoutButton } from "./components";

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
