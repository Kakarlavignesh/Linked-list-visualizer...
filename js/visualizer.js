/**
 * Linked List Visualizer Engine v2.0
 * Handles SVG arrows, GSAP animations, and multi-pointer tracking.
 */

class Visualizer {
    constructor(containerId, listType = 'singly') {
        this.container = document.getElementById(containerId);
        // Special support for zooming wrapper in playground and visualizer
        this.renderTarget = document.getElementById('viz-wrapper') || document.getElementById('viz-scale-wrapper') || this.container;
        this.listType = listType;
        this.nodes = [];
        this.nodeElements = new Map(); // Link MockNode object to DOM Element
        this.svgContainer = null;
        this.pointers = {}; // { 'slow': element, 'fast': element }
        this.init();
    }

    init() {
        this.renderTarget.innerHTML = '';
        this.renderTarget.style.position = 'relative';

        // Create SVG overlay for arrows
        this.svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svgContainer.setAttribute('class', 'viz-svg-overlay');
        this.svgContainer.style.position = 'absolute';
        this.svgContainer.style.top = '0';
        this.svgContainer.style.left = '0';
        this.svgContainer.style.width = '5000px'; // Wide enough for long lists
        this.svgContainer.style.height = '100%';
        this.svgContainer.style.pointerEvents = 'none';
        this.svgContainer.style.zIndex = '1';
        this.renderTarget.appendChild(this.svgContainer);

        // Marker for arrowheads
        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
        marker.setAttribute('id', 'arrowhead');
        marker.setAttribute('markerWidth', '10');
        marker.setAttribute('markerHeight', '7');
        marker.setAttribute('refX', '9');
        marker.setAttribute('refY', '3.5');
        marker.setAttribute('orient', 'auto');
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute('points', '0 0, 10 3.5, 0 7');
        polygon.setAttribute('fill', '#6366f1');
        marker.appendChild(polygon);
        defs.appendChild(marker);

        // Marker for cyclic arrowheads (red)
        const markerRed = marker.cloneNode(true);
        markerRed.setAttribute('id', 'arrowhead-red');
        markerRed.querySelector('polygon').setAttribute('fill', '#ff7b72');
        defs.appendChild(markerRed);

        // Marker for backward arrows (doubly)
        const markerBack = marker.cloneNode(true);
        markerBack.setAttribute('id', 'arrowhead-back');
        markerBack.querySelector('polygon').setAttribute('fill', '#ec4899');
        defs.appendChild(markerBack);

        this.svgContainer.appendChild(defs);
    }

    renderAll(allNodes) {
        // Clear previous state
        const oldScrollX = this.container.scrollLeft;
        this.init();
        this.nodeElements.clear();

        const nodeWrapper = document.createElement('div');
        nodeWrapper.className = 'nodes-wrapper';
        nodeWrapper.style.display = 'flex';
        nodeWrapper.style.alignItems = 'center';
        nodeWrapper.style.padding = '60px 20px'; // Reduced padding for tutorial pages
        nodeWrapper.style.gap = '60px'; // Reduced gap to avoid overflow
        nodeWrapper.style.position = 'relative';
        nodeWrapper.style.zIndex = '2';
        this.renderTarget.appendChild(nodeWrapper);

        const renderedSet = new Set();
        let displayCount = 0;

        // allNodes can be a single starting node or an array of starting nodes
        const startNodes = Array.isArray(allNodes) ? allNodes : [allNodes];

        startNodes.forEach((node, index) => {
            if (!node || renderedSet.has(node)) return;

            let current = node;
            while (current && !renderedSet.has(current) && displayCount < 40) {
                renderedSet.add(current);
                const nodeEl = this.createNodeElement(current, displayCount);
                nodeWrapper.appendChild(nodeEl);
                this.nodeElements.set(current, nodeEl);

                current = current.next || current._next;
                displayCount++;
            }
        });

        // Add arrows after elements are in DOM to get positions
        setTimeout(() => this.drawArrows(startNodes, renderedSet), 50);
        this.container.scrollLeft = oldScrollX;
    }

    // BACKWARD COMPATIBILITY: render(list)
    render(list) {
        if (!list || !list.head) return this.renderAll([]);
        this.renderAll([list.head]);
    }

