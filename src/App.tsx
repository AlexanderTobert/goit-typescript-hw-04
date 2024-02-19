import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Observer } from "./homework/1";
import RequestComponent from "./homework/2";
import toast, { Toaster } from 'react-hot-toast';
import { FormComponent } from "./homework/3";
import { ComponentApp } from "./homework/4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Observer onContentEndVisible={() => toast.success("Welcome to Ukraine!")}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <RequestComponent />
        <FormComponent />
        <ComponentApp />
      </Observer>
    </div>
  );
}

export default App;
