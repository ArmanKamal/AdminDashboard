import React from 'react'
import { useState} from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import "react-pro-sidebar/dist/css/styles.css";
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material'
import {Link} from 'react-router-dom';
import { tokens } from '../../theme'
import  HomeOutlined  from '@mui/icons-material/HomeOutlined';
import  PeopleOutlineOutlined  from '@mui/icons-material/PeopleOutlineOutlined';
import  ContactsOutlined  from '@mui/icons-material/ContactsOutlined';
import  ReceiptOutlined  from '@mui/icons-material/ReceiptOutlined';
import  CalendarTodayOutlined  from '@mui/icons-material/CalendarTodayOutlined';
import  HelpOutlined  from '@mui/icons-material/HelpOutlined';
import  BarChartOutlined  from '@mui/icons-material/BarChartOutlined';
import  PieChartOutlineOutlined  from '@mui/icons-material/PieChartOutlineOutlined';
import  TimelineOutlined  from '@mui/icons-material/TimelineOutlined';
import  MenuOutlined  from '@mui/icons-material/MenuOutlined';
import  MapOutlined  from '@mui/icons-material/MapOutlined';


const Item = ({title, to, icon , selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem 
        active={selected === title} 
        style={{color: colors.grey[100]}}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    )
  }
  

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ isCollapsed, setIsCollapsed] = useState(false);
    const [ selected, setSelected] = useState("Dashboard");

  return (
    <Box
        sx={{
            "& .pro-sidebar-inner":{
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper":{
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item":{
                padding: "5px 35px 5px 30px !important"
            },
            "& .pro-inner-item:hover":{
                color: "#868dfb !important"
            },
            "& .pro-menu-item:active":{
                color: "#6870fa  !important"
            },
        }}
    >
        <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape='sqaure'>
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed? <MenuOutlined />: undefined}
                    style={{
                        margin:"10px 0 20px 0",
                        color: colors.grey[100]
                    }}
                >
                    {!isCollapsed && (
                        <Box display="flex" 
                            justifyContent="space-between" 
                            alignItems="center" 
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.grey[100]}>
                                EPanel
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlined />
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>
                {/* USER */}
                {!isCollapsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                        <Avatar sx={{ bgcolor: colors.greenAccent[500] }}>AK</Avatar>
                        </Box>
                        <Box textAlign="center" >
                            <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m:"10px 0 0 0"}}>Arman Kamal</Typography>
                            <Typography variant='h5' color={colors.greenAccent[500]}>Admin Panel</Typography>
                        </Box>
                    </Box>
                )}
                {/* MENU ITEMS */}
                <Box paddingLeft={isCollapsed ? undefined: "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant='h6' color={colors.grey[200]} sx={{ m: "15px 0 5px 20px"}}>
                            Data
                        </Typography>
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlineOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contacts Informtion"
                            to="/contacts"
                            icon={<ContactsOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant='h6' color={colors.grey[200]} sx={{ m: "15px 0 5px 20px"}}>
                            Pages
                        </Typography>
                         <Item
                            title="Profile Form"
                            to="/forms"
                            icon={<PeopleOutlineOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calender"
                            to="/calendar"
                            icon={<CalendarTodayOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant='h6' color={colors.grey[200]} sx={{ m: "15px 0 5px 20px"}}>
                            Charts
                        </Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={< PieChartOutlineOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlined />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                </Box>
            </Menu>
        </ProSidebar>
    </Box>
  )
}

export default Sidebar;