import Button from "../../component/Button/Button";
import video from "../../assets/hero-video.mp4";
import "./Hero.css";
import { useRouteLoaderData } from "react-router-dom";
export default function Hero() {
  return (
    <header className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h2>Welcome To XxX</h2>
        <p>enjoy your vacation with us</p>
        <Button className="hero-btn" type="navigate" path="/about us">
          More Info
        </Button>
      </div>
    </header>
  );
}
