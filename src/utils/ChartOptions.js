//Conditional BackgroundColor(diferent color in selectedState column)
export const selectBackgroundColor = (newStates, selectedState) => {
  const backgroundColor = [];
  for (let i = 0; i < newStates.length; i++) {
    if (newStates[i] === selectedState) {
      backgroundColor.push("rgba(223,63,34,0.9)");
    } else {
      backgroundColor.push("rgba(32, 153, 62,0.9)");
    }
  }
  return backgroundColor;
};

//funtion tha returns the graph´height container depending on window Width
export const height = (windowWidth) => {
  return windowWidth < 480 ? "700px" : "360px";
};

//Chart options (idexAxis:"y" is added for vertical graph)
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const optionsAbr = {
  indexAxis: "y",
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

//function that return an object with the description of attributes (as arguments)
export const newData = (newStates, newidhData, backgroundColor) => {
  const data = {
    labels: newStates,
    datasets: [
      {
        label: "IDH",
        data: newidhData,
        backgroundColor,
        borderRadius: "3",
      },
    ],
  };
  return data;
};
