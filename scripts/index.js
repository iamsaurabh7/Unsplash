import navbar from "../components/navbar.js";
import { appendData, searchImages } from "./search.js";

let navbar1 = document.querySelector(".navbar");
navbar1.innerHTML = navbar();

const api_key = "8WxDBIuc9ETLYR7E-71VgK44Ke7e3lusM_s8A-pqO2k";

let search = async (event) => {
  if (event.key === "Enter") {
    let query = document.getElementById("query").value;
    let data = await searchImages(api_key, query);
    let container = document.querySelector(".container");
    container.innerHTML = null;
    appendData(data.results, container);
  }
};

document.getElementById("query").addEventListener("keypress", search);
