import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  const elements = routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
  ));

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {elements}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;