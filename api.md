# Applications

## V1

### Deployments

Methods:

- <code title="post /applications/v1/deployments">client.applications.v1.deployments.<a href="./src/resources/applications/v1/deployments.ts">create</a>({ ...params }) -> void</code>
- <code title="get /applications/v1/deployments/{id}">client.applications.v1.deployments.<a href="./src/resources/applications/v1/deployments.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /applications/v1/deployments">client.applications.v1.deployments.<a href="./src/resources/applications/v1/deployments.ts">list</a>({ ...params }) -> void</code>
- <code title="post /applications/v1/deployments/{id}/cancel">client.applications.v1.deployments.<a href="./src/resources/applications/v1/deployments.ts">cancel</a>(id, { ...params }) -> void</code>
- <code title="post /applications/v1/deployments/from-files">client.applications.v1.deployments.<a href="./src/resources/applications/v1/deployments.ts">createFromFiles</a>() -> void</code>
- <code title="get /applications/v1/deployments/{id}/logs">client.applications.v1.deployments.<a href="./src/resources/applications/v1/deployments.ts">getLogs</a>(id, { ...params }) -> void</code>
- <code title="get /applications/v1/deployments/{id}/status">client.applications.v1.deployments.<a href="./src/resources/applications/v1/deployments.ts">getStatus</a>(id) -> void</code>
- <code title="get /applications/v1/deployments/{id}/stream">client.applications.v1.deployments.<a href="./src/resources/applications/v1/deployments.ts">stream</a>(id, { ...params }) -> void</code>

### Projects

Types:

- <code><a href="./src/resources/applications/v1/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /applications/v1/projects">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">create</a>({ ...params }) -> void</code>
- <code title="get /applications/v1/projects/{id}">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">retrieve</a>(id) -> void</code>
- <code title="get /applications/v1/projects">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">list</a>() -> ProjectListResponse</code>
- <code title="delete /applications/v1/projects/{id}">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /applications/v1/projects/{id}/deployments">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">createDeployment</a>(id, { ...params }) -> void</code>
- <code title="post /applications/v1/projects/{id}/domains">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">createDomain</a>(id, { ...params }) -> void</code>
- <code title="post /applications/v1/projects/{id}/env">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">createEnv</a>(id, { ...params }) -> void</code>
- <code title="delete /applications/v1/projects/{id}/domains/{domain}">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">deleteDomain</a>(domain, { ...params }) -> void</code>
- <code title="delete /applications/v1/projects/{id}/env/{envId}">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">deleteEnv</a>(envID, { ...params }) -> void</code>
- <code title="get /applications/v1/projects/{id}/runtime-logs">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">getRuntimeLogs</a>(id, { ...params }) -> void</code>
- <code title="get /applications/v1/projects/{id}/deployments">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">listDeployments</a>(id, { ...params }) -> void</code>
- <code title="get /applications/v1/projects/{id}/domains">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">listDomains</a>(id) -> void</code>
- <code title="get /applications/v1/projects/{id}/env">client.applications.v1.projects.<a href="./src/resources/applications/v1/projects.ts">listEnv</a>(id, { ...params }) -> void</code>

### Workflows

Methods:

- <code title="get /applications/v1/workflows/{id}/status">client.applications.v1.workflows.<a href="./src/resources/applications/v1/workflows.ts">getStatus</a>(id, { ...params }) -> void</code>

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

### InstanceTypes

Types:

- <code><a href="./src/resources/compute/v1/instance-types.ts">InstanceTypeListResponse</a></code>

Methods:

- <code title="get /compute/v1/instance-types">client.compute.v1.instanceTypes.<a href="./src/resources/compute/v1/instance-types.ts">list</a>() -> InstanceTypeListResponse</code>

### Instances

Types:

- <code><a href="./src/resources/compute/v1/instances.ts">InstanceCreateResponse</a></code>
- <code><a href="./src/resources/compute/v1/instances.ts">InstanceRetrieveResponse</a></code>
- <code><a href="./src/resources/compute/v1/instances.ts">InstanceListResponse</a></code>
- <code><a href="./src/resources/compute/v1/instances.ts">InstanceDeleteResponse</a></code>

Methods:

- <code title="post /compute/v1/instances">client.compute.v1.instances.<a href="./src/resources/compute/v1/instances.ts">create</a>({ ...params }) -> InstanceCreateResponse</code>
- <code title="get /compute/v1/instances/{id}">client.compute.v1.instances.<a href="./src/resources/compute/v1/instances.ts">retrieve</a>(id) -> InstanceRetrieveResponse</code>
- <code title="get /compute/v1/instances">client.compute.v1.instances.<a href="./src/resources/compute/v1/instances.ts">list</a>() -> InstanceListResponse</code>
- <code title="delete /compute/v1/instances/{id}">client.compute.v1.instances.<a href="./src/resources/compute/v1/instances.ts">delete</a>(id) -> InstanceDeleteResponse</code>

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

