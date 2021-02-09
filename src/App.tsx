import React from 'react';
import Button from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button disabled>默认</Button>
      <Button btnType='primary' size='lg'>primary</Button>
      <Button btnType='link' href='http://www.baidu.com'>百度</Button>
      <Button>默认</Button>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
