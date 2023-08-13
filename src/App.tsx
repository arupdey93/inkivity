import logo from "./assets/logo.png";

const App = () => {
  return (
    <main>
      <div className="bg-red-100">
        <img src={logo} className="h-[200px] w-[200px]" alt="React logo" />
      </div>
      <h1 className="text-black">Inkivity. Work in progress.</h1>
    </main>
  );
};

export default App;
