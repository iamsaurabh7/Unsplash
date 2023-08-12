let searchImages = async (api_key, query) => {
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${api_key}&query=${query}&per_page=35`
    );
    let resData = await res.json();
    return resData;
  } catch (error) {
    console.log(error);
  }
};

let appendData = async (data, container) => {
  data.forEach(({ alt_description, urls: { regular } }) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    let description = document.createElement("p");

    image.src = regular;
    description.innerText = alt_description;

    div.append(image, description);
    container.append(div);
  });
};

export { searchImages, appendData };
