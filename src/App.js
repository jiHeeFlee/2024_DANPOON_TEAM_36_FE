import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { RecoilRoot } from "recoil";

function App() {
  const elements = routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
  ));

  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Router>
          <Routes>
            {elements}
          </Routes>
        </Router>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
