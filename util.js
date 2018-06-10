class Listeners {
    listener(event) {
        this.draw.innerText = event.target.value
    }
}
class Renderer extends Listeners {
    render(fragment, el) {
        fragment.appendChild(el)
    }

}
class InputWidget extends Renderer {
    constructor() {
        super();
        this.el = document.createElement('input')
        this.el.type = 'text';
        this.el.placeholder = 'Put you name'
        this.el.innerText = 'Dyadya Dima'
        this.draw = document.createElement('p')
    }
    init() {
        this.el.addEventListener('input', this.listener)
        return this.el
    }

}

const init = (...arg) => {
    const fragment = new DocumentFragment;
    arg.forEach(widget => {
        fragment.appendChild(widget.init());
    })
    root.appendChild(fragment)
}

