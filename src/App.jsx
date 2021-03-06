/* eslint-disable import/no-anonymous-default-export */
import SmoothScroll from "smooth-scroll";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Dividends } from "./components/dividends";
import { Roadmap } from "./components/roadmap";
import { RefreshContextProvider } from "./data/utils";
import jsonData from "./data/data.json";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export default () => (
  <RefreshContextProvider>
    <div>
      <Navigation data={jsonData.Navigation} />
      <Header data={jsonData.Header} />
      <About data={jsonData.About} />
      <Dividends
        data={jsonData.Dividends}
        discord={jsonData.Navigation.discord}
      />
      <Roadmap data={jsonData.Roadmap} />
    </div>
  </RefreshContextProvider>
);
