# Compute

## V1

Types:

- <code><a href="./src/resources/compute/v1/v1.ts">V1GetUsageResponse</a></code>

Methods:

- <code title="get /compute/v1/pricing">client.compute.v1.<a href="./src/resources/compute/v1/v1.ts">getPricing</a>() -> void</code>
- <code title="get /compute/v1/usage">client.compute.v1.<a href="./src/resources/compute/v1/v1.ts">getUsage</a>({ ...params }) -> V1GetUsageResponse</code>

### Environments

Types:

- <code><a href="./src/resources/compute/v1/environments.ts">EnvironmentCreateResponse</a></code>
- <code><a href="./src/resources/compute/v1/environments.ts">EnvironmentRetrieveResponse</a></code>
- <code><a href="./src/resources/compute/v1/environments.ts">EnvironmentListResponse</a></code>
- <code><a href="./src/resources/compute/v1/environments.ts">EnvironmentDeleteResponse</a></code>
- <code><a href="./src/resources/compute/v1/environments.ts">EnvironmentSetDefaultResponse</a></code>

Methods:

- <code title="post /compute/v1/environments">client.compute.v1.environments.<a href="./src/resources/compute/v1/environments.ts">create</a>({ ...params }) -> EnvironmentCreateResponse</code>
- <code title="get /compute/v1/environments/{name}">client.compute.v1.environments.<a href="./src/resources/compute/v1/environments.ts">retrieve</a>(name) -> EnvironmentRetrieveResponse</code>
- <code title="get /compute/v1/environments">client.compute.v1.environments.<a href="./src/resources/compute/v1/environments.ts">list</a>() -> EnvironmentListResponse</code>
- <code title="delete /compute/v1/environments/{name}">client.compute.v1.environments.<a href="./src/resources/compute/v1/environments.ts">delete</a>(name) -> EnvironmentDeleteResponse</code>
- <code title="post /compute/v1/environments/{name}/default">client.compute.v1.environments.<a href="./src/resources/compute/v1/environments.ts">setDefault</a>(name) -> EnvironmentSetDefaultResponse</code>

### Functions

### Invoke

### Runs

### Secrets

Types:

- <code><a href="./src/resources/compute/v1/secrets.ts">SecretCreateResponse</a></code>
- <code><a href="./src/resources/compute/v1/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/compute/v1/secrets.ts">SecretDeleteGroupResponse</a></code>
- <code><a href="./src/resources/compute/v1/secrets.ts">SecretRetrieveGroupResponse</a></code>
- <code><a href="./src/resources/compute/v1/secrets.ts">SecretUpdateGroupResponse</a></code>

Methods:

- <code title="post /compute/v1/secrets">client.compute.v1.secrets.<a href="./src/resources/compute/v1/secrets.ts">create</a>({ ...params }) -> SecretCreateResponse</code>
- <code title="get /compute/v1/secrets">client.compute.v1.secrets.<a href="./src/resources/compute/v1/secrets.ts">list</a>({ ...params }) -> SecretListResponse</code>
- <code title="delete /compute/v1/secrets/{group}">client.compute.v1.secrets.<a href="./src/resources/compute/v1/secrets.ts">deleteGroup</a>(group, { ...params }) -> SecretDeleteGroupResponse</code>
- <code title="get /compute/v1/secrets/{group}">client.compute.v1.secrets.<a href="./src/resources/compute/v1/secrets.ts">retrieveGroup</a>(group, { ...params }) -> SecretRetrieveGroupResponse</code>
- <code title="put /compute/v1/secrets/{group}">client.compute.v1.secrets.<a href="./src/resources/compute/v1/secrets.ts">updateGroup</a>(group, { ...params }) -> SecretUpdateGroupResponse</code>

# Format

## V1

Methods:

- <code title="post /format/v1/document">client.format.v1.<a href="./src/resources/format/v1/v1.ts">createDocument</a>({ ...params }) -> Response</code>

### Templates

Types:

- <code><a href="./src/resources/format/v1/templates.ts">TemplateCreateResponse</a></code>
- <code><a href="./src/resources/format/v1/templates.ts">TemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/format/v1/templates.ts">TemplateListResponse</a></code>

Methods:

