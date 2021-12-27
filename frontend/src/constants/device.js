export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `screen and (min-width: ${size.mobileS}px)`,
  mobileM: `screen and (min-width: ${size.mobileM}px)`,
  mobileL: `screen and (min-width: ${size.mobileL}px)`,
  tablet: `screen and (min-width: ${size.tablet}px)`,
  laptop: `screen and (min-width: ${size.laptop}px)`,
  laptopL: `screen and (min-width: ${size.laptopL}px)`,
  desktop: `screen and (min-width: ${size.desktop}px)`,
  desktopL: `screen and (min-width: ${size.desktop}px)`,
};
