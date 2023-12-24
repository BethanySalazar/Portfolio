export const HTMLButton = props => {
  return (
    <button
      autoFocus={false}
      disabled={false}
      onClick={() => alert('button clicked')}
    >
      {props.text}
    </button>
  )
}
