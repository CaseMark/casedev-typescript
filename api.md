# Actions

## V1

Types:

- <code><a href="./src/resources/actions/v1.ts">V1CreateResponse</a></code>
- <code><a href="./src/resources/actions/v1.ts">V1ExecuteResponse</a></code>

Methods:

- <code title="post /actions/v1">client.actions.v1.<a href="./src/resources/actions/v1.ts">create</a>({ ...params }) -> V1CreateResponse</code>
- <code title="get /actions/v1/{id}">client.actions.v1.<a href="./src/resources/actions/v1.ts">retrieve</a>(id) -> void</code>
- <code title="get /actions/v1">client.actions.v1.<a href="./src/resources/actions/v1.ts">list</a>() -> void</code>
- <code title="delete /actions/v1/{id}">client.actions.v1.<a href="./src/resources/actions/v1.ts">delete</a>(id) -> void</code>
- <code title="post /actions/v1/{id}/execute">client.actions.v1.<a href="./src/resources/actions/v1.ts">execute</a>(id, { ...params }) -> V1ExecuteResponse</code>
- <code title="get /actions/v1/executions/{id}">client.actions.v1.<a href="./src/resources/actions/v1.ts">retrieveExecution</a>(id) -> void</code>

# Compute

## V1

Methods:

- <code title="get /compute/v1/pricing">client.compute.v1.<a href="./src/resources/compute/v1/v1.ts">getPricing</a>() -> void</code>
- <code title="get /compute/v1/usage">client.compute.v1.<a href="./src/resources/compute/v1/v1.ts">getUsage</a>({ ...params }) -> void</code>

### Environments

Types:

- <code><a href="./src/resources/compute/v1/environments.ts">EnvironmentCreateResponse</a></code>
- <code><a href="./src/resources/compute/v1/environments.ts">EnvironmentDeleteResponse</a></code>

Methods:

- <code title="post /compute/v1/environments">client.compute.v1.environments.<a href="./src/resources/compute/v1/environments.ts">create</a>({ ...params }) -> EnvironmentCreateResponse</code>
- <code title="get /compute/v1/environments/{name}">client.compute.v1.environments.<a href="./src/resources/compute/v1/environments.ts">retrieve</a>(name) -> void</code>
- <code title="get /compute/v1/environments">client.compute.v1.environments.<a href="./src/resources/compute/v1/environments.ts">list</a>() -> void</code>
- <code title="delete /compute/v1/environments/{name}">client.compute.v1.environments.<a href="./src/resources/compute/v1/environments.ts">delete</a>(name) -> EnvironmentDeleteResponse</code>
- <code title="post /compute/v1/environments/{name}/default">client.compute.v1.environments.<a href="./src/resources/compute/v1/environments.ts">setDefault</a>(name) -> void</code>

### Functions

Methods:

- <code title="get /compute/v1/functions">client.compute.v1.functions.<a href="./src/resources/compute/v1/functions.ts">list</a>({ ...params }) -> void</code>
- <code title="get /compute/v1/functions/{id}/logs">client.compute.v1.functions.<a href="./src/resources/compute/v1/functions.ts">getLogs</a>(id, { ...params }) -> void</code>

### Invoke

Types:

- <code><a href="./src/resources/compute/v1/invoke.ts">InvokeRunResponse</a></code>

Methods:

- <code title="post /compute/v1/invoke/{functionId}">client.compute.v1.invoke.<a href="./src/resources/compute/v1/invoke.ts">run</a>(functionID, { ...params }) -> InvokeRunResponse</code>

### Runs

Methods:

- <code title="get /compute/v1/runs/{id}">client.compute.v1.runs.<a href="./src/resources/compute/v1/runs.ts">retrieve</a>(id) -> void</code>
- <code title="get /compute/v1/runs">client.compute.v1.runs.<a href="./src/resources/compute/v1/runs.ts">list</a>({ ...params }) -> void</code>

### Secrets

Types:

- <code><a href="./src/resources/compute/v1/secrets.ts">SecretCreateResponse</a></code>

Methods:

