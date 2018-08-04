import React, { Component } from 'react';

const meta = `
{
  "name" : "Robert Herley",
  "email" : "robherley13@gmail.com",
  "major" : "Computer Science",
  "school" : "Stevens Institute of Technology",
  "gradutation" : "May 2019",
  "currentLocation" : "40.7440° N, 74.0324° W",
  "languages" : ["javascript","html/css","c++","c","python","java"],
  "technologies": ["postgres","mongo","redis","docker","kubernetes"]
}
`;

class Term extends Component {
  term = {
    input: React.createRef(),
    window: React.createRef(),
    cursor: React.createRef()
  };

  commands = {
    test: 'foobar!',
    whoami: meta
  };

  state = {
    cmd: '',
    history: [],
    focus: false
  };

  tunnelFocus = () => {
    this.term.input.current.focus();
  };

  toggleFocus = () => {
    const { focus } = this.state;
    this.setState({ focus: !focus });
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ cmd: value });
  };

  handleKey = ({ keyCode }) => {
    if (keyCode === 13) this.sendCmd();
  };

  sendCmd = () => {
    const { cmd, history } = this.state;
    if (cmd === 'clear') {
      this.setState({ history: [] });
    } else {
      this.setState({ history: [...history, cmd], cmd: '' }, () => {
        this.term.window.current.scrollTop = this.term.window.current.scrollTopMax;
      });
    }
  };

  render = () => {
    const { cmd, history } = this.state;
    return (
      <div
        className="terminal"
        role="textbox"
        ref={this.term.window}
        onClick={this.tunnelFocus}
        onKeyDown={this.handleKey}
        tabIndex="-1"
      >
        <div className="dot-1" />
        <div className="dot-2" />
        <div className="dot-3" />
        <pre>
          {history.map(e => (
            <div key={`${Date.now()}-${Math.random() * 10}`} className="t-mono">
              <span className="prompt">you@robherley.xyz ~</span>
              <span>
                {e}
                {'\n'}
              </span>
              <span>
                [result]
                {'\n\n'}
              </span>
            </div>
          ))}
        </pre>
        <div className="t-mono row">
          <span className="prompt">you@robherley.xyz ~</span>
          <input
            type="text"
            ref={this.term.input}
            onChange={this.handleInput}
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
            value={cmd}
          />
        </div>
      </div>
    );
  };
}

export default Term;
