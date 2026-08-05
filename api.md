# Connectors

## V1

Types:

- <code><a href="./src/resources/connectors/v1/v1.ts">V1SyncLinkResponse</a></code>
- <code><a href="./src/resources/connectors/v1/v1.ts">V1TransferResponse</a></code>

Methods:

- <code title="post /connectors/v1/sync-link">client.connectors.v1.<a href="./src/resources/connectors/v1/v1.ts">syncLink</a>({ ...params }) -> V1SyncLinkResponse</code>
- <code title="post /connectors/v1/transfer">client.connectors.v1.<a href="./src/resources/connectors/v1/v1.ts">transfer</a>({ ...params }) -> V1TransferResponse</code>

### Installations

Methods:

- <code title="get /connectors/v1/installations">client.connectors.v1.installations.<a href="./src/resources/connectors/v1/installations/installations.ts">list</a>({ ...params }) -> void</code>
- <code title="post /connectors/v1/installations">client.connectors.v1.installations.<a href="./src/resources/connectors/v1/installations/installations.ts">ensure</a>({ ...params }) -> void</code>

#### Vaults

Methods:

- <code title="get /connectors/v1/installations/{id}/vaults">client.connectors.v1.installations.vaults.<a href="./src/resources/connectors/v1/installations/vaults.ts">list</a>(id) -> void</code>
- <code title="put /connectors/v1/installations/{id}/vaults/{vaultId}">client.connectors.v1.installations.vaults.<a href="./src/resources/connectors/v1/installations/vaults.ts">grant</a>(vaultID, { ...params }) -> void</code>
- <code title="delete /connectors/v1/installations/{id}/vaults/{vaultId}">client.connectors.v1.installations.vaults.<a href="./src/resources/connectors/v1/installations/vaults.ts">revoke</a>(vaultID, { ...params }) -> void</code>

### Connections

Types:

- <code><a href="./src/resources/connectors/v1/connections.ts">ConnectionCreateResponse</a></code>
- <code><a href="./src/resources/connectors/v1/connections.ts">ConnectionListResponse</a></code>
- <code><a href="./src/resources/connectors/v1/connections.ts">ConnectionBrowseResponse</a></code>

Methods:

- <code title="post /connectors/v1/connections">client.connectors.v1.connections.<a href="./src/resources/connectors/v1/connections.ts">create</a>({ ...params }) -> ConnectionCreateResponse</code>
- <code title="get /connectors/v1/connections/{id}">client.connectors.v1.connections.<a href="./src/resources/connectors/v1/connections.ts">retrieve</a>(id) -> void</code>
- <code title="get /connectors/v1/connections">client.connectors.v1.connections.<a href="./src/resources/connectors/v1/connections.ts">list</a>({ ...params }) -> ConnectionListResponse</code>
- <code title="delete /connectors/v1/connections/{id}">client.connectors.v1.connections.<a href="./src/resources/connectors/v1/connections.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /connectors/v1/connections/{id}/browse">client.connectors.v1.connections.<a href="./src/resources/connectors/v1/connections.ts">browse</a>(id, { ...params }) -> ConnectionBrowseResponse</code>

### Links

Methods:

- <code title="get /connectors/v1/links/{id}">client.connectors.v1.links.<a href="./src/resources/connectors/v1/links.ts">retrieve</a>(id) -> void</code>
- <code title="patch /connectors/v1/links/{id}">client.connectors.v1.links.<a href="./src/resources/connectors/v1/links.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /connectors/v1/links">client.connectors.v1.links.<a href="./src/resources/connectors/v1/links.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /connectors/v1/links/{id}">client.connectors.v1.links.<a href="./src/resources/connectors/v1/links.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /connectors/v1/links/{id}/objects">client.connectors.v1.links.<a href="./src/resources/connectors/v1/links.ts">listObjects</a>(id, { ...params }) -> void</code>

# System

Types:

- <code><a href="./src/resources/system.ts">SystemListServicesResponse</a></code>

Methods:

- <code title="get /services">client.system.<a href="./src/resources/system.ts">listServices</a>() -> SystemListServicesResponse</code>

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

# Legal

## V1

Types:

