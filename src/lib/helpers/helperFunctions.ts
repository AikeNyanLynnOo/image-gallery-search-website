export const formatISOtoDate = (isoString: string, splitter: string) => {
  const date = new Date(isoString);
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);

  return [day, month, date.getFullYear()].join(splitter);
};

export const numberWithCommas = (num: number) => {
  if (num) {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return 0;
};

export const paramsToObject = (
  entries: Iterable<[string, string]>
): Record<string, string> => {
  const result: Record<string, string> = {};
  for (const [key, value] of entries) {
    result[key] = value;
  }
  return result;
};

export const sleep = (ms: number) =>
  new Promise((res) => {
    return setTimeout(res, ms);
  });

export const extractMessage = ({ key, data }: any) => {
  return data
    .filter((item: any) => item.field === key)
    .map((item: any) => item.message)
    .join(", ");
};

export const formatNumber = (num?: number) => {
  if (num && num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
};
