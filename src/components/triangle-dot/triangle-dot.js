import { render } from './triangle-dot_render.js';
import { LiveHandlebars } from '../../live-handlebars';

class TriangleDot extends LiveHandlebars {
    static get properties() {
        return {
            x: {
                type: 'number',
                value: 0
            },
            y: {
                type: 'number',
                value: 0
            },
            size: {
                type: 'number',
                value: 0
            },
            seconds: {
                type: 'number',
                value: 0
            }
        }
    }

    static get observedAttributes() {
        return ['x', 'y', 'size', 'seconds'];
    }
    
    get template() {
        return render;
    }

    get viewModel() {
        var x = this.x;
        var y = this.y;
        var size = this.size;
        var s = size * 1.3;
        var hover = this.hover || false;
        return {
            width: s,
            height: s,
            left: x,
            top: y,
            borderRadius: s/2,
            lineHeight: s,
            seconds: this.seconds,
            mouseover: () => { this.hover = true; this.render(); }, // Note: implementing this as property would eliminate the need to explicitely call render
            mouseleave: () => { this.hover = false; this.render(); },
            nohover: !hover,
            hover: hover
        }
    }
}
window.customElements.define('triangle-dot', TriangleDot);
export { TriangleDot }