- <code><a href="./src/resources/legal/v1.ts">DocketDetail</a></code>
- <code><a href="./src/resources/legal/v1.ts">DocketSearchResult</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1DocketResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1FindResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1GetCitationsResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1GetCitationsFromURLResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1GetFullTextResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1ListCourtsResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1ListJurisdictionsResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1PatentSearchResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1ResearchResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1SecFilingResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1SimilarResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1TrademarkSearchResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1VerifyResponse</a></code>

Methods:

- <code title="post /legal/v1/docket">client.legal.v1.<a href="./src/resources/legal/v1.ts">docket</a>({ ...params }) -> V1DocketResponse</code>
- <code title="post /legal/v1/find">client.legal.v1.<a href="./src/resources/legal/v1.ts">find</a>({ ...params }) -> V1FindResponse</code>
- <code title="post /legal/v1/citations">client.legal.v1.<a href="./src/resources/legal/v1.ts">getCitations</a>({ ...params }) -> V1GetCitationsResponse</code>
- <code title="post /legal/v1/citations-from-url">client.legal.v1.<a href="./src/resources/legal/v1.ts">getCitationsFromURL</a>({ ...params }) -> V1GetCitationsFromURLResponse</code>
- <code title="post /legal/v1/full-text">client.legal.v1.<a href="./src/resources/legal/v1.ts">getFullText</a>({ ...params }) -> V1GetFullTextResponse</code>
- <code title="post /legal/v1/courts">client.legal.v1.<a href="./src/resources/legal/v1.ts">listCourts</a>({ ...params }) -> V1ListCourtsResponse</code>
- <code title="post /legal/v1/jurisdictions">client.legal.v1.<a href="./src/resources/legal/v1.ts">listJurisdictions</a>({ ...params }) -> V1ListJurisdictionsResponse</code>
- <code title="post /legal/v1/patent-search">client.legal.v1.<a href="./src/resources/legal/v1.ts">patentSearch</a>({ ...params }) -> V1PatentSearchResponse</code>
- <code title="post /legal/v1/research">client.legal.v1.<a href="./src/resources/legal/v1.ts">research</a>({ ...params }) -> V1ResearchResponse</code>
- <code title="post /legal/v1/sec-filing">client.legal.v1.<a href="./src/resources/legal/v1.ts">secFiling</a>({ ...params }) -> V1SecFilingResponse</code>
- <code title="post /legal/v1/similar">client.legal.v1.<a href="./src/resources/legal/v1.ts">similar</a>({ ...params }) -> V1SimilarResponse</code>
- <code title="post /legal/v1/trademark-search">client.legal.v1.<a href="./src/resources/legal/v1.ts">trademarkSearch</a>({ ...params }) -> V1TrademarkSearchResponse</code>
- <code title="post /legal/v1/verify">client.legal.v1.<a href="./src/resources/legal/v1.ts">verify</a>({ ...params }) -> V1VerifyResponse</code>

# Linc

## V1

### Sessions

Methods:

- <code title="post /linc/v1/sessions">client.linc.v1.sessions.<a href="./src/resources/linc/v1/sessions.ts">create</a>({ ...params }) -> void</code>
- <code title="delete /linc/v1/sessions/{id}">client.linc.v1.sessions.<a href="./src/resources/linc/v1/sessions.ts">delete</a>(id) -> void</code>
- <code title="post /linc/v1/sessions/{id}/cancel">client.linc.v1.sessions.<a href="./src/resources/linc/v1/sessions.ts">cancel</a>(id, { ...params }) -> void</code>
- <code title="post /linc/v1/sessions/{id}/events/ingest">client.linc.v1.sessions.<a href="./src/resources/linc/v1/sessions.ts">ingestEvents</a>(id, { ...params }) -> void</code>
- <code title="get /linc/v1/sessions/{id}/events">client.linc.v1.sessions.<a href="./src/resources/linc/v1/sessions.ts">retrieveEvents</a>(id, { ...params }) -> void</code>
- <code title="get /linc/v1/sessions/{id}/messages">client.linc.v1.sessions.<a href="./src/resources/linc/v1/sessions.ts">retrieveMessages</a>(id, { ...params }) -> void</code>
- <code title="get /linc/v1/sessions/{id}/state">client.linc.v1.sessions.<a href="./src/resources/linc/v1/sessions.ts">retrieveState</a>(id) -> void</code>
- <code title="post /linc/v1/sessions/{id}/rpc">client.linc.v1.sessions.<a href="./src/resources/linc/v1/sessions.ts">sendRpc</a>(id, { ...params }) -> void</code>

