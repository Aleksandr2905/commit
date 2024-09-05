import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { About } from "./sections/about";
import { Cases } from "./sections/cases";
import { Hero } from "./sections/hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Cases />
      </main>
      <Footer />
    </>
  );
}

export default App;
