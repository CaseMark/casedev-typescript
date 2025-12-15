// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Casedev from 'casedev';

const client = new Casedev({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource speak', () => {
  test('create: required and optional params', async () => {
    const response = await client.voice.v1.speak.create({
      text: 'text',
      apply_text_normalization: true,
      enable_logging: true,
      language_code: 'en',
      model_id: 'eleven_multilingual_v2',
      next_text: 'next_text',
      optimize_streaming_latency: 0,
      output_format: 'mp3_44100_128',
      previous_text: 'previous_text',
      seed: 0,
      voice_id: 'voice_id',
      voice_settings: { similarity_boost: 0, stability: 0, style: 0, use_speaker_boost: true },
    });
  });
});
