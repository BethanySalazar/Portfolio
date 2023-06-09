import { contactinfo, tabs } from '../../app/files'
import { MainContainer, Tab, TabsContainer, Title } from './styles'
import { useTab } from "../../app/data/context/TabContext"


export const SimpleHeader = props => {
  const [tabState, tabDispatch] = useTab()
  return (
    <MainContainer>
      {contactinfo.map(
        field =>
          field.id === 'name' && <Title key={field.id}>{field.value}</Title>
      )}
      <TabsContainer>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            onClick={() =>
              tabDispatch({
                type: 'SET_TAB',
                tab: tab
              })
            }
          >
            {tab.label}
          </Tab>
        ))}
      </TabsContainer>
    </MainContainer>
  )
}
