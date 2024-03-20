import { createServer, Model } from "miragejs";

createServer({
  models: {
    trips: Model,
    tripsDetails: Model,
    questions: Model,
  },
  seeds(server) {
    server.create("trip", {
      id: 1451,
      country: "Italy",
      placename: "Venice",
      description:
        "An island city, it was once the centre of a maritime republic. It was the greatest seaport in late medieval Europe and the continent’s commercial and cultural link to Asia",
    });
    server.create("trip", {
      id: 2214,
      country: "Australia",
      placename: "Great Ocean Road",
      description:
        "one of the world's most scenic coastal drives. Witness the magical 12 Apostles, iconic surf breaks, waterfalls and more.",
    });
    server.create("trip", {
      id: 3214,
      country: "Turkey",
      placename: "Pamukkale",
      description:
        "Pamukkale is a town in western Turkey known for the mineral-rich thermal waters flowing down white travertine terraces on a nearby hillside.",
    });
    server.create("trip", {
      id: 4241,
      country: "Pitons",
      placename: "St Lucia",
      description:
        "Saint Lucia is an Eastern Caribbean island nation with a pair of dramatically tapered mountains, the Pitons, on its west coast. Its coast is home to volcanic beaches, reef-diving sites, luxury resorts and fishing villages. ",
    });
    server.create("trip", {
      id: 5241,
      country: "Malaysia",
      placename: "KLCC",
      description:
        "One of the most beautiful place in the world, full of bangladesh wearing fucking formal t-shirt and take photo with tower",
    });
    server.create("trip", {
      id: 9214,
      country: "Malaysia",
      placename: "Sibu",
      description:
        "Pissant town located in East Malaysia , full of cannibal and Vigo ",
    });
    ////////////////////////////tripsDetails/////////////////////////////////
    server.create("tripsDetail", {
      id: 2214,
      country: "Australia",
      placename: "Great Ocean Road",
      description:
        "one of the world's most scenic coastal drives. Witness the magical 12 Apostles, iconic surf breaks, waterfalls and more.",
      duration: "14 hours",
      price: "₹8,079.51",
      included: [
        "Coffee and Tea",
        "National Park Fees",
        "WIFI on board",
        "Air-conditioned vehicle",
      ],
      "Start time": 7,
      rating: 5,
    });
    server.create("tripsDetail", {
      id: 5241,
      country: "Malaysia",
      placename: "KLCC",
      description:
        "One of the most beautiful place in the world, full of bangladesh wearing fucking formal t-shirt and take photo with tower",
      duration: "3 hours",
      price: "RM2,079.51",
      included: [
        "Coffee and Tea",
        "National Park Fees",
        "Bangledesh photo service",
        "WIFI on board",
        "Air-conditioned vehicle",
      ],
      "Start time": 12,
      rating: 1.2,
    });
    server.create("tripsDetail", {
      id: 3214,
      country: "Turkey",
      placename: "Pamukkale",
      description:
        "Pamukkale is a town in western Turkey known for the mineral-rich thermal waters flowing down white travertine terraces on a nearby hillside.",
      duration: "24 hours",
      price: "₹10,079.51",
      included: [
        "Coffee and Tea",
        "National Park Fees",
        "Free Breakfast",
        "WIFI on board",
        "Air-conditioned vehicle",
      ],
      "Start time": 8,
      rating: 4.3,
    });
    server.create("tripsDetail", {
      id: 4241,
      country: "Pitons",
      placename: "St Lucia",
      description:
        "Saint Lucia is an Eastern Caribbean island nation with a pair of dramatically tapered mountains, the Pitons, on its west coast. Its coast is home to volcanic beaches, reef-diving sites, luxury resorts and fishing villages. ",
      duration: "11 hours",
      price: "₹4,079.21",
      included: ["Coffee and Tea", "WIFI on board", "Air-conditioned vehicle"],
      "Start time": 8,
      rating: 4.2,
    });
    server.create("tripsDetail", {
      id: 9214,
      country: "Malaysia",
      placename: "Sibu",
      description:
        "Pissant town located in East Malaysia , full of cannibal and Vigo ",
      duration: "1 hours",
      price: "RM 79.21",
      included: [
        "Coffee and Tea",
        "Free Hotel",
        "WIFI on board",
        "Air-conditioned vehicle",
        "All thing cover",
      ],
      "Start time": 14,
      rating: 1,
    });
    server.create("tripsDetail", {
      id: 1451,
      country: "Italy",
      placename: "Venice",
      description:
        "An island city, it was once the centre of a maritime republic. It was the greatest seaport in late medieval Europe and the continent’s commercial and cultural link to Asia",
      duration: "4 hours",
      price: "₹1,079.21",
      included: ["Coffee and Tea", "WIFI on board", "Air-conditioned vehicle"],
      "Start time": 10,
      rating: 4.4,
    });
  },
  routes() {
    this.namespace = "/api";

    this.get("/trips", (schema, request) => {
      console.log("success");
      return schema.trips.all();
    });

    this.get("/trips/:id", (schema, request) => {
      const id = request.params.id;
      return schema.tripsDetails.find(id);
    });

    this.post("/questions", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      attrs.id = Math.random.toString(36).substring(2, 15);

      schema.questions.create(attrs);
      return { items: attrs };
    });
  },
});
