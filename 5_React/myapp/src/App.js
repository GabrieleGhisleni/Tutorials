import Main from './components/Main';
import {Component} from 'react';
import './App.css';

// React Router
import {BrowserRouter} from 'react-router-dom';

// Redux
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'
const store = ConfigureStore();

class App extends Component {
  render(){
    return (
      // redux
      <Provider store={store}>
        {/* react router */}
        <BrowserRouter>
          <div>
            {/* App */}
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
