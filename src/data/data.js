export const labels = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Coahuila",
  "Colima",
  "Chiapas",
  "Chihuahua",
  "Durango",
  "CDMX",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "México",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

export const years = [2015, 2016, 2017, 2018, 2019, 2020];
const arrayObj2015 = labels.map((d, i) => {
  return {
    year: 2015,
    label: d,
    data: labels.map(() => Math.random())[i] || 0,
  };
});
const arrayObj2016 = labels.map((d, i) => {
  return {
    year: 2016,
    label: d,
    data: labels.map(() => Math.random())[i] || 0,
  };
});
const arrayObj2017 = labels.map((d, i) => {
  return {
    year: 2017,
    label: d,
    data: labels.map(() => Math.random())[i] || 0,
  };
});
const arrayObj2018 = labels.map((d, i) => {
  return {
    year: 2018,
    label: d,
    data: labels.map(() => Math.random())[i] || 0,
  };
});
const arrayObj2019 = labels.map((d, i) => {
  return {
    year: 2019,
    label: d,
    data: labels.map(() => Math.random())[i] || 0,
  };
});

const arrayObj2020 = labels.map((d, i) => {
  return {
    year: 2020,
    label: d,
    data: labels.map(() => Math.random())[i] || 0,
  };
});

export const arrayObj = arrayObj2015
  .concat(arrayObj2016)
  .concat(arrayObj2017)
  .concat(arrayObj2018)
  .concat(arrayObj2019)
  .concat(arrayObj2020);
