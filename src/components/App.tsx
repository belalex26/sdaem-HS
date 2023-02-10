import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import News from "../pages/news/news";
import NotPage from "../pages/not-page/not-page";
import Main from "../pages/main/main";
import Catalog from "../pages/catalog/catalog";
import Contacts from "../pages/contacts/contacts";
import NewsDetail from "../pages/news-detail/news-detail";
import Login from "../pages/login/login";
import Manual from "../pages/manual/manual";
import Auth from "../pages/auth/auth";
import Tarif from "../pages/tarif/tarif";
import Confirmation from "../pages/confirmation/confirmation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<News />} />
        <Route path='/main' element={<Main/>} />
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/manual' element={<Manual/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='news/:id' element={<NewsDetail/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/confirm' element={<Confirmation />} />
        <Route path='/tarif' element={<Tarif />} />
        <Route path='*' element={<NotPage/>} />
      </Routes>
    </Router>
  );
}

export default App;