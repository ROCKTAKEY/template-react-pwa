import React, { useState, useEffect, useMemo } from "react";
import { useTranslation, Trans } from "react-i18next";
import {
  Button,
  createTheme,
  Link,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, RouterLink, RouterSwitch } from "./router";

const src = "src/App.tsx";

const preferedTheme: PaletteMode = window.matchMedia(
  "(prefers-color-scheme: light)"
)
  ? "light"
  : "dark";
const storedTheme: string | null = localStorage.getItem("theme");
const defaultTheme: PaletteMode =
  storedTheme && (storedTheme === "light" || storedTheme === "dark")
    ? storedTheme
    : preferedTheme;

function AppHeader(props: {
  toggleTheme: () => void;
  toggleLanguage: () => void;
}) {
  const { toggleTheme, toggleLanguage } = props;
  const [t] = useTranslation();

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <Trans i18nKey="EditSrcAndSaveToReload">
          Edit <code>{{ src }}</code> and save to reload.
        </Trans>
      </p>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("LearnReact")}
      </Link>
      <Button variant="contained" name="language" onClick={toggleLanguage}>
        toggle language
      </Button>
      <Button name="theme" onClick={toggleTheme}>
        toggle Theme
      </Button>
      <Button component={RouterLink} to="/hello">
        Hello world.
      </Button>
    </header>
  );
}

function Hello() {
  return (
    <div className="hello">
      <p>Hello!</p>
      <Button component={RouterLink} to="/" color="success" variant="outlined">
        return to home
      </Button>
    </div>
  );
}

function App() {
  // i18n
  const [, i18n] = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  // theming
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(defaultTheme);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: paletteMode,
        },
      }),
    [paletteMode]
  );
  useEffect(() => {
    localStorage.setItem("theme", paletteMode);
  }, [paletteMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <RouterSwitch>
            <Route
              exact
              path="/"
              render={() => (
                <AppHeader
                  toggleTheme={() => {
                    setPaletteMode(
                      (prevPaletteMode): PaletteMode =>
                        prevPaletteMode === "dark" ? "light" : "dark"
                    );
                  }}
                  toggleLanguage={() => {
                    setLanguage(language === "en" ? "ja" : "en");
                  }}
                />
              )}
            />
            <Route exact path="/hello" component={Hello} />
          </RouterSwitch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