    // BACKWARD COMPATIBILITY: traverse()
    async traverse() {
        // Step through currently rendered nodes
        const nodes = Array.from(this.nodeElements.keys());
        for (const node of nodes) {
            await this.highlightNode(node, '#6366f1');
            await new Promise(r => setTimeout(r, 800));
        }
    }

    drawArrows(allNodes, renderedSet) {
        const nodesArray = [...renderedSet];
        renderedSet.forEach(node => {
            // Forward/Singly/Cycle/Shortcut Links
            const nextNode = node.next || node._next;
            if (nextNode && this.nodeElements.has(node)) {
                if (this.nodeElements.has(nextNode)) {
                    const fromEl = this.nodeElements.get(node);
                    const toEl = this.nodeElements.get(nextNode);

                    const fromIdx = nodesArray.indexOf(node);
                    const toIdx = nodesArray.indexOf(node.next);

                    const isCycle = toIdx <= fromIdx;
                    const isForwardJump = toIdx > fromIdx + 1;

                    this.drawArrow(fromEl, toEl, isCycle || isForwardJump, 'next');
                }
            }
            // Backward/Doubly Links
            if (node.prev && this.nodeElements.has(node) && this.nodeElements.has(node.prev)) {
                const fromEl = this.nodeElements.get(node);
                const toEl = this.nodeElements.get(node.prev);
                this.drawArrow(fromEl, toEl, false, 'prev');
            }
        });
    }

    drawArrow(fromEl, toEl, isCycle = false, type = 'next') {
        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();
        const targetRect = this.renderTarget.getBoundingClientRect();
        const scrollX = this.renderTarget.scrollLeft;
        const scrollY = this.renderTarget.scrollTop;

        let x1, y1, x2, y2;

        if (type === 'next') {
            x1 = fromRect.right - targetRect.left + scrollX;
            y1 = fromRect.top + fromRect.height * 0.4 - targetRect.top + scrollY;
            x2 = toRect.left - targetRect.left + scrollX;
            y2 = toRect.top + toRect.height * 0.4 - targetRect.top + scrollY;
        } else {
            x1 = fromRect.left - targetRect.left + scrollX;
            y1 = fromRect.top + fromRect.height * 0.6 - targetRect.top + scrollY;
            x2 = toRect.right - targetRect.left + scrollX;
            y2 = toRect.top + toRect.height * 0.6 - targetRect.top + scrollY;
        }

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

        let d;
        if (isCycle) {
            // Backward Circular/Cycle Link (Red Dash)
            const midY = y1 - 80;
            d = `M ${x1 - 10} ${y1} C ${x1 - 10} ${midY}, ${x2 + 10} ${midY}, ${x2 + 10} ${y2}`;
            path.setAttribute('marker-end', 'url(#arrowhead-red)');
            path.setAttribute('stroke', '#ff7b72');
            path.setAttribute('stroke-dasharray', '5,5');
        } else if (type === 'next' && Math.abs(x2 - x1) > 250) {
            // Forward Shortcut/Jump Link (Rainbow Curve)
            const midX = (x1 + x2) / 2;
            const midY = y1 - 100; // Higher arc for jumping nodes
            d = `M ${x1} ${y1} Q ${midX} ${midY}, ${x2 - 5} ${y2}`;
            path.setAttribute('marker-end', 'url(#arrowhead)');
            path.setAttribute('stroke', '#6366f1');
        } else if (type === 'prev') {
            // Curve backward arrows slightly downwards
            const midX = (x1 + x2) / 2;
            const midY = y1 + 40;
            d = `M ${x1} ${y1} Q ${midX} ${midY}, ${x2 + 5} ${y2}`;
            path.setAttribute('marker-end', 'url(#arrowhead-back)');
            path.setAttribute('stroke', '#ec4899');
        } else {
            d = `M ${x1} ${y1} L ${x2 - 5} ${y2}`;
            path.setAttribute('marker-end', 'url(#arrowhead)');
            path.setAttribute('stroke', '#6366f1');
        }

        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-width', '2.5');
        path.setAttribute('class', 'draw-path');
        this.svgContainer.appendChild(path);
    }

