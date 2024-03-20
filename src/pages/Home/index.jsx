import "./index.css";
import Hero from "./Hero";
import Gallery from "./Gallery1";
import { useRouteLoaderData } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
    </>
  );
}
