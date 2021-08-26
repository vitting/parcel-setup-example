import CitiesTableGenerator from "./json_functions";
import { v4 as uuidv4 } from 'uuid';
import data from "../json/cities.json";

window.addEventListener("DOMContentLoaded", (event) => {
  const insertButtonElem = document.querySelector("#addNameButton") as HTMLButtonElement;
  const guidButtonElem = document.querySelector("#addGuidButton") as HTMLButtonElement;
  const jsonButtonElem = document.querySelector("#addJsonButton") as HTMLButtonElement;

  insertButtonElem?.addEventListener("click", () => {
    const inputNameElem = document.querySelector(".input-name") as HTMLInputElement;
    const nameElem = document.querySelector(".name") as HTMLSpanElement;
    
    if (nameElem != null && inputNameElem != null) {
      nameElem.textContent = inputNameElem.value;

      inputNameElem.value = "";
    }
  });

  guidButtonElem?.addEventListener("click", () => {
    const guid = uuidv4();
    const guidElem = document.querySelector(".guid") as HTMLSpanElement;

    if (guidElem != null) {
        guidElem.textContent = guid;
    }
  });

  jsonButtonElem?.addEventListener("click", () => {
    const jsonContainerElem = document.querySelector(".json-container");
    const listGenerator = new CitiesTableGenerator(data.cities);

    if (jsonContainerElem != null) {
      jsonContainerElem.append(listGenerator.GenerateCityList());
    }
  });
});