    createNodeElement(node, index) {
        const div = document.createElement('div');
        div.className = 'visual-node';
        div.innerHTML = `
            <div class="node-internal">
                <div class="node-section data-sec">
                    <span class="section-label">DATA</span>
                    <div class="node-data">${node.value || node.val || node.data || node._data || 0}</div>
                </div>
                <div class="node-section next-sec">
                    <span class="section-label">NEXT</span>
                    <div class="node-ptr">next</div>
                </div>
            </div>
            <div class="node-id">${node.name || 'n' + (index + 1)}</div>
        `;
        return div;
    }

    // BACKWARD COMPATIBILITY: highlightNode(index OR object)
    async highlightNode(nodeOrIndex, color = '#10b981') {
        let node = nodeOrIndex;
        if (typeof nodeOrIndex === 'number') {
            const nodes = Array.from(this.nodeElements.keys());
            node = nodes[nodeOrIndex];
        }

        const el = this.nodeElements.get(node);
        if (!el) return;

        return new Promise(resolve => {
            gsap.to(el, {
                borderColor: color,
                boxShadow: `0 0 25px ${color}`,
                scale: 1.1,
                duration: 0.3,
                yoyo: true,
                repeat: 1,
                onComplete: resolve
            });
        });
    }

    updatePointers(nodePointers) {
        // nodePointers: { 'slow': nodeObj OR 'slow': 'n1' }
        Object.entries(nodePointers).forEach(([name, node]) => {
            const nodeId = (typeof node === 'string') ? node : (node ? (node.id || node._id) : null);
            if (!nodeId) return;

            // Find the node element by searching for the node-id bubble text
            let nodeEl = null;
            this.nodeElements.forEach((el, nodeObj) => {
                const currentId = nodeObj.name || nodeObj._id || nodeObj.id;
                if (currentId === nodeId) nodeEl = el;
            });

            if (!nodeEl) return;

            let ptrEl = this.container.querySelector(`.ptr-tag.${name}`);
            if (!ptrEl) {
                ptrEl = document.createElement('div');
                ptrEl.className = `ptr-tag ${name}`;
                ptrEl.innerText = name.toUpperCase();
                this.container.appendChild(ptrEl);
            }

            const rect = nodeEl.getBoundingClientRect();
            const containerRect = this.container.getBoundingClientRect();
            const x = rect.left + rect.width / 2 - containerRect.left + this.container.scrollLeft;
            const y = rect.bottom - containerRect.top + this.container.scrollTop + 10;

            gsap.to(ptrEl, {
                left: x,
                top: y,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }
}

// Global Styles for Premium Visualization
const vizStyles = `
    .viz-svg-overlay {
        overflow: visible !important;
    }
    
    .nodes-wrapper {
        min-width: 100%;
    }

    .visual-node {
        position: relative;
        background: rgba(22, 27, 34, 0.8);
        backdrop-filter: blur(8px);
        border: 2px solid #30363d;
        border-radius: 12px;
        min-width: 140px;
        transition: border-color 0.3s, transform 0.3s;
        flex-shrink: 0;
    }

    .node-internal {
        display: flex;
        overflow: hidden;
        border-radius: 10px;
    }

    .node-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid #30363d;
    }

    .node-section:last-child { border-right: none; }

    .section-label {
        font-size: 0.6rem;
        color: #8b949e;
        background: #0d1117;
        width: 100%;
        text-align: center;
        padding: 4px 0;
        letter-spacing: 1px;
        border-bottom: 1px solid #30363d;
    }

    .node-data {
        padding: 15px;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
    }

    .node-ptr {
        padding: 15px;
        color: #6366f1;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .node-id {
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        background: #238636;
        color: white;
        padding: 2px 12px;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: 700;
        box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    }

    .ptr-tag {
        position: absolute;
        padding: 4px 10px;
        background: #ec4899;
        color: white;
        border-radius: 4px;
        font-size: 0.65rem;
        font-weight: 800;
        transform: translateX(-50%);
        z-index: 10;
        box-shadow: 0 2px 8px rgba(236, 72, 153, 0.4);
    }

    .ptr-tag.fast { background: #f59e0b; box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4); }
    .ptr-tag.slow { background: #10b981; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4); }

    .draw-path {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: drawLine 1.5s forwards;
    }

    @keyframes drawLine {
        to { stroke-dashoffset: 0; }
    }
`;

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = vizStyles;
    document.head.appendChild(style);
});
