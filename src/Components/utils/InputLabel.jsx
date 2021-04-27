import React from 'react'
import { Input, Label, Buttons } from '../../Styles/components/Utils'

export default ({label, ...inputprops}) => (
  <div className="text-justify">
    <Label>{label}</Label>
    <Input
      {...inputprops}
    />
  </div>
)