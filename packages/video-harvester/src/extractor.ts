import { ExtractedGear } from './types';

export class MetadataExtractor {
    async extractGearFromText(text: string): Promise<ExtractedGear[]> {
        // Placeholder: This would use OpenAI or RegEx to find gear names
        // e.g. "I used a Gibson Les Paul" -> { name: "Gibson Les Paul", confidence: 0.9 }
        return [];
    }

    async generateSummary(transcript: string): Promise<string> {
        // Placeholder: Summarize the video content
        return "Video summary...";
    }
}
