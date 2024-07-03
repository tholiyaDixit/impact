import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboards from '../page/app/AppDashboards'
// import TodoList from '../page/todoList/TodoList'
import SideBar from "../components/sideBar/SideBar";
import ImageToUrl from "../pages/imageToUrl/ImageToUrl";
// import Login from '../page/login/Login'
// import Project from '../page/Project/Project'
// import QrCode from '../page/qrCode/QrCode'
// import NotFound from '../page/notFound/NotFound'
// import ReactFlow from '../page/reactFlow/ReactFlow'
// import CustomShapes from '../page/reactFlow/customShapes/CustomShapes'

const Router = () => {
  return (
    <>
      <BrowserRouter>
      <SideBar></SideBar>
          <Routes>
            <Route path="/ImageToUrl" element={<ImageToUrl />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default Router;

// import * as React from 'react';
// import MenuButton from '@mui/joy/MenuButton';
// import Menu from '@mui/joy/Menu';
// import MenuItem from '@mui/joy/MenuItem';
// import Apps from '@mui/icons-material/Apps';
// import Dropdown from '@mui/joy/Dropdown';

// export default function SelectedMenu() {
//   const [selectedIndex, setSelectedIndex] = React.useState<number>(1);

//   const createHandleClose = (index: number) => () => {
//     if (typeof index === 'number') {
//       setSelectedIndex(index);
//     }
//   };

//   return (
//     <Dropdown>
//       <MenuButton startDecorator={<Apps />}>Apps</MenuButton>
//       <Menu>
//         <MenuItem
//           {...(selectedIndex === 0 && { selected: true, variant: 'soft' })}
//           onClick={createHandleClose(0)}
//         >
//           Random project
//         </MenuItem>
//         <MenuItem selected={selectedIndex === 1} onClick={createHandleClose(1)}>
//           Production - web
//         </MenuItem>
//         <MenuItem selected={selectedIndex === 2} onClick={createHandleClose(2)}>
//           Staging - web
//         </MenuItem>
//       </Menu>
//     </Dropdown>
//   );
// }
