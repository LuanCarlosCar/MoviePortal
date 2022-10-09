import moment from 'moment';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Detail from '../Pages/Detail';
import Home from '../Pages/Home';

export default function PageRoutes() {
  moment.updateLocale('pt', {
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhe/:movieId" element={<Detail />} />
    </Routes>
  );
}