- <code title="post /format/v1/templates">client.format.v1.templates.<a href="./src/resources/format/v1/templates.ts">create</a>({ ...params }) -> TemplateCreateResponse</code>
- <code title="get /format/v1/templates/{id}">client.format.v1.templates.<a href="./src/resources/format/v1/templates.ts">retrieve</a>(id) -> TemplateRetrieveResponse</code>
- <code title="get /format/v1/templates">client.format.v1.templates.<a href="./src/resources/format/v1/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>

# Llm

Types:

- <code><a href="./src/resources/llm/llm.ts">LlmGetConfigResponse</a></code>

Methods:

- <code title="get /llm/config">client.llm.<a href="./src/resources/llm/llm.ts">getConfig</a>() -> LlmGetConfigResponse</code>

## V1

Types:

- <code><a href="./src/resources/llm/v1/v1.ts">V1CreateEmbeddingResponse</a></code>
- <code><a href="./src/resources/llm/v1/v1.ts">V1ListModelsResponse</a></code>

Methods:

- <code title="post /llm/v1/embeddings">client.llm.v1.<a href="./src/resources/llm/v1/v1.ts">createEmbedding</a>({ ...params }) -> V1CreateEmbeddingResponse</code>
- <code title="get /llm/v1/models">client.llm.v1.<a href="./src/resources/llm/v1/v1.ts">listModels</a>() -> V1ListModelsResponse</code>

### Chat

Types:

- <code><a href="./src/resources/llm/v1/chat.ts">ChatCreateCompletionResponse</a></code>

Methods:

- <code title="post /llm/v1/chat/completions">client.llm.v1.chat.<a href="./src/resources/llm/v1/chat.ts">createCompletion</a>({ ...params }) -> ChatCreateCompletionResponse</code>

# Ocr

## V1

Types:

- <code><a href="./src/resources/ocr/v1.ts">V1RetrieveResponse</a></code>
- <code><a href="./src/resources/ocr/v1.ts">V1DownloadResponse</a></code>
- <code><a href="./src/resources/ocr/v1.ts">V1ProcessResponse</a></code>

Methods:

- <code title="get /ocr/v1/{id}">client.ocr.v1.<a href="./src/resources/ocr/v1.ts">retrieve</a>(id) -> V1RetrieveResponse</code>
- <code title="get /ocr/v1/{id}/download/{type}">client.ocr.v1.<a href="./src/resources/ocr/v1.ts">download</a>(type, { ...params }) -> string</code>
- <code title="post /ocr/v1/process">client.ocr.v1.<a href="./src/resources/ocr/v1.ts">process</a>({ ...params }) -> V1ProcessResponse</code>

# Search

## V1

Types:

- <code><a href="./src/resources/search/v1.ts">V1AnswerResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1ContentsResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1ResearchResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1RetrieveResearchResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1SearchResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1SimilarResponse</a></code>

Methods:

- <code title="post /search/v1/answer">client.search.v1.<a href="./src/resources/search/v1.ts">answer</a>({ ...params }) -> V1AnswerResponse</code>
- <code title="post /search/v1/contents">client.search.v1.<a href="./src/resources/search/v1.ts">contents</a>({ ...params }) -> V1ContentsResponse</code>
- <code title="post /search/v1/research">client.search.v1.<a href="./src/resources/search/v1.ts">research</a>({ ...params }) -> V1ResearchResponse</code>
- <code title="get /search/v1/research/{id}">client.search.v1.<a href="./src/resources/search/v1.ts">retrieveResearch</a>(id, { ...params }) -> V1RetrieveResearchResponse</code>
- <code title="post /search/v1/search">client.search.v1.<a href="./src/resources/search/v1.ts">search</a>({ ...params }) -> V1SearchResponse</code>
- <code title="post /search/v1/similar">client.search.v1.<a href="./src/resources/search/v1.ts">similar</a>({ ...params }) -> V1SimilarResponse</code>

# Vault

Types:

- <code><a href="./src/resources/vault/vault.ts">VaultCreateResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultRetrieveResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultListResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultIngestResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultSearchResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultUploadResponse</a></code>

Methods:

