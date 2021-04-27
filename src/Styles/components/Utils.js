import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 30px;
  color:#673ab7;

`

export const Input = styled.input`
  color:#482880;
  width: 100%;
  border: none;
  padding: 5px;
  background: #EEF3F4;
  border-bottom: 3px outset  #673ab7;
  margin-bottom: 15px;
  &:focus{
    outline: 0
  }
`

export const Buttons = styled.button`
  background: none;
  border: 1px solid  #673ab7;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  color:#673ab7;
  &:hover{
    background: #673ab7;
    color: white;
    cursor: pointer;
  }
  &:focus{
    outline: 0
  }
`

export const Label = styled.label`
  color: #673ab7;
  line-height: 0.4;
`

export const ButtonExit = styled.button`
  color: white;
  padding: 10px;
  border: 1px solid  white;
  background: transparent;
  position: absolute;
  right: 10px;
  top: 10px;
  &:focus{
    outline: 0
  }
`