import { render } from './example-application_render.js';
import { LiveHandlebars } from '../../live-handlebars';

class ExampleApplication extends LiveHandlebars {
    static get properties() {
        return {
            elapsed: {
                type: 'number',
                value: 0
            },
            seconds: {}
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.seconds = 0;
        setInterval(() => { this.seconds = (this.seconds % 10) + 1; }, 1000);
    }

    static get observedAttributes() {
        return ['elapsed'];
    }

    get viewModel() {
        const t = (this.elapsed / 1000) % 10;
        const scale = 1 + (t > 5 ? 10 - t : t) / 10;
        const transform = 'scaleX(' + (scale / 2.1) + ') scaleY(0.7) translateZ(0.1px)';

        return {
            scale: (scale / 2.1),
            seconds: this.seconds,
            x: 0,
            y: 0,
            s: 1000
        }
    }
    
    get template() {
        return render;
    }
}
window.customElements.define('example-application', ExampleApplication);
export { ExampleApplication }