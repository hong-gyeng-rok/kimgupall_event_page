import Banner from "./sections/banner";
import Gallary from "./sections/gallery";

function App() {
  return (
    <main className="bg-white p-8 text-white flex flex-row justify-evenly gap-4">
      <Banner></Banner>
      <Gallary></Gallary>
    </main>
  );
}

export default App;
