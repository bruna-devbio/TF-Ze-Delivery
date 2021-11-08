import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login/login';


function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/login' element={<Login/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
