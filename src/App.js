import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes/router';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, [])
  return (
    <div>
      <RouterProvider
        router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
