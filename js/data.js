//항공사 랜덤
const companyList = [
  { name: "진에어", img: "img/JinAir.png" },
  { name: "대한항공", img: "img/Daehan.png" },
  { name: "아시아나항공", img: "img/Asiana.png" },
  { name: "티웨이항공", img: "img/TWay.png" },
  { name: "에어서울", img: "img/AirSeoul.png" },
  { name: "제주항공", img: "img/Jeju.png" },
  { name: "이스타항공", img: "img/EStar.png" },
];
const companyRandom = () =>
  companyList[Math.floor(Math.random() * companyList.length)];

//여행지 랜덤
const destList = [
  { Ko: "도쿄", En: "TYO" },
  { Ko: "오사카", En: "OSA" },
  { Ko: "후쿠오카", En: "FUK" },
  { Ko: "삿포로", En: "SAT" },
  { Ko: "오이타", En: "OIT" },
  { Ko: "가고시마", En: "KAG" },
];
const destRandom = () => destList[Math.floor(Math.random() * destList.length)];

//가격 랜덤
const randomPrice = () => Math.floor(Math.random() * 100 + 160) + "000";

//24시간 변경
const getHour = (x) => {
  if (x < 10) return "0" + x;
  else if (x == 24) return "00";
  else return x;
};
//60분 변경
const getMinute = (x) => {
  if (x < 10) return "0" + x;
  else if (x == 60) return "00";
  else return x;
};
//도착시간
const departureTime = () => {
  const Hour = getHour(Math.floor(Math.random() * 25));
  const Min = getMinute(Math.floor(Math.random() * 61));
  return [Hour, Min];
};
const getMonth = (min, max) => {
  const minMonth = Math.ceil(min);
  const maxMonth = Math.floor(max);
  return Math.floor(Math.random() * (maxMonth - minMonth + 1) + minMonth);
};
const getDay = (min, max) => {
  const minDay = Math.ceil(min);
  const maxDay = Math.floor(max);
  return Math.floor(Math.random() * (maxDay - minDay + 1) + minDay);
};
const MonthDay = () => {
  const month = getHour(getMonth(1, 6));
  const day = getMinute(getDay(1, 31));
  if (month % 2 ? day <= 31 : day <= 30) {
  } else if (month == 2) {
    day <= 28;
  }
  return [month, day];
};

export const data = Array(50000)
  .fill(0)
  .map(() => {
    const [hour, min] = departureTime();
    const { Ko, En } = destRandom();
    const [month, day] = MonthDay();
    const { name, img } = companyRandom();
    return {
      company: name, // 항공사
      companyImg: img, //항공사이미지
      price: randomPrice(), // 가격
      departureTime: `${hour}:${min}`, //출발시간
      arrivalTime: `${getHour(+hour + 2)}:${min}`, //도착시간
      destination: Ko, // 여행지
      air: En,
      date: `2025-${month}-${day}`,
    };
  })
  .sort((a, b) => {
    return (
      +a.departureTime.split(":").join("") -
      +b.departureTime.split(":").join("")
    );
  });

console.log({ data });
