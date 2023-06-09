import { useTab } from '../../app/data/context/TabContext'

export const Body = props => {
  const [tabState] = useTab()
  return (
    <div>
      <h1>{tabState.currentTab.label}</h1>
    </div>
  )
}
