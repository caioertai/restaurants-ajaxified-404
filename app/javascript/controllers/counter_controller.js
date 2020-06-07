import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ];

  connect() {
    //           () => {}, time in ms
    setInterval(this.refresh, 3000)
  }

  refresh = (event) => {
    fetch("/restaurants", { headers: { accept: "application/json" } })
      .then(response => response.json())
      .then((data) => {
        // {"restaurants":[{"id":1,"name":"Le Dindon en Laisse","address":"18 Rue Beautreillis, 75004 Paris, France","created_at":"2020-06-04T23:08:18.426Z","updated_at":"2020-06-04T23:08:18.426Z"},{"id":2,"name":"Neuf et Voisins","address":"Van Arteveldestraat 1, 1000 Brussels, Belgium","created_at":"2020-06-04T23:08:18.432Z","updated_at":"2020-06-04T23:08:18.432Z"},{"id":3,"name":"Le Dindon en Laisse","address":"18 Rue Beautreillis, 75004 Paris, France","created_at":"2020-06-04T23:51:26.977Z","updated_at":"2020-06-04T23:51:26.977Z"},{"id":4,"name":"Neuf et Voisins","address":"Van Arteveldestraat 1, 1000 Brussels, Belgium","created_at":"2020-06-04T23:51:26.987Z","updated_at":"2020-06-04T23:51:26.987Z"},{"id":5,"name":"Le Dindon en Laisse","address":"18 Rue Beautreillis, 75004 Paris, France","created_at":"2020-06-05T00:15:03.764Z","updated_at":"2020-06-05T00:15:03.764Z"},{"id":6,"name":"Neuf et Voisins","address":"Van Arteveldestraat 1, 1000 Brussels, Belgium","created_at":"2020-06-05T00:15:03.773Z","updated_at":"2020-06-05T00:15:03.773Z"}]}
        this.countTarget.innerText = data.restaurants.length
      })

  }
}
