export const initialThemeState = {
  mode: 'lightmode',
}

export function themeReducer (state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state }
  }
}
