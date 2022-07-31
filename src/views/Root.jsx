import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import MainTemplate from 'templatess/MainTemplate';

import Notes from './Notes';
import Twitetrs from './Twitetrs';
import Articles from './Articles';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact path="/" element={<Notes />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/twitters" element={<Twitetrs />} />
          <Route path="/login" element={<Twitetrs />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
