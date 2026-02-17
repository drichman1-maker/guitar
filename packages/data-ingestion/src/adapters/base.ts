import { IngestionAdapter, NormalizedProduct, NormalizedPrice } from '../types';

export abstract class BaseAdapter implements IngestionAdapter {
    abstract name: string;

    abstract fetchProducts(query?: string): Promise<NormalizedProduct[]>;
    abstract fetchPrice(productId: string): Promise<NormalizedPrice | null>;

    protected log(message: string) {
        console.log(`[${this.name}] ${message}`);
    }
}
