import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import { HomePage } from './pages/HomePage/HomePage';
import { NotFound } from './pages/NotFound/NotFound';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
