# text-input-button
A HTML custom element implementing the `<text-input-button>` tag.

![text-input-button in action](https://github.com/Kiricon/text-input-button/raw/master/screencapture.gif)

## Setup

### Installation
```
npm i text-input-button
```

---

```Html
<script src="node_modules/text-input-button/text-input-button.js"></script>
```
or if you're bundling
```Javascript
import "text-input-button";
// or
require("text-input-button");
```


## Usage
```HTML
    <text-input-button placeholder="Search..." width="100%" button-width="100px">Search</text-input-button>
```

## Customization
You can customize the color of the `text-input-button` by assigning values to css elements. 

The two css elements that affect `text-input-button` are `--text-input-button-color` and `--secondary-color`.

You can set there values like so

```CSS
    :root {
        --text-input-button-color: red; /* if both are set --fun-tabs-color takes precedence */
        --secondary-color: red; 
    }
```