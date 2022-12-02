import './App.css';

import { Route, Routes } from 'react-router-dom'
import LayoutHeader from './components/Layouts/layoutHeader';
import MotoPage from './components/allPages/motoPage/motoPage';
import CarPage from './components/allPages/carsPage/carPage';
import ImplantPage from './components/allPages/implantPage/implantPage';
import OpinionPage from './components/allPages/opinionPage/opinionPage';
import MainScreen from './components/allPages/mainScreen/mainScreen';
import BasketPage from './components/allPages/basketPage/basketPage';

function App() {
  return (

    <Routes>
    <Route path={'/'} element={<LayoutHeader/>}>
      <Route index element={<MainScreen/>} />
      <Route path={'/motoPage'} element={<MotoPage/>} /> 
      <Route path={'/carPage'} element={<CarPage/>} /> 
      <Route path={'/implantPage'} element={<ImplantPage/>} /> 
      <Route path={'/opinion'} element={<OpinionPage/>} /> 
      <Route path={'/basket'}/>
      <Route path={'/implantPage/:id'} element={<BasketPage/>} />
      <Route path={'/carPage/:id'} element={<BasketPage/>} />
      <Route path={'/motoPage/:id'} element={<BasketPage/>} />
      <Route path={'implantPage/opinion'} element={<OpinionPage/>} /> 
      <Route path={'carPage/opinion'} element={<OpinionPage/>} /> 
      <Route path={'motoPage/opinion'} element={<OpinionPage/>} /> 
      </Route>
 </Routes>
  );
}

export default App;
