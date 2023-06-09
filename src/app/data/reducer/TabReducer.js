import { tabs } from '../../files/tabs'

export const initialState = {
  tabs: tabs,
  currentTab: []
}

export function tabReducer (state, action) {
  switch (action.type) {
    case 'SET_TAB':
      state['currentTab'] = action.tab
      return { ...state }
  }
}
