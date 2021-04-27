import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import SidebarItems from './SidebarItems'
import { Sidebar, ButtonClose, ButtonOpen } from '../Styles/layout/Sidebar'
import Header from './Header';
import { ButtonExit } from '../Styles/components/Utils';
import { userActions} from '../store/actions'

export default ({onExit}) => {

  const dispatch = useDispatch()

  const [isOpen, openClose] = useState('false')
  return (
    <aside >
      <Sidebar isOpen={isOpen}>
        <div className='d-flex justify-content-end p-3'>
          <ButtonClose onClick={() => openClose('false')}>X</ButtonClose>
        </div>
        <SidebarItems icons='home' name='Home' />
      </Sidebar>
      <Header>
        <ButtonOpen onClick={() => openClose('true')}><i class="fas fa-bars"></i></ButtonOpen>
        <ButtonExit type='button' onClick={() => dispatch(userActions.exit())}>Exit<i className="fas fa-sign-out-alt pl-2"></i></ButtonExit>
      </Header>

    </aside>
  )
}