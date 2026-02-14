/**
 * Live API smoke tests for the CaseDev TypeScript SDK.
 *
 * These tests hit a real API server (staging or production) to verify
 * the SDK works end-to-end. They are intentionally read-only — no
 * resources are created, mutated, or deleted.
 *
 * This file is custom code that persists across Stainless SDK regeneration
 * since Stainless never touches files it didn't generate.
 *
 * Configuration (via environment variables):
 *   CASEDEV_API_KEY       - Required. A valid API key for the target environment.
 *   CASEDEV_BASE_URL      - Optional. Defaults to https://api.case.dev.
 *
 * Usage:
 *   CASEDEV_API_KEY=sk_case_... npx jest tests/custom/smoke.test.ts
 */

import Casedev from 'casedev';

const apiKey = process.env['CASEDEV_API_KEY'];

// Skip the entire suite if no API key is configured.
// This lets the test suite run cleanly in environments that only have
// Prism (mock) credentials.
const describeIfLive = apiKey ? describe : describe.skip;

describeIfLive('smoke: /llm/config', () => {
  let client: Casedev;

  beforeAll(() => {
    client = new Casedev({ apiKey: apiKey!, timeout: 30_000 });
  });

  test('returns a list of models', async () => {
    const config = await client.llm.getConfig();
    expect(config.models).toBeDefined();
    expect(config.models.length).toBeGreaterThan(0);
  });

  test('each model has required fields', async () => {
    const config = await client.llm.getConfig();
    const model = config.models[0]!;
    expect(model.id).toBeTruthy();
    expect(model.name).toBeTruthy();
    expect(model.modelType).toBeTruthy();
  });

  test('raw response is well-formed', async () => {
    const response = await client.llm.getConfig().asResponse();
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('application/json');
  });
});

describeIfLive('smoke: /vault', () => {
  let client: Casedev;

  beforeAll(() => {
    client = new Casedev({ apiKey: apiKey!, timeout: 30_000 });
  });

  test('list returns a valid response', async () => {
    const result = await client.vault.list();
    // total can be 0 for a fresh org, but the field should exist
    expect(result.total).toBeDefined();
    expect(result.vaults).toBeDefined();
  });

  test('list raw response is well-formed', async () => {
    const response = await client.vault.list().asResponse();
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('application/json');
  });
});
