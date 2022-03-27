//Conditional BackgroundColor
export const selectBackgroundColor = (newStates, selectedState) => {
  const backgroundColor = [];
  for (let i = 0; i < newStates.length; i++) {
    if (newStates[i] === selectedState) {
      backgroundColor.push("rgba(39,178,245,0.8)");
    } else {
      backgroundColor.push("rgba(196,39,245,0.8)");
    }
  }
  return backgroundColor;
};

//options
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const optionsAbr = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

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
