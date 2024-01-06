const dropdown1 = document.querySelectorAll(".dropdown");
dropdown1.forEach((drop) => {
  Object.keys(countryList).forEach((country) => {
    let option = document.createElement("option");
    option.classList.add("dropdown-content");
    drop.append(option);
    option.setAttribute("value", country);
    option.innerText = countryList[country];
  });
});

const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach((drop) => {
  drop.addEventListener("change", () => {
    let select = drop.options[drop.selectedIndex].innerText;
    if (dropdown[0] == drop) {
      img = document.querySelector("#img1");
    } else {
      img = document.querySelector("#img2");
    }
    img.setAttribute("src", `https://flagsapi.com/${select}/flat/64.png`);
  });
});

const getData = async (URLs) => {
  let response = await fetch(URLs);
  let Data = await response.json();
  return Data;
};

let btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  
  from_d = document.querySelector("#from");
  to_d = document.querySelector("#to");

  from = from_d.options[from_d.selectedIndex]
    .getAttribute("value")
    .toLowerCase();
  to = to_d.options[to_d.selectedIndex].getAttribute("value").toLowerCase();

  const URLs = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`;
  getData(URLs).then((Data) => {
    let v = Number(document.getElementById("t1").value);
    document.getElementById("t2").value = v * Data[to];
    console.log(Data[to], typeof Data[to]);
  });
});
