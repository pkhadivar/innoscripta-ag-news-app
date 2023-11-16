import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import { HomePage } from './pages/HomePage/HomePage';
import { DetailPage } from './pages/DetailPage/DetailPage';
import { NotFound } from './pages/NotFound/NotFound';
//import axios from 'axios';


function App() {
  // const endpoints = [
  //   // 'https://api.github.com/users/ejirocodes',
  //   // 'https://api.github.com/users/ejirocodes/repos',
  //   // 'https://api.github.com/users/ejirocodes/followers',
  //   // 'https://api.github.com/users/ejirocodes/following'
  //   "https://newsapi.org/v2/everything?q=bitcoin&apiKey=e095c5a0dd354df3b7a01b173bb907fc",
  //   "https://content.guardianapis.com/search?api-key=bfdaac02-13eb-4315-814c-2d310abe8a86"
  // ];

  // axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
  //   axios.spread(({data: newsapi}, {data:guardian}) => {
  //     console.log({ newsapi, guardian });
  //   })
  // );


  return (
    <>
      {/* <HomeComponent /> */}
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/detail/:category' element={<DetailPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
