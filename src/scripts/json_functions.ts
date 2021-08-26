import City from "./city_interface";

export default class CitiesTableGenerator {
  constructor(public cities: City[]) {}

  GenerateCityList(): HTMLUListElement {
    const ulElem = document.createElement("ul");
    const citiesLiElems = this.cities.map((city) => {
      const liElem = document.createElement("li");
      liElem.textContent = `${city.city} - ${city.zipCode}`;
      return liElem;
    });

    citiesLiElems.forEach((liElem) => {
      ulElem.append(liElem);
    });

    return ulElem;
  }
}
