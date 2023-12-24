import { useState } from 'react'

export const InputField = props => {
  const [value, setValue] = useState(props.value ?? '')

  const handleOnChange = e => {
    setValue(e.target.value)
  }

  return (
    <input
      // {...props}
      // width={''}
      // type=''
      value={value}
      onChange={handleOnChange}
    />
  )
}
