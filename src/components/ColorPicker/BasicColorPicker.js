import { Color, ColorPickerMain } from './styles/Main'

export const BasicColorPicker = props => {
  return (
    <ColorPickerMain>
      {[1, 2, 3, 3, 4, 6].map(color => {
        return <Color key={color.id ?? color.key} />
      })}
    </ColorPickerMain>
  )
}
