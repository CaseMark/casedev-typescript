# Agent

## V1

### Agents

Types:

- <code><a href="./src/resources/agent/v1/agents.ts">AgentCreateResponse</a></code>
- <code><a href="./src/resources/agent/v1/agents.ts">AgentRetrieveResponse</a></code>
- <code><a href="./src/resources/agent/v1/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agent/v1/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agent/v1/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /agent/v1/agents">client.agent.v1.agents.<a href="./src/resources/agent/v1/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="get /agent/v1/agents/{id}">client.agent.v1.agents.<a href="./src/resources/agent/v1/agents.ts">retrieve</a>(id) -> AgentRetrieveResponse</code>
- <code title="patch /agent/v1/agents/{id}">client.agent.v1.agents.<a href="./src/resources/agent/v1/agents.ts">update</a>(id, { ...params }) -> AgentUpdateResponse</code>
- <code title="get /agent/v1/agents">client.agent.v1.agents.<a href="./src/resources/agent/v1/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /agent/v1/agents/{id}">client.agent.v1.agents.<a href="./src/resources/agent/v1/agents.ts">delete</a>(id) -> AgentDeleteResponse</code>

### Run

Types:

- <code><a href="./src/resources/agent/v1/run.ts">RunCreateResponse</a></code>
- <code><a href="./src/resources/agent/v1/run.ts">RunListResponse</a></code>
- <code><a href="./src/resources/agent/v1/run.ts">RunCancelResponse</a></code>
- <code><a href="./src/resources/agent/v1/run.ts">RunEventsResponse</a></code>
- <code><a href="./src/resources/agent/v1/run.ts">RunExecResponse</a></code>
- <code><a href="./src/resources/agent/v1/run.ts">RunGetDetailsResponse</a></code>
- <code><a href="./src/resources/agent/v1/run.ts">RunGetStatusResponse</a></code>
- <code><a href="./src/resources/agent/v1/run.ts">RunWatchResponse</a></code>

Methods:

- <code title="post /agent/v1/run">client.agent.v1.run.<a href="./src/resources/agent/v1/run.ts">create</a>({ ...params }) -> RunCreateResponse</code>
- <code title="get /agent/v1/run">client.agent.v1.run.<a href="./src/resources/agent/v1/run.ts">list</a>({ ...params }) -> RunListResponse</code>
- <code title="post /agent/v1/run/{id}/cancel">client.agent.v1.run.<a href="./src/resources/agent/v1/run.ts">cancel</a>(id) -> RunCancelResponse</code>
- <code title="get /agent/v1/run/{id}/events">client.agent.v1.run.<a href="./src/resources/agent/v1/run.ts">events</a>(id, { ...params }) -> string</code>
- <code title="post /agent/v1/run/{id}/exec">client.agent.v1.run.<a href="./src/resources/agent/v1/run.ts">exec</a>(id) -> RunExecResponse</code>
- <code title="get /agent/v1/run/{id}/details">client.agent.v1.run.<a href="./src/resources/agent/v1/run.ts">getDetails</a>(id) -> RunGetDetailsResponse</code>
- <code title="get /agent/v1/run/{id}/status">client.agent.v1.run.<a href="./src/resources/agent/v1/run.ts">getStatus</a>(id) -> RunGetStatusResponse</code>
- <code title="post /agent/v1/run/{id}/watch">client.agent.v1.run.<a href="./src/resources/agent/v1/run.ts">watch</a>(id, { ...params }) -> RunWatchResponse</code>

### Execute

Types:

- <code><a href="./src/resources/agent/v1/execute.ts">ExecuteCreateResponse</a></code>

Methods:

- <code title="post /agent/v1/execute">client.agent.v1.execute.<a href="./src/resources/agent/v1/execute.ts">create</a>({ ...params }) -> ExecuteCreateResponse</code>

### Chat

Types:

- <code><a href="./src/resources/agent/v1/chat/chat.ts">ChatCreateResponse</a></code>
- <code><a href="./src/resources/agent/v1/chat/chat.ts">ChatDeleteResponse</a></code>
- <code><a href="./src/resources/agent/v1/chat/chat.ts">ChatCancelResponse</a></code>
- <code><a href="./src/resources/agent/v1/chat/chat.ts">ChatRespondResponse</a></code>
- <code><a href="./src/resources/agent/v1/chat/chat.ts">ChatStreamResponse</a></code>

Methods:

- <code title="post /agent/v1/chat">client.agent.v1.chat.<a href="./src/resources/agent/v1/chat/chat.ts">create</a>({ ...params }) -> ChatCreateResponse</code>
- <code title="delete /agent/v1/chat/{id}">client.agent.v1.chat.<a href="./src/resources/agent/v1/chat/chat.ts">delete</a>(id) -> ChatDeleteResponse</code>
- <code title="post /agent/v1/chat/{id}/cancel">client.agent.v1.chat.<a href="./src/resources/agent/v1/chat/chat.ts">cancel</a>(id) -> ChatCancelResponse</code>
- <code title="post /agent/v1/chat/{id}/question/{requestID}/reply">client.agent.v1.chat.<a href="./src/resources/agent/v1/chat/chat.ts">replyToQuestion</a>(requestID, { ...params }) -> void</code>
- <code title="post /agent/v1/chat/{id}/respond">client.agent.v1.chat.<a href="./src/resources/agent/v1/chat/chat.ts">respond</a>(id, { ...params }) -> string</code>
- <code title="post /agent/v1/chat/{id}/message">client.agent.v1.chat.<a href="./src/resources/agent/v1/chat/chat.ts">sendMessage</a>(id, { ...params }) -> void</code>
- <code title="get /agent/v1/chat/{id}/stream">client.agent.v1.chat.<a href="./src/resources/agent/v1/chat/chat.ts">stream</a>(id, { ...params }) -> string</code>

#### Files

Types:

- <code><a href="./src/resources/agent/v1/chat/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /agent/v1/chat/{id}/files">client.agent.v1.chat.files.<a href="./src/resources/agent/v1/chat/files.ts">list</a>(id) -> FileListResponse</code>
- <code title="get /agent/v1/chat/{id}/files/{filePath}">client.agent.v1.chat.files.<a href="./src/resources/agent/v1/chat/files.ts">download</a>(filePath, { ...params }) -> Response</code>

## V2

### Run

Types:

- <code><a href="./src/resources/agent/v2/run.ts">RunCreateResponse</a></code>
- <code><a href="./src/resources/agent/v2/run.ts">RunEventsResponse</a></code>
- <code><a href="./src/resources/agent/v2/run.ts">RunExecResponse</a></code>
- <code><a href="./src/resources/agent/v2/run.ts">RunGetDetailsResponse</a></code>
- <code><a href="./src/resources/agent/v2/run.ts">RunGetStatusResponse</a></code>

Methods:

- <code title="post /agent/v2/run">client.agent.v2.run.<a href="./src/resources/agent/v2/run.ts">create</a>({ ...params }) -> RunCreateResponse</code>
- <code title="get /agent/v2/run/{id}/events">client.agent.v2.run.<a href="./src/resources/agent/v2/run.ts">events</a>(id, { ...params }) -> string</code>
- <code title="post /agent/v2/run/{id}/exec">client.agent.v2.run.<a href="./src/resources/agent/v2/run.ts">exec</a>(id) -> RunExecResponse</code>
- <code title="get /agent/v2/run/{id}/details">client.agent.v2.run.<a href="./src/resources/agent/v2/run.ts">getDetails</a>(id) -> unknown</code>
- <code title="get /agent/v2/run/{id}/status">client.agent.v2.run.<a href="./src/resources/agent/v2/run.ts">getStatus</a>(id) -> RunGetStatusResponse</code>

### Execute

Types:

- <code><a href="./src/resources/agent/v2/execute.ts">ExecuteCreateResponse</a></code>

Methods:

- <code title="post /agent/v2/execute">client.agent.v2.execute.<a href="./src/resources/agent/v2/execute.ts">create</a>({ ...params }) -> ExecuteCreateResponse</code>

### Chat

Types:

- <code><a href="./src/resources/agent/v2/chat/chat.ts">ChatCreateResponse</a></code>
- <code><a href="./src/resources/agent/v2/chat/chat.ts">ChatDeleteResponse</a></code>
- <code><a href="./src/resources/agent/v2/chat/chat.ts">ChatCancelResponse</a></code>
- <code><a href="./src/resources/agent/v2/chat/chat.ts">ChatCreateStreamTokenResponse</a></code>
- <code><a href="./src/resources/agent/v2/chat/chat.ts">ChatRespondResponse</a></code>
- <code><a href="./src/resources/agent/v2/chat/chat.ts">ChatStreamResponse</a></code>

Methods:

- <code title="post /agent/v2/chat">client.agent.v2.chat.<a href="./src/resources/agent/v2/chat/chat.ts">create</a>({ ...params }) -> ChatCreateResponse</code>
- <code title="delete /agent/v2/chat/{id}">client.agent.v2.chat.<a href="./src/resources/agent/v2/chat/chat.ts">delete</a>(id) -> ChatDeleteResponse</code>
- <code title="post /agent/v2/chat/{id}/cancel">client.agent.v2.chat.<a href="./src/resources/agent/v2/chat/chat.ts">cancel</a>(id) -> ChatCancelResponse</code>
- <code title="post /agent/v2/chat/{id}/stream-token">client.agent.v2.chat.<a href="./src/resources/agent/v2/chat/chat.ts">createStreamToken</a>(id) -> ChatCreateStreamTokenResponse</code>
- <code title="post /agent/v2/chat/{id}/question/{requestID}/reply">client.agent.v2.chat.<a href="./src/resources/agent/v2/chat/chat.ts">replyToQuestion</a>(requestID, { ...params }) -> void</code>
- <code title="post /agent/v2/chat/{id}/respond">client.agent.v2.chat.<a href="./src/resources/agent/v2/chat/chat.ts">respond</a>(id, { ...params }) -> string</code>
- <code title="post /agent/v2/chat/{id}/message">client.agent.v2.chat.<a href="./src/resources/agent/v2/chat/chat.ts">sendMessage</a>(id, { ...params }) -> void</code>
- <code title="get /agent/v2/chat/{id}/stream">client.agent.v2.chat.<a href="./src/resources/agent/v2/chat/chat.ts">stream</a>(id, { ...params }) -> string</code>

#### Files

Types:

- <code><a href="./src/resources/agent/v2/chat/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /agent/v2/chat/{id}/files">client.agent.v2.chat.files.<a href="./src/resources/agent/v2/chat/files.ts">list</a>(id) -> FileListResponse</code>
- <code title="get /agent/v2/chat/{id}/files/{filePath}">client.agent.v2.chat.files.<a href="./src/resources/agent/v2/chat/files.ts">download</a>(filePath, { ...params }) -> Response</code>

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

- <code><a href="./src/resources/legal/v1.ts">DocketDetail</a></code>
- <code><a href="./src/resources/legal/v1.ts">DocketSearchResult</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1DocketResponse</a></code>
- <code><a href="./src/resources/legal/v1.ts">V1DraftResponse</a></code>
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
- <code title="post /legal/v1/draft">client.legal.v1.<a href="./src/resources/legal/v1.ts">draft</a>({ ...params }) -> V1DraftResponse</code>
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
- <code title="get /matters/v1/{id}/work-items/{workItemId}/executions">client.matters.v1.workItems.<a href="./src/resources/matters/v1/work-items.ts">listExecutions</a>(workItemID, { ...params }) -> void</code>

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

# Mail

## V1

### Inboxes

Methods:

- <code title="post /mail/v1/inboxes">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">create</a>({ ...params }) -> void</code>
- <code title="get /mail/v1/inboxes/{inboxId}">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">retrieve</a>(inboxID) -> void</code>
- <code title="get /mail/v1/inboxes">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">list</a>() -> void</code>
- <code title="delete /mail/v1/inboxes/{inboxId}">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">delete</a>(inboxID) -> void</code>
- <code title="get /mail/v1/inboxes/{inboxId}/messages/{messageId}/attachments/{attachmentId}">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">getAttachment</a>(attachmentID, { ...params }) -> void</code>
- <code title="get /mail/v1/inboxes/{inboxId}/messages/{messageId}">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">getMessage</a>(messageID, { ...params }) -> void</code>
- <code title="get /mail/v1/inboxes/{inboxId}/policy">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">getPolicy</a>(inboxID) -> void</code>
- <code title="get /mail/v1/inboxes/{inboxId}/messages">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">listMessages</a>(inboxID) -> void</code>
- <code title="post /mail/v1/inboxes/{inboxId}/messages/{messageId}/reply">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">reply</a>(messageID, { ...params }) -> void</code>
- <code title="post /mail/v1/inboxes/{inboxId}/messages/send">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">send</a>(inboxID) -> void</code>
- <code title="put /mail/v1/inboxes/{inboxId}/policy">client.mail.v1.inboxes.<a href="./src/resources/mail/v1/inboxes.ts">setPolicy</a>(inboxID, { ...params }) -> void</code>

# Skills

Types:

- <code><a href="./src/resources/skills/skills.ts">SkillCreateResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillUpdateResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillDeleteResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillReadResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillResolveResponse</a></code>

Methods:

- <code title="post /skills">client.skills.<a href="./src/resources/skills/skills.ts">create</a>({ ...params }) -> SkillCreateResponse</code>
- <code title="put /skills/{slug}">client.skills.<a href="./src/resources/skills/skills.ts">update</a>(slug, { ...params }) -> SkillUpdateResponse</code>
- <code title="delete /skills/{slug}">client.skills.<a href="./src/resources/skills/skills.ts">delete</a>(slug) -> SkillDeleteResponse</code>
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

## Graphrag

Types:

- <code><a href="./src/resources/vault/graphrag.ts">GraphragGetStatsResponse</a></code>
- <code><a href="./src/resources/vault/graphrag.ts">GraphragInitResponse</a></code>
- <code><a href="./src/resources/vault/graphrag.ts">GraphragProcessObjectResponse</a></code>

Methods:

- <code title="get /vault/{id}/graphrag/stats">client.vault.graphrag.<a href="./src/resources/vault/graphrag.ts">getStats</a>(id) -> GraphragGetStatsResponse</code>
- <code title="post /vault/{id}/graphrag/init">client.vault.graphrag.<a href="./src/resources/vault/graphrag.ts">init</a>(id) -> GraphragInitResponse</code>
- <code title="post /vault/{id}/graphrag/{objectId}">client.vault.graphrag.<a href="./src/resources/vault/graphrag.ts">processObject</a>(objectID, { ...params }) -> GraphragProcessObjectResponse</code>

## Groups

Methods:

- <code title="post /vault/groups">client.vault.groups.<a href="./src/resources/vault/groups.ts">create</a>({ ...params }) -> void</code>
- <code title="patch /vault/groups/{groupId}">client.vault.groups.<a href="./src/resources/vault/groups.ts">update</a>(groupID, { ...params }) -> void</code>
- <code title="get /vault/groups">client.vault.groups.<a href="./src/resources/vault/groups.ts">list</a>() -> void</code>
- <code title="delete /vault/groups/{groupId}">client.vault.groups.<a href="./src/resources/vault/groups.ts">delete</a>(groupID) -> void</code>

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
- <code><a href="./src/resources/vault/objects.ts">ObjectGetChunksResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetOcrWordsResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetSummarizeJobResponse</a></code>
- <code><a href="./src/resources/vault/objects.ts">ObjectGetTextResponse</a></code>

Methods:

- <code title="get /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">retrieve</a>(objectID, { ...params }) -> ObjectRetrieveResponse</code>
- <code title="patch /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">update</a>(objectID, { ...params }) -> ObjectUpdateResponse</code>
- <code title="get /vault/{id}/objects">client.vault.objects.<a href="./src/resources/vault/objects.ts">list</a>(id) -> ObjectListResponse</code>
- <code title="delete /vault/{id}/objects/{objectId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">delete</a>(objectID, { ...params }) -> ObjectDeleteResponse</code>
- <code title="post /vault/{id}/objects/{objectId}/presigned-url">client.vault.objects.<a href="./src/resources/vault/objects.ts">createPresignedURL</a>(objectID, { ...params }) -> ObjectCreatePresignedURLResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/download">client.vault.objects.<a href="./src/resources/vault/objects.ts">download</a>(objectID, { ...params }) -> Response</code>
- <code title="get /vault/{id}/objects/{objectId}/chunks">client.vault.objects.<a href="./src/resources/vault/objects.ts">getChunks</a>(objectID, { ...params }) -> ObjectGetChunksResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/ocr-words">client.vault.objects.<a href="./src/resources/vault/objects.ts">getOcrWords</a>(objectID, { ...params }) -> ObjectGetOcrWordsResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/summarize/{jobId}">client.vault.objects.<a href="./src/resources/vault/objects.ts">getSummarizeJob</a>(jobID, { ...params }) -> ObjectGetSummarizeJobResponse</code>
- <code title="get /vault/{id}/objects/{objectId}/text">client.vault.objects.<a href="./src/resources/vault/objects.ts">getText</a>(objectID, { ...params }) -> ObjectGetTextResponse</code>

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