- <code title="post /vault">client.vault.<a href="./src/resources/vault/vault.ts">create</a>({ ...params }) -> VaultCreateResponse</code>
- <code title="get /vault/{id}">client.vault.<a href="./src/resources/vault/vault.ts">retrieve</a>(id) -> VaultRetrieveResponse</code>
- <code title="get /vault">client.vault.<a href="./src/resources/vault/vault.ts">list</a>() -> VaultListResponse</code>
- <code title="post /vault/{id}/ingest/{objectId}">client.vault.<a href="./src/resources/vault/vault.ts">ingest</a>(objectID, { ...params }) -> VaultIngestResponse</code>
- <code title="post /vault/{id}/search">client.vault.<a href="./src/resources/vault/vault.ts">search</a>(id, { ...params }) -> VaultSearchResponse</code>
- <code title="post /vault/{id}/upload">client.vault.<a href="./src/resources/vault/vault.ts">upload</a>(id, { ...params }) -> VaultUploadResponse</code>

## Graphrag

Types:

- <code><a href="./src/resources/vault/graphrag.ts">GraphragGetStatsResponse</a></code>
- <code><a href="./src/resources/vault/graphrag.ts">GraphragInitResponse</a></code>

Methods:

- <code title="get /vault/{id}/graphrag/stats">client.vault.graphrag.<a href="./src/resources/vault/graphrag.ts">getStats</a>(id) -> GraphragGetStatsResponse</code>
- <code title="post /vault/{id}/graphrag/init">client.vault.graphrag.<a href="./src/resources/vault/graphrag.ts">init</a>(id) -> GraphragInitResponse</code>

## Objects

Types:

- <code><a href="./src/resources/vault/objects.ts">ObjectRetrieveResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectListResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectCreatePresignedURLResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectDownloadResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetTextResponse</a></code>

Methods:

- <code title="get /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">retrieve</a>(objectID, { ...params }) -> ObjectRetrieveResponse</code>
- <code title="get /vault/{id}/objects">client.vault.objects.<a href="./src/resources/vault/objects.ts">list</a>(id) -> ObjectListResponse</code>
- <code title="post /vault/{id}/objects/{objectId}/presigned-url">client.vault.objects.<a href="./src/resources/vault/objects.ts">createPresignedURL</a>(objectID, { ...params }) -> ObjectCreatePresignedURLResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/download">client.vault.objects.<a href="./src/resources/vault/objects.ts">download</a>(objectID, { ...params }) -> string</code>
- <code title="get /vault/{id}/objects/{objectId}/text">client.vault.objects.<a href="./src/resources/vault/objects.ts">getText</a>(objectID, { ...params }) -> ObjectGetTextResponse</code>

# Voice

## Streaming

Types:

- <code><a href="./src/resources/voice/streaming.ts">StreamingGetURLResponse</a></code>

Methods:

- <code title="get /voice/streaming/url">client.voice.streaming.<a href="./src/resources/voice/streaming.ts">getURL</a>() -> StreamingGetURLResponse</code>

## Transcription

Types:

- <code><a href="./src/resources/voice/transcription.ts">TranscriptionCreateResponse</a></code>
- <code><a href="./src/resources/voice/transcription.ts">TranscriptionRetrieveResponse</a></code>

Methods:

- <code title="post /voice/transcription">client.voice.transcription.<a href="./src/resources/voice/transcription.ts">create</a>({ ...params }) -> TranscriptionCreateResponse</code>
- <code title="get /voice/transcription/{id}">client.voice.transcription.<a href="./src/resources/voice/transcription.ts">retrieve</a>(id) -> TranscriptionRetrieveResponse</code>

## V1

Types:

- <code><a href="./src/resources/voice/v1/v1.ts">V1ListVoicesResponse</a></code>

Methods:

- <code title="get /voice/v1/voices">client.voice.v1.<a href="./src/resources/voice/v1/v1.ts">listVoices</a>({ ...params }) -> V1ListVoicesResponse</code>

### Speak

Methods:

- <code title="post /voice/v1/speak">client.voice.v1.speak.<a href="./src/resources/voice/v1/speak.ts">create</a>({ ...params }) -> Response</code>

# Webhooks

## V1
