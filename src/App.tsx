import React from 'react';
import { ThemeProvider } from 'styled-components';
import DesignSystem from './design-system/design.system';
import { Button } from './components/action/button';
import { Select } from './components/action/select';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={DesignSystem.snowball}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          height: '100%',
          padding: '20rem',
          boxSizing: 'border-box'
        }}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
        {/* **To use in the case of automatically generating the selector options as well as their ids*/}
        {/* <Select>
          <>Option 1</>
          <>Option 2</>
          <>Option 3</>
        </Select> */}
        <Select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </Select>
      </div>
    </ThemeProvider>
  );
}

export default App;
