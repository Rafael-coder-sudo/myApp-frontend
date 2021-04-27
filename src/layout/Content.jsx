import React from 'react'

import {Content} from '../Styles/layout/Content'
import Sidebar from './Sidebar'

export default props => (
  <Content>
    <Sidebar />
    {props.children}
  </Content>
)