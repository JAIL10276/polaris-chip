import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      title: { type: String},
      buttonTitle: { type: String },
      link: { type: String},
      image: { type: String},
      line: { type: String},
      fancy: {type: Boolean, reflect: true},
      originalState: {state: true}, // This hold original state
      selectedElement: {type :String},
      description: {type: String},
    };
  }

  constructor() {
    super();
    this.title = "";
    this.buttonTitle = "";
    this.link = "#";
    this.image = null;
    this.line = "";
    this.fancy = false;
    this.originalState = null;
    this.selectedElement = "";
    this.description = "Nothing to see here..."
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: slategrey;
        margin: 24px;
        max-width: 390px;
        border-radius: 16px;
        border: solid silver 8px;
      }

      :host([fancy]) {
        display: inline-flex;
        background-color: #e0b13a;
        border: outset darkgoldenrod 50px;
      }

      div {
        text-decoration-style: none;
        padding: 16px;
        overflow: hidden;
        width: auto;
        justify-items: center;
      }

      a {
        border-radius: 8px;
        font-size: 16px;
        border-style: none;
        background-color: var(--my-card-change-bg, dimgrey);
        color: white;
        padding: 5px;
        font-weight: bold;
        text-decoration: none;
      }

      a:hover {
        background-color: var(--my-card-change-hover, #f0e68c);
        color: white;
      }


      img {
        height: 254px;
        max-width: 508px;
        width: 100%;
        margin: auto;
        border-radius: 8px;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }


    `;
  }
  // Capture the initial state as an object
  captureState() {
    return {
      title: this.title,
      buttonTitle: this.buttonTitle,
      link: this.link,
      image: this.image,
      line: this.line,
      fancy: this.fancy,
    };
  }

  // Reset the properties to the original state
  resetContent() {
    let cards = document.querySelectorAll('my-card');
    // Iterates through every element
    for (let index = 0; index <= 4; index++) {
      // sets their original state if its defined. It should be defined by firstUpdate().
      if (cards[index].originalState) {
        const {title, buttonTitle, link, image, line, fancy} = cards[index].originalState;
        cards[index].title = title;
        cards[index].buttonTitle = buttonTitle;
        cards[index].link = link;
        cards[index].image = image;
        cards[index].line = line;
        cards[index].fancy = fancy;
        cards[index].requestUpdate(); // Ensure the component re-renders
      }
    }
  }
  firstUpdated(_changedProperties) {
    this.originalState = this.captureState();
  }

  render() {
  return html`
    <div>
    <img src='${this.image}'>
    <h3> ${this.title} </h3>
    <p> ${this.line} </p>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot>${this.description}</slot>
        </div>
      </details>
    <a href='${this.link}' target="_blank">${this.buttonTitle} </div>`;
  }

}

globalThis.customElements.define(MyCard.tag, MyCard);
