export interface NormalizedProduct {
    name: string;
    brand: string;
    mpn?: string; // Manufacturer Part Number
    upc?: string; // Universal Product Code
    category: string;
    description?: string;
    images: string[];
    specs: Record<string, any>;
    prices: NormalizedPrice[];
}

export interface NormalizedPrice {
    retailer: string;
    retailerSlug: string;
    amount: number;
    currency: string;
    url: string;
    inStock: boolean;
    condition: 'new' | 'used' | 'refurbished';
}

export interface IngestionAdapter {
    name: string;
    fetchProducts(query?: string): Promise<NormalizedProduct[]>;
    fetchPrice(productId: string): Promise<NormalizedPrice | null>;
}
