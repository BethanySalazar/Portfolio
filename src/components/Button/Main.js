import { HTMLButton } from "./HTMLButton"

export const Button = props => {
    function getButton(buttontype) {
        switch (buttontype) {
            case 'HTML_Button':
                return <HTMLButton {...props} />
            default:
                return alert('No button specified')
        }
    }
    return getButton(props.type)
}