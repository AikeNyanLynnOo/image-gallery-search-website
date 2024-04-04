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
  owHeadline1Regular: {
    ...headline1(),
    fontWeight: 400,
  },
  owHeadline1Semibold: {
    ...headline1(),
    fontWeight: 600,
  },
  owHeadline1Bold: {
    ...headline1(),
    fontWeight: 700,
  },

  owHeadline2Regular: {
    ...headline2(),
    fontWeight: 400,
  },
  owHeadline2Semibold: {
    ...headline2(),
    fontWeight: 600,
  },
  owHeadline2Bold: {
    ...headline2(),
    fontWeight: 700,
  },

  owHeadline3Regular: {
    ...headline3(),
    fontWeight: 400,
  },
  owHeadline3Semibold: {
    ...headline3(),
    fontWeight: 600,
  },
  owHeadline3Bold: {
    ...headline3(),
    fontWeight: 700,
  },

  owHeadline4Regular: {
    ...headline4(),
    fontWeight: 400,
  },
  owHeadline4Semibold: {
    ...headline4(),
    fontWeight: 600,
  },
  owHeadline4Bold: {
    ...headline4(),
    fontWeight: 700,
  },

  owHeadline5Regular: {
    ...headline5(),
    fontWeight: 400,
  },
  owHeadline5Semibold: {
    ...headline5(),
    fontWeight: 600,
  },
  owHeadline5Bold: {
    ...headline5(),
    fontWeight: 700,
  },

  owHeadline6Regular: {
    ...headline6(),
    fontWeight: 400,
  },
  owHeadline6Semibold: {
    ...headline6(),
    fontWeight: 600,
  },
  owHeadline6Bold: {
    ...headline6(),
    fontWeight: 700,
  },

  owHeadline7Regular: {
    ...headline7(),
    fontWeight: 400,
  },
  owHeadline7Semibold: {
    ...headline7(),
    fontWeight: 600,
  },
  owHeadline7Bold: {
    ...headline7(),
    fontWeight: 700,
  },
  /// end Headline
  owSubheadline1Regular: {
    ...subheadline1(),
    fontWeight: 400,
  },
  owSubheadline1Semibold: {
    ...subheadline1(),
    fontWeight: 600,
  },
  owSubheadline1Bold: {
    ...subheadline1(),
    fontWeight: 700,
  },

  owSubheadline2Regular: {
    ...subheadline2(),
    fontWeight: 400,
  },
  owSubheadline2Semibold: {
    ...subheadline2(),
    fontWeight: 600,
  },
  owSubheadline2Bold: {
    ...subheadline2(),
    fontWeight: 700,
  },

  owSubheadline3Regular: {
    ...subheadline3(),
    fontWeight: 400,
  },
  owSubheadline3Semibold: {
    ...subheadline3(),
    fontWeight: 600,
  },
  owSubheadline3Bold: {
    ...subheadline3(),
    fontWeight: 700,
  },

  owSubheadline4Regular: {
    ...subheadline4(),
    fontWeight: 400,
  },
  owSubheadline4Semibold: {
    ...subheadline4(),
    fontWeight: 600,
  },
  owSubheadline4Bold: {
    ...subheadline4(),
    fontWeight: 700,
  },
  /// end subhadline

  owBody1Regular: {
    ...body1(),
    fontWeight: 400,
  },
  owBody1Medium: {
    ...body1(),
    fontWeight: 500,
  },
  owBody1Semibold: {
    ...body1(),
    fontWeight: 600,
  },
  owBody1Bold: {
    ...body1(),
    fontWeight: 700,
  },

  owBody2Regular: {
    ...body2(),
    fontWeight: 400,
  },
  owBody2Medium: {
    ...body2(),
    fontWeight: 500,
  },
  owBody2Semibold: {
    ...body2(),
    fontWeight: 600,
  },
  owBody2Bold: {
    ...body2(),
    fontWeight: 700,
  },

  owBody3Regular: {
    ...body3(),
    fontWeight: 400,
  },
  owBody3Medium: {
    ...body3(),
    fontWeight: 500,
  },
  owBody3Semibold: {
    ...body3(),
    fontWeight: 600,
  },
  owBody3Bold: {
    ...body3(),
    fontWeight: 700,
  },

  owBody4Regular: {
    ...body4(),
    fontWeight: 400,
  },
  owBody4Medium: {
    ...body4(),
    fontWeight: 500,
  },
  owBody4Semibold: {
    ...body4(),
    fontWeight: 600,
  },
  owBody4Bold: {
    ...body4(),
    fontWeight: 700,
  },
  // end Body
  owBtnLRegular: {
    ...btnL(),
    fontWeight: 400,
  },
  owBtnLMedium: {
    ...btnL(),
    fontWeight: 500,
  },
  owBtnLSemibold: {
    ...btnL(),
    fontWeight: 600,
  },

  owBtnMRegular: {
    ...btnM(),
    fontWeight: 400,
  },
  owBtnMMedium: {
    ...btnM(),
    fontWeight: 500,
  },
  owBtnMSemibold: {
    ...btnM(),
    fontWeight: 600,
  },

  owBtnXsRegular: {
    ...btnXs(),
    fontWeight: 400,
  },
  owBtnXsMedium: {
    ...btnXs(),
    fontWeight: 500,
  },
  owBtnXsSemibold: {
    ...btnXs(),
    fontWeight: 600,
  },

  owBtnSRegular: {
    ...btnS(),
    fontWeight: 400,
  },
  owBtnSMedium: {
    ...btnS(),
    fontWeight: 500,
  },
  owBtnSSemibold: {
    ...btnS(),
    fontWeight: 600,
  },

  // end btn

  owPlaceholder: {
    ...subheadline3(),
    fontWeight: 400,
  },
  owDescription: {
    ...owText(),
    fontWeight: 400,
  },
  owTitle: {
    ...owText(),
    fontWeight: 600,
  },
  owLabel: {
    ...owText(),
    fontWeight: 300,
  },
  owLabelSemibold: {
    ...label(),
    fontWeight: 600,
  },
};
