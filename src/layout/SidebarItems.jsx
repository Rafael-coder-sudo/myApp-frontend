import React from 'react'

import {MenuLi, MenuLink} from '../Styles/layout/Sidebar'

export default props => (
  
    <MenuLink href="#"><i className={`fa fa-${props.icons} pr-2`}></i>{props.name}</MenuLink>
    

)