import React, { Component } from 'react';
import cat from './img/cat.png';

const Text = ({ color, children }) => <span style={{ color }}>{children}</span>;

const langArray = [
  ['Javascript', '#FFBB1C'],
  ['C/C++', '#BA3B46'],
  ['Python', '#5C80BC'],
  ['SQL', '#9CEC5B'],
  ['Java', '#8377D1'],
  ['Go', '#DE8F6E'],
  ['Erlang', '#F9DC5C']
];

const webArray = [
  ['HTML5', '#DB5461'],
  ['CSS', '#9BC53D'],
  ['React/Redux', '#6A7FDB'],
  ['Mongo', '#23ce6b'],
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
      <img
        src={cat}
        alt="cat"
        className="cat"
        onLoad={() => this.scrollDown()}
      />
    ),
    vim: 'just use emacs',
    emacs: 'just use vim',
    ls: 'super_secret_file.txt',
    help: true,
    snake: (
      <a href="https://snake.robherley.xyz">https://snake.robherley.xyz</a>
    ),
    whoami: (
      <div className="whoami">
        <div>
          <Text color="#7C7C7C">Name: </Text>
          <Text color="white">Rob Herley</Text>
        </div>
        <div className="pad">
          <Text color="#7C7C7C">Major: </Text>
          <Text color="white">Computer Science</Text>
        </div>
        <div className="pad">
          <Text color="#7C7C7C">School: </Text>
          <Text color="white">Stevens Tech</Text>
        </div>
        <div className="pad">
          <Text color="#7C7C7C">Grad: </Text>
          <Text color="white">May 2019</Text>
        </div>
        <div className="pad">
          <Text color="#7C7C7C">Languages: </Text>
        </div>
        <div>
          {langArray.map(e => (
            <Text key={e[0]} color={e[1]}>
              {e[0]}{' '}
            </Text>
          ))}
        </div>
        <div className="pad">
          <Text color="#7C7C7C">Web & Cloud: </Text>
        </div>
        <div>
          {webArray.map(e => (
            <Text key={e[0]} color={e[1]}>
              {e[0]}{' '}
            </Text>
          ))}
        </div>
        <div className="pad">
          <Text color="#7C7C7C">Misc: </Text>
        </div>
        <div>
          {miscArray.map(e => (
            <Text key={e[0]} color={e[1]}>
              {e[0]}{' '}
            </Text>
          ))}
        </div>
      </div>
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

  scrollDown = () => {
    const { current: term } = this.term.window;
    term.scrollTop = term.scrollHeight;
  };

  sendCmd = () => {
    const { cmd, history } = this.state;

    switch (cmd) {
      case 'clear':
        this.setState({ history: [], cmd: '' });
        break;
      case 'snake':
        window.open('https://snake.robherley.xyz', '_blank');
      // eslint-disable no-fallthrough
      default:
        this.setState({ history: [...history, cmd], cmd: '' }, () =>
          this.scrollDown()
        );
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
              autoCapitalize="none"
              spellCheck={false}
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
