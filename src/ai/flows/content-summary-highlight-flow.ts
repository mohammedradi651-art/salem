'use server';
/**
 * @fileOverview This file implements a Genkit flow to generate a summary and key highlights of Salem Al-Oubathani's recent content.
 *
 * - contentSummaryHighlight - A function that triggers the content summarization process.
 * - ContentSummaryHighlightInput - The input type for the contentSummaryHighlight function.
 * - ContentSummaryHighlightOutput - The return type for the contentSummaryHighlight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const ContentSummaryHighlightInputSchema = z.object({
  contentItems: z
    .array(z.string())
    .describe(
      'An array of recent content items (e.g., video transcripts, blog post excerpts) from Salem Al-Oubathani.'
    ),
});
export type ContentSummaryHighlightInput = z.infer<typeof ContentSummaryHighlightInputSchema>;

// Output Schema
const ContentSummaryHighlightOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of Salem Al-Oubathani\'s recent content and video highlights.'),
  keyContexts: z
    .array(z.string())
    .describe('A list of key topics or contexts from his latest videos and content.'),
});
export type ContentSummaryHighlightOutput = z.infer<typeof ContentSummaryHighlightOutputSchema>;

// Wrapper function
export async function contentSummaryHighlight(
  input: ContentSummaryHighlightInput
): Promise<ContentSummaryHighlightOutput> {
  return contentSummaryHighlightFlow(input);
}

// Prompt definition
const prompt = ai.definePrompt({
  name: 'contentSummaryHighlightPrompt',
  input: {schema: ContentSummaryHighlightInputSchema},
  output: {schema: ContentSummaryHighlightOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing and extracting key contexts from a content creator's recent work.
The content creator's name is Salem Al-Oubathani. Your goal is to provide a concise overview of his creative focus.

Here are the recent content items:

{{#each contentItems}}
- Content: {{{this}}}
{{/each}}

Based on the provided content items, generate a concise summary of Salem Al-Oubathani's recent content and video highlights.
Also, identify and list 3-5 key topics or contexts that are prominent in his latest videos and content.
The output should be a JSON object with 'summary' (string) and 'keyContexts' (array of strings) fields.
`,
});

// Flow definition
const contentSummaryHighlightFlow = ai.defineFlow(
  {
    name: 'contentSummaryHighlightFlow',
    inputSchema: ContentSummaryHighlightInputSchema,
    outputSchema: ContentSummaryHighlightOutputSchema,
  },
  async (input) => {
    // Call the prompt with the input and get the output.
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate content summary and highlights.');
    }
    return output;
  }
);
