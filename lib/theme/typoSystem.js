export const notoInter = "'Inter', sans-serif";
export const notoRobo = "'Roboto-flex', sans-serif";

export const fontFunc = (fontFamily, fontSize, lineHeight, letterSpacing) => {
  return {
    fontFamily,
    fontSize,
    lineHeight,
    letterSpacing,
  };
};

const headline1 = () => fontFunc(notoInter, 48, "52px", "0.01em");
const headline2 = () => fontFunc(notoInter, 32, "36px", "0.01em");
const headline3 = () => fontFunc(notoInter, 24, "28px", "0.01em");
const headline4 = () => fontFunc(notoInter, 20, "24px", "0.01em");
const headline5 = () => fontFunc(notoInter, 18, "22px", "0.01em");
const headline6 = () => fontFunc(notoInter, 16, "20px", "0.01em");
const headline7 = () => fontFunc(notoInter, 14, "18px", "0.01em");

const subheadline1 = () => fontFunc(notoInter, 20, "24px", "0.01em");
const subheadline2 = () => fontFunc(notoInter, 18, "22px", "0.01em");
const subheadline3 = () => fontFunc(notoInter, 14, "18px", "0.01em");
const subheadline4 = () => fontFunc(notoInter, 12, "16px", "0.01em");

const label = () => fontFunc(notoRobo, 8, "12px", "initial");

const body1 = () => fontFunc(notoRobo, 18, "22px", "0.01em");
const body2 = () => fontFunc(notoRobo, 16, "20px", "0.01em");
const body3 = () => fontFunc(notoRobo, 14, "18px", "0.01em");
const body4 = () => fontFunc(notoRobo, 12, "16px", "0.01em");

const btnL = () => fontFunc(notoInter, 18, "22px", "initial");
const btnM = () => fontFunc(notoInter, 16, "20px", "initial");
const btnS = () => fontFunc(notoInter, 14, "18px", "initial");
const btnXs = () => fontFunc(notoInter, 12, "16px", "initial");

const owText = () => fontFunc(notoRobo, 12, "14px", "initial");

