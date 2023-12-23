import { useTab } from '../../app/data/context/TabContext'
import { MainContainer } from './styles/Main'

export const Body = props => {
  const [tabState] = useTab()
  return (
    <MainContainer>
      <h1>{tabState?.currentTab?.label}</h1>
      <div
        style={{
          // border: '1px solid red',
          // width: '100%',
          // height: 'fit-content'
        }}
      >
        {tabState?.currentTab?.content}
      </div>
    </MainContainer>
  )
}
