import { useState, useContext } from 'react'
import DataContext from './DataContext';
import './App.css';
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

function App() {
  // DATA TO BE PASSED BY PROVIDER
  const [userInfo, setUserInfo] = useState({
    name: 'GJ',
    favColor: 'blue',
    favFood: 'pizza'
  });

  return (
    <div className="App">
      <h2>React Context..using useContext</h2>
      <DataContext.Provider value={{ userInfo, setUserInfo }}>
        <ComponentA />
        <ComponentB />
      </DataContext.Provider>
    </div>
  );
}
export default App;
