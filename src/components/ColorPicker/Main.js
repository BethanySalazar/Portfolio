import { BasicColorPicker } from "./BasicColorPicker"

export const ColorPicker = props => {
    function getPicker(pickertype) {
        switch (pickertype) {
            default:
                return <BasicColorPicker {...props}/>
        }
    }
    return getPicker(props.type)
}