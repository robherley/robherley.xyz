import React, { Component } from 'react';

const Text = ({ color, children }) => <span style={{ color }}>{children}</span>;

const langArray = [
  ['Javascript', '#FFBB1C'],
  ['C/C++', '#BA3B46'],
  ['Python', '#5C80BC'],
  ['SQL (Postgres)', '#9CEC5B'],
  ['Java', '#8377D1'],
  ['Go', '#DE8F6E']
];

const webArray = [
  ['HTML5', '#DB5461'],
  ['CSS', '#9BC53D'],
  ['React/Redux', '#6A7FDB'],
  ['Docker', '#944BBB'],
  ['IBM Cloud', '#47E5BC'],
  ['Kubernetes', '#345fde']
];

const miscArray = [
  ['Git', '#03B5AA'],
  ['Linux', '#E26D5C'],
  ['Bash', '#ECFFB0']
];

class Term extends Component {
  term = {
    input: React.createRef(),
    window: React.createRef()
  };

  commands = {
    cat: (
      <a href="http://thecatapi.com">
        <img
          src="http://thecatapi.com/api/images/get?format=src&type=gif"
          alt="cat"
        />
      </a>
    ),
    vim: 'just use emacs',
    emacs: 'just use vim',
    ls: 'super_secret_file.txt',
    help: true,
    whoami: (
      <>
        <div>
          <Text color="#7C7C7C">Name: </Text>
          <Text color="white">Rob Herley</Text>
        </div>
        <div>
          <Text color="#7C7C7C">Major: </Text>
          <Text color="white">Computer Science</Text>
        </div>
        <div>
          <Text color="#7C7C7C">School: </Text>
          <Text color="white">Stevens Tech</Text>
        </div>
        <div>
          <Text color="#7C7C7C">Grad: </Text>
          <Text color="white">May 2019</Text>
        </div>
        <div>
          <Text color="#7C7C7C">Location: </Text>
          <Text color="white">40.743152, -74.027767</Text>
        </div>
        <div>
          <Text color="#7C7C7C">Languages: </Text>
        </div>
        <div>
          {langArray.map(e => (
            <Text key={e[0]} color={e[1]}>
              {e[0]}{' '}
            </Text>
          ))}
        </div>
        <div>
          <Text color="#7C7C7C">Web & Cloud: </Text>
        </div>
        <div>
          {webArray.map(e => (
            <Text key={e[0]} color={e[1]}>
              {e[0]}{' '}
            </Text>
          ))}
        </div>
        <div>
          <Text color="#7C7C7C">Misc: </Text>
        </div>
        <div>
          {miscArray.map(e => (
            <Text key={e[0]} color={e[1]}>
              {e[0]}{' '}
            </Text>
          ))}
        </div>
      </>
    )
  };

  state = {
    cmd: '',
    history: []
  };

  componentDidMount = () => {
    function* type() {
      yield* 'whoami';
    }
    const it = type();
    this.toggleFocus();
    const typer = setInterval(() => {
      const next = it.next();
      if (!next.done) {
        const { cmd } = this.state;
        this.setState({ cmd: [...cmd, next.value].join('') });
      } else {
        this.sendCmd();
        clearInterval(typer);
      }
    }, 250);
  };

  toggleFocus = () => {
    this.term.input.current.focus();
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ cmd: value });
  };

  handleKey = ({ keyCode }) => {
    if (keyCode === 13) this.sendCmd();
  };

  sendCmd = () => {
    const { cmd, history } = this.state;
    switch (cmd) {
      case 'clear':
        this.setState({ history: [], cmd: '' });
        break;
      default:
        this.setState({ history: [...history, cmd], cmd: '' }, () => {
          this.term.window.current.scrollTop = this.term.window.current.scrollTopMax;
        });
    }
  };

  renderCommand = c => {
    const cmd = c.split(' ')[0];
    if (this.commands[cmd]) {
      if (cmd === 'help')
        return `Available Commands:\n ${Object.keys(this.commands).join('\n')}`;
      return this.commands[cmd];
    }
    return (
      <span className="err">{`robshell: command not found: ${cmd}\nType 'help' for a list of valid commands.\n`}</span>
    );
  };

  render = () => {
    const { cmd, history } = this.state;
    return (
      <div
        className="terminal"
        role="textbox"
        onClick={this.toggleFocus}
        onKeyDown={this.handleKey}
        tabIndex="-1"
      >
        <div className="dot-1" />
        <div className="dot-2" />
        <div className="dot-3" />
        <div className="text-container" ref={this.term.window}>
          <pre>
            {history.map(c => (
              <div
                key={`${Date.now()}-${Math.random() * 10}`}
                className="t-mono"
              >
                <span className="prompt">you@robherley.xyz ~</span>
                <span>{`${c}\n`}</span>
                {this.renderCommand(c)}
              </div>
            ))}
          </pre>
          <div className="t-mono row">
            <span className="prompt">you@robherley.xyz ~</span>
            <input
              type="text"
              ref={this.term.input}
              onChange={this.handleInput}
              value={cmd}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default Term;
