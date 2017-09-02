/**
 * The template that is used for the shadow root for every copy of your element,
 * which houses the styles and layout for the element.
 */
const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: inline-block;
        }
        input, button {
            margin: 0px;
        }
        input {
            padding: 0.5em;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            font-size: 0.8em;
            border: solid 1px #aaa;
            display: block;
            float:left;
            
        }
        input:focus, button {
            outline: none;
        }
        div {
            height: 2px;
            width: 0px;
            background-color: var( --fun-input-color ,var(--primary-color, #673AB7));
            margin: 0px auto;
            transition: ease width 0.3s;
            z-index: 1;
        }
        input:focus + div {
            width: 100%;
        }

        button {
            display: inline-block;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            padding: 0.5em 1em;
            cursor: pointer;
            transition: all ease 0.3s;
            opacity: 1;
            -webkit-user-select: none;
            -moz-user-select: none; 
             -ms-user-select: none; 
                 user-select: none;
            font-size: 0.8em;
            border: solid 1px #aaa;
        }
        
    </style>
    <input type="text" />
    <button>
        <slot>
        </slot>
    </button>
    <div></div>
`;

/**
 * This is the class that controls each instance of your custom element.
 */
class TextInputButton extends HTMLElement {
    /**
     * Part of the custom element spec. Returns an array of strings that are 
     * the names of attributes that this element observes/listens to.
     * 
     * @returns {Array} an array of strings, each of which representing an 
     *  attribute.
     */
    static get observedAttributes() {
        return [];
    };

    constructor() {
        super();

        // create shadow root for any children context
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // add any initial variables here
    }

    /**
     * Part of the custom element spec. Called after your element is attached to
     * the DOM. Do anything related to the element or its children here in most
     * cases.
     */
    connectedCallback() {
        
    }

    /**
     * Part of the custom element spec. Called after your element is remove from
     * the DOM. Disconnect any listeners or anything else here.
     */
    disconnectedCallback() {

    }

    /**
     * Part of the custom element spec. Called when one of the observed
     * attributes changes, either via setAttribute() or with the attribute being
     * manually set in the HTML.
     * 
     * @param {String} name the name of the attribute that changed
     * @param {Mixed} oldValue the previous value of the attribute
     * @param {Mixed} newValue the new value of the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
        // respond to a changed attribute here
    }
}

customElements.define("text-input-button", TextInputButton);
