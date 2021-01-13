import React from 'react'
import ReactDOM from 'react-dom'
import Contex from 'context'
import DashboardRouter from 'routers/DashboardRouter'
import Menu from 'components/Menu'

import 'antd/dist/antd.css'

ReactDOM.render(
   <Contex>
      <Menu />
   </Contex>,
   document.getElementById('root')
)