- <code title="post /compute/v1/secrets">client.compute.v1.secrets.<a href="./src/resources/compute/v1/secrets.ts">create</a>({ ...params }) -> SecretCreateResponse</code>
- <code title="get /compute/v1/secrets">client.compute.v1.secrets.<a href="./src/resources/compute/v1/secrets.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /compute/v1/secrets/{group}">client.compute.v1.secrets.<a href="./src/resources/compute/v1/secrets.ts">deleteGroup</a>(group, { ...params }) -> void</code>
- <code title="get /compute/v1/secrets/{group}">client.compute.v1.secrets.<a href="./src/resources/compute/v1/secrets.ts">retrieveGroup</a>(group, { ...params }) -> void</code>
- <code title="put /compute/v1/secrets/{group}">client.compute.v1.secrets.<a href="./src/resources/compute/v1/secrets.ts">updateGroup</a>(group, { ...params }) -> void</code>

# Convert

## V1

Types:

- <code><a href="./src/resources/convert/v1/v1.ts">V1ProcessResponse</a></code>
- <code><a href="./src/resources/convert/v1/v1.ts">V1WebhookResponse</a></code>

Methods:

- <code title="get /convert/v1/download/{id}">client.convert.v1.<a href="./src/resources/convert/v1/v1.ts">download</a>(id) -> Response</code>
- <code title="post /convert/v1/process">client.convert.v1.<a href="./src/resources/convert/v1/v1.ts">process</a>({ ...params }) -> V1ProcessResponse</code>
- <code title="post /convert/v1/webhook">client.convert.v1.<a href="./src/resources/convert/v1/v1.ts">webhook</a>({ ...params }) -> V1WebhookResponse</code>

### Jobs

Methods:

- <code title="get /convert/v1/jobs/{id}">client.convert.v1.jobs.<a href="./src/resources/convert/v1/jobs.ts">retrieve</a>(id) -> void</code>
- <code title="delete /convert/v1/jobs/{id}">client.convert.v1.jobs.<a href="./src/resources/convert/v1/jobs.ts">delete</a>(id) -> void</code>

# Format

## V1

Methods:

- <code title="post /format/v1/document">client.format.v1.<a href="./src/resources/format/v1/v1.ts">createDocument</a>({ ...params }) -> Response</code>

### Templates

Types:

- <code><a href="./src/resources/format/v1/templates.ts">TemplateCreateResponse</a></code>

Methods:

- <code title="post /format/v1/templates">client.format.v1.templates.<a href="./src/resources/format/v1/templates.ts">create</a>({ ...params }) -> TemplateCreateResponse</code>
- <code title="get /format/v1/templates/{id}">client.format.v1.templates.<a href="./src/resources/format/v1/templates.ts">retrieve</a>(id) -> void</code>
- <code title="get /format/v1/templates">client.format.v1.templates.<a href="./src/resources/format/v1/templates.ts">list</a>({ ...params }) -> void</code>

# Llm

Methods:

- <code title="get /llm/config">client.llm.<a href="./src/resources/llm/llm.ts">getConfig</a>() -> void</code>

## V1

Methods:

- <code title="post /llm/v1/embeddings">client.llm.v1.<a href="./src/resources/llm/v1/v1.ts">createEmbedding</a>({ ...params }) -> void</code>
- <code title="get /llm/v1/models">client.llm.v1.<a href="./src/resources/llm/v1/v1.ts">listModels</a>() -> void</code>

### Chat

Types:

- <code><a href="./src/resources/llm/v1/chat.ts">ChatCreateCompletionResponse</a></code>

Methods:

- <code title="post /llm/v1/chat/completions">client.llm.v1.chat.<a href="./src/resources/llm/v1/chat.ts">createCompletion</a>({ ...params }) -> ChatCreateCompletionResponse</code>

# Ocr

## V1

Types:

- <code><a href="./src/resources/ocr/v1.ts">V1ProcessResponse</a></code>

Methods:

- <code title="get /ocr/v1/{id}">client.ocr.v1.<a href="./src/resources/ocr/v1.ts">retrieve</a>(id) -> void</code>
- <code title="get /ocr/v1/{id}/download/{type}">client.ocr.v1.<a href="./src/resources/ocr/v1.ts">download</a>(type, { ...params }) -> void</code>
- <code title="post /ocr/v1/process">client.ocr.v1.<a href="./src/resources/ocr/v1.ts">process</a>({ ...params }) -> V1ProcessResponse</code>

# Search

## V1

Types:

- <code><a href="./src/resources/search/v1.ts">V1AnswerResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1ContentsResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1ResearchResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1SearchResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1SimilarResponse</a></code>

Methods:

