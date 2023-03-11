import { createContext, type PropsWithChildren, useState } from 'react';

export const ThemeContext = createContext({
  darkTheme: false,
  // eslint-disable-next-line no-empty-function, @typescript-eslint/no-empty-function
  setDarkTheme: (theme: boolean) => {},
});

export const ThemeContextProvider = (props: PropsWithChildren) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
