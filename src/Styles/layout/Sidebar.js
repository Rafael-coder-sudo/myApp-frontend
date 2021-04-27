import styled from 'styled-components'

export const Sidebar = styled.aside`
  background: #482880;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 300px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  z-index: 1111;
  top: 0;
  left: ${props => props.isOpen=='true' ? "0" : "-100%"};
  transition: 850ms ;

`



export const MenuLink = styled.a`
  background: #673ab7;
  text-decoration: none;
  font-size:20px;
  padding-left:10px;
  color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  &:hover{
    background: #8561c5;
    color: white;
    text-decoration: none;
    cursor: pointer;
  };

`

export const ButtonClose = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 20px;
`

export const ButtonOpen = styled.button`
  color: white;
  border: none;
  padding: 10px;
  font-weight: bolder;
  font-size:30px;
  background: none;
  &:click{
    border:none;
    background: white;
  }
`
