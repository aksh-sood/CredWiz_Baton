import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Transaction from "./Transaction";

function ThemeTransaction() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
            <Transaction />
        
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ThemeTransaction;