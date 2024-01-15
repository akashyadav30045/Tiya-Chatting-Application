import React from 'react';

import {AppBar,Toolbar,styled,Box} from '@mui/material';


// components
import LoginDailog from './account/LoginDailog'
import App from '../App';

const Component = styled(Box)`
    height:100vh;
    background:#DCDCDC;

`

const Header= styled(AppBar)`
    height:220px;
    box-shadow:none;
`
const Messanger = () => {
  return (
    <Component>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <LoginDailog/>
    </Component>
  )
}

export default Messanger