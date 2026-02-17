import Graph from 'graphology';

interface NodeAttributes {
    url: string;
    type: 'product' | 'category' | 'creator' | 'article';
    priority: number;
}

export class LinkGraph {
    private graph: Graph<NodeAttributes>;

    constructor() {
        this.graph = new Graph({ type: 'directed' });
    }

    addNode(id: string, attributes: NodeAttributes) {
        if (!this.graph.hasNode(id)) {
            this.graph.addNode(id, attributes);
        }
    }

    addEdge(source: string, target: string, weight = 1) {
        if (this.graph.hasNode(source) && this.graph.hasNode(target)) {
            this.graph.addEdge(source, target, { weight });
        }
    }

    getRecommendedLinks(sourceId: string, limit = 5): string[] {
        if (!this.graph.hasNode(sourceId)) return [];

        // Placeholder: Simple neighbor check or PageRank-based suggestion
        return this.graph.neighbors(sourceId).slice(0, limit);
    }
}
