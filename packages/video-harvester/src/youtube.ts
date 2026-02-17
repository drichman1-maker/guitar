import { google } from 'googleapis';
import { YouTubeVideoInput } from './types';

export class YouTubeService {
    private youtube;

    constructor(apiKey: string) {
        this.youtube = google.youtube({
            version: 'v3',
            auth: apiKey,
        });
    }

    async searchVideos(query: string, maxResults = 10): Promise<YouTubeVideoInput[]> {
        const response = await this.youtube.search.list({
            part: ['snippet'],
            q: query,
            type: ['video'],
            maxResults,
        });

        return (response.data.items || []).map((item) => ({
            videoId: item.id?.videoId || '',
            title: item.snippet?.title || '',
            description: item.snippet?.description || '',
            channelId: item.snippet?.channelId || '',
            channelTitle: item.snippet?.channelTitle || '',
            publishedAt: item.snippet?.publishedAt || '',
            thumbnails: item.snippet?.thumbnails || {},
        }));
    }
}
