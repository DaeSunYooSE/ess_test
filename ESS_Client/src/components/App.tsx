import React from 'react';
import Main from './Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
