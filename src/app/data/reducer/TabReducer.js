import { tabs } from '../../files/tabs'

export const initialTabState = {
  tabs: tabs,
  currentTab: tabs.filter(tab => tab.id === 'home' && tab)[0]
}

export function tabReducer (state, action) {
  switch (action.type) {
    case 'SET_TAB':
      state['currentTab'] = action.tab
      return { ...state }
  }
}
