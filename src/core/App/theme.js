const colorNames = {
  whiteLilac: "#FBFBFE", //background
  slateGray: "#6E7E91", //textColorLight
  scienceBlue: "#0366D6", //buttonBackground
  iron: "#D1D5DA", //buttonThemeBackground
  white: "#FFFFFF", //buttonText
  blue: "#2517EB", //buttonFocus
  anakiwa: "#8CC2FF", //buttonFocusShadow
  mercury: "#E5E5E5", //themeSwitch
  bluemine: "#1F5189",
  dodgerBlue: "#2188FF",
  shipCove: "#6D93BE",
  tropicalBlue: "#CDE0F7",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  porcelain: "#F2F3F4",
  doveGray: "#6D6D6D",
  tundora: "#414141",
  mineShaft: "#252525",
  mineShaftLighter: "#313131",
};

const common = {
  breakpoints: {
    mobile: 767,
    tabletVertical: 991,
    tabletHorizontal: 1199,
  },
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  borderRadiusSmall: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.scienceBlue,
    textPrimary: colorNames.mineShaft,
    site: {
      background: colorNames.whiteLilac,
      text: colorNames.slateGray,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.anakiwa,
    },
    boxBackground: colorNames.white,
    headerLine: colorNames.mercury,
    tile: {
      border: colorNames.porcelain,
      borderHover: colorNames.tropicalBlue,
      header: colorNames.scienceBlue,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.shipCove,
    },
    boxBackground: colorNames.mineShaftLighter,
    headerLine: colorNames.tundora,
    tile: {
      border: colorNames.tundora,
      borderHover: colorNames.bluemine,
      header: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGray,
      icon: colorNames.mineShaft,
    },
  },
};
