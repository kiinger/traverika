import "./Filterbar.css";
import Button from "../../component/Button/Button";
export default function SearchBar({
  onFilterChange,
  onParamsCheck,
  tripsData,
}) {
  return (
    <>
      <div role="filter-bar" className="filter-bar">
        {tripsData.map((trip, i, arr) => {
          if (i !== arr.findIndex((t) => t.country === trip.country)) return;
          return (
            <Button
              onClick={() => onFilterChange("country", trip.country)}
              styled={{
                backgroundColor: `${
                  onParamsCheck("country", trip.country) ? "grey" : "black"
                }`,
                cursor: "pointer",
              }}
              key={i}
            >
              {trip.country}
            </Button>
          );
        })}

        <Button
          styled={{
            backgroundColor: `${
              onParamsCheck("country", null) ? "grey" : "black"
            }`,
            cursor: "pointer",
          }}
          onClick={() => onFilterChange("country", null)}
        >
          All
        </Button>
      </div>
    </>
  );
}
