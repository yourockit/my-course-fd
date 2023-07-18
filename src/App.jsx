import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/Home'));
const HtmlCssPage = lazy(() => import('./pages/HtmlCss'));
// const JsPage = lazy(() => import('./pages/Js'));
// const ReactPage = lazy(() => import('./pages/React'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="html-css" element={<HtmlCssPage />} />
        {/* <Route path="js" element={<JsPage />} />
        <Route path="react" element={<ReactPage />} /> */}
      </Route>
    </Routes>
  );
};
