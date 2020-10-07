import * as React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { example } from './Command'

type AppProps = {}

export const App: React.FC<AppProps> = props => {

  const [value, setValue] = useState("");

  const cmds = ["git status"];
  const mkCmdList = (cmds: string[]) => (<ul>{cmds.map((cmd, index) => <li key={index}>{cmd}</li>)}</ul>);
  const [cmdList, setCmdList] = useState(mkCmdList(cmds));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("changed");
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");
    cmds.push(value);
    setCmdList(mkCmdList(cmds));
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span id="title">Command Builder</span>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <form className="App-form" onSubmit={handleSubmit}>
        <input className="App-input" type="text" value={value} onChange={handleChange} placeholder="" />
        <label>$</label>
        <span className="focus_line"></span>
      </form>
      {cmdList}
    </div>
  );
}