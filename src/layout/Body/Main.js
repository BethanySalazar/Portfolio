import { useTab } from '../../app/data/context/TabContext'
import { MainContainer } from './styles/Main'

export const Body = props => {
  const [tabState] = useTab()
  return (
    <MainContainer>
      <h1>{tabState.currentTab.label}</h1>
    </MainContainer>
  )
}
