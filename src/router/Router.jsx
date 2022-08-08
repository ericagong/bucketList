import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Create from "../pages/Create";
import Detail from "../pages/Detail";
import Edit from "../pages/Edit";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/detail/:post_id' element={<Detail />} />
        <Route path='/edit/:post_id' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
