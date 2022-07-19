import template from 'bundle-text:./cmp-example.template.html'

export class CMPExampleEvent extends CustomEvent<{ data: string }> {
    constructor(
        type: string,
        public data: string,
    ) {
        super(type)
    }
}

export class CMPExample extends HTMLElement {
    #root = this.attachShadow({ mode: 'closed' })

    constructor() {
        super()
        this.#root.innerHTML = template
    }
}

customElements.define('cmp-example', CMPExample)