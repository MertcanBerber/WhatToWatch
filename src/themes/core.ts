import { DefaultTheme } from 'styled-components/native';

const primary100 = '#ffece8';
const primary500 = '#e5bbb2';

const colors = {
  primary100,
  primary300: '#ffd0c6',
  primary500,
  dark400: '#383D49',
  dark600: '#22252C',
  dark700: '#17191E',
  dark800: '#121418',
  dark900: '#010101',
  light400: '#AFB1B6',
  light600: '#C3C4C8',
  light700: '#D7D8DA',
  light800: '#EBEBEC',
  light900: '#FFFFFF',
  yellow: '#FFDB00',
  genres: {
    default: [primary500, primary100],
    10759: ['#6400b6', '#00a308'],
    12: ['#00a308', '#54ff5d'],
    28: ['#6400b6', '#b254ff'],
    16: ['#fcc009', '#fdcf43'],
    35: ['#09bffc', '#6ad8fd'],
    80: ['#c60022', '#ff294e'],
    99: ['#179f7b', '#1dcc9e'],
    18: ['#fb61e2', '#fdb9f2'],
    10751: ['#0022c6', '#294eff'],
    14: ['#eece01', '#fee12c'],
    36: ['#ed4e00', '#ff7c3c'],
    27: ['#ef233c', '#f2485c'],
    10762: ['#66cc00', '#8dff1c'],
    9648: ['#80503e', '#a86951'],
    10402: ['#66cc00', '#8dff1c'],
    10763: ['#708b97', '#9cafb7'],
    10764: ['#7251b5', '#a06cd5'],
    10749: ['#c60085', '#ff29b9'],
    10766: ['#c60085', '#ff29b9'],
    878: ['#6ead8f', '#a0c9b5'],
    10765: ['#6ead8f', '#fee12c'],
    10767: ['#004e98', '#006cd3'],
    53: ['#003e1f', '#006533'],
    10770: ['#004e98', '#006cd3'],
    10752: ['#a4931e', '#d6c027'],
    10768: ['#a4931e', '#d6c027'],
    37: ['#fe4e00', '#ff763a']
  }
};

export const coreTheme: DefaultTheme = {
  colors: {
    ...colors,
    behind: colors.dark800,
    behindRgba: 'rgba(18, 20, 24, 1)',
    behindOpacityRgba: 'rgba(18, 20, 24, 0.5)',
    ahead: colors.dark700,
    border: colors.dark600,
    opacity: 'rgba(1, 1, 1, 0.2)',
    thumbBackground: colors.dark600
  },
  fontSizes: {
    h0: 40,
    h1: 20,
    h2: 16,
    h3: 12,
    h4: 10,
    subtitle1: 12,
    subtitle2: 11,
    subtitle3: 9,
    link: 12,
    text: 13
  },
  fontLineHeights: {
    h0: 46,
    h1: 30,
    h2: 22,
    h3: 18,
    h4: 16,
    subtitle1: 18,
    subtitle2: 16,
    subtitle3: 15,
    link: 18,
    text: 19
  },
  fontWeights: {
    h0: 'bold',
    h1: 'bold',
    h2: 'bold',
    h3: 'bold',
    h4: 'bold',
    subtitle1: 'regular',
    subtitle2: 'regular',
    subtitle3: 'regular',
    link: 'regular',
    text: 'regular'
  },
  fontColors: {
    subtitle1: colors.light400,
    subtitle2: colors.light400,
    subtitle3: colors.light400
  },
  space: {
    xxs: 3,
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 25,
    xxl: 50
  },
  radii: {
    md: 4
  }
};
