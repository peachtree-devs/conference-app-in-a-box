import { Platform, Dimensions } from 'react-native'

const dimensions = Dimensions.get('window')
const logo = require('./assets/logo.jpg')

const primary = '#000000';
const primaryLight = '#62C1E9';
const primaryDark = '#000000';
const primaryOpaque = '#EFAA6F';

const primaryText = 'white';

const highlight = '#ffffff';

const colors = {
  primary,
  highlight,
  primaryLight,
  primaryDark,
  primaryOpaque,
  primaryText
};

const typography = {
  primary: "Gotham Rounded",
  secondary: "Gotham Rounded",
  medium: "GothamRnd Medium",
  bold: "Gotham Bold"
};


export {
  colors,
  typography,
  dimensions,
  logo
}
