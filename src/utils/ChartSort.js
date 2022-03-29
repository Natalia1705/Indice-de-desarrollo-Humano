import { arrayObj } from "../data/data.js";

//Returns arrays with data ordered depending on type of sort selected
export const sortGraph = (selectedYear, sort) => {
  //Filters all objects with selected year
  const yearFilteredArray = arrayObj.filter((obj) => obj.year === selectedYear);

  let newStates = [];
  let newStatesAbr = [];
  let newidhData = [];

  if (sort === "Descendente") {
    let sortedState = yearFilteredArray.sort((a, b) => {
      return b.data - a.data;
    });
    sortedState.forEach((e) => {
      newStates.push(e.label);
      newStatesAbr.push(e.abr);
      newidhData.push(e.data);
    });
  }
  if (sort === "Ascendente") {
    let sortedState = yearFilteredArray.sort((a, b) => {
      return a.data - b.data;
    });
    sortedState.forEach((e) => {
      newStates.push(e.label);
      newStatesAbr.push(e.abr);
      newidhData.push(e.data);
    });
  }
  if (sort === "Alfabeticamente A-Z") {
    let sortedState = yearFilteredArray.sort((a, b) => {
      return a.label > b.label;
    });
    sortedState.forEach((e) => {
      newStates.push(e.label);
      newStatesAbr.push(e.abr);
      newidhData.push(e.data);
    });
  }
  return [newStates, newStatesAbr, newidhData];
};
