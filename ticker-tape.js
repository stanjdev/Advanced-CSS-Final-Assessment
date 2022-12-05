const template = document.createElement('template');
template.innerHTML = `
  <style>
    @keyframes move {
      0% { transform: translateX(-600px); }
      100% { transform: translateX(100vw); }
    }
  </style>
`


class TickerTape extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this._text = document.createElement('p');
    this._text.innerHTML = this.innerHTML;
    this._shadowRoot.appendChild(this._text);

    this._text.style.backgroundColor = 'yellow';
    this._text.style.borderRadius = '2rem';
    this._text.style.padding = '1rem';
    this._text.style.width = 'max-content';
    this._text.style.animation = 'move 5s infinite linear';

  }
}

customElements.define('ticker-tape', TickerTape);
