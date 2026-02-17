import type { Product, WithContext, VideoObject } from 'schema-dts';

export function generateProductSchema(product: any): WithContext<Product> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.images[0],
        brand: {
            '@type': 'Brand',
            name: product.brand.name,
        },
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            lowPrice: product.lowPrice,
            highPrice: product.highPrice,
        },
    };
}

export function generateVideoSchema(video: any): WithContext<VideoObject> {
    return {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: video.title,
        description: video.description,
        thumbnailUrl: video.thumbnailUrl,
        uploadDate: video.publishedAt,
    };
}
