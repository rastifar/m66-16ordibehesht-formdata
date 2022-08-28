import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import themeLight from "./light";
import darkTheme from "./dark";

function ThemeProviderApp(props) {
  const mode = useSelector(state => state.theme.mode)

  return (
      <ThemeProvider theme={mode==="dark" ?darkTheme: themeLight }>
          {props.children}
      </ThemeProvider> 
  );
}

export default ThemeProviderApp;
