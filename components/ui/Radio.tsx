import React, { ChangeEvent } from 'react'

type Props = {
  text: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  isChecked: boolean
}

export const Radio: React.FC<Props> = ({
  text,
  value,
  onChange,
  isChecked,
}) => {
  return (
    <label className="mr-3 text-sm">
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={onChange}
        className="mr-2"
      />
      {text}
    </label>
  )
}
