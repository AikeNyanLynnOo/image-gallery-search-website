export const formatISOtoDate = (isoString, splitter) => {
  const date = new Date(isoString);
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);

  return [day, month, date.getFullYear()].join(splitter);
};

export const numberWithCommas = (number) => {
  if (number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return 0;
};

export const paramsToObject = (entries) => {
  const result = {};
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
};

export const sleep = (ms) =>
  new Promise((res) => {
    console.log("Sleeping");
    return setTimeout(res, ms);
  });
