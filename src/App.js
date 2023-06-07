import { useState } from 'react';
import './App.css';

function App() {
  const [tabs, setTabs] = useState([
    {id:'home',label:'Home'},
    {id:'work',label:'Work'},
    {id:'aboutme',label:'About me'},
  ])

  return (
    <div className="App">
      <header className="App-header">
        <div style={{border:'1px solid red', display:'flex', justifyContent:'space-between'}}>
          <div>Bethany Salazar</div>
          <div style={{border:'1px solid red', display:'flex'}}>
            {tabs.map(tab => <div 
              key={tab.id}
              style={{padding:'0px 0px 0px 10px'}}
            >
              {tab.label}
            </div>)}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
