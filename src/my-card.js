import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "title-default";
    this.bTitle = "card-default";
    this.link = "#";
    this.image = '#';
    this.text = 'text-default';
    this.text2 = "text-default";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
      div {
        background-color: #FFFFFF;
        text-decoration-style:none;
        border: solid black 8px;
        margin: 64px;
        padding: 16px;
        max-width: 400px;
        width: auto;
        border-radius: 16px;
      }
      a {
        border-radius: 8px;
        font-size: 16px;
        border-style: none;
        background-color: #be2528;
        color: white;
        padding: 8px;
        font-weight: bold;
        text-decoration: none;
      }
      a:hover {
        background-color: #f0e68c;
        color: white;
      }
      img {
        height: 250px;
        max-width: 390px;
        width: 100%;
        margin: auto;
      }
    `;
  }

  render() {
    return html`<div><img src='${this.image}'><h3>${this.title}</h3><p>${this.text}</p><p>${this.text2}</p><a href='${this.link}'>${this.bTitle}</div>`;
  }

  static get properties() {
    return {
      title: { type: String},
      bTitle: { type: String },
      link: { type: String},
      image: { type: String},
      text: { type: String},
      text2: { type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
