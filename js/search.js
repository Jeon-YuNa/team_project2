import { data } from "./data.js";

const arrive = document.querySelector(".arrive");
const travel = document.querySelector("#travel");
const travelList = document.querySelector("#travelList");
const arriveEn = document.querySelector("#arriveEn");
const arriveKo = document.querySelector("#arriveKo");
const peoplePlus = document.querySelectorAll(".plus");
const peopleMinus = document.querySelectorAll(".minus");

// 여행할 지역창 보여주기
arrive.addEventListener("click", () => {
  travel.style.setProperty("display", "block");
});

// 여행할 지역 선택
const a = data.map(({ destination, air }) => ({
  destination,
  air,
}));
const travelListBtn = [...new Set(a.map((v) => JSON.stringify(v)))].map((v) =>
  JSON.parse(v)
);

// [
//   ...new Set(
//     data.map((v) => {
//       const { destination, air } = v;
//       return { destination, air };
//     })
//   ),
// ]
travelListBtn.forEach((v) => {
  //여행할 지역 리스트화
  const list = document.createElement("li");
  travelList.appendChild(list);
  list.innerHTML = v.destination;

  //클릭했을때 데이터값 HTML에넣어줌
  list.addEventListener("click", () => {
    travel.style.setProperty("display", "none");

    arriveKo.innerHTML = v.destination;
    travelListBtn.destination == v.innerHTML
      ? (arriveEn.innerHTML = v.air)
      : (arriveEn.innerHTML = "");
  });
});

// 인원수 추가
peoplePlus.forEach((v) => {
  v.addEventListener("click", () => {
    let num = v.parentElement.children[0];
    num.innerHTML = `${Number(num.innerHTML) + 1}`;
  });
});
// 인원수 빼기
peopleMinus.forEach((v) => {
  v.addEventListener("click", () => {
    let num = v.parentElement.children[0];
    num.innerHTML > 0
      ? (num.innerHTML = Number(num.innerHTML) - 1)
      : (num.innerHTML = "0");
  });
});
