import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

const ButtonToggleTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  function changeTheme() {
    setDarkTheme(!darkTheme);
  }
  return <button onClick={changeTheme}>Ativar modo noturno</button>;
};

export default ButtonToggleTheme;