# Database

## V1

Types:

- <code><a href="./src/resources/database/v1/v1.ts">V1GetUsageResponse</a></code>

Methods:

- <code title="get /database/v1/usage">client.database.v1.<a href="./src/resources/database/v1/v1.ts">getUsage</a>() -> V1GetUsageResponse</code>

### Projects

Types:

- <code><a href="./src/resources/database/v1/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/database/v1/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/database/v1/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/database/v1/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/database/v1/projects.ts">ProjectCreateBranchResponse</a></code>
- <code><a href="./src/resources/database/v1/projects.ts">ProjectGetConnectionResponse</a></code>
- <code><a href="./src/resources/database/v1/projects.ts">ProjectListBranchesResponse</a></code>

Methods:

- <code title="post /database/v1/projects">client.database.v1.projects.<a href="./src/resources/database/v1/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /database/v1/projects/{id}">client.database.v1.projects.<a href="./src/resources/database/v1/projects.ts">retrieve</a>(id) -> ProjectRetrieveResponse</code>
- <code title="get /database/v1/projects">client.database.v1.projects.<a href="./src/resources/database/v1/projects.ts">list</a>() -> ProjectListResponse</code>
- <code title="delete /database/v1/projects/{id}">client.database.v1.projects.<a href="./src/resources/database/v1/projects.ts">delete</a>(id) -> ProjectDeleteResponse</code>
- <code title="post /database/v1/projects/{id}/branches">client.database.v1.projects.<a href="./src/resources/database/v1/projects.ts">createBranch</a>(id, { ...params }) -> ProjectCreateBranchResponse</code>
- <code title="get /database/v1/projects/{id}/connection">client.database.v1.projects.<a href="./src/resources/database/v1/projects.ts">getConnection</a>(id, { ...params }) -> ProjectGetConnectionResponse</code>
- <code title="get /database/v1/projects/{id}/branches">client.database.v1.projects.<a href="./src/resources/database/v1/projects.ts">listBranches</a>(id) -> ProjectListBranchesResponse</code>

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

# Legal

## V1

Types:

- <code><a href="./src/resources/legal/v1.ts">V1FindResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1GetCitationsResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1GetCitationsFromURLResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1GetFullTextResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1ListJurisdictionsResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1PatentSearchResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1ResearchResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1SimilarResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1VerifyResponse</a></code>

Methods:

- <code title="post /legal/v1/find">client.legal.v1.<a href="./src/resources/legal/v1.ts">find</a>({ ...params }) -> V1FindResponse</code>
- <code title="post /legal/v1/citations">client.legal.v1.<a href="./src/resources/legal/v1.ts">getCitations</a>({ ...params }) -> V1GetCitationsResponse</code>
- <code title="post /legal/v1/citations-from-url">client.legal.v1.<a href="./src/resources/legal/v1.ts">getCitationsFromURL</a>({ ...params }) -> V1GetCitationsFromURLResponse</code>
- <code title="post /legal/v1/full-text">client.legal.v1.<a href="./src/resources/legal/v1.ts">getFullText</a>({ ...params }) -> V1GetFullTextResponse</code>
- <code title="post /legal/v1/jurisdictions">client.legal.v1.<a href="./src/resources/legal/v1.ts">listJurisdictions</a>({ ...params }) -> V1ListJurisdictionsResponse</code>
- <code title="post /legal/v1/patent-search">client.legal.v1.<a href="./src/resources/legal/v1.ts">patentSearch</a>({ ...params }) -> V1PatentSearchResponse</code>
- <code title="post /legal/v1/research">client.legal.v1.<a href="./src/resources/legal/v1.ts">research</a>({ ...params }) -> V1ResearchResponse</code>
- <code title="post /legal/v1/similar">client.legal.v1.<a href="./src/resources/legal/v1.ts">similar</a>({ ...params }) -> V1SimilarResponse</code>
- <code title="post /legal/v1/verify">client.legal.v1.<a href="./src/resources/legal/v1.ts">verify</a>({ ...params }) -> V1VerifyResponse</code>

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

# Memory

## V1

Types:

- <code><a href="./src/resources/memory/v1.ts">V1CreateResponse</a></code>
- <code><a href="./src/resources/memory/v1.ts">V1RetrieveResponse</a></code>
- <code><a href="./src/resources/memory/v1.ts">V1ListResponse</a></code>
- <code><a href="./src/resources/memory/v1.ts">V1DeleteResponse</a></code>
- <code><a href="./src/resources/memory/v1.ts">V1DeleteAllResponse</a></code>
- <code><a href="./src/resources/memory/v1.ts">V1SearchResponse</a></code>

