import logo from './logo.svg';
import './App.css';
import Counter from './redux/Counter';
import { store } from './store';
import { Provider } from 'react-redux';


function App() {
  return (

    <Provider store={store}>
      <Counter />
    </Provider>

  );
}

export default App;
