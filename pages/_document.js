import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

// React portals provide a first-class way to render and allow child components, which are typically present outside the DOM, to live within a Document Object Model (DOM) node. This React portal component exists outside the DOM hierarchy of the parent component.

export default MyDocument;

//we use this _document.js for us to setup our metadata
