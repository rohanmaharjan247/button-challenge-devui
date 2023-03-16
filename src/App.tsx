import { Route, Routes } from 'react-router-dom';
import Layout from './component/common/Layout';
import ButtonComponent from './component/features/ButtonComponent';
import InputComponent from './component/features/InputComponent';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ButtonComponent />} />
          <Route path="/input" element={<InputComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
