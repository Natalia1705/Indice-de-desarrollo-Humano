//calculating the bottom Card data

// Calculating the average of IDH
export const average = (array) => {
  let total = 0;
  array.map(({ data }) => (total += data));
  return total / array.length;
};

// Calculating the max data of IDH
export const max = (array) =>
  Math.max.apply(
    Math,
    array.map((idh) => {
      return idh.data;
    })
  );

// Calculating the min data of IDH
export const min = (array) =>
  Math.min.apply(
    Math,
    array.map((idh) => {
      return idh.data;
    })
  );
