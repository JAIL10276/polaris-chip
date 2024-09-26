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

  constructor() {
    super();
    this.title = "";
    this.buttonTitle = "";
    this.link = "#";
    this.image = null;
    this.line = "";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: white;
        margin: 24px;
        max-width: 390px;
        border-radius: 16px;
        border: solid black 8px;
      }
      :host([fancy]) {
        display: inline-flex;
        background-color: #eb9eb9;
        border: outset #a11c53 8px;
      }
      div {
        text-decoration-style:none;
        padding: 16px;
        width: auto;
      }
      a {
        border-radius: 8px;
        font-size: 16px;
        border-style: none;
        background-color: var(--my-card-change-bg, #be2528);
        color: white;
        padding: 8px;
        font-weight: bold;
        text-decoration: none;
      }
      a:hover {
        background-color: var(--my-card-change-hover, #f0e68c);
        color: white;
      }
      img {
        height: 250px;
        max-width: 390px;
        width: 100%;
        margin: auto;
      }
      details {
        padding-bottom: 16px;
        font-style: italic;
      }
    `;
  }

  render() {
    return html`
    <div><img src='${this.image}'>
    <h3>${this.title}</h3>
    <p>${this.line}<strong><slot name="PBP"></slot></strong></p>
    <p><slot name="CCC"></slot></p>
    <p><slot name="KY"></slot></p>
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
      <p><slot name="detes"></slot></p>
    </details>
    <a href='${this.link}' target="_blank">${this.buttonTitle}</div>`;
  }
    /*const dropdown = ('detes')? <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
      <p><slot name="detes"></slot></p>
    </details>;*/

  static get properties() {
    return {
      title: { type: String},
      buttonTitle: { type: String },
      link: { type: String},
      image: { type: String},
      line: { type: String},
      fancy: {type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
