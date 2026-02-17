import { getCreatorBySlug } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@sonic/ui';
import { notFound } from 'next/navigation';

export default async function CreatorPage({ params }: { params: { slug: string } }) {
    const creator = await getCreatorBySlug(params.slug);

    if (!creator) {
        return notFound();
    }

    return (
        <div className="container mx-auto py-10">
            <div className="flex items-center gap-6 mb-10">
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                    Avatar
                </div>
                <div>
                    <h1 className="text-4xl font-bold">{creator.name}</h1>
                    <p className="text-gray-500 capitalize">{creator.platform} Creator</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Recent Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {creator.videos.map((video) => (
                    <Card key={video.id}>
                        <div className="aspect-video bg-gray-200">
                            {/* Thumbnail would go here */}
                        </div>
                        <CardHeader>
                            <CardTitle className="text-lg">{video.title}</CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}
