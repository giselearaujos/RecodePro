
import './App.css';
import { lazy,Suspense } from 'react';

//import Slogan from './code-splitting/Slogan';
//import Rodape from './code-splitting/Rodape';

const Header = lazy(() => import ('./code-splitting/Header'));
const Slogan = lazy(() => import ('./code-splitting/Slogan'));
const Rodape = lazy(() => import ('./code-splitting/Rodape'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback = { <p>Carregando... Fotin!!</p> }>
          < Header />
        </Suspense>

        <Suspense fallback = { <p>Carregando... Perai!!</p> }>
          < Slogan />
        </Suspense>

        <Suspense fallback = { <p>Carregando... já que roda!!</p> }>
          < Rodape />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
