import { NormalizedProduct } from '../types';

export class ProductNormalizer {
    static normalizeBrand(brand: string): string {
        // Logic to map "Fender Guitars" -> "Fender"
        return brand.trim();
    }

    static normalizePrice(amount: number | string): number {
        if (typeof amount === 'string') {
            return parseFloat(amount.replace(/[^0-9.]/g, ''));
        }
        return amount;
    }
}
