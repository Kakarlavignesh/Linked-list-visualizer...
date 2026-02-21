/**
 * Linked List Visualizer Engine
 * Handles rendering nodes and arrows with animations.
 */

class Visualizer {
    constructor(containerId, listType = 'singly') {
        this.container = document.getElementById(containerId);
        this.listType = listType;
        this.nodes = [];
    }

    // Original head-based render
    render(list) {
        this.container.innerHTML = '';
        const nodeArray = [];

        let current = list.head;
        let count = 0;
        const maxNodes = list.size;

        while (current && count < 20) { // Limit for visualization sanity
            const nodeEl = this.createNodeElement(current.value, count);
            this.container.appendChild(nodeEl);
            nodeArray.push(nodeEl);

            // Add Arrow
            if (current.next && (this.listType !== 'circular' || current.next !== list.head)) {
                const arrow = this.createArrow();
                this.container.appendChild(arrow);
            } else if (this.listType === 'circular' && list.size > 0) {
                const arrow = this.createArrow('circular');
                this.container.appendChild(arrow);
            }

            current = current.next;
            if (this.listType === 'circular' && current === list.head) break;
            count++;
        }

        if (nodeArray.length === 0) {
            this.container.innerHTML = '<div class="empty-msg">List is empty. Add a node to start!</div>';
        }

        this.nodes = nodeArray;
    }

    // Updated method to render a list of all allocated nodes
    renderAll(allNodes) {
        this.container.innerHTML = '';
        const nodeArray = [];
        const renderedSet = new Set();
        let displayCount = 0;

        allNodes.forEach((node, index) => {
            if (renderedSet.has(node)) return;

            let current = node;
            while (current && !renderedSet.has(current) && displayCount < 20) {
                renderedSet.add(current);
                const nodeEl = this.createNodeElement(current.value, displayCount);

                // Set the specific label (e.g., A1, B2)
                const idLabel = nodeEl.querySelector('.node-id');
                if (idLabel) {
                    idLabel.innerText = `${current.value}${index + 1}`;
                }

                this.container.appendChild(nodeEl);
                nodeArray.push(nodeEl);

                if (current.next && !renderedSet.has(current.next)) {
                    this.container.appendChild(this.createArrow());
                }

                current = current.next;
                displayCount++;
            }

            // Add a gap if there are more nodes at the top level
            if (displayCount < allNodes.length) {
                const spacer = document.createElement('div');
                spacer.className = 'viz-spacer';
                this.container.appendChild(spacer);
            }
        });

        if (nodeArray.length === 0) {
            this.container.innerHTML = '<div class="empty-msg">List is empty. Add a node to start!</div>';
        }
        this.nodes = nodeArray;
    }

    createNodeElement(value, index) {
        const div = document.createElement('div');
        div.className = 'visual-node pulse';
        div.setAttribute('data-index', index);
        div.style.animationDelay = `${index * 0.1}s`;

        div.innerHTML = `
            <div class="node-internal">
                <div class="node-section">
                    <span class="section-label">DATA</span>
                    <div class="node-data">${value}</div>
                </div>
                <div class="node-section">
                    <span class="section-label">NEXT</span>
                    <div class="node-ptr">next</div>
                </div>
            </div>
            <div class="node-id">n${index + 1}</div>
        `;

        if (this.listType === 'doubly') {
            div.classList.add('doubly');
            div.innerHTML = `
                <div class="node-internal">
                    <div class="node-section">
                        <span class="section-label">PREV</span>
                        <div class="node-ptr prev">prev</div>
                    </div>
                    <div class="node-section">
                        <span class="section-label">DATA</span>
                        <div class="node-data">${value}</div>
                    </div>
                    <div class="node-section">
                        <span class="section-label">NEXT</span>
                        <div class="node-ptr next">next</div>
                    </div>
                </div>
                <div class="node-id">n${index + 1}</div>
            `;
        }

        return div;
    }

    createArrow(type = 'normal') {
        const arrow = document.createElement('div');
        arrow.className = `visual-arrow ${type}`;
        arrow.innerHTML = type === 'circular' ? '<i class="fas fa-undo"></i>' : '<i class="fas fa-arrow-right"></i>';
        if (this.listType === 'doubly' && type === 'normal') {
            arrow.innerHTML = '<i class="fas fa-exchange-alt"></i>';
        }
        return arrow;
    }

    async highlightNode(index, color = '#ec4899') {
        if (index < 0 || index >= this.nodes.length) return;
        const node = this.nodes[index];
        node.style.borderColor = color;
        node.style.boxShadow = `0 0 20px ${color}`;
        node.style.transform = 'scale(1.1)';

        await new Promise(r => setTimeout(r, 600));

        node.style.borderColor = '';
        node.style.boxShadow = '';
        node.style.transform = '';
    }

    async traverse(targetIndex = -1) {
        for (let i = 0; i < this.nodes.length; i++) {
            await this.highlightNode(i, '#10b981');
            if (i === targetIndex) return;
        }
    }
}

// Add CSS for visualization elements via JS to keep it portable
const vizStyles = `
    .visualizer-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 4rem 2rem;
        overflow-x: auto;
        min-height: 350px;
        gap: 0;
        background: transparent;
        scroll-behavior: smooth;
    }
    
    .visual-node {
        position: relative;
        background: #161b22;
        border: 1px solid #30363d;
        border-radius: 0.75rem;
        min-width: 160px;
        display: flex;
        flex-direction: column;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        flex-shrink: 0;
        margin: 1rem 0;
    }

    .node-internal {
        display: flex;
        width: 100%;
        border-radius: 0.75rem;
        overflow: hidden;
    }

    .node-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid #30363d;
    }

    .node-section:last-child {
        border-right: none;
    }

    .section-label {
        font-size: 0.65rem;
        color: #58a6ff;
        font-weight: 700;
        padding: 0.4rem 0.2rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        background: #0d1117;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #30363d;
    }
    
    .node-data {
        padding: 0.8rem;
        text-align: center;
        font-weight: 700;
        font-size: 1.1rem;
        color: #fff;
        width: 100%;
    }
    
    .node-ptr {
        padding: 0.8rem;
        color: #8b949e;
        font-size: 0.75rem;
        text-align: center;
        width: 100%;
    }

    .node-id {
        position: absolute;
        top: -28px;
        left: 50%;
        transform: translateX(-50%);
        background: #238636;
        color: #fff;
        font-weight: 600;
        font-size: 0.75rem;
        padding: 2px 10px;
        border-radius: 12px;
        border: 1px solid #30363d;
        box-shadow: 0 2px 5px rgba(0,0,0,0.5);
        z-index: 5;
    }

    .viz-spacer {
        width: 60px;
        flex-shrink: 0;
        height: 2px;
        background: repeating-linear-gradient(90deg, #30363d, #30363d 5px, transparent 5px, transparent 10px);
        margin: 0 10px;
    }
`;

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = vizStyles;
    document.head.appendChild(style);
});
