import './App.css';
import Search from './Components/Search';
import Content from './Components/Content'
import { CityProvider } from './Context/CityContext';






function App() {
  return (
    <CityProvider>
      <>
        <Search />
        <Content />
      </>
    </CityProvider>
  );
}

export default App;