- <code title="post /search/v1/answer">client.search.v1.<a href="./src/resources/search/v1.ts">answer</a>({ ...params }) -> V1AnswerResponse</code>
- <code title="post /search/v1/contents">client.search.v1.<a href="./src/resources/search/v1.ts">contents</a>({ ...params }) -> V1ContentsResponse</code>
- <code title="post /search/v1/research">client.search.v1.<a href="./src/resources/search/v1.ts">research</a>({ ...params }) -> V1ResearchResponse</code>
- <code title="get /search/v1/research/{id}">client.search.v1.<a href="./src/resources/search/v1.ts">retrieveResearch</a>(id, { ...params }) -> void</code>
- <code title="post /search/v1/search">client.search.v1.<a href="./src/resources/search/v1.ts">search</a>({ ...params }) -> V1SearchResponse</code>
- <code title="post /search/v1/similar">client.search.v1.<a href="./src/resources/search/v1.ts">similar</a>({ ...params }) -> V1SimilarResponse</code>

# Vault

Types:

- <code><a href="./src/resources/vault/vault.ts">VaultCreateResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultListResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultIngestResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultSearchResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultUploadResponse</a></code>

Methods:

- <code title="post /vault">client.vault.<a href="./src/resources/vault/vault.ts">create</a>({ ...params }) -> VaultCreateResponse</code>
- <code title="get /vault/{id}">client.vault.<a href="./src/resources/vault/vault.ts">retrieve</a>(id) -> void</code>
- <code title="get /vault">client.vault.<a href="./src/resources/vault/vault.ts">list</a>() -> VaultListResponse</code>
- <code title="post /vault/{id}/ingest/{objectId}">client.vault.<a href="./src/resources/vault/vault.ts">ingest</a>(objectID, { ...params }) -> VaultIngestResponse</code>
- <code title="post /vault/{id}/search">client.vault.<a href="./src/resources/vault/vault.ts">search</a>(id, { ...params }) -> VaultSearchResponse</code>
- <code title="post /vault/{id}/upload">client.vault.<a href="./src/resources/vault/vault.ts">upload</a>(id, { ...params }) -> VaultUploadResponse</code>

## Graphrag

Methods:

- <code title="get /vault/{id}/graphrag/stats">client.vault.graphrag.<a href="./src/resources/vault/graphrag.ts">getStats</a>(id) -> void</code>
- <code title="post /vault/{id}/graphrag/init">client.vault.graphrag.<a href="./src/resources/vault/graphrag.ts">init</a>(id) -> void</code>

## Objects

Types:

- <code><a href="./src/resources/vault/objects.ts">ObjectCreatePresignedURLResponse</a></code>

Methods:

- <code title="get /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">retrieve</a>(objectID, { ...params }) -> void</code>
- <code title="get /vault/{id}/objects">client.vault.objects.<a href="./src/resources/vault/objects.ts">list</a>(id) -> void</code>
- <code title="post /vault/{id}/objects/{objectId}/presigned-url">client.vault.objects.<a href="./src/resources/vault/objects.ts">createPresignedURL</a>(objectID, { ...params }) -> ObjectCreatePresignedURLResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/download">client.vault.objects.<a href="./src/resources/vault/objects.ts">download</a>(objectID, { ...params }) -> void</code>
- <code title="get /vault/{id}/objects/{objectId}/text">client.vault.objects.<a href="./src/resources/vault/objects.ts">getText</a>(objectID, { ...params }) -> void</code>

# Voice

## Streaming

Methods:

- <code title="get /voice/streaming/url">client.voice.streaming.<a href="./src/resources/voice/streaming.ts">getURL</a>() -> void</code>

## Transcription

Types:

- <code><a href="./src/resources/voice/transcription.ts">TranscriptionRetrieveResponse</a></code>

Methods:

- <code title="post /voice/transcription">client.voice.transcription.<a href="./src/resources/voice/transcription.ts">create</a>({ ...params }) -> void</code>
- <code title="get /voice/transcription/{id}">client.voice.transcription.<a href="./src/resources/voice/transcription.ts">retrieve</a>(id) -> TranscriptionRetrieveResponse</code>

## V1

Methods:

- <code title="get /voice/v1/voices">client.voice.v1.<a href="./src/resources/voice/v1/v1.ts">listVoices</a>({ ...params }) -> void</code>

### Speak

Methods:

- <code title="post /voice/v1/speak">client.voice.v1.speak.<a href="./src/resources/voice/v1/speak.ts">create</a>({ ...params }) -> Response</code>

# Webhooks

## V1

Types:

- <code><a href="./src/resources/webhooks/v1.ts">V1CreateResponse</a></code>

Methods:

- <code title="post /webhooks/v1">client.webhooks.v1.<a href="./src/resources/webhooks/v1.ts">create</a>({ ...params }) -> V1CreateResponse</code>
- <code title="get /webhooks/v1/{id}">client.webhooks.v1.<a href="./src/resources/webhooks/v1.ts">retrieve</a>(id) -> void</code>
- <code title="get /webhooks/v1">client.webhooks.v1.<a href="./src/resources/webhooks/v1.ts">list</a>() -> void</code>
- <code title="delete /webhooks/v1/{id}">client.webhooks.v1.<a href="./src/resources/webhooks/v1.ts">delete</a>(id) -> void</code>

# Templates

## V1

Types:

- <code><a href="./src/resources/templates/v1.ts">V1ExecuteResponse</a></code>

Methods:

- <code title="get /templates/v1/{id}">client.templates.v1.<a href="./src/resources/templates/v1.ts">retrieve</a>(id) -> void</code>
- <code title="get /templates/v1">client.templates.v1.<a href="./src/resources/templates/v1.ts">list</a>({ ...params }) -> void</code>
- <code title="post /templates/v1/{id}/execute">client.templates.v1.<a href="./src/resources/templates/v1.ts">execute</a>(id, { ...params }) -> V1ExecuteResponse</code>
- <code title="get /templates/v1/executions/{id}">client.templates.v1.<a href="./src/resources/templates/v1.ts">retrieveExecution</a>(id) -> void</code>
- <code title="post /templates/v1/search">client.templates.v1.<a href="./src/resources/templates/v1.ts">search</a>({ ...params }) -> void</code>

# Workflows

## V1

Types:

- <code><a href="./src/resources/workflows/v1.ts">V1CreateResponse</a></code>
- <code><a href="./src/resources/workflows/v1.ts">V1RetrieveResponse</a></code>
- <code><a href="./src/resources/workflows/v1.ts">V1UpdateResponse</a></code>
- <code><a href="./src/resources/workflows/v1.ts">V1ListResponse</a></code>
- <code><a href="./src/resources/workflows/v1.ts">V1DeleteResponse</a></code>
- <code><a href="./src/resources/workflows/v1.ts">V1DeployResponse</a></code>
- <code><a href="./src/resources/workflows/v1.ts">V1ExecuteResponse</a></code>
- <code><a href="./src/resources/workflows/v1.ts">V1ListExecutionsResponse</a></code>
- <code><a href="./src/resources/workflows/v1.ts">V1RetrieveExecutionResponse</a></code>
- <code><a href="./src/resources/workflows/v1.ts">V1UndeployResponse</a></code>

Methods:

- <code title="post /workflows/v1">client.workflows.v1.<a href="./src/resources/workflows/v1.ts">create</a>({ ...params }) -> V1CreateResponse</code>
- <code title="get /workflows/v1/{id}">client.workflows.v1.<a href="./src/resources/workflows/v1.ts">retrieve</a>(id) -> V1RetrieveResponse</code>
- <code title="patch /workflows/v1/{id}">client.workflows.v1.<a href="./src/resources/workflows/v1.ts">update</a>(id, { ...params }) -> V1UpdateResponse</code>
- <code title="get /workflows/v1">client.workflows.v1.<a href="./src/resources/workflows/v1.ts">list</a>({ ...params }) -> V1ListResponse</code>
- <code title="delete /workflows/v1/{id}">client.workflows.v1.<a href="./src/resources/workflows/v1.ts">delete</a>(id) -> V1DeleteResponse</code>
- <code title="post /workflows/v1/{id}/deploy">client.workflows.v1.<a href="./src/resources/workflows/v1.ts">deploy</a>(id) -> V1DeployResponse</code>
- <code title="post /workflows/v1/{id}/execute">client.workflows.v1.<a href="./src/resources/workflows/v1.ts">execute</a>(id, { ...params }) -> V1ExecuteResponse</code>
- <code title="get /workflows/v1/{id}/executions">client.workflows.v1.<a href="./src/resources/workflows/v1.ts">listExecutions</a>(id, { ...params }) -> V1ListExecutionsResponse</code>
- <code title="get /workflows/v1/executions/{id}">client.workflows.v1.<a href="./src/resources/workflows/v1.ts">retrieveExecution</a>(id) -> V1RetrieveExecutionResponse</code>
- <code title="delete /workflows/v1/{id}/deploy">client.workflows.v1.<a href="./src/resources/workflows/v1.ts">undeploy</a>(id) -> V1UndeployResponse</code>
