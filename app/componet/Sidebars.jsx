
import Link from 'next/link';
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Sidebars = () => {
    return (
        <>
    <Sidebar width='100px' >
          <Menu>
           
              <MenuItem component={<Link href='/dashboard'/>}>DashBoard</MenuItem>
              <MenuItem component={<Link href='/Post'/>}>Post</MenuItem>
             
            
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
        </>
    );
};

export default Sidebars;