/**
 * Array & String Visualizer Engine
 * Specialized for linear sequences with pointer tracking.
 */

class ArrayVisualizer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.renderTarget = document.getElementById('viz-wrapper') || this.container;
        this.elements = []; // Array of DOM objects
        this.pointers = {}; // Map of name -> DOM element
        this.currentArr = [];
        this.init();
    }

    init() {
        this.renderTarget.innerHTML = '';
        this.renderTarget.style.position = 'relative';
        this.renderTarget.style.display = 'flex';
        this.renderTarget.style.flexDirection = 'column';
        this.renderTarget.style.alignItems = 'center';
        this.renderTarget.style.justifyContent = 'center';
        this.renderTarget.style.padding = '40px';
    }

    render(arr, activeIndices = [], pointers = {}) {
        // If array size changed or first render, rebuild
        if (arr.length !== this.currentArr.length) {
            this.rebuild(arr, pointers);
        } else {
            this.update(arr, pointers);
        }
        this.currentArr = [...arr];
    }

    rebuild(arr, pointers) {
        this.renderTarget.innerHTML = '';
        this.elements = [];

        const wrapper = document.createElement('div');
        wrapper.className = 'array-wrapper';
        wrapper.style.display = 'flex';
        wrapper.style.gap = '12px';
        wrapper.style.position = 'relative';
        wrapper.style.padding = '60px 0';

        arr.forEach((val, idx) => {
            const el = document.createElement('div');
            el.className = 'array-element';
            el.innerHTML = `
                <div class="element-box">${val}</div>
                <div class="element-index">${idx}</div>
                <div class="element-pointers"></div>
            `;
            wrapper.appendChild(el);
            this.elements.push(el);
        });

        this.renderTarget.appendChild(wrapper);
        this.updatePointers(pointers);
    }

    update(arr, pointers) {
        arr.forEach((val, idx) => {
            const box = this.elements[idx].querySelector('.element-box');
            if (this.currentArr[idx] !== val) {
                box.innerText = val;
                gsap.fromTo(box,
                    { backgroundColor: '#10b981', scale: 1.2 },
                    { backgroundColor: 'rgba(22, 27, 34, 0.8)', scale: 1, duration: 0.5 }
                );
            }
        });
        this.updatePointers(pointers);
    }

    updatePointers(pointers) {
        // Clear old ones that are no longer present
        Object.keys(this.pointers).forEach(name => {
            if (pointers[name] === undefined || pointers[name] === null) {
                this.pointers[name].remove();
                delete this.pointers[name];
            }
        });

        Object.entries(pointers).forEach(([name, idx]) => {
            if (idx === null || idx < 0 || idx >= this.elements.length) return;

            let tag = this.pointers[name];
            if (!tag) {
                tag = document.createElement('span');
                tag.className = `ptr-tag ${name}`;
                tag.innerText = name.toUpperCase();
                this.renderTarget.appendChild(tag);
                this.pointers[name] = tag;
            }

            const targetEl = this.elements[idx];
            const rect = targetEl.getBoundingClientRect();
            const containerRect = this.renderTarget.getBoundingClientRect();

            const x = rect.left + rect.width / 2 - containerRect.left + this.renderTarget.scrollLeft;
            const y = rect.top - containerRect.top + this.renderTarget.scrollTop + 20;

            gsap.to(tag, {
                left: x,
                top: y,
                duration: 0.4,
                ease: "back.out(1.7)"
            });
        });
    }
}

// Global Styles for Array Visualizer
const arrVizStyles = `
    .array-wrapper {
        perspective: 1000px;
    }

    .array-element {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s ease;
    }

    .element-box {
        width: 60px;
        height: 60px;
        background: rgba(22, 27, 34, 0.8);
        border: 2px solid #30363d;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 700;
        color: #fff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .array-element.active .element-box {
        border-color: #6366f1;
        background: rgba(99, 102, 241, 0.1);
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        transform: scale(1.05);
    }

    .element-index {
        margin-top: 8px;
        font-size: 0.75rem;
        color: #8b949e;
        font-weight: 600;
    }

    .element-pointers {
        height: 0;
        overflow: visible;
    }

    .ptr-tag {
        position: absolute;
        font-size: 0.65rem;
        padding: 2px 8px;
        border-radius: 4px;
        background: #6366f1;
        color: white;
        font-weight: 800;
        transform: translate(-50%, -100%);
        z-index: 100;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    .ptr-tag.i { background: #10b981; }
    .ptr-tag.j { background: #f59e0b; }
    .ptr-tag.left { background: #ec4899; }
    .ptr-tag.right { background: #8b5cf6; }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = arrVizStyles;
    document.head.appendChild(style);
}
