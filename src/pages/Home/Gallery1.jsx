import "./Gallery1.css";
import Button from "../../component/Button/Button";

import { tripData } from "../../data/tripData.js";
export default function Gallery() {
  return (
    <section className="section-gallery" aria-describedby="incredible-place">
      <h2 id="incredible-place">Incredible places</h2>
      <div className="gallery">
        {tripData.map((trip) => {
          const placename = trip.placename.toLowerCase().split(" ").join("-");

          return (
            <figure key={trip.id} tabIndex="0" className="gallery-picture">
              <img
                src={new URL(`../../assets/${placename}.jpg`, import.meta.url)}
              />

              <figcaption className="gallery-content">
                <h3>{trip.placename}</h3>
                <small>{trip.country}</small>
                <Button
                  type="navigate"
                  path={`trips/${trip.id}`}
                  styled={{
                    backgroundColor: "grey",
                    fontSize: "6cqi",
                    marginTop: "1rem",
                  }}
                >
                  Learn More
                </Button>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
