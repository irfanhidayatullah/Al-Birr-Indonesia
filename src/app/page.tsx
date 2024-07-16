import Abstract from "./components/Abstract";
import Jumbotron from "./components/Jumbotron";
import ServicesMP from "./components/ServicesMP";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Jumbotron/>
      <Abstract/>
      <ServicesMP/>
      <Testimonials/>
    </main>
  );
}
