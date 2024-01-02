import { useEffect, useState } from 'react'

export const Textarea = props => {
  // console.log(props.text)
  const [value, setValue] = useState(props.text ?? '')
  useEffect(() => {
    setValue(props.text)
  }, [props.text])

  const handleOnChange = e => {
    setValue(e.target.value)
  }

  return (
    <textarea
      // {...props}
      width={'100%'}
      // type=''
      // placeholder={value}
      value={value}
      onChange={handleOnChange}
      disabled={false}
      readOnly={false}
    />
  )
}
