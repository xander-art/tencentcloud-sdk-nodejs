import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeployConfigGroupVersionRequest, DeleteL4ProxyRulesRequest, DescribeOriginGroupResponse, DescribeConfigGroupVersionDetailResponse, ModifyAccelerationDomainResponse, DescribeHostsSettingResponse, DescribeRulesResponse, CreateCLSIndexResponse, DescribeRealtimeLogDeliveryTasksRequest, DescribeOriginProtectionResponse, DescribeBillingDataRequest, DescribeEnvironmentsRequest, DescribeAliasDomainsRequest, CreateRealtimeLogDeliveryTaskRequest, ModifyAccelerationDomainStatusesResponse, ModifyAccelerationDomainRequest, CreateAliasDomainRequest, CreatePrefetchTaskRequest, DescribeApplicationProxiesResponse, DescribeTopL7AnalysisDataRequest, DescribeAccelerationDomainsResponse, IdentifyZoneResponse, ModifyL4ProxyResponse, DescribeAliasDomainsResponse, DescribeTimingL7CacheDataRequest, DescribeDDoSAttackEventResponse, DescribePrefetchTasksRequest, DescribeTimingL7AnalysisDataResponse, VerifyOwnershipResponse, DownloadL4LogsRequest, ModifyZoneSettingRequest, DescribeTimingL7CacheDataResponse, DescribeZonesResponse, CreateL4ProxyRulesRequest, DeleteZoneRequest, ModifyL4ProxyRulesRequest, DescribeRulesSettingRequest, ModifyAliasDomainRequest, CreateSecurityIPGroupRequest, CreateOriginGroupRequest, CreateSecurityIPGroupResponse, CreateSharedCNAMEResponse, DescribeAvailablePlansResponse, ModifyRealtimeLogDeliveryTaskResponse, DescribeSecurityTemplateBindingsRequest, DescribeDDoSAttackTopDataResponse, DeleteRulesRequest, DeleteApplicationProxyResponse, DeleteSecurityIPGroupResponse, ModifyRuleRequest, DescribePrefetchTasksResponse, DescribeZoneSettingRequest, ModifyL4ProxyStatusResponse, ModifySecurityPolicyRequest, CreateApplicationProxyResponse, DescribeL4ProxyRulesResponse, DeleteAliasDomainRequest, DescribeIdentificationsResponse, CreatePurgeTaskResponse, DeleteApplicationProxyRuleResponse, DeleteOriginGroupRequest, ModifyRuleResponse, DescribeRulesSettingResponse, BindSecurityTemplateToEntityResponse, ModifyL4ProxyRulesResponse, DescribeConfigGroupVersionDetailRequest, DescribeZonesRequest, BindSharedCNAMEResponse, DeleteSharedCNAMERequest, ModifyRealtimeLogDeliveryTaskRequest, CreatePrefetchTaskResponse, DescribeDefaultCertificatesRequest, ModifyApplicationProxyRuleResponse, CreateConfigGroupVersionResponse, DownloadL7LogsRequest, DescribeRealtimeLogDeliveryTasksResponse, DescribeConfigGroupVersionsResponse, DeleteRealtimeLogDeliveryTaskResponse, DescribeOverviewL7DataResponse, DescribeEnvironmentsResponse, CreatePlanForZoneRequest, CreateL4ProxyRulesResponse, DownloadL4LogsResponse, BindSharedCNAMERequest, DeleteOriginGroupResponse, DescribeL4ProxyRequest, DescribeIdentificationsRequest, CreateAccelerationDomainRequest, DescribeZoneSettingResponse, DescribePurgeTasksRequest, IdentifyZoneRequest, CreateConfigGroupVersionRequest, DescribeDDoSAttackEventRequest, CreateL4ProxyResponse, DescribeOriginGroupRequest, DescribeIPRegionRequest, CreatePlanForZoneResponse, ModifyL4ProxyRulesStatusResponse, CheckCnameStatusResponse, VerifyOwnershipRequest, DeleteL4ProxyRequest, DeleteApplicationProxyRequest, ModifyZoneStatusRequest, DescribeL4ProxyResponse, ModifyOriginGroupResponse, DeleteAccelerationDomainsRequest, DescribeDeployHistoryRequest, DeleteZoneResponse, CreateRuleResponse, BindZoneToPlanResponse, ModifyApplicationProxyRequest, ModifyAliasDomainStatusRequest, DeleteRealtimeLogDeliveryTaskRequest, ModifyApplicationProxyRuleRequest, DeleteSecurityIPGroupRequest, CreateAliasDomainResponse, DeleteApplicationProxyRuleRequest, CreateRealtimeLogDeliveryTaskResponse, DescribeTopL7CacheDataResponse, DescribeSecurityTemplateBindingsResponse, ModifyAliasDomainStatusResponse, DescribeTimingL7AnalysisDataRequest, ModifyApplicationProxyStatusRequest, CreateZoneRequest, ModifyZoneRequest, DescribeDDoSAttackDataRequest, CreateL4ProxyRequest, DescribeApplicationProxiesRequest, DescribeContentQuotaRequest, ModifyHostsCertificateResponse, CreateRuleRequest, ModifyL4ProxyStatusRequest, CreateApplicationProxyRuleResponse, CreateApplicationProxyRequest, ModifyL4ProxyRulesStatusRequest, DescribeTimingL4DataResponse, ModifyApplicationProxyResponse, ModifySecurityIPGroupResponse, ModifyL4ProxyRequest, ModifyApplicationProxyRuleStatusRequest, ModifyAliasDomainResponse, ModifyHostsCertificateRequest, DeleteAccelerationDomainsResponse, DescribeTopL7AnalysisDataResponse, DescribeOriginProtectionRequest, DescribeHostsSettingRequest, DeleteRulesResponse, ModifySecurityIPGroupRequest, CreateSharedCNAMERequest, DeleteAliasDomainResponse, DescribeTopL7CacheDataRequest, DescribeDDoSAttackDataResponse, DeleteL4ProxyResponse, ModifyApplicationProxyRuleStatusResponse, CreateApplicationProxyRuleRequest, DescribeIPRegionResponse, DescribeAvailablePlansRequest, CreateOriginGroupResponse, ModifyZoneResponse, DescribeDDoSAttackTopDataRequest, CreateCLSIndexRequest, DescribeRulesRequest, ModifyZoneStatusResponse, ModifyZoneSettingResponse, DownloadL7LogsResponse, DescribeOverviewL7DataRequest, DeleteSharedCNAMEResponse, DeleteL4ProxyRulesResponse, BindZoneToPlanRequest, ModifyApplicationProxyStatusResponse, BindSecurityTemplateToEntityRequest, DescribeBillingDataResponse, CreateAccelerationDomainResponse, ModifyAccelerationDomainStatusesRequest, CreateZoneResponse, ModifySecurityPolicyResponse, ModifyOriginGroupRequest, DescribeDefaultCertificatesResponse, DescribeConfigGroupVersionsRequest, DescribeL4ProxyRulesRequest, CheckCnameStatusRequest, DescribeContentQuotaResponse, CreatePurgeTaskRequest, DescribePurgeTasksResponse, DeployConfigGroupVersionResponse, DescribeDeployHistoryResponse, DescribeAccelerationDomainsRequest, DescribeTimingL4DataRequest } from "./teo_models";
/**
 * teo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 当源站资源更新，但节点缓存 TTL 未过期时，用户仍会访问到旧的资源，此时可以通过该接口实现节点资源更新。触发更新的方法有以下两种：<li>直接删除：不做任何校验，直接删除节点缓存，用户请求时触发回源拉取；</li><li>标记过期：将节点资源置为过期，用户请求时触发回源校验，即发送带有 If-None-Match 和 If-Modified-Since 头部的 HTTP 条件请求。若源站响应 200，则节点会回源拉取新的资源并更新缓存；若源站响应 304，则节点不会更新缓存；</li>

清除缓存任务详情请查看[清除缓存](https://cloud.tencent.com/document/product/1552/70759)。
     */
    CreatePurgeTask(req: CreatePurgeTaskRequest, cb?: (error: string, rep: CreatePurgeTaskResponse) => void): Promise<CreatePurgeTaskResponse>;
    /**
     * 本接口（DownloadL4Logs）用于下载四层离线日志。
     */
    DownloadL4Logs(req: DownloadL4LogsRequest, cb?: (error: string, rep: DownloadL4LogsResponse) => void): Promise<DownloadL4LogsResponse>;
    /**
     * DescribePrefetchTasks 用于查询预热任务提交历史记录及执行进度，通过 CreatePrefetchTasks 接口提交的任务可通过此接口进行查询。
     */
    DescribePrefetchTasks(req: DescribePrefetchTasksRequest, cb?: (error: string, rep: DescribePrefetchTasksResponse) => void): Promise<DescribePrefetchTasksResponse>;
    /**
     * 查询内容管理接口配额
     */
    DescribeContentQuota(req: DescribeContentQuotaRequest, cb?: (error: string, rep: DescribeContentQuotaResponse) => void): Promise<DescribeContentQuotaResponse>;
    /**
     * 查询站点的验证信息。
     */
    DescribeIdentifications(req: DescribeIdentificationsRequest, cb?: (error: string, rep: DescribeIdentificationsResponse) => void): Promise<DescribeIdentificationsResponse>;
    /**
     * 通过本接口查询实时日志投递任务列表。
     */
    DescribeRealtimeLogDeliveryTasks(req: DescribeRealtimeLogDeliveryTasksRequest, cb?: (error: string, rep: DescribeRealtimeLogDeliveryTasksResponse) => void): Promise<DescribeRealtimeLogDeliveryTasksResponse>;
    /**
     * 在 CNAME 接入模式下，您需要对站点或者域名的归属权进行验证，可以通过本接口触发验证。若站点通过归属权验证后，后续添加域名无需再验证。详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。

在 NS 接入模式下，您也可以通过本接口来查询 NS 服务器是否切换成功，详情参考 [修改 DNS 服务器](https://cloud.tencent.com/document/product/1552/90452)。
     */
    VerifyOwnership(req: VerifyOwnershipRequest, cb?: (error: string, rep: VerifyOwnershipResponse) => void): Promise<VerifyOwnershipResponse>;
    /**
     * 用于验证站点所有权。
     */
    IdentifyZone(req: IdentifyZoneRequest, cb?: (error: string, rep: IdentifyZoneResponse) => void): Promise<IdentifyZoneResponse>;
    /**
     * 查询默认证书列表
     */
    DescribeDefaultCertificates(req: DescribeDefaultCertificatesRequest, cb?: (error: string, rep: DescribeDefaultCertificatesResponse) => void): Promise<DescribeDefaultCertificatesResponse>;
    /**
     * 您可以通过本接口查看站点下的域名信息，包括加速域名、源站以及域名状态等信息。您可以查看站点下全部域名的信息，也可以指定过滤条件查询对应的域名信息。
     */
    DescribeAccelerationDomains(req: DescribeAccelerationDomainsRequest, cb?: (error: string, rep: DescribeAccelerationDomainsResponse) => void): Promise<DescribeAccelerationDomainsResponse>;
    /**
     * 修改源站组配置，新提交的源站记录将会覆盖原有源站组中的源站记录。
     */
    ModifyOriginGroup(req: ModifyOriginGroupRequest, cb?: (error: string, rep: ModifyOriginGroupResponse) => void): Promise<ModifyOriginGroupResponse>;
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [删除四层代理实例
](https://cloud.tencent.com/document/product/1552/103415) 。
     */
    DeleteApplicationProxy(req: DeleteApplicationProxyRequest, cb?: (error: string, rep: DeleteApplicationProxyResponse) => void): Promise<DeleteApplicationProxyResponse>;
    /**
     * 用于启用/停用四层代理实例。
     */
    ModifyL4ProxyStatus(req: ModifyL4ProxyStatusRequest, cb?: (error: string, rep: ModifyL4ProxyStatusResponse) => void): Promise<ModifyL4ProxyStatusResponse>;
    /**
     * 本接口（DownloadL7Logs）下载七层离线日志。
     */
    DownloadL7Logs(req: DownloadL7LogsRequest, cb?: (error: string, rep: DownloadL7LogsResponse) => void): Promise<DownloadL7LogsResponse>;
    /**
     * 在版本管理模式下，用于查询环境信息，可获取环境 ID、类型、当前生效版本等。版本管理功能内测中，当前仅白名单开放。
     */
    DescribeEnvironments(req: DescribeEnvironmentsRequest, cb?: (error: string, rep: DescribeEnvironmentsResponse) => void): Promise<DescribeEnvironmentsResponse>;
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [删除四层代理转发规则](https://cloud.tencent.com/document/product/1552/103414) 。
     */
    DeleteApplicationProxyRule(req: DeleteApplicationProxyRuleRequest, cb?: (error: string, rep: DeleteApplicationProxyRuleResponse) => void): Promise<DeleteApplicationProxyRuleResponse>;
    /**
     * 校验域名 CNAME 状态
     */
    CheckCnameStatus(req: CheckCnameStatusRequest, cb?: (error: string, rep: CheckCnameStatusResponse) => void): Promise<CheckCnameStatusResponse>;
    /**
     * 修改站点信息。
     */
    ModifyZone(req: ModifyZoneRequest, cb?: (error: string, rep: ModifyZoneResponse) => void): Promise<ModifyZoneResponse>;
    /**
     * 创建预热任务
     */
    CreatePrefetchTask(req: CreatePrefetchTaskRequest, cb?: (error: string, rep: CreatePrefetchTaskResponse) => void): Promise<CreatePrefetchTaskResponse>;
    /**
     * 删除别称域名。
     */
    DeleteAliasDomain(req: DeleteAliasDomainRequest, cb?: (error: string, rep: DeleteAliasDomainResponse) => void): Promise<DeleteAliasDomainResponse>;
    /**
     * 本接口（DescribeOverviewL7Data）用于查询七层监控类时序流量数据。此接口待废弃，请使用 <a href="https://cloud.tencent.com/document/product/1552/80648">DescribeTimingL7AnalysisData</a> 接口。
     */
    DescribeOverviewL7Data(req: DescribeOverviewL7DataRequest, cb?: (error: string, rep: DescribeOverviewL7DataResponse) => void): Promise<DescribeOverviewL7DataResponse>;
    /**
     * 在创建完站点之后，您可以通过本接口创建加速域名。

CNAME 模式接入时，若您未完成站点归属权校验，本接口将为您返回域名归属权验证信息，您可以单独对域名进行归属权验证，详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。
     */
    CreateAccelerationDomain(req: CreateAccelerationDomainRequest, cb?: (error: string, rep: CreateAccelerationDomainResponse) => void): Promise<CreateAccelerationDomainResponse>;
    /**
     * 在版本管理模式下，用于获取版本的详细信息，包括版本 ID、描述、状态、创建时间、所属配置组信息以及版本配置文件的内容。版本管理功能内测中，当前仅白名单开放。
     */
    DescribeConfigGroupVersionDetail(req: DescribeConfigGroupVersionDetailRequest, cb?: (error: string, rep: DescribeConfigGroupVersionDetailResponse) => void): Promise<DescribeConfigGroupVersionDetailResponse>;
    /**
     * 操作安全策略模板，支持将域名绑定或换绑到指定的策略模板，或者从指定的策略模板解绑。
     */
    BindSecurityTemplateToEntity(req: BindSecurityTemplateToEntityRequest, cb?: (error: string, rep: BindSecurityTemplateToEntityResponse) => void): Promise<BindSecurityTemplateToEntityResponse>;
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理转发规则状态
](https://cloud.tencent.com/document/product/1552/103409) 。
     */
    ModifyApplicationProxyRuleStatus(req: ModifyApplicationProxyRuleStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleStatusResponse) => void): Promise<ModifyApplicationProxyRuleStatusResponse>;
    /**
     * 为未购买套餐的站点购买套餐
     */
    CreatePlanForZone(req: CreatePlanForZoneRequest, cb?: (error: string, rep: CreatePlanForZoneResponse) => void): Promise<CreatePlanForZoneResponse>;
    /**
     * 删除源站组，若源站组仍然被服务（例如：四层代理，域名服务，负载均衡，规则引起）引用，将不允许删除。
     */
    DeleteOriginGroup(req: DeleteOriginGroupRequest, cb?: (error: string, rep: DeleteOriginGroupResponse) => void): Promise<DeleteOriginGroupResponse>;
    /**
     * 创建安全 IP 组
     */
    CreateSecurityIPGroup(req: CreateSecurityIPGroupRequest, cb?: (error: string, rep: CreateSecurityIPGroupResponse) => void): Promise<CreateSecurityIPGroupResponse>;
    /**
     * 该接口可用于查询 IP 是否为 EdgeOne IP。
     */
    DescribeIPRegion(req: DescribeIPRegionRequest, cb?: (error: string, rep: DescribeIPRegionResponse) => void): Promise<DescribeIPRegionResponse>;
    /**
     * 批量删除加速域名
     */
    DeleteAccelerationDomains(req: DeleteAccelerationDomainsRequest, cb?: (error: string, rep: DeleteAccelerationDomainsResponse) => void): Promise<DeleteAccelerationDomainsResponse>;
    /**
     * 通过本接口创建实时日志投递任务。本接口有如下限制：
同一个实体（七层域名或者四层代理实例）在同种数据投递类型（LogType）和数据投递区域（Area）的组合下，只能被添加到一个实时日志投递任务中。建议先通过 [DescribeRealtimeLogDeliveryTasks](https://tcloud4api.woa.com/document/product/1657/343539?!preview&!document=1)  接口根据实体查询实时日志投递任务列表，检查实体是否已经被添加到另一实时日志投递任务中。
     */
    CreateRealtimeLogDeliveryTask(req: CreateRealtimeLogDeliveryTaskRequest, cb?: (error: string, rep: CreateRealtimeLogDeliveryTaskResponse) => void): Promise<CreateRealtimeLogDeliveryTaskResponse>;
    /**
     * 用于修改四层代理实例的配置。
     */
    ModifyL4Proxy(req: ModifyL4ProxyRequest, cb?: (error: string, rep: ModifyL4ProxyResponse) => void): Promise<ModifyL4ProxyResponse>;
    /**
     * 创建别称域名。
     */
    CreateAliasDomain(req: CreateAliasDomainRequest, cb?: (error: string, rep: CreateAliasDomainResponse) => void): Promise<CreateAliasDomainResponse>;
    /**
     * 本接口（DescribeTimingL7CacheData）用于查询七层缓存分析时序类流量数据。
     */
    DescribeTimingL7CacheData(req: DescribeTimingL7CacheDataRequest, cb?: (error: string, rep: DescribeTimingL7CacheDataResponse) => void): Promise<DescribeTimingL7CacheDataResponse>;
    /**
     * 在版本管理模式下，用于查询指定配置组的版本列表。版本管理功能内测中，当前仅白名单开放。
     */
    DescribeConfigGroupVersions(req: DescribeConfigGroupVersionsRequest, cb?: (error: string, rep: DescribeConfigGroupVersionsResponse) => void): Promise<DescribeConfigGroupVersionsResponse>;
    /**
     * 用于修改站点配置
     */
    ModifyZoneSetting(req: ModifyZoneSettingRequest, cb?: (error: string, rep: ModifyZoneSettingResponse) => void): Promise<ModifyZoneSettingResponse>;
    /**
     * 用于修改四层代理转发规则，支持单条或者批量修改。
     */
    ModifyL4ProxyRules(req: ModifyL4ProxyRulesRequest, cb?: (error: string, rep: ModifyL4ProxyRulesResponse) => void): Promise<ModifyL4ProxyRulesResponse>;
    /**
     * 修改别称域名状态。
     */
    ModifyAliasDomainStatus(req: ModifyAliasDomainStatusRequest, cb?: (error: string, rep: ModifyAliasDomainStatusResponse) => void): Promise<ModifyAliasDomainStatusResponse>;
    /**
     * 用于创建四层代理实例规则，支持单条或者批量创建。
     */
    CreateL4ProxyRules(req: CreateL4ProxyRulesRequest, cb?: (error: string, rep: CreateL4ProxyRulesResponse) => void): Promise<CreateL4ProxyRulesResponse>;
    /**
     * 本接口（DescribeTopL7CacheData）用于查询七层缓存分析topN流量数据。
     */
    DescribeTopL7CacheData(req: DescribeTopL7CacheDataRequest, cb?: (error: string, rep: DescribeTopL7CacheDataResponse) => void): Promise<DescribeTopL7CacheDataResponse>;
    /**
     * 本接口（DescribeTimingL4Data）用于查询四层时序流量数据列表。
     */
    DescribeTimingL4Data(req: DescribeTimingL4DataRequest, cb?: (error: string, rep: DescribeTimingL4DataResponse) => void): Promise<DescribeTimingL4DataResponse>;
    /**
     * 修改规则引擎规则。
     */
    ModifyRule(req: ModifyRuleRequest, cb?: (error: string, rep: ModifyRuleResponse) => void): Promise<ModifyRuleResponse>;
    /**
     * 本接口（DescribeTopL7AnalysisData）用于查询七层流量前topN的数据。
     */
    DescribeTopL7AnalysisData(req: DescribeTopL7AnalysisDataRequest, cb?: (error: string, rep: DescribeTopL7AnalysisDataResponse) => void): Promise<DescribeTopL7AnalysisDataResponse>;
    /**
     * 修改Web&Bot安全配置。
     */
    ModifySecurityPolicy(req: ModifySecurityPolicyRequest, cb?: (error: string, rep: ModifySecurityPolicyResponse) => void): Promise<ModifySecurityPolicyResponse>;
    /**
     * 将未绑定套餐的站点绑定到已有套餐
     */
    BindZoneToPlan(req: BindZoneToPlanRequest, cb?: (error: string, rep: BindZoneToPlanResponse) => void): Promise<BindZoneToPlanResponse>;
    /**
     * 本接口（DescribeDDoSAttackEvent）用于查询DDoS攻击事件列表。
     */
    DescribeDDoSAttackEvent(req: DescribeDDoSAttackEventRequest, cb?: (error: string, rep: DescribeDDoSAttackEventResponse) => void): Promise<DescribeDDoSAttackEventResponse>;
    /**
     * 用于删除四层代理转发规则，支持单条或者批量操作。
     */
    DeleteL4ProxyRules(req: DeleteL4ProxyRulesRequest, cb?: (error: string, rep: DeleteL4ProxyRulesResponse) => void): Promise<DeleteL4ProxyRulesResponse>;
    /**
     * 修改加速域名信息
     */
    ModifyAccelerationDomain(req: ModifyAccelerationDomainRequest, cb?: (error: string, rep: ModifyAccelerationDomainResponse) => void): Promise<ModifyAccelerationDomainResponse>;
    /**
     * 用于创建四层代理实例。
     */
    CreateL4Proxy(req: CreateL4ProxyRequest, cb?: (error: string, rep: CreateL4ProxyResponse) => void): Promise<CreateL4ProxyResponse>;
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理实例状态](https://cloud.tencent.com/document/product/1552/103408) 。
     */
    ModifyApplicationProxyStatus(req: ModifyApplicationProxyStatusRequest, cb?: (error: string, rep: ModifyApplicationProxyStatusResponse) => void): Promise<ModifyApplicationProxyStatusResponse>;
    /**
     * 本接口（DescribeTimingL7AnalysisData）查询七层数据分析类时序数据。
     */
    DescribeTimingL7AnalysisData(req: DescribeTimingL7AnalysisDataRequest, cb?: (error: string, rep: DescribeTimingL7AnalysisDataResponse) => void): Promise<DescribeTimingL7AnalysisDataResponse>;
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，新版接口中将四层代理实例列表的查询和四层转发规则的查询拆分成两个接口，详情请参考 [查询四层代理实例列表](https://cloud.tencent.com/document/product/1552/103413) 和 [查询四层代理转发规则列表](https://cloud.tencent.com/document/product/1552/103412)。
     */
    DescribeApplicationProxies(req: DescribeApplicationProxiesRequest, cb?: (error: string, rep: DescribeApplicationProxiesResponse) => void): Promise<DescribeApplicationProxiesResponse>;
    /**
     * 用于创建共享 CNAME，该功能白名单内测中。
     */
    CreateSharedCNAME(req: CreateSharedCNAMERequest, cb?: (error: string, rep: CreateSharedCNAMEResponse) => void): Promise<CreateSharedCNAMEResponse>;
    /**
     * 规则引擎创建规则。
     */
    CreateRule(req: CreateRuleRequest, cb?: (error: string, rep: CreateRuleResponse) => void): Promise<CreateRuleResponse>;
    /**
     * 在版本管理模式下，用于创建指定配置组的新版本。版本管理功能内测中，当前仅白名单开放。
     */
    CreateConfigGroupVersion(req: CreateConfigGroupVersionRequest, cb?: (error: string, rep: CreateConfigGroupVersionResponse) => void): Promise<CreateConfigGroupVersionResponse>;
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理实例
](https://cloud.tencent.com/document/product/1552/103411) 。
     */
    ModifyApplicationProxy(req: ModifyApplicationProxyRequest, cb?: (error: string, rep: ModifyApplicationProxyResponse) => void): Promise<ModifyApplicationProxyResponse>;
    /**
     * EdgeOne 为您提供 CNAME、NS 和无域名接入三种接入方式，您需要先通过此接口完成站点创建。CNAME 和 NS 接入站点的场景可参考 [从零开始快速接入 EdgeOne](https://cloud.tencent.com/document/product/1552/87601); 无域名接入的场景可参考 [快速启用四层代理服务](https://cloud.tencent.com/document/product/1552/96051)。

> 建议您在账号下已存在套餐时调用本接口创建站点，请在入参时传入 PlanId ，直接将站点绑定至该套餐；不传入 PlanId 时，创建出来的站点会处于未激活状态，无法正常服务，您需要通过 [BindZoneToPlan](https://cloud.tencent.com/document/product/1552/83042) 完成套餐绑定之后，站点才可正常提供服务 。若您当前没有可绑定的套餐时，请前往控制台购买套餐完成站点创建。
     */
    CreateZone(req: CreateZoneRequest, cb?: (error: string, rep: CreateZoneResponse) => void): Promise<CreateZoneResponse>;
    /**
     * 查询当前账户可用套餐信息列表
     */
    DescribeAvailablePlans(req?: DescribeAvailablePlansRequest, cb?: (error: string, rep: DescribeAvailablePlansResponse) => void): Promise<DescribeAvailablePlansResponse>;
    /**
     * 返回规则引擎可应用匹配请求的设置列表及其详细建议配置信息
     */
    DescribeRulesSetting(req?: DescribeRulesSettingRequest, cb?: (error: string, rep: DescribeRulesSettingResponse) => void): Promise<DescribeRulesSettingResponse>;
    /**
     * 批量修改加速域名状态
     */
    ModifyAccelerationDomainStatuses(req: ModifyAccelerationDomainStatusesRequest, cb?: (error: string, rep: ModifyAccelerationDomainStatusesResponse) => void): Promise<ModifyAccelerationDomainStatusesResponse>;
    /**
     * 修改安全 IP 组。
     */
    ModifySecurityIPGroup(req: ModifySecurityIPGroupRequest, cb?: (error: string, rep: ModifySecurityIPGroupResponse) => void): Promise<ModifySecurityIPGroupResponse>;
    /**
     * 通过本接口删除实时日志投递任务。
     */
    DeleteRealtimeLogDeliveryTask(req: DeleteRealtimeLogDeliveryTaskRequest, cb?: (error: string, rep: DeleteRealtimeLogDeliveryTaskResponse) => void): Promise<DeleteRealtimeLogDeliveryTaskResponse>;
    /**
     * 本接口（DescribeDDoSAttackTopData）用于查询DDoS攻击Top数据。
     */
    DescribeDDoSAttackTopData(req: DescribeDDoSAttackTopDataRequest, cb?: (error: string, rep: DescribeDDoSAttackTopDataResponse) => void): Promise<DescribeDDoSAttackTopDataResponse>;
    /**
     * 用于开启，关闭站点。
     */
    ModifyZoneStatus(req: ModifyZoneStatusRequest, cb?: (error: string, rep: ModifyZoneStatusResponse) => void): Promise<ModifyZoneStatusResponse>;
    /**
     * DescribePurgeTasks 用于查询提交的 URL 刷新、目录刷新记录及执行进度，通过 CreatePurgeTasks 接口提交的任务均可通过此接口进行查询。
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * 批量删除规则引擎规则。
     */
    DeleteRules(req: DeleteRulesRequest, cb?: (error: string, rep: DeleteRulesResponse) => void): Promise<DeleteRulesResponse>;
    /**
     * 查询四层代理实例下的转发规则列表。
     */
    DescribeL4ProxyRules(req: DescribeL4ProxyRulesRequest, cb?: (error: string, rep: DescribeL4ProxyRulesResponse) => void): Promise<DescribeL4ProxyRulesResponse>;
    /**
     * 用于查询四层代理实例列表。
     */
    DescribeL4Proxy(req: DescribeL4ProxyRequest, cb?: (error: string, rep: DescribeL4ProxyResponse) => void): Promise<DescribeL4ProxyResponse>;
    /**
     * 查询规则引擎规则。
     */
    DescribeRules(req: DescribeRulesRequest, cb?: (error: string, rep: DescribeRulesResponse) => void): Promise<DescribeRulesResponse>;
    /**
     * 针对指定实时日志投递任务（task-id），在对应的腾讯云 CLS 日志主题中创建投递日志字段对应的键值索引。如果您在腾讯云 CLS 已经创建索引，本接口将采用合并的方式追加索引。
     */
    CreateCLSIndex(req: CreateCLSIndexRequest, cb?: (error: string, rep: CreateCLSIndexResponse) => void): Promise<CreateCLSIndexResponse>;
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版 [创建四层代理实例](https://cloud.tencent.com/document/product/1552/103417) 。
     */
    CreateApplicationProxy(req: CreateApplicationProxyRequest, cb?: (error: string, rep: CreateApplicationProxyResponse) => void): Promise<CreateApplicationProxyResponse>;
    /**
     * 获取源站组列表
     */
    DescribeOriginGroup(req: DescribeOriginGroupRequest, cb?: (error: string, rep: DescribeOriginGroupResponse) => void): Promise<DescribeOriginGroupResponse>;
    /**
     * 修改别称域名。
     */
    ModifyAliasDomain(req: ModifyAliasDomainRequest, cb?: (error: string, rep: ModifyAliasDomainResponse) => void): Promise<ModifyAliasDomainResponse>;
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [修改四层代理转发规则
](https://cloud.tencent.com/document/product/1552/103410) 。
     */
    ModifyApplicationProxyRule(req: ModifyApplicationProxyRuleRequest, cb?: (error: string, rep: ModifyApplicationProxyRuleResponse) => void): Promise<ModifyApplicationProxyRuleResponse>;
    /**
     * 创建源站组，以源站组的方式管理业务源站。此处配置的源站组可于**添加加速域名**和**四层代理**等功能中引用。
     */
    CreateOriginGroup(req: CreateOriginGroupRequest, cb?: (error: string, rep: CreateOriginGroupResponse) => void): Promise<CreateOriginGroupResponse>;
    /**
     * 完成域名创建之后，您可以为域名配置自有证书，也可以使用 EdgeOne 为您提供的 [免费证书](https://cloud.tencent.com/document/product/1552/90437)。
如果您需要配置自有证书，请先将证书上传至 [SSL证书控制台](https://console.cloud.tencent.com/certoverview)，然后在本接口中传入对应的证书 ID。详情参考 [部署自有证书至 EdgeOne 域名
](https://cloud.tencent.com/document/product/1552/88874)。
     */
    ModifyHostsCertificate(req: ModifyHostsCertificateRequest, cb?: (error: string, rep: ModifyHostsCertificateResponse) => void): Promise<ModifyHostsCertificateResponse>;
    /**
     * 在版本管理模式下，用于查询生产/测试环境的版本发布历史。版本管理功能内测中，当前仅白名单开放。
     */
    DescribeDeployHistory(req: DescribeDeployHistoryRequest, cb?: (error: string, rep: DescribeDeployHistoryResponse) => void): Promise<DescribeDeployHistoryResponse>;
    /**
     * 在版本管理模式下，用于版本发布，可通过 EnvId 将版本发布至测试环境或生产环境。版本管理功能内测中，当前仅白名单开放。
     */
    DeployConfigGroupVersion(req: DeployConfigGroupVersionRequest, cb?: (error: string, rep: DeployConfigGroupVersionResponse) => void): Promise<DeployConfigGroupVersionResponse>;
    /**
     * 用于查询域名配置信息
     */
    DescribeHostsSetting(req: DescribeHostsSettingRequest, cb?: (error: string, rep: DescribeHostsSettingResponse) => void): Promise<DescribeHostsSettingResponse>;
    /**
     * 查询指定策略模板的绑定关系列表。
     */
    DescribeSecurityTemplateBindings(req: DescribeSecurityTemplateBindingsRequest, cb?: (error: string, rep: DescribeSecurityTemplateBindingsResponse) => void): Promise<DescribeSecurityTemplateBindingsResponse>;
    /**
     * 用于删除四层代理实例。
     */
    DeleteL4Proxy(req: DeleteL4ProxyRequest, cb?: (error: string, rep: DeleteL4ProxyResponse) => void): Promise<DeleteL4ProxyResponse>;
    /**
     * 用于加速域名绑定或解绑共享 CNAME，该功能白名单内测中。
     */
    BindSharedCNAME(req: BindSharedCNAMERequest, cb?: (error: string, rep: BindSharedCNAMEResponse) => void): Promise<BindSharedCNAMEResponse>;
    /**
     * 通过本接口修改实时日志投递任务配置。本接口有如下限制：<li>不支持修改实时日志投递任务目的地类型（TaskType）；</li><li>不支持修改数据投递类型（LogType）</li><li>不支持修改数据投递区域（Area）</li><li>当原实时日志投递任务的目的地为腾讯云 CLS 时，不支持修改目的地详细配置，如日志集、日志主题。</li>
     */
    ModifyRealtimeLogDeliveryTask(req: ModifyRealtimeLogDeliveryTaskRequest, cb?: (error: string, rep: ModifyRealtimeLogDeliveryTaskResponse) => void): Promise<ModifyRealtimeLogDeliveryTaskResponse>;
    /**
     * 查询源站防护信息
     */
    DescribeOriginProtection(req: DescribeOriginProtectionRequest, cb?: (error: string, rep: DescribeOriginProtectionResponse) => void): Promise<DescribeOriginProtectionResponse>;
    /**
     * 用于启用/停用四层代理转发规则状态，支持单条或者批量操作。
     */
    ModifyL4ProxyRulesStatus(req: ModifyL4ProxyRulesStatusRequest, cb?: (error: string, rep: ModifyL4ProxyRulesStatusResponse) => void): Promise<ModifyL4ProxyRulesStatusResponse>;
    /**
     * 用于查询站点的所有配置信息。
     */
    DescribeZoneSetting(req: DescribeZoneSettingRequest, cb?: (error: string, rep: DescribeZoneSettingResponse) => void): Promise<DescribeZoneSettingResponse>;
    /**
     * 删除指定 IP 组，如果有规则引用了 IP 组情况，则不允许删除。
     */
    DeleteSecurityIPGroup(req: DeleteSecurityIPGroupRequest, cb?: (error: string, rep: DeleteSecurityIPGroupResponse) => void): Promise<DeleteSecurityIPGroupResponse>;
    /**
     * 本接口为旧版，如需调用请尽快迁移至新版，详情请参考 [创建四层代理转发规则
](https://cloud.tencent.com/document/product/1552/103416) 。
     */
    CreateApplicationProxyRule(req: CreateApplicationProxyRuleRequest, cb?: (error: string, rep: CreateApplicationProxyRuleResponse) => void): Promise<CreateApplicationProxyRuleResponse>;
    /**
     * 该接口用于查询您有权限的站点信息。可根据不同查询条件筛选站点。
     */
    DescribeZones(req: DescribeZonesRequest, cb?: (error: string, rep: DescribeZonesResponse) => void): Promise<DescribeZonesResponse>;
    /**
     * 删除站点。
     */
    DeleteZone(req: DeleteZoneRequest, cb?: (error: string, rep: DeleteZoneResponse) => void): Promise<DeleteZoneResponse>;
    /**
     * 本接口（DescribeDDoSAttackData）用于查询DDoS攻击时序数据。
     */
    DescribeDDoSAttackData(req: DescribeDDoSAttackDataRequest, cb?: (error: string, rep: DescribeDDoSAttackDataResponse) => void): Promise<DescribeDDoSAttackDataResponse>;
    /**
     * 用于删除共享 CNAME，该功能白名单内测中。
     */
    DeleteSharedCNAME(req: DeleteSharedCNAMERequest, cb?: (error: string, rep: DeleteSharedCNAMEResponse) => void): Promise<DeleteSharedCNAMEResponse>;
    /**
     * 查询别称域名信息列表。
     */
    DescribeAliasDomains(req: DescribeAliasDomainsRequest, cb?: (error: string, rep: DescribeAliasDomainsResponse) => void): Promise<DescribeAliasDomainsResponse>;
    /**
     * 通过本接口查询计费数据。
     */
    DescribeBillingData(req: DescribeBillingDataRequest, cb?: (error: string, rep: DescribeBillingDataResponse) => void): Promise<DescribeBillingDataResponse>;
}
