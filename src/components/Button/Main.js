import { HTMLButton } from "./HTMLButton"

export const Button = props => {
    function getButton(buttontype) {
        switch (buttontype) {
            case 'HTMLButton':
                return <HTMLButton props={props} />
            default:
                return <HTMLButton />
        }
    }
    return getButton(props.buttontype)
}