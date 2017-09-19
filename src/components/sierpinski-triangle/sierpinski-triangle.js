import { render } from './sierpinski-triangle.hb';
import { LiveHandlebars } from '../../live-handlebars';

class SierpinskiTriangle extends LiveHandlebars {
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
            s: {
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
        return ['x', 'y', 's', 'seconds'];
    }

    get viewModel() {
        var x = this.x;
        var y = this.y;
        var s = this.s;
        var targetSize = window.targetSize || 50;

        var norecurse = s <= targetSize; // targetSize=global
        s = s / 2;
        return {
            norecurse: norecurse,
            recurse: !norecurse,
            targetSize: targetSize, // targetSize=global
            x1: x,
            y1: y - (s / 2),
            x2: x - s,
            y2: y + (s / 2),
            x3: x + s,
            y3: y + (s / 2),
            x4: x - (targetSize / 2), // targetSize=global
            y4: y - (targetSize / 2), // targetSize=global
            s: s,
            seconds: this.seconds
        }
    }
    
    get template() {
        return render;
    }
}
window.customElements.define('sierpinski-triangle', SierpinskiTriangle);
export { SierpinskiTriangle }