# Matters

## V1

Methods:

- <code title="post /matters/v1">client.matters.v1.<a href="./src/resources/matters/v1/v1.ts">create</a>({ ...params }) -> void</code>
- <code title="get /matters/v1/{id}">client.matters.v1.<a href="./src/resources/matters/v1/v1.ts">retrieve</a>(id) -> void</code>
- <code title="patch /matters/v1/{id}">client.matters.v1.<a href="./src/resources/matters/v1/v1.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /matters/v1">client.matters.v1.<a href="./src/resources/matters/v1/v1.ts">list</a>({ ...params }) -> void</code>

### AgentTypes

Methods:

- <code title="post /matters/v1/agent-types">client.matters.v1.agentTypes.<a href="./src/resources/matters/v1/agent-types.ts">create</a>({ ...params }) -> void</code>
- <code title="get /matters/v1/agent-types">client.matters.v1.agentTypes.<a href="./src/resources/matters/v1/agent-types.ts">list</a>({ ...params }) -> void</code>

### Parties

Methods:

- <code title="post /matters/v1/parties">client.matters.v1.parties.<a href="./src/resources/matters/v1/parties.ts">create</a>({ ...params }) -> void</code>
- <code title="get /matters/v1/parties/{partyId}">client.matters.v1.parties.<a href="./src/resources/matters/v1/parties.ts">retrieve</a>(partyID) -> void</code>
- <code title="patch /matters/v1/parties/{partyId}">client.matters.v1.parties.<a href="./src/resources/matters/v1/parties.ts">update</a>(partyID) -> void</code>
- <code title="get /matters/v1/parties">client.matters.v1.parties.<a href="./src/resources/matters/v1/parties.ts">list</a>({ ...params }) -> void</code>

### Types

Methods:

- <code title="post /matters/v1/types">client.matters.v1.types.<a href="./src/resources/matters/v1/types.ts">create</a>({ ...params }) -> void</code>
- <code title="get /matters/v1/types/{id}">client.matters.v1.types.<a href="./src/resources/matters/v1/types.ts">retrieve</a>(id) -> void</code>
- <code title="patch /matters/v1/types/{id}">client.matters.v1.types.<a href="./src/resources/matters/v1/types.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /matters/v1/types">client.matters.v1.types.<a href="./src/resources/matters/v1/types.ts">list</a>({ ...params }) -> void</code>

### Events

#### Subscriptions

Methods:

- <code title="post /matters/v1/{id}/events/subscriptions">client.matters.v1.events.subscriptions.<a href="./src/resources/matters/v1/events/subscriptions.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /matters/v1/{id}/events/subscriptions">client.matters.v1.events.subscriptions.<a href="./src/resources/matters/v1/events/subscriptions.ts">list</a>(id) -> void</code>
- <code title="delete /matters/v1/{id}/events/subscriptions/{subscriptionId}">client.matters.v1.events.subscriptions.<a href="./src/resources/matters/v1/events/subscriptions.ts">delete</a>(subscriptionID, { ...params }) -> void</code>

### Log

Types:

- <code><a href="./src/resources/matters/v1/log.ts">LogExportResponse</a></code>

Methods:

- <code title="post /matters/v1/{id}/log">client.matters.v1.log.<a href="./src/resources/matters/v1/log.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /matters/v1/{id}/log">client.matters.v1.log.<a href="./src/resources/matters/v1/log.ts">list</a>(id, { ...params }) -> void</code>
- <code title="post /matters/v1/{id}/log/export">client.matters.v1.log.<a href="./src/resources/matters/v1/log.ts">export</a>(id, { ...params }) -> LogExportResponse</code>

### MatterParties

Methods:

- <code title="post /matters/v1/{id}/parties">client.matters.v1.matterParties.<a href="./src/resources/matters/v1/matter-parties.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /matters/v1/{id}/parties">client.matters.v1.matterParties.<a href="./src/resources/matters/v1/matter-parties.ts">list</a>(id) -> void</code>

### Shares

Methods:

- <code title="post /matters/v1/{id}/shares">client.matters.v1.shares.<a href="./src/resources/matters/v1/shares.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /matters/v1/{id}/shares">client.matters.v1.shares.<a href="./src/resources/matters/v1/shares.ts">list</a>(id) -> void</code>
- <code title="delete /matters/v1/{id}/shares/{shareId}">client.matters.v1.shares.<a href="./src/resources/matters/v1/shares.ts">delete</a>(shareID, { ...params }) -> void</code>

### WorkItems

Methods:

- <code title="post /matters/v1/{id}/work-items">client.matters.v1.workItems.<a href="./src/resources/matters/v1/work-items.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /matters/v1/{id}/work-items/{workItemId}">client.matters.v1.workItems.<a href="./src/resources/matters/v1/work-items.ts">retrieve</a>(workItemID, { ...params }) -> void</code>
- <code title="patch /matters/v1/{id}/work-items/{workItemId}">client.matters.v1.workItems.<a href="./src/resources/matters/v1/work-items.ts">update</a>(workItemID, { ...params }) -> void</code>
- <code title="get /matters/v1/{id}/work-items">client.matters.v1.workItems.<a href="./src/resources/matters/v1/work-items.ts">list</a>(id, { ...params }) -> void</code>
- <code title="post /matters/v1/{id}/work-items/{workItemId}/decision">client.matters.v1.workItems.<a href="./src/resources/matters/v1/work-items.ts">decide</a>(workItemID, { ...params }) -> void</code>

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

# Media

## V1

### Clips

Methods:

- <code title="post /media/v1/clips">client.media.v1.clips.<a href="./src/resources/media/v1/clips.ts">create</a>() -> void</code>
- <code title="get /media/v1/clips/{id}">client.media.v1.clips.<a href="./src/resources/media/v1/clips.ts">retrieve</a>(id) -> void</code>

### Transcripts

#### Search

Methods:

- <code title="post /media/v1/transcripts/search">client.media.v1.transcripts.search.<a href="./src/resources/media/v1/transcripts/search.ts">create</a>() -> void</code>

#### Retrieve

Types:

- <code><a href="./src/resources/media/v1/transcripts/retrieve.ts">RetrieveCreateResponse</a></code>

Methods:

- <code title="post /media/v1/transcripts/retrieve">client.media.v1.transcripts.retrieve.<a href="./src/resources/media/v1/transcripts/retrieve.ts">create</a>({ ...params }) -> RetrieveCreateResponse</code>

# Ocr

## V1

Types:

- <code><a href="./src/resources/ocr/v1.ts">V1RetrieveResponse</a></code>
- <code><a href="./src/resources/ocr/v1.ts">V1ProcessResponse</a></code>

Methods:

- <code title="get /ocr/v1/{id}">client.ocr.v1.<a href="./src/resources/ocr/v1.ts">retrieve</a>(id, { ...params }) -> V1RetrieveResponse</code>
- <code title="get /ocr/v1/{id}/download/{type}">client.ocr.v1.<a href="./src/resources/ocr/v1.ts">download</a>(type, { ...params }) -> Response</code>
- <code title="post /ocr/v1/process">client.ocr.v1.<a href="./src/resources/ocr/v1.ts">process</a>({ ...params }) -> V1ProcessResponse</code>

# Privilege

## V1

Types:

- <code><a href="./src/resources/privilege/v1.ts">V1DetectResponse</a></code>

Methods:

- <code title="post /privilege/v1/detect">client.privilege.v1.<a href="./src/resources/privilege/v1.ts">detect</a>({ ...params }) -> V1DetectResponse</code>

# Skills

Types:

- <code><a href="./src/resources/skills/skills.ts">ReadResponseFileBundle</a></code>
- <code><a href="./src/resources/skills/skills.ts">ReadResponseRootBundle</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillCreateResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillUpdateResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillDeleteResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillExportResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillReadResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillResolveResponse</a></code>

Methods:

- <code title="post /skills">client.skills.<a href="./src/resources/skills/skills.ts">create</a>({ ...params }) -> SkillCreateResponse</code>
- <code title="put /skills/{slug}">client.skills.<a href="./src/resources/skills/skills.ts">update</a>(slug, { ...params }) -> SkillUpdateResponse</code>
- <code title="delete /skills/{slug}">client.skills.<a href="./src/resources/skills/skills.ts">delete</a>(slug) -> SkillDeleteResponse</code>
- <code title="get /skills/{slug}/export">client.skills.<a href="./src/resources/skills/skills.ts">export</a>(slug, { ...params }) -> SkillExportResponse</code>
- <code title="get /skills/{slug}">client.skills.<a href="./src/resources/skills/skills.ts">read</a>(slug) -> SkillReadResponse</code>
- <code title="get /skills/resolve">client.skills.<a href="./src/resources/skills/skills.ts">resolve</a>({ ...params }) -> SkillResolveResponse</code>

## Custom

Types:

- <code><a href="./src/resources/skills/custom.ts">CustomListResponse</a></code>

Methods:

- <code title="get /skills/custom">client.skills.custom.<a href="./src/resources/skills/custom.ts">list</a>({ ...params }) -> CustomListResponse</code>

# Search

## V1

Types:

- <code><a href="./src/resources/search/v1.ts">V1AnswerResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1ContentsResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1SearchResponse</a></code>
- <code><a href="./src/resources/search/v1.ts">V1SimilarResponse</a></code>

Methods:

- <code title="post /search/v1/answer">client.search.v1.<a href="./src/resources/search/v1.ts">answer</a>({ ...params }) -> V1AnswerResponse</code>
- <code title="post /search/v1/contents">client.search.v1.<a href="./src/resources/search/v1.ts">contents</a>({ ...params }) -> V1ContentsResponse</code>
- <code title="post /search/v1/search">client.search.v1.<a href="./src/resources/search/v1.ts">search</a>({ ...params }) -> V1SearchResponse</code>
- <code title="post /search/v1/similar">client.search.v1.<a href="./src/resources/search/v1.ts">similar</a>({ ...params }) -> V1SimilarResponse</code>

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
- <code title="post /translate/v1/document">client.translate.v1.<a href="./src/resources/translate/v1.ts">translateDocument</a>({ ...params }) -> Response</code>

# Usage

## V1

Methods:

- <code title="get /usage/v1">client.usage.v1.<a href="./src/resources/usage/v1/v1.ts">retrieve</a>({ ...params }) -> void</code>

### Subscriptions

Methods:

- <code title="post /usage/v1/subscriptions">client.usage.v1.subscriptions.<a href="./src/resources/usage/v1/subscriptions.ts">create</a>({ ...params }) -> void</code>
- <code title="patch /usage/v1/subscriptions/{subscriptionId}">client.usage.v1.subscriptions.<a href="./src/resources/usage/v1/subscriptions.ts">update</a>(subscriptionID, { ...params }) -> void</code>
- <code title="get /usage/v1/subscriptions">client.usage.v1.subscriptions.<a href="./src/resources/usage/v1/subscriptions.ts">list</a>() -> void</code>
- <code title="delete /usage/v1/subscriptions/{subscriptionId}">client.usage.v1.subscriptions.<a href="./src/resources/usage/v1/subscriptions.ts">delete</a>(subscriptionID) -> void</code>
- <code title="post /usage/v1/subscriptions/{subscriptionId}/test">client.usage.v1.subscriptions.<a href="./src/resources/usage/v1/subscriptions.ts">test</a>(subscriptionID, { ...params }) -> void</code>

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

## Groups

Methods:

- <code title="post /vault/groups">client.vault.groups.<a href="./src/resources/vault/groups.ts">create</a>({ ...params }) -> void</code>
- <code title="patch /vault/groups/{groupId}">client.vault.groups.<a href="./src/resources/vault/groups.ts">update</a>(groupID, { ...params }) -> void</code>
- <code title="get /vault/groups">client.vault.groups.<a href="./src/resources/vault/groups.ts">list</a>() -> void</code>
- <code title="delete /vault/groups/{groupId}">client.vault.groups.<a href="./src/resources/vault/groups.ts">delete</a>(groupID) -> void</code>

## Multipart

Types:

- <code><a href="./src/resources/vault/multipart.ts">MultipartGetPartURLsResponse</a></code>
- <code><a href="./src/resources/vault/multipart.ts">MultipartInitResponse</a></code>

Methods:

- <code title="post /vault/{id}/multipart/abort">client.vault.multipart.<a href="./src/resources/vault/multipart.ts">abort</a>(id, { ...params }) -> void</code>
- <code title="post /vault/{id}/multipart/complete">client.vault.multipart.<a href="./src/resources/vault/multipart.ts">complete</a>(id, { ...params }) -> void</code>
- <code title="post /vault/{id}/multipart/part-urls">client.vault.multipart.<a href="./src/resources/vault/multipart.ts">getPartURLs</a>(id, { ...params }) -> MultipartGetPartURLsResponse</code>
- <code title="post /vault/{id}/multipart/init">client.vault.multipart.<a href="./src/resources/vault/multipart.ts">init</a>(id, { ...params }) -> MultipartInitResponse</code>

## Objects

Types:

- <code><a href="./src/resources/vault/objects.ts">ObjectRetrieveResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectUpdateResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectListResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectDeleteResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectAppendResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectCreatePresignedURLResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetChunksResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetOcrWordsResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetPagesResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetTextResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectMergeResponse</a></code>

Methods:

- <code title="get /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">retrieve</a>(objectID, { ...params }) -> ObjectRetrieveResponse</code>
- <code title="patch /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">update</a>(objectID, { ...params }) -> ObjectUpdateResponse</code>
- <code title="get /vault/{id}/objects">client.vault.objects.<a href="./src/resources/vault/objects.ts">list</a>(id, { ...params }) -> ObjectListResponse</code>
- <code title="delete /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">delete</a>(objectID, { ...params }) -> ObjectDeleteResponse</code>
- <code title="post /vault/{id}/objects/{objectId}/append">client.vault.objects.<a href="./src/resources/vault/objects.ts">append</a>(objectID, { ...params }) -> ObjectAppendResponse</code>
- <code title="post /vault/{id}/objects/{objectId}/presigned-url">client.vault.objects.<a href="./src/resources/vault/objects.ts">createPresignedURL</a>(objectID, { ...params }) -> ObjectCreatePresignedURLResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/download">client.vault.objects.<a href="./src/resources/vault/objects.ts">download</a>(objectID, { ...params }) -> Response</code>
- <code title="get /vault/{id}/objects/{objectId}/chunks">client.vault.objects.<a href="./src/resources/vault/objects.ts">getChunks</a>(objectID, { ...params }) -> ObjectGetChunksResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/ocr-words">client.vault.objects.<a href="./src/resources/vault/objects.ts">getOcrWords</a>(objectID, { ...params }) -> ObjectGetOcrWordsResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/pages">client.vault.objects.<a href="./src/resources/vault/objects.ts">getPages</a>(objectID, { ...params }) -> ObjectGetPagesResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/text">client.vault.objects.<a href="./src/resources/vault/objects.ts">getText</a>(objectID, { ...params }) -> ObjectGetTextResponse</code>
- <code title="post /vault/{id}/objects/merge">client.vault.objects.<a href="./src/resources/vault/objects.ts">merge</a>(id, { ...params }) -> ObjectMergeResponse</code>

## Memory

Types:

- <code><a href="./src/resources/vault/memory.ts">MemoryCreateResponse</a></code>
- <code><a href="./src/resources/vault/memory.ts">MemoryListResponse</a></code>
- <code><a href="./src/resources/vault/memory.ts">MemorySearchResponse</a></code>

Methods:

- <code title="post /vault/{id}/memory">client.vault.memory.<a href="./src/resources/vault/memory.ts">create</a>(id, { ...params }) -> MemoryCreateResponse</code>
- <code title="patch /vault/{id}/memory/{entryId}">client.vault.memory.<a href="./src/resources/vault/memory.ts">update</a>(entryID, { ...params }) -> void</code>
- <code title="get /vault/{id}/memory">client.vault.memory.<a href="./src/resources/vault/memory.ts">list</a>(id) -> MemoryListResponse</code>
- <code title="delete /vault/{id}/memory/{entryId}">client.vault.memory.<a href="./src/resources/vault/memory.ts">delete</a>(entryID, { ...params }) -> void</code>
- <code title="post /vault/{id}/memory/search">client.vault.memory.<a href="./src/resources/vault/memory.ts">search</a>(id, { ...params }) -> MemorySearchResponse</code>

# Voice

## Streaming

Types:

- <code><a href="./src/resources/voice/streaming.ts">StreamingGetURLResponse</a></code>

Methods:

- <code title="get /voice/streaming/url">client.voice.streaming.<a href="./src/resources/voice/streaming.ts">getURL</a>() -> StreamingGetURLResponse</code>

## BoostList

Types:

- <code><a href="./src/resources/voice/boost-list.ts">BoostListExtractResponse</a></code>
- <code><a href="./src/resources/voice/boost-list.ts">BoostListGenerateResponse</a></code>

Methods:

- <code title="post /voice/boost-list/extract">client.voice.boostList.<a href="./src/resources/voice/boost-list.ts">extract</a>({ ...params }) -> BoostListExtractResponse</code>
- <code title="post /voice/boost-list/generate">client.voice.boostList.<a href="./src/resources/voice/boost-list.ts">generate</a>({ ...params }) -> BoostListGenerateResponse</code>

## Transcription

Types:

- <code><a href="./src/resources/voice/transcription.ts">TranscriptionCreateResponse</a></code>
- <code><a href="./src/resources/voice/transcription.ts">TranscriptionRetrieveResponse</a></code>

Methods:

- <code title="post /voice/transcription">client.voice.transcription.<a href="./src/resources/voice/transcription.ts">create</a>({ ...params }) -> TranscriptionCreateResponse</code>
- <code title="get /voice/transcription/{id}">client.voice.transcription.<a href="./src/resources/voice/transcription.ts">retrieve</a>(id, { ...params }) -> TranscriptionRetrieveResponse</code>
- <code title="delete /voice/transcription/{id}">client.voice.transcription.<a href="./src/resources/voice/transcription.ts">delete</a>(id) -> void</code>

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

### Endpoints

Methods:

- <code title="post /webhooks/v1/endpoints">client.webhooks.v1.endpoints.<a href="./src/resources/webhooks/v1/endpoints.ts">create</a>({ ...params }) -> void</code>
- <code title="get /webhooks/v1/endpoints/{id}">client.webhooks.v1.endpoints.<a href="./src/resources/webhooks/v1/endpoints.ts">retrieve</a>(id) -> void</code>
- <code title="patch /webhooks/v1/endpoints/{id}">client.webhooks.v1.endpoints.<a href="./src/resources/webhooks/v1/endpoints.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /webhooks/v1/endpoints">client.webhooks.v1.endpoints.<a href="./src/resources/webhooks/v1/endpoints.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /webhooks/v1/endpoints/{id}">client.webhooks.v1.endpoints.<a href="./src/resources/webhooks/v1/endpoints.ts">delete</a>(id) -> void</code>
- <code title="post /webhooks/v1/endpoints/{id}/rotate_secret">client.webhooks.v1.endpoints.<a href="./src/resources/webhooks/v1/endpoints.ts">rotateSecret</a>(id, { ...params }) -> void</code>
- <code title="post /webhooks/v1/endpoints/{id}/test">client.webhooks.v1.endpoints.<a href="./src/resources/webhooks/v1/endpoints.ts">test</a>(id, { ...params }) -> void</code>

### Deliveries

Methods:

- <code title="get /webhooks/v1/deliveries/{id}">client.webhooks.v1.deliveries.<a href="./src/resources/webhooks/v1/deliveries.ts">retrieve</a>(id) -> void</code>
- <code title="get /webhooks/v1/deliveries">client.webhooks.v1.deliveries.<a href="./src/resources/webhooks/v1/deliveries.ts">list</a>({ ...params }) -> void</code>
- <code title="post /webhooks/v1/deliveries/{id}/replay">client.webhooks.v1.deliveries.<a href="./src/resources/webhooks/v1/deliveries.ts">replay</a>(id, { ...params }) -> void</code>

### EventTypes

Methods:

- <code title="get /webhooks/v1/event_types">client.webhooks.v1.eventTypes.<a href="./src/resources/webhooks/v1/event-types.ts">list</a>() -> void</code>
