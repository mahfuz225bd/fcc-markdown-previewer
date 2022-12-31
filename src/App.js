import './App.css';
import React, { Component } from 'react'
import MarkdownOutput from './components/MarkdownOutput';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: ''
    }
  }

  setInitCode() {
    fetch('./sample.md')
      .then(response => response.text())
      .then(data => this.setState({ code: data }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.setInitCode()

    const autoAdjustMain = () => {
      const main = document.querySelector('main')
      const header = document.querySelector('header')
      const footer = document.querySelector('footer')
      const voidSpaceBetween = header.offsetHeight + footer.offsetHeight
      main.style.height = window.innerHeight - voidSpaceBetween + 'px'
    }

    autoAdjustMain()

    window.addEventListener('resize', autoAdjustMain)
  }

  handleCodeArea(e) {
    this.setState({ code: e.target.value })
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Markdown Previewer</h1>
        </header>
        <main>
          <section className="left">
            <textarea title="codeArea" className="codeArea" onChange={this.handleCodeArea.bind(this)} value={this.state.code}></textarea>
          </section>
          <section className="right">
            <MarkdownOutput>{this.state.code}</MarkdownOutput>
          </section>
        </main>
        <footer>by <a href="http://codepen.io/mahfuz225bd" target="_blank" rel="noreferrer">Muhammad Sultan Al Mahfuz</a>. <a href="https://github.com/mahfuz225bd/fcc-markdown-previewer" target="_blank" rel="noreferrer">GitHub Source Code</a>.</footer>
      </div>
    )
  }
}

export default App;
