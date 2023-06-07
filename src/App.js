import { useState } from 'react';
import './App.css';

function App() {
  const [inspo, setInspo] = useState(['https://katielizlewis.com/'])
  const [tabs, setTabs] = useState([
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'aboutme', label: 'About me' },
    { id: 'passions', label: 'Passions' },
    { id: 'contactme', label: 'Contact' },
  ])

  const [projects, setProjects] = useState([
    {
      id: 'miriamspartyland',
      label: 'Miriams Partyland',
      projecttype: ['App', 'Branding', 'Campaign', 'Email', 'Illustration', 'Print', 'UX', 'Web']
    },
    { id: 'eurodite', label: 'Eurodite' },
    { id: 'datamanagement', label: 'Allergy Database' }
  ])

  const [contactInfo, setContactInfo] = useState({
    name: 'Bethany Salazar',
    email: 'bethanysalazar2007@hotmail.com',
    phonenumber: '(512) 363-6887',
    // linkedlin: { icon: '', label: 'LinkedIn' }
  })


  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          border: '1px solid red',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div>Bethany Salazar</div>
          <div style={{ border: '1px solid red', display: 'flex' }}>
            {tabs.map(tab => <div
              key={tab.id}
              style={{ padding: '0px 0px 0px 10px' }}
            >
              {tab.label}
            </div>)}
          </div>
        </div>
        <div style={{ border: '1px solid red', display: 'flex', height: 'fit-content', flexDirection: 'column' }}>
          hello
          <div style={{ border: '1px solid red', display: 'flex', height: 'fit-content', background: '', margin: '20px 20px 20px 20px ' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {Object.entries(contactInfo).map((field, index) => <div key={index + '_' + field[0]}>{field[1]}</div>)}
            </div>
            <div></div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App;
