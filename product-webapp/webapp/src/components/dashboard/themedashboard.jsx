import Dashboard from "./dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";

function ThemeDashboard() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
            <Dashboard />
        
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ThemeDashboard;