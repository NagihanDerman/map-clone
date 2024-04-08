// ! tipi analiz edip ona gore fonksiyonu cagirildigi yere tipe denk gelen aciklayi gonderme
export const detecType = (type) => {
  switch (type) {
    case "park":
      return "Park Yeri";
    case "home":
      return "Ev";
    case "goto":
      return "Ziyaret Edilecek";
  }
};

export const setStorage = (data) => {
  // veriyi lokale gondermek icin stringe cevirme
  const strData = JSON.stringify(data);
  // localstorage guncelleme
  localStorage.setItem("notes", strData);
};

var carIcon = L.icon({
  iconUrl: "car.png",
  iconSize: [50, 50],
});

var homeIcon = L.icon({
  iconUrl: "home-marker.png",
  iconSize: [50, 50],
});

var jobIcon = L.icon({
  iconUrl: "job.png",
  iconSize: [50, 50],
});

var visitIcon = L.icon({
  iconUrl: "visit.png",
  iconSize: [50, 50],
});

export function detecIcon(type) {
  console.log(type);
  switch (type) {
    case "park":
      return carIcon;
    case "home":
      return homeIcon;
    case "job":
      return jobIcon;
    case "goto":
      return visitIcon;
  }
}
