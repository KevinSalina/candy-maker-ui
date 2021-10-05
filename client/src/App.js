import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ManufacturerInfo from './pages/ManufacturerInfo'
import Search from './pages/Search'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:manufacturer' component={ManufacturerInfo} />
        <Route path='/' component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
