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

export const prepareSlides = () => {
  const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
  const unsplashLink = (id, width, height) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

  const photos = [
    {
      id: "ts1zXzsD7xc",
      height: 100,
      width: 100,
    },
    {
      id: "F_r83HEzsXI",
      height: 1000,
      width: 1000,
    },
  ];

  return photos.map((photo) => {
    const width = photo.width * 4;
    const height = photo.height * 4;
    return {
      src: unsplashLink(photo.id, width, height),
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => {
        const breakpointHeight = Math.round((height / width) * breakpoint);
        return {
          src: unsplashLink(photo.id, breakpoint, breakpointHeight),
          width: breakpoint,
          height: breakpointHeight,
        };
      }),
    };
  });
};