export const typoSystem = {
  fontFamily: [notoInter, notoRobo, "-apple-system", "Arial"].join(","),
  headline1Regular: {
    ...headline1(),
    fontWeight: 400,
  },
  headline1Semibold: {
    ...headline1(),
    fontWeight: 600,
  },
  headline1Bold: {
    ...headline1(),
    fontWeight: 700,
  },

  headline2Regular: {
    ...headline2(),
    fontWeight: 400,
  },
  headline2Semibold: {
    ...headline2(),
    fontWeight: 600,
  },
  headline2Bold: {
    ...headline2(),
    fontWeight: 700,
  },

  headline3Regular: {
    ...headline3(),
    fontWeight: 400,
  },
  headline3Semibold: {
    ...headline3(),
    fontWeight: 600,
  },
  headline3Bold: {
    ...headline3(),
    fontWeight: 700,
  },

  headline4Regular: {
    ...headline4(),
    fontWeight: 400,
  },
  headline4Semibold: {
    ...headline4(),
    fontWeight: 600,
  },
  headline4Bold: {
    ...headline4(),
    fontWeight: 700,
  },

  headline5Regular: {
    ...headline5(),
    fontWeight: 400,
  },
  headline5Semibold: {
    ...headline5(),
    fontWeight: 600,
  },
  headline5Bold: {
    ...headline5(),
    fontWeight: 700,
  },

  headline6Regular: {
    ...headline6(),
    fontWeight: 400,
  },
  headline6Semibold: {
    ...headline6(),
    fontWeight: 600,
  },
  headline6Bold: {
    ...headline6(),
    fontWeight: 700,
  },

  headline7Regular: {
    ...headline7(),
    fontWeight: 400,
  },
  headline7Semibold: {
    ...headline7(),
    fontWeight: 600,
  },
  headline7Bold: {
    ...headline7(),
    fontWeight: 700,
  },
  /// end Headline
  subheadline1Regular: {
    ...subheadline1(),
    fontWeight: 400,
  },
  subheadline1Semibold: {
    ...subheadline1(),
    fontWeight: 600,
  },
  subheadline1Bold: {
    ...subheadline1(),
    fontWeight: 700,
  },

  subheadline2Regular: {
    ...subheadline2(),
    fontWeight: 400,
  },
  subheadline2Semibold: {
    ...subheadline2(),
    fontWeight: 600,
  },
  subheadline2Bold: {
    ...subheadline2(),
    fontWeight: 700,
  },

  subheadline3Regular: {
    ...subheadline3(),
    fontWeight: 400,
  },
  subheadline3Semibold: {
    ...subheadline3(),
    fontWeight: 600,
  },
  subheadline3Bold: {
    ...subheadline3(),
    fontWeight: 700,
  },

  subheadline4Regular: {
    ...subheadline4(),
    fontWeight: 400,
  },
  subheadline4Semibold: {
    ...subheadline4(),
    fontWeight: 600,
  },
  subheadline4Bold: {
    ...subheadline4(),
    fontWeight: 700,
  },
  /// end subhadline

  body1Regular: {
    ...body1(),
    fontWeight: 400,
  },
  body1Medium: {
    ...body1(),
    fontWeight: 500,
  },
  body1Semibold: {
    ...body1(),
    fontWeight: 600,
  },
  body1Bold: {
    ...body1(),
    fontWeight: 700,
  },

  body2Regular: {
    ...body2(),
    fontWeight: 400,
  },
  body2Medium: {
    ...body2(),
    fontWeight: 500,
  },
  body2Semibold: {
    ...body2(),
    fontWeight: 600,
  },
  body2Bold: {
    ...body2(),
    fontWeight: 700,
  },

  body3Regular: {
    ...body3(),
    fontWeight: 400,
  },
  body3Medium: {
    ...body3(),
    fontWeight: 500,
  },
  body3Semibold: {
    ...body3(),
    fontWeight: 600,
  },
  body3Bold: {
    ...body3(),
    fontWeight: 700,
  },

  body4Regular: {
    ...body4(),
    fontWeight: 400,
  },
  body4Medium: {
    ...body4(),
    fontWeight: 500,
  },
  body4Semibold: {
    ...body4(),
    fontWeight: 600,
  },
  body4Bold: {
    ...body4(),
    fontWeight: 700,
  },
  // end Body
  btnLRegular: {
    ...btnL(),
    fontWeight: 400,
  },
  btnLMedium: {
    ...btnL(),
    fontWeight: 500,
  },
  btnLSemibold: {
    ...btnL(),
    fontWeight: 600,
  },

  btnMRegular: {
    ...btnM(),
    fontWeight: 400,
  },
  btnMMedium: {
    ...btnM(),
    fontWeight: 500,
  },
  btnMSemibold: {
    ...btnM(),
    fontWeight: 600,
  },

  btnXsRegular: {
    ...btnXs(),
    fontWeight: 400,
  },
  btnXsMedium: {
    ...btnXs(),
    fontWeight: 500,
  },
  btnXsSemibold: {
    ...btnXs(),
    fontWeight: 600,
  },

  btnSRegular: {
    ...btnS(),
    fontWeight: 400,
  },
  btnSMedium: {
    ...btnS(),
    fontWeight: 500,
  },
  btnSSemibold: {
    ...btnS(),
    fontWeight: 600,
  },

  // end btn

  placeholder: {
    ...subheadline3(),
    fontWeight: 400,
  },
  description: {
    ...owText(),
    fontWeight: 400,
  },
  title: {
    ...owText(),
    fontWeight: 600,
  },
  label: {
    ...owText(),
    fontWeight: 300,
  },
  labelSemibold: {
    ...label(),
    fontWeight: 600,
  },
};
