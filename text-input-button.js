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
            padding: 10px;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            font-size: 0.8em;
            border: solid 1px var(--text-input-button-color, var(--secondary-color, #3F51B5));
            display: block;
            float:left;
            transition: ease all  0.3s;
        }
        input:focus, button {
            outline: none;
        }
        
        input:focus, input:focus + button {
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }

        button:focus {
            opacity: 0.8;
        }

        button {
            display: inline-block;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            padding: 10px 15px;
            cursor: pointer;
            transition: ease all 0.3s
            opacity: 1;
            -webkit-user-select: none;
            -moz-user-select: none; 
             -ms-user-select: none; 
                 user-select: none;
            font-size: 0.8em;
            border: solid 1px var(--text-input-button-color, var(--secondary-color, #3F51B5));
            background-color: var(--text-input-button-color, var(--secondary-color, #3F51B5));
            color: white;
        }

        button:hover {
            opacity: 0.7;
        }

        button:active {
            box-shadow: none;
        }

    </style>
    <input type="text" />
    <button>
        <slot>
        </slot>
    </button>
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
        return ['placeholder', 'name', 'type', 'alt'];
    };

    constructor() {
        super();

        // create shadow root for any children context
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        let buttonWidth = this.getAttribute('button-width') || '50px';
        let inputWidth = this.getAttribute('width') || '200px';
        this.shadowRoot.querySelector('input').style.width = `calc(${inputWidth} - ${buttonWidth})`;

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
        if(oldValue === newValue) {
            return;
        }

        this.shadowRoot.querySelector('input').setAttribute(name, newValue);
    }
}

customElements.define("text-input-button", TextInputButton);
