interface Props {
  title: string;
};

const App = ({ title }: Props) => {
  return <h1>{title}</h1>;
};

export default App;
