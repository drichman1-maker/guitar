import { getProductBySlug } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@sonic/ui';
import { notFound } from 'next/navigation';

export default async function PriceHistoryPage({ params }: { params: { slug: string } }) {
    const product = await getProductBySlug(params.slug);

    if (!product) {
        return notFound();
    }

    const history = product.priceHistory || [];
    const currentNewPrice = Math.min(...product.prices.filter(p => p.retailer !== 'Reverb').map(p => p.amount));
    const currentUsedPrice = Math.min(...product.prices.filter(p => p.retailer === 'Reverb').map(p => p.amount));

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold mb-2">Used {product.brand.name} {product.name} Price History</h1>
            <p className="text-xl text-gray-600 mb-8">
                Is it a good time to buy a used {product.name}?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card>
                    <CardHeader><CardTitle>New Price</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-green-600">${currentNewPrice}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Used Market Price</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-blue-600">${currentUsedPrice}</p>
                        <p className="text-sm text-gray-500">Avg. Reverb Transaction</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Depreciation</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-orange-600">
                            {Math.round((1 - currentUsedPrice / currentNewPrice) * 100)}%
                        </p>
                        <p className="text-sm text-gray-500">Value retained vs New</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader><CardTitle>12-Month Price Trend</CardTitle></CardHeader>
                <CardContent>
                    <div className="h-64 flex items-end gap-2">
                        {history.map((point) => (
                            <div key={point.date} className="flex-1 flex flex-col items-center">
                                <div
                                    className="w-full bg-blue-500 rounded-t"
                                    style={{ height: `${(point.avg / 1500) * 100}%` }} // Simplified scale
                                ></div>
                                <span className="text-xs text-gray-500 mt-2">{point.date}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
