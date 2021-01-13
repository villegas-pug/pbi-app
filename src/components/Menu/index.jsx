import React, { useState, useContext } from 'react'
import { Menu, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import DashboardPBI from 'components/DashboardPBI'

import { Link } from 'react-router-dom'
import { context } from 'context'

const { SubMenu, Item } = Menu

const style = {
   container: {
      display: 'flex',
   },
   menuContainer: {
      width: 256,
   },
   menuButton: {
      marginBottom: 16,
   },
   menu: {
      height: 'calc(100vh - 50px)',
   }
}

export default function MyMenu() {
   /*» CONTEXT...  */
   const { menu: { items } } = useContext(context)

   /*» HOOK'S... */
   const [collapsed, setCollapsed] = useState(true)
   const [path, setPath] = useState(null)

   /*» HANDLER'S  */
   const toggleCollapsed = () => setCollapsed(!collapsed)
   const handleOnClick = (src) => setPath(src)

   return (
      <div style={style.container}>
         <div style={style.menuContainer}>
            <Button
               type='ghost'
               onClick={toggleCollapsed}
               style={style.menuButton}
            >
               {
                  collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
               }
            </Button>
            <Menu
               defaultSelectedKeys={['1']}
               defaultOpenKeys={[1]}
               mode='inline'
               theme='light'
               inlineCollapsed={collapsed}
               style={style.menu}
            >
               {
                  items?.map(({ title, icon, subItems }, i) => (
                     <SubMenu key={i} icon={icon} title={title}>
                        {
                           subItems.map(({ id, title, src }, i) => (
                              <Item
                                 key={id}
                                 onClick={() => handleOnClick(src)}
                              >
                                 {title}
                              </Item>
                           ))
                        }
                     </SubMenu>
                  ))
               }
            </Menu>
         </div>
         {/*» BODY...  */}
         <div>
            <DashboardPBI src={path} />
         </div>
      </div>
   )
}