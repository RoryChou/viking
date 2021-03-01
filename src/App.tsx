import React from "react";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import ProjectListScreen from "./demo/list/index.jsx";

function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex="0"
        onSelect={(index) => {
          alert(index);
        }}
      >
        <MenuItem>link1</MenuItem>
        <MenuItem disabled>link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
        <MenuItem>link3</MenuItem>
      </Menu>
      <Button disabled>默认</Button>
      <Button autoFocus>autoFocus</Button>
      <Button className="customerClassname">customerClassname</Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          alert(123);
        }}
      >
        onclick
      </Button>
      <Button btnType="primary" size="lg">
        primary
      </Button>
      <Button btnType="link" href="http://www.baidu.com">
        百度
      </Button>
      <Button btnType="link" href="http://www.baidu.com" target="blank">
        百度
      </Button>
      <Button>默认</Button>
      <header className="App-header"></header>

      <ProjectListScreen />
    </div>
  );
}

export default App;
