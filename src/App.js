import './App.css'
import { TabProvider } from './app/data/context/TabContext'
import { initialState, tabReducer } from './app/data/reducer/TabReducer'
import { Body, Footer, Header, ViewPort} from './layout'


function App () {
  return (
    <TabProvider initialState={initialState} reducer={tabReducer}>
      {/* <div className='App'> */}
        <ViewPort />
        {/* <Sidebar/> */}
        <div className='Header'>
          <Header type={'Simple_Header'} />
        </div>
        <div className='Body'>
          <Body />
        </div>
        <div className='Footer'>
          <Footer />
        </div>
      {/* </div> */}
    </TabProvider>
  )
}

export default App
