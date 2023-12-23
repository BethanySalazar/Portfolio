import { useState } from 'react'

export const InputField = props => {
  const [value, setValue] = useState('')

  const handleOnChange = e => {
    setValue(e.target.value)
  }

  return <input type='' value={value} width={''} onChange={handleOnChange} />
}
