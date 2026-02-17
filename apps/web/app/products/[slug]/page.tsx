import { getProductBySlug } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@sonic/ui';
import { generateProductSchema } from '@sonic/seo';
import Script from 'next/script';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { slug: string } }) {
    const product = await getProductBySlug(params.slug);

    if (!product) {
        return notFound();
    }

    const jsonLd = generateProductSchema({
        ...product,
        lowPrice: Math.min(...product.prices.map(p => p.amount)),
        highPrice: Math.max(...product.prices.map(p => p.amount)),
    });

    return (
        <div className="container mx-auto py-10">
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    {/* Image Placeholder */}
                    <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                        {product.name} Image
                    </div>
                </div>

                <div>
                    <h1 className="text-4xl font-bold mb-2">{product.brand.name} {product.name}</h1>
                    <p className="text-xl text-gray-600 mb-6">{product.description}</p>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Prices</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {product.prices.map((price, i) => (
                                    <div key={i} className="flex justify-between items-center p-2 border rounded">
                                        <span className="font-semibold">{price.retailer}</span>
                                        <div className="flex items-center gap-4">
                                            <span className="text-lg font-bold">
                                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: price.currency }).format(price.amount)}
                                            </span>
                                            <a href={price.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                Buy Now
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Specs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <dl className="grid grid-cols-2 gap-4">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key}>
                                        <dt className="text-sm font-medium text-gray-500">{key}</dt>
                                        <dd className="text-sm text-gray-900">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
