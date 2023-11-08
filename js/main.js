const cards = [
  {
    title: "Título do Filme 1",
    imgURL: "public/images/series/achamada.jpeg",
    altText: "filme1",
  },
  {
    title: "Título do Filme 2",
    imgURL: "public/images/series/breaking-bad.jpg",
    altText: "filme2",
  },
  {
    title: "Título do Filme 3",
    imgURL: "public/images/series/got.jpg",
    altText: "filme3",
  },
  {
    title: "Título do Filme 4",
    imgURL: "public/images/series/megatubarao.jpeg",
    altText: "filme4",
  },
  {
    title: "Título do Filme 5",
    imgURL: "public/images/series/missaodesobrevivencia.jpeg",
    altText: "filme5",
  },
  {
    title: "Título do Filme 6",
    imgURL: "public/images/series/ordem-filmes-harry-potter.jpg",
    altText: "filme6",
  },
];

function gridProduct() {
  let html = "";
  const containerGrid = document.querySelector(".grid__container");
  cards.map((card) => {
    let hmtlAdd = `<div class="card__movie">
                    <img class="img__movie" src=${card.imgURL} alt="filme5">
                    </div>`;
    html += hmtlAdd;
  });
  containerGrid.innerHTML = html;
}

gridProduct();