Methods:

- <code title="post /memory/v1">client.memory.v1.<a href="./src/resources/memory/v1.ts">create</a>({ ...params }) -> V1CreateResponse</code>
- <code title="get /memory/v1/{id}">client.memory.v1.<a href="./src/resources/memory/v1.ts">retrieve</a>(id) -> V1RetrieveResponse</code>
- <code title="get /memory/v1">client.memory.v1.<a href="./src/resources/memory/v1.ts">list</a>({ ...params }) -> V1ListResponse</code>
- <code title="delete /memory/v1/{id}">client.memory.v1.<a href="./src/resources/memory/v1.ts">delete</a>(id) -> V1DeleteResponse</code>
- <code title="delete /memory/v1">client.memory.v1.<a href="./src/resources/memory/v1.ts">deleteAll</a>({ ...params }) -> V1DeleteAllResponse</code>
- <code title="post /memory/v1/search">client.memory.v1.<a href="./src/resources/memory/v1.ts">search</a>({ ...params }) -> V1SearchResponse</code>

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

# Privilege

## V1

Types:

- <code><a href="./src/resources/privilege/v1.ts">V1DetectResponse</a></code>

Methods:

- <code title="post /privilege/v1/detect">client.privilege.v1.<a href="./src/resources/privilege/v1.ts">detect</a>({ ...params }) -> V1DetectResponse</code>

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

# Superdoc

## V1

Methods:

- <code title="post /superdoc/v1/annotate">client.superdoc.v1.<a href="./src/resources/superdoc/v1.ts">annotate</a>({ ...params }) -> Response</code>
- <code title="post /superdoc/v1/convert">client.superdoc.v1.<a href="./src/resources/superdoc/v1.ts">convert</a>({ ...params }) -> Response</code>

# Translate

## V1

Types:

- <code><a href="./src/resources/translate/v1.ts">V1DetectResponse</a></code>
- <code><a href="./src/resources/translate/v1.ts">V1ListLanguagesResponse</a></code>
- <code><a href="./src/resources/translate/v1.ts">V1TranslateResponse</a></code>

Methods:

- <code title="post /translate/v1/detect">client.translate.v1.<a href="./src/resources/translate/v1.ts">detect</a>({ ...params }) -> V1DetectResponse</code>
- <code title="get /translate/v1/languages">client.translate.v1.<a href="./src/resources/translate/v1.ts">listLanguages</a>({ ...params }) -> V1ListLanguagesResponse</code>
- <code title="post /translate/v1/translate">client.translate.v1.<a href="./src/resources/translate/v1.ts">translate</a>({ ...params }) -> V1TranslateResponse</code>

# Vault

Types:

- <code><a href="./src/resources/vault/vault.ts">VaultCreateResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultRetrieveResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultUpdateResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultListResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultDeleteResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultConfirmUploadResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultIngestResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultSearchResponse</a></code>
- <code><a href="./src/resources/vault/vault.ts">VaultUploadResponse</a></code>

Methods:

- <code title="post /vault">client.vault.<a href="./src/resources/vault/vault.ts">create</a>({ ...params }) -> VaultCreateResponse</code>
- <code title="get /vault/{id}">client.vault.<a href="./src/resources/vault/vault.ts">retrieve</a>(id) -> VaultRetrieveResponse</code>
- <code title="patch /vault/{id}">client.vault.<a href="./src/resources/vault/vault.ts">update</a>(id, { ...params }) -> VaultUpdateResponse</code>
- <code title="get /vault">client.vault.<a href="./src/resources/vault/vault.ts">list</a>() -> VaultListResponse</code>
- <code title="delete /vault/{id}">client.vault.<a href="./src/resources/vault/vault.ts">delete</a>(id, { ...params }) -> VaultDeleteResponse</code>
- <code title="post /vault/{id}/upload/{objectId}/confirm">client.vault.<a href="./src/resources/vault/vault.ts">confirmUpload</a>(objectID, { ...params }) -> VaultConfirmUploadResponse</code>
- <code title="post /vault/{id}/ingest/{objectId}">client.vault.<a href="./src/resources/vault/vault.ts">ingest</a>(objectID, { ...params }) -> VaultIngestResponse</code>
- <code title="post /vault/{id}/search">client.vault.<a href="./src/resources/vault/vault.ts">search</a>(id, { ...params }) -> VaultSearchResponse</code>
- <code title="post /vault/{id}/upload">client.vault.<a href="./src/resources/vault/vault.ts">upload</a>(id, { ...params }) -> VaultUploadResponse</code>

## Events

### Subscriptions

Methods:

- <code title="post /vault/{id}/events/subscriptions">client.vault.events.subscriptions.<a href="./src/resources/vault/events/subscriptions.ts">create</a>(id, { ...params }) -> void</code>
- <code title="patch /vault/{id}/events/subscriptions/{subscriptionId}">client.vault.events.subscriptions.<a href="./src/resources/vault/events/subscriptions.ts">update</a>(subscriptionID, { ...params }) -> void</code>
- <code title="get /vault/{id}/events/subscriptions">client.vault.events.subscriptions.<a href="./src/resources/vault/events/subscriptions.ts">list</a>(id) -> void</code>
- <code title="delete /vault/{id}/events/subscriptions/{subscriptionId}">client.vault.events.subscriptions.<a href="./src/resources/vault/events/subscriptions.ts">delete</a>(subscriptionID, { ...params }) -> void</code>
- <code title="post /vault/{id}/events/subscriptions/{subscriptionId}/test">client.vault.events.subscriptions.<a href="./src/resources/vault/events/subscriptions.ts">test</a>(subscriptionID, { ...params }) -> void</code>

## Graphrag

Types:

- <code><a href="./src/resources/vault/graphrag.ts">GraphragGetStatsResponse</a></code>
- <code><a href="./src/resources/vault/graphrag.ts">GraphragInitResponse</a></code>
- <code><a href="./src/resources/vault/graphrag.ts">GraphragProcessObjectResponse</a></code>

Methods:

- <code title="get /vault/{id}/graphrag/stats">client.vault.graphrag.<a href="./src/resources/vault/graphrag.ts">getStats</a>(id) -> GraphragGetStatsResponse</code>
- <code title="post /vault/{id}/graphrag/init">client.vault.graphrag.<a href="./src/resources/vault/graphrag.ts">init</a>(id) -> GraphragInitResponse</code>
- <code title="post /vault/{id}/graphrag/{objectId}">client.vault.graphrag.<a href="./src/resources/vault/graphrag.ts">processObject</a>(objectID, { ...params }) -> GraphragProcessObjectResponse</code>

## Multipart

Types:

- <code><a href="./src/resources/vault/multipart.ts">MultipartGetPartURLsResponse</a></code>

Methods:

- <code title="post /vault/{id}/multipart/abort">client.vault.multipart.<a href="./src/resources/vault/multipart.ts">abort</a>(id, { ...params }) -> void</code>
- <code title="post /vault/{id}/multipart/part-urls">client.vault.multipart.<a href="./src/resources/vault/multipart.ts">getPartURLs</a>(id, { ...params }) -> MultipartGetPartURLsResponse</code>

## Objects

Types:

- <code><a href="./src/resources/vault/objects.ts">ObjectRetrieveResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectUpdateResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectListResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectDeleteResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectCreatePresignedURLResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectDownloadResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetOcrWordsResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetSummarizeJobResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetTextResponse</a></code>

Methods:

- <code title="get /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">retrieve</a>(objectID, { ...params }) -> ObjectRetrieveResponse</code>
- <code title="patch /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">update</a>(objectID, { ...params }) -> ObjectUpdateResponse</code>
- <code title="get /vault/{id}/objects">client.vault.objects.<a href="./src/resources/vault/objects.ts">list</a>(id) -> ObjectListResponse</code>
- <code title="delete /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">delete</a>(objectID, { ...params }) -> ObjectDeleteResponse</code>
- <code title="post /vault/{id}/objects/{objectId}/presigned-url">client.vault.objects.<a href="./src/resources/vault/objects.ts">createPresignedURL</a>(objectID, { ...params }) -> ObjectCreatePresignedURLResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/download">client.vault.objects.<a href="./src/resources/vault/objects.ts">download</a>(objectID, { ...params }) -> string</code>
- <code title="get /vault/{id}/objects/{objectId}/ocr-words">client.vault.objects.<a href="./src/resources/vault/objects.ts">getOcrWords</a>(objectID, { ...params }) -> ObjectGetOcrWordsResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/summarize/{jobId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">getSummarizeJob</a>(jobID, { ...params }) -> ObjectGetSummarizeJobResponse</code>
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
- <code title="delete /voice/transcription/{id}">client.voice.transcription.<a href="./src/resources/voice/transcription.ts">delete</a>(id) -> void</code>

## V1

Types:

- <code><a href="./src/resources/voice/v1/v1.ts">V1ListVoicesResponse</a></code>

Methods:

- <code title="get /voice/v1/voices">client.voice.v1.<a href="./src/resources/voice/v1/v1.ts">listVoices</a>({ ...params }) -> V1ListVoicesResponse</code>

### Speak

Methods:

- <code title="post /voice/v1/speak">client.voice.v1.speak.<a href="./src/resources/voice/v1/speak.ts">create</a>({ ...params }) -> Response</code>
