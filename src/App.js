import './App.css'
import { contactinfo, tabs } from './app/files'
import { Button } from './components'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <div
          style={{
            border: '1px solid red',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div>Bethany Salazar</div>
          <div style={{ border: '1px solid red', display: 'flex' }}>
            {tabs.map(tab => (
              <div key={tab.id} style={{ padding: '0px 0px 0px 10px' }}>
                {tab.label}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            border: '1px solid red',
            display: 'flex',
            height: 'fit-content',
            flexDirection: 'column'
          }}
        >
          hello
          <Button type={'HTMLButton'} />
          <div
            style={{
              border: '1px solid red',
              display: 'flex',
              height: 'fit-content',
              background: '',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {contactinfo.map((field, index) => (
                <div key={index + '_' + field.id}>{field.value}</div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
