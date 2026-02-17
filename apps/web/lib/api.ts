export interface Product {
    id: string;
    name: string;
    brand: { name: string };
    description: string;
    images: string[];
    specs: Record<string, string>;
    prices: { retailer: string; amount: number; url: string; currency: string }[];
    priceHistory?: { date: string; avg: number }[];
}

export interface Creator {
    id: string;
    name: string;
    slug: string;
    platform: string;
    videos: { id: string; title: string; thumbnailUrl: string }[];
}

export const getProductBySlug = async (slug: string): Promise<Product | null> => {
    // Mock data
    if (slug === 'fender-stratocaster') {
        return {
            id: '1',
            name: 'Stratocaster',
            brand: { name: 'Fender' },
            description: 'The iconic electric guitar.',
            images: ['/placeholder.jpg'],
            specs: { Body: 'Alder', Neck: 'Maple' },
            prices: [
                { retailer: 'Sweetwater', amount: 1499.99, currency: 'USD', url: '#' },
                { retailer: 'Reverb', amount: 1200.00, currency: 'USD', url: '#' }
            ],
            priceHistory: [
                { date: '2023-01', avg: 1100 },
                { date: '2023-02', avg: 1150 },
                { date: '2023-03', avg: 1125 },
                { date: '2023-04', avg: 1200 },
            ]
        };
    }
    return null;
};

export const getCreatorBySlug = async (slug: string): Promise<Creator | null> => {
    if (slug === 'rick-beato') {
        return {
            id: '1',
            name: 'Rick Beato',
            slug: 'rick-beato',
            platform: 'youtube',
            videos: [
                { id: 'v1', title: 'Why Music is Getting Worse', thumbnailUrl: 'https://img.youtube.com/vi/placeholder/default.jpg' }
            ]
        };
    }
    return null;
}
