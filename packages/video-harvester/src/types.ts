export interface YouTubeVideoInput {
    videoId: string;
    title: string;
    description: string;
    channelId: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: {
        default?: { url: string };
        medium?: { url: string };
        high?: { url: string };
    };
}

export interface ExtractedGear {
    name: string;
    timestamp?: number; // seconds
    confidence: number; // 0-1
    context?: string;
}

export interface HarvestedVideo {
    video: YouTubeVideoInput;
    gear: ExtractedGear[];
    transcript?: string;
    summary?: string;
}
