import {Provider} from 'react-redux';
import './App.css';
import Main from './Components/Main';
import {Store} from './Redux/Store';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="app">
          <Main/>
        </div>
      </BrowserRouter>
    </Provider> 
  );
}

export default App;
