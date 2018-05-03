// なんか汚い
const place = locationInfo["LocalityName"]; // 例："Santa Monica"
if (!place) {
  place = locationInfo["SubAdministrativeAreaName"]; // 例："Los Angeles"
}
if (!place) {
  place = locationInfo["AdministrativeAreaName"]; // 例："California"
}
if (!place) {
  place = "Middle-of-Nowhere";
}
if (locationInfo["CountryName"]) {
  place += ", " + locationInfo["CountryName"]; // 例："USA"
} else {
  place += ", Planet Earth";
}
return place;

/*******************
 改善例
********************/
// 同種のタスクを１箇所にまとめる

// locationInfoから値を抽出する
const town = locationInfo["LocalityName"]; // 例："Santa Monica"
const city = locationInfo["SubAdministrativeAreaName"]; // 例："Los Angeles"
const state = locationInfo["AdministrativeAreaName"]; // 例："California"
const country = locationInfo["CountryName"]; // 例："USA"

// 「都市」の優先順位を調べる
let secondHalf = "Planet Earth";
if (country) {
  secondHalf = country;
}
if (state && country === "USA") {
  secondHalf = state;
}

// 「国」の優先順位を調べる
let firstHalf = "Middle-of-Nowhere";
if (state && country !== "USA") {
  firstHalf = state;
}
if (city) {
  firstHalf = city;
}
if (town) {
  firstHalf = town;
}

// かっこいい書き方
const town = locationInfo["LocalityName"]; // 例："Santa Monica"
const city = locationInfo["SubAdministrativeAreaName"]; // 例："Los Angeles"
const state = locationInfo["AdministrativeAreaName"]; // 例："California"
const country = locationInfo["CountryName"]; // 例："USA"

const firstHalf, secondHalf;

if (country === "USA") {
  firstHalf = town || city || "Middle-of-Nowhere";
  secondHalf = state || "USA";
} else {
  firstHalf = town || city || state || "Middle-of-Nowhere";
  secondHalf = country || "Planet Earth";
}
