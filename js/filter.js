const filterPage = document.querySelector("#filter");
const filterBtn = document.querySelector(".filter-btn");
const filterPrintBtn = document.querySelector("#filter button");
const airplanListCompany = document.querySelectorAll(".ticketCompany");
const filterInput = document.querySelectorAll("#filter input");
const ListContainer = document.querySelector("#airplaneInfoContainer");
filterBtn.addEventListener("click", () => {
  if (filterPage.style.display == "block") {
    filterPage.style.setProperty("display", "none");
  } else {
    filterPage.style.setProperty("display", "block");
  }
});
filterPrintBtn.addEventListener("click", () => {
  const airplanList = document.querySelectorAll(".ticketLayout");
  filterPage.style.setProperty("display", "none");
  ListContainer.innerHTML = "";
  [...airplanList].filter((x) => {
    filterInput.forEach((v) => {
      const { value, checked } = v;
      if (checked) {
        const filtering = x.innerHTML.includes(value);
        if (filtering) {
          return ListContainer.appendChild(x);
        }
      }
    });
  });
});
