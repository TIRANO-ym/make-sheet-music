import { createContext, useContext } from "react";

const light = {
  backgroundColor: '#fff',
  textColor: 'black',
  hoverColor: 'rgba(0, 0, 0, 0.055)',
  selectedColor: 'rgba(0, 0, 0, 0.1)',
  modal: {
    backgroundColor: 'white'
  },
  photoBgColor: '#00000020',
  labelColor: 'rgb(148, 121, 181)',
  inputBgColor: '#00000020',
  disabledBgColor: 'rgb(140, 140, 140)',
  submitBtnBgColor: 'rgb(99, 80, 122)'
};

const dark = {
  backgroundColor: '#292929',
  textColor: 'white',
  hoverColor: 'rgba(255, 255, 255, 0.055)',
  selectedColor: 'rgba(255, 255, 255, 0.1)',
  modal: {
    backgroundColor: 'rgb(30, 30, 30)'
  },
  photoBgColor: '#ffffff50',
  labelColor: 'rgb(170, 144, 202)',
  inputBgColor: '#00000070',
  disabledBgColor: 'rgb(80, 80, 80)',
  submitBtnBgColor: 'rgb(99, 80, 122)'
};

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const theme = {
  light,
  dark,
};

export default theme;