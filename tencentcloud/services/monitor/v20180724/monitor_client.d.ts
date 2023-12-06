import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyAlarmPolicyInfoRequest, DescribePrometheusRegionsResponse, DescribePolicyGroupListResponse, DescribePrometheusInstancesOverviewRequest, ModifyGrafanaInstanceResponse, ModifyGrafanaInstanceRequest, EnableGrafanaSSOResponse, DescribePolicyGroupInfoResponse, DeletePrometheusClusterAgentRequest, DescribePrometheusScrapeJobsRequest, CreatePolicyGroupResponse, DescribeBaseMetricsResponse, CreatePrometheusMultiTenantInstancePostPayModeRequest, SendCustomAlarmMsgRequest, UnBindingPolicyObjectRequest, DescribePrometheusAgentInstancesRequest, UpdateServiceDiscoveryRequest, DescribeGrafanaIntegrationsResponse, CreatePrometheusMultiTenantInstancePostPayModeResponse, UpdatePrometheusAgentStatusResponse, SyncPrometheusTempResponse, UpdateGrafanaWhiteListResponse, DescribeGrafanaEnvironmentsRequest, DeleteExporterIntegrationRequest, DescribePolicyConditionListResponse, DescribeAllNamespacesResponse, TerminatePrometheusInstancesRequest, InstallPluginsResponse, CreateGrafanaIntegrationRequest, DescribeBindingPolicyObjectListResponse, DescribePrometheusInstanceInitStatusResponse, DescribeProductEventListResponse, DescribeAlarmNoticeCallbacksResponse, DescribePrometheusInstanceUsageRequest, DeletePrometheusScrapeJobsRequest, CreatePrometheusRecordRuleYamlRequest, DescribeAlarmNoticesResponse, DeletePrometheusConfigResponse, CreatePrometheusRecordRuleYamlResponse, ModifyPolicyGroupResponse, UninstallGrafanaPluginsResponse, ModifyPrometheusTempRequest, UpgradeGrafanaInstanceResponse, BindingPolicyTagRequest, DeletePrometheusTempSyncResponse, DescribeDNSConfigRequest, UnBindingPolicyObjectResponse, DescribePrometheusRecordRulesRequest, DescribeExporterIntegrationsResponse, UpdateAlertRuleResponse, EnableGrafanaSSORequest, DescribePrometheusScrapeJobsResponse, EnableGrafanaInternetRequest, DescribePluginOverviewsResponse, DestroyPrometheusInstanceRequest, DeleteSSOAccountRequest, DescribePrometheusAgentInstancesResponse, DescribeProductListResponse, DeletePrometheusTempResponse, DescribeBasicAlarmListRequest, ModifyAlarmPolicyStatusResponse, DescribeGrafanaInstancesRequest, DescribePrometheusTempSyncRequest, DescribePrometheusGlobalConfigResponse, CreateRecordingRuleResponse, CreateGrafanaNotificationChannelResponse, DescribeGrafanaNotificationChannelsRequest, CleanGrafanaInstanceRequest, DescribeSSOAccountRequest, UpdateExporterIntegrationResponse, CreateAlarmNoticeRequest, UpdateGrafanaNotificationChannelResponse, CreateExporterIntegrationResponse, UnBindingAllPolicyObjectRequest, SendCustomAlarmMsgResponse, DescribeGrafanaChannelsRequest, DescribePolicyGroupListRequest, DescribeGrafanaConfigRequest, UpdateRecordingRuleRequest, DescribePrometheusInstancesRequest, InstallPluginsRequest, DescribeAlarmEventsResponse, DescribeServiceDiscoveryResponse, BindingPolicyObjectRequest, CreateServiceDiscoveryResponse, DescribeClusterAgentCreatingProgressRequest, EnableSSOCamCheckResponse, DescribeAccidentEventListRequest, CreatePrometheusScrapeJobResponse, CreateAlarmPolicyRequest, ModifyPrometheusAlertPolicyRequest, ModifyPrometheusInstanceAttributesResponse, DescribePrometheusAlertPolicyResponse, UpdateGrafanaEnvironmentsRequest, DeleteGrafanaNotificationChannelResponse, DescribeAlarmPoliciesResponse, ModifyPrometheusGlobalNotificationRequest, DescribePrometheusRecordRulesResponse, DescribePrometheusGlobalNotificationResponse, DescribeMonitorTypesRequest, DeletePrometheusAlertPolicyRequest, ModifyPrometheusAgentExternalLabelsResponse, ModifyAlarmNoticeRequest, DescribeGrafanaWhiteListResponse, DescribeAlertRulesResponse, ResumeGrafanaInstanceRequest, DescribeBasicAlarmListResponse, ModifyAlarmReceiversRequest, DescribeExporterIntegrationsRequest, DescribePrometheusInstanceDetailResponse, CreateGrafanaNotificationChannelRequest, DescribePrometheusTargetsTMPResponse, DescribePrometheusClusterAgentsResponse, UpdatePrometheusScrapeJobRequest, CreatePrometheusClusterAgentResponse, CreateGrafanaIntegrationResponse, BindPrometheusManagedGrafanaRequest, CreateGrafanaInstanceRequest, DescribePrometheusInstanceUsageResponse, DescribePrometheusGlobalNotificationRequest, DeleteExporterIntegrationResponse, UpdateRecordingRuleResponse, CreatePrometheusAgentResponse, DescribePrometheusAlertPolicyRequest, DescribeAlarmMetricsResponse, DescribePrometheusRecordRuleYamlRequest, DescribeGrafanaWhiteListRequest, DescribePrometheusConfigRequest, CreateGrafanaInstanceResponse, UpdateAlertRuleRequest, DeleteAlarmNoticesRequest, DescribeGrafanaNotificationChannelsResponse, ResumeGrafanaInstanceResponse, DescribeAccidentEventListResponse, DescribePrometheusTempSyncResponse, CreatePrometheusConfigResponse, UpdateDNSConfigRequest, DeletePrometheusClusterAgentResponse, DescribeDNSConfigResponse, DeleteRecordingRulesRequest, DeleteAlarmPolicyResponse, UninstallGrafanaPluginsRequest, DeleteSSOAccountResponse, DescribePrometheusRegionsRequest, ModifyAlarmPolicyTasksRequest, GetPrometheusAgentManagementCommandRequest, GetPrometheusAgentManagementCommandResponse, DescribeStatisticDataResponse, UpdateDNSConfigResponse, UninstallGrafanaDashboardResponse, UpdateGrafanaNotificationChannelRequest, DestroyPrometheusInstanceResponse, DescribeAlertRulesRequest, DescribePrometheusInstancesResponse, BindingPolicyTagResponse, DeleteServiceDiscoveryResponse, CreateExporterIntegrationRequest, ModifyPrometheusConfigResponse, CreatePrometheusAlertPolicyResponse, DescribePrometheusInstanceDetailRequest, DescribeConditionsTemplateListRequest, DeletePrometheusRecordRuleYamlResponse, GetMonitorDataRequest, CreateRecordingRuleRequest, ModifyPrometheusConfigRequest, DescribeGrafanaEnvironmentsResponse, DescribePolicyConditionListRequest, DeletePolicyGroupResponse, DeleteGrafanaInstanceRequest, DeleteGrafanaIntegrationRequest, ModifyPrometheusAlertPolicyResponse, DescribePrometheusTargetsTMPRequest, CreateServiceDiscoveryRequest, ModifyAlarmReceiversResponse, CreatePrometheusConfigRequest, DescribeSSOAccountResponse, CreateAlarmPolicyResponse, DeleteGrafanaNotificationChannelRequest, CreatePrometheusClusterAgentRequest, ModifyAlarmPolicyConditionResponse, DescribePrometheusInstancesOverviewResponse, DescribePrometheusRecordRuleYamlResponse, UpdateGrafanaIntegrationResponse, DescribeAlarmHistoriesResponse, DescribeAlarmMetricsRequest, CreateSSOAccountRequest, ModifyAlarmPolicyNoticeResponse, UnbindPrometheusManagedGrafanaResponse, DescribeGrafanaChannelsResponse, DescribeAlarmPolicyResponse, DescribeMonitorTypesResponse, UpgradeGrafanaInstanceRequest, CreatePrometheusGlobalNotificationResponse, DescribeAlarmHistoriesRequest, DeletePolicyGroupRequest, EnableSSOCamCheckRequest, DeleteGrafanaIntegrationResponse, DescribeInstalledPluginsRequest, DescribePrometheusZonesResponse, DescribePrometheusAgentsRequest, DescribePrometheusInstanceInitStatusRequest, CreatePrometheusAlertPolicyRequest, DescribeBindingPolicyObjectListRequest, UpgradeGrafanaDashboardResponse, DescribeAllNamespacesRequest, DescribePrometheusClusterAgentsRequest, UnbindPrometheusManagedGrafanaRequest, DescribeConditionsTemplateListResponse, CreatePrometheusTempRequest, ModifyAlarmPolicyInfoResponse, DescribeAlarmEventsRequest, ModifyAlarmPolicyConditionRequest, ModifyAlarmNoticeResponse, UpdateGrafanaConfigRequest, DescribeGrafanaIntegrationsRequest, CreatePolicyGroupRequest, CreatePrometheusScrapeJobRequest, CreatePrometheusTempResponse, UnBindingAllPolicyObjectResponse, DescribeAlarmNoticesRequest, RunPrometheusInstanceResponse, UpdateExporterIntegrationRequest, CheckIsPrometheusNewUserRequest, DescribeAlarmNoticeResponse, DeleteAlertRulesRequest, SyncPrometheusTempRequest, GetMonitorDataResponse, DescribeRecordingRulesRequest, UpgradeGrafanaDashboardRequest, DeleteServiceDiscoveryRequest, DescribeInstalledPluginsResponse, UpdateGrafanaConfigResponse, ModifyPrometheusInstanceAttributesRequest, DescribePrometheusConfigResponse, UpdateGrafanaEnvironmentsResponse, DescribeProductEventListRequest, CreatePrometheusGlobalNotificationRequest, ModifyPrometheusTempResponse, DescribeRecordingRulesResponse, DeleteRecordingRulesResponse, UpdateGrafanaWhiteListRequest, UpdatePrometheusAgentStatusRequest, DescribeGrafanaInstancesResponse, CheckIsPrometheusNewUserResponse, DescribePolicyGroupInfoRequest, UpdateAlertRuleStateResponse, ModifyPrometheusRecordRuleYamlRequest, DeletePrometheusAlertPolicyResponse, ModifyAlarmPolicyNoticeRequest, DeleteAlarmPolicyRequest, DescribeClusterAgentCreatingProgressResponse, CreateAlertRuleResponse, ModifyAlarmPolicyTasksResponse, DeleteAlertRulesResponse, ModifyAlarmPolicyStatusRequest, DescribeServiceDiscoveryRequest, DescribePrometheusTempResponse, DescribeGrafanaConfigResponse, DescribeAlarmNoticeRequest, DeletePrometheusTempRequest, EnableGrafanaInternetResponse, DescribeProductListRequest, BindPrometheusManagedGrafanaResponse, CreatePrometheusAgentRequest, DeleteAlarmNoticesResponse, DeletePrometheusTempSyncRequest, DescribePluginOverviewsRequest, DescribePrometheusGlobalConfigRequest, DescribePrometheusZonesRequest, ModifyPolicyGroupRequest, DescribeBaseMetricsRequest, DeletePrometheusConfigRequest, ModifyPrometheusAgentExternalLabelsRequest, DescribePrometheusTempRequest, UpdateServiceDiscoveryResponse, CreateAlarmNoticeResponse, DeleteGrafanaInstanceResponse, UpdateSSOAccountRequest, CreateSSOAccountResponse, UpdatePrometheusScrapeJobResponse, DescribeAlarmPoliciesRequest, DescribePrometheusAgentsResponse, ModifyPrometheusGlobalNotificationResponse, CleanGrafanaInstanceResponse, CreateAlertRuleRequest, ModifyPrometheusRecordRuleYamlResponse, DeletePrometheusScrapeJobsResponse, DescribeAlarmPolicyRequest, UninstallGrafanaDashboardRequest, UpdateGrafanaIntegrationRequest, DeletePrometheusRecordRuleYamlRequest, DescribeAlarmNoticeCallbacksRequest, DescribeStatisticDataRequest, SetDefaultAlarmPolicyRequest, TerminatePrometheusInstancesResponse, UpdateSSOAccountResponse, RunPrometheusInstanceRequest, UpdateAlertRuleStateRequest, SetDefaultAlarmPolicyResponse, BindingPolicyObjectResponse } from "./monitor_models";
/**
 * monitor client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 更新 Grafana 告警通道
     */
    UpdateGrafanaNotificationChannel(req: UpdateGrafanaNotificationChannelRequest, cb?: (error: string, rep: UpdateGrafanaNotificationChannelResponse) => void): Promise<UpdateGrafanaNotificationChannelResponse>;
    /**
     * 创建 Prometheus 告警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     */
    CreateAlertRule(req: CreateAlertRuleRequest, cb?: (error: string, rep: CreateAlertRuleResponse) => void): Promise<CreateAlertRuleResponse>;
    /**
     * 解除TMP实例的集群关联
     */
    DeletePrometheusClusterAgent(req: DeletePrometheusClusterAgentRequest, cb?: (error: string, rep: DeletePrometheusClusterAgentResponse) => void): Promise<DeletePrometheusClusterAgentResponse>;
    /**
     * 获取已绑定对象列表
     */
    DescribeBindingPolicyObjectList(req: DescribeBindingPolicyObjectListRequest, cb?: (error: string, rep: DescribeBindingPolicyObjectListResponse) => void): Promise<DescribeBindingPolicyObjectListResponse>;
    /**
     * 更新 Prometheus 的告警规则。

请注意，**告警对象和告警消息是 Prometheus Rule Annotations 的特殊字段，需要通过 annotations 来传递，对应的 Key 分别为summary/description**，，请参考 [Prometheus Rule更多配置请参考](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)。
     */
    UpdateAlertRule(req: UpdateAlertRuleRequest, cb?: (error: string, rep: UpdateAlertRuleResponse) => void): Promise<UpdateAlertRuleResponse>;
    /**
     * 修改2.0实例告警策略
     */
    ModifyPrometheusAlertPolicy(req: ModifyPrometheusAlertPolicyRequest, cb?: (error: string, rep: ModifyPrometheusAlertPolicyResponse) => void): Promise<ModifyPrometheusAlertPolicyResponse>;
    /**
     *  查询Prometheus按量实例用量
     */
    DescribePrometheusInstanceUsage(req: DescribePrometheusInstanceUsageRequest, cb?: (error: string, rep: DescribePrometheusInstanceUsageResponse) => void): Promise<DescribePrometheusInstanceUsageResponse>;
    /**
     * 修改告警接收人
     */
    ModifyAlarmReceivers(req: ModifyAlarmReceiversRequest, cb?: (error: string, rep: ModifyAlarmReceiversResponse) => void): Promise<ModifyAlarmReceiversResponse>;
    /**
     * 将告警策略绑定到特定对象
     */
    BindingPolicyObject(req: BindingPolicyObjectRequest, cb?: (error: string, rep: BindingPolicyObjectResponse) => void): Promise<BindingPolicyObjectResponse>;
    /**
     * 本接口（CreateGrafanaInstance）用于创建 Grafana 包年包月实例，默认基础版、到期自动续费、不可使用代金券。
     */
    CreateGrafanaInstance(req: CreateGrafanaInstanceRequest, cb?: (error: string, rep: CreateGrafanaInstanceResponse) => void): Promise<CreateGrafanaInstanceResponse>;
    /**
     * 创建告警策略
     */
    CreateAlarmPolicy(req: CreateAlarmPolicyRequest, cb?: (error: string, rep: CreateAlarmPolicyResponse) => void): Promise<CreateAlarmPolicyResponse>;
    /**
     * 查询腾讯云可观测平台云产品列表，支持云服务器CVM、云数据库、云消息队列、负载均衡、容器服务、专线等云产品。
     */
    DescribeProductList(req: DescribeProductListRequest, cb?: (error: string, rep: DescribeProductListResponse) => void): Promise<DescribeProductListResponse>;
    /**
     * 获取聚合规则列表，包含关联集群内crd资源创建的record rule
     */
    DescribePrometheusRecordRules(req: DescribePrometheusRecordRulesRequest, cb?: (error: string, rep: DescribePrometheusRecordRulesResponse) => void): Promise<DescribePrometheusRecordRulesResponse>;
    /**
     * 更新已授权账号的备注、权限信息，会直接覆盖原有的信息，不传则不会更新。
     */
    UpdateSSOAccount(req: UpdateSSOAccountRequest, cb?: (error: string, rep: UpdateSSOAccountResponse) => void): Promise<UpdateSSOAccountResponse>;
    /**
     * 获取TMP实例关联集群列表
     */
    DescribePrometheusClusterAgents(req: DescribePrometheusClusterAgentsRequest, cb?: (error: string, rep: DescribePrometheusClusterAgentsResponse) => void): Promise<DescribePrometheusClusterAgentsResponse>;
    /**
     * 判断用户是否为云原生监控新用户，即在任何地域下均未创建过监控实例的用户
     */
    CheckIsPrometheusNewUser(req?: CheckIsPrometheusNewUserRequest, cb?: (error: string, rep: CheckIsPrometheusNewUserResponse) => void): Promise<CheckIsPrometheusNewUserResponse>;
    /**
     * 列出 Grafana 环境变量
     */
    DescribeGrafanaEnvironments(req: DescribeGrafanaEnvironmentsRequest, cb?: (error: string, rep: DescribeGrafanaEnvironmentsResponse) => void): Promise<DescribeGrafanaEnvironmentsResponse>;
    /**
     * 更新 Prometheus 的预聚合规则
     */
    UpdateRecordingRule(req: UpdateRecordingRuleRequest, cb?: (error: string, rep: UpdateRecordingRuleResponse) => void): Promise<UpdateRecordingRuleResponse>;
    /**
     * 删除 Grafana 告警通道
     */
    DeleteGrafanaNotificationChannel(req: DeleteGrafanaNotificationChannelRequest, cb?: (error: string, rep: DeleteGrafanaNotificationChannelResponse) => void): Promise<DeleteGrafanaNotificationChannelResponse>;
    /**
     * 根据维度条件查询监控数据
     */
    DescribeStatisticData(req: DescribeStatisticDataRequest, cb?: (error: string, rep: DescribeStatisticDataResponse) => void): Promise<DescribeStatisticDataResponse>;
    /**
     * 列出 Grafana 的设置，即 grafana.ini 文件内容
     */
    DescribeGrafanaConfig(req: DescribeGrafanaConfigRequest, cb?: (error: string, rep: DescribeGrafanaConfigResponse) => void): Promise<DescribeGrafanaConfigResponse>;
    /**
     * 告警2.0编辑告警策略基本信息，包括策略名、备注
     */
    ModifyAlarmPolicyInfo(req: ModifyAlarmPolicyInfoRequest, cb?: (error: string, rep: ModifyAlarmPolicyInfoResponse) => void): Promise<ModifyAlarmPolicyInfoResponse>;
    /**
     * 启停告警策略
     */
    ModifyAlarmPolicyStatus(req: ModifyAlarmPolicyStatusRequest, cb?: (error: string, rep: ModifyAlarmPolicyStatusResponse) => void): Promise<ModifyAlarmPolicyStatusResponse>;
    /**
     * 删除 Prometheus 抓取任务
     */
    DeletePrometheusScrapeJobs(req: DeletePrometheusScrapeJobsRequest, cb?: (error: string, rep: DeletePrometheusScrapeJobsResponse) => void): Promise<DeletePrometheusScrapeJobsResponse>;
    /**
     * 设置 Grafana 单点登录，使用腾讯云账号
     */
    EnableGrafanaSSO(req: EnableGrafanaSSORequest, cb?: (error: string, rep: EnableGrafanaSSOResponse) => void): Promise<EnableGrafanaSSOResponse>;
    /**
     * 批量删除 Prometheus 报警规则
     */
    DeleteAlertRules(req: DeleteAlertRulesRequest, cb?: (error: string, rep: DeleteAlertRulesResponse) => void): Promise<DeleteAlertRulesResponse>;
    /**
     * 获取基础指标属性
     */
    DescribeBaseMetrics(req: DescribeBaseMetricsRequest, cb?: (error: string, rep: DescribeBaseMetricsResponse) => void): Promise<DescribeBaseMetricsResponse>;
    /**
     * 查询告警事件列表
     */
    DescribeAlarmEvents(req: DescribeAlarmEventsRequest, cb?: (error: string, rep: DescribeAlarmEventsResponse) => void): Promise<DescribeAlarmEventsResponse>;
    /**
     * 删除告警通知模板
     */
    DeleteAlarmNotices(req: DeleteAlarmNoticesRequest, cb?: (error: string, rep: DeleteAlarmNoticesResponse) => void): Promise<DeleteAlarmNoticesResponse>;
    /**
     * 编辑告警通知模板
     */
    ModifyAlarmNotice(req: ModifyAlarmNoticeRequest, cb?: (error: string, rep: ModifyAlarmNoticeResponse) => void): Promise<ModifyAlarmNoticeResponse>;
    /**
     * 获取TMP实例详情
     */
    DescribePrometheusInstanceDetail(req: DescribePrometheusInstanceDetailRequest, cb?: (error: string, rep: DescribePrometheusInstanceDetailResponse) => void): Promise<DescribePrometheusInstanceDetailResponse>;
    /**
     * 创建 Prometheus 抓取任务
     */
    CreatePrometheusScrapeJob(req: CreatePrometheusScrapeJobRequest, cb?: (error: string, rep: CreatePrometheusScrapeJobResponse) => void): Promise<CreatePrometheusScrapeJobResponse>;
    /**
     * 删除策略的关联对象
     */
    UnBindingPolicyObject(req: UnBindingPolicyObjectRequest, cb?: (error: string, rep: UnBindingPolicyObjectResponse) => void): Promise<UnBindingPolicyObjectResponse>;
    /**
     * 获取条件模板列表
     */
    DescribeConditionsTemplateList(req: DescribeConditionsTemplateListRequest, cb?: (error: string, rep: DescribeConditionsTemplateListResponse) => void): Promise<DescribeConditionsTemplateListResponse>;
    /**
     * 列出 Prometheus 抓取任务
     */
    DescribePrometheusScrapeJobs(req: DescribePrometheusScrapeJobsRequest, cb?: (error: string, rep: DescribePrometheusScrapeJobsResponse) => void): Promise<DescribePrometheusScrapeJobsResponse>;
    /**
     * 删除在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    DeleteServiceDiscovery(req: DeleteServiceDiscoveryRequest, cb?: (error: string, rep: DeleteServiceDiscoveryResponse) => void): Promise<DeleteServiceDiscoveryResponse>;
    /**
     * 与腾讯云可观测融合的2.0实例关联集群
     */
    CreatePrometheusClusterAgent(req: CreatePrometheusClusterAgentRequest, cb?: (error: string, rep: CreatePrometheusClusterAgentResponse) => void): Promise<CreatePrometheusClusterAgentResponse>;
    /**
     * 策略绑定标签
     */
    BindingPolicyTag(req: BindingPolicyTagRequest, cb?: (error: string, rep: BindingPolicyTagResponse) => void): Promise<BindingPolicyTagResponse>;
    /**
     * 创建按量 Prometheus 实例，根据用量收费实例
     */
    CreatePrometheusMultiTenantInstancePostPayMode(req: CreatePrometheusMultiTenantInstancePostPayModeRequest, cb?: (error: string, rep: CreatePrometheusMultiTenantInstancePostPayModeResponse) => void): Promise<CreatePrometheusMultiTenantInstancePostPayModeResponse>;
    /**
     * 更新 Grafana 环境变量
     */
    UpdateGrafanaEnvironments(req: UpdateGrafanaEnvironmentsRequest, cb?: (error: string, rep: UpdateGrafanaEnvironmentsResponse) => void): Promise<UpdateGrafanaEnvironmentsResponse>;
    /**
     * 获取基础告警策略条件
     */
    DescribePolicyConditionList(req: DescribePolicyConditionListRequest, cb?: (error: string, rep: DescribePolicyConditionListResponse) => void): Promise<DescribePolicyConditionListResponse>;
    /**
     * 修改告警策略触发条件
     */
    ModifyAlarmPolicyCondition(req: ModifyAlarmPolicyConditionRequest, cb?: (error: string, rep: ModifyAlarmPolicyConditionResponse) => void): Promise<ModifyAlarmPolicyConditionResponse>;
    /**
     * 获取 Prometheus Agent 管理相关的命令行
     */
    GetPrometheusAgentManagementCommand(req: GetPrometheusAgentManagementCommandRequest, cb?: (error: string, rep: GetPrometheusAgentManagementCommandResponse) => void): Promise<GetPrometheusAgentManagementCommandResponse>;
    /**
     * 更新 exporter 集成配置
     */
    UpdateExporterIntegration(req: UpdateExporterIntegrationRequest, cb?: (error: string, rep: UpdateExporterIntegrationResponse) => void): Promise<UpdateExporterIntegrationResponse>;
    /**
     * 更新 Prometheus Agent 抓取任务
     */
    UpdatePrometheusScrapeJob(req: UpdatePrometheusScrapeJobRequest, cb?: (error: string, rep: UpdatePrometheusScrapeJobResponse) => void): Promise<UpdatePrometheusScrapeJobResponse>;
    /**
     * 获取2.0实例初始化任务状态
     */
    DescribePrometheusInstanceInitStatus(req: DescribePrometheusInstanceInitStatusRequest, cb?: (error: string, rep: DescribePrometheusInstanceInitStatusResponse) => void): Promise<DescribePrometheusInstanceInitStatusResponse>;
    /**
     * 升级 Grafana 实例
     */
    UpgradeGrafanaInstance(req: UpgradeGrafanaInstanceRequest, cb?: (error: string, rep: UpgradeGrafanaInstanceResponse) => void): Promise<UpgradeGrafanaInstanceResponse>;
    /**
     * 列出 Grafana 所有告警通道
     */
    DescribeGrafanaChannels(req: DescribeGrafanaChannelsRequest, cb?: (error: string, rep: DescribeGrafanaChannelsResponse) => void): Promise<DescribeGrafanaChannelsResponse>;
    /**
     * 删除 Grafana 集成配置
     */
    DeleteGrafanaIntegration(req: DeleteGrafanaIntegrationRequest, cb?: (error: string, rep: DeleteGrafanaIntegrationResponse) => void): Promise<DeleteGrafanaIntegrationResponse>;
    /**
     * 绑定 Grafana 可视化服务实例
     */
    BindPrometheusManagedGrafana(req: BindPrometheusManagedGrafanaRequest, cb?: (error: string, rep: BindPrometheusManagedGrafanaResponse) => void): Promise<BindPrometheusManagedGrafanaResponse>;
    /**
     * 删除全部的关联对象
     */
    UnBindingAllPolicyObject(req: UnBindingAllPolicyObjectRequest, cb?: (error: string, rep: UnBindingAllPolicyObjectResponse) => void): Promise<UnBindingAllPolicyObjectResponse>;
    /**
     * 删除告警策略组
     */
    DeletePolicyGroup(req: DeletePolicyGroupRequest, cb?: (error: string, rep: DeletePolicyGroupResponse) => void): Promise<DeletePolicyGroupResponse>;
    /**
     * 在腾讯云容器服务下更新 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    UpdateServiceDiscovery(req: UpdateServiceDiscoveryRequest, cb?: (error: string, rep: UpdateServiceDiscoveryResponse) => void): Promise<UpdateServiceDiscoveryResponse>;
    /**
     * 腾讯云可观测平台支持多种类型的监控，此接口列出支持的所有类型
     */
    DescribeMonitorTypes(req: DescribeMonitorTypesRequest, cb?: (error: string, rep: DescribeMonitorTypesResponse) => void): Promise<DescribeMonitorTypesResponse>;
    /**
     * SSO单点登录时，设置是否cam鉴权
     */
    EnableSSOCamCheck(req: EnableSSOCamCheckRequest, cb?: (error: string, rep: EnableSSOCamCheckResponse) => void): Promise<EnableSSOCamCheckResponse>;
    /**
     * 安装 Grafana Plugin
     */
    InstallPlugins(req: InstallPluginsRequest, cb?: (error: string, rep: InstallPluginsResponse) => void): Promise<InstallPluginsResponse>;
    /**
     * 创建 exporter 集成
     */
    CreateExporterIntegration(req: CreateExporterIntegrationRequest, cb?: (error: string, rep: CreateExporterIntegrationResponse) => void): Promise<CreateExporterIntegrationResponse>;
    /**
     * 批量删除 Prometheus 预聚合规则
     */
    DeleteRecordingRules(req: DeleteRecordingRulesRequest, cb?: (error: string, rep: DeleteRecordingRulesResponse) => void): Promise<DeleteRecordingRulesResponse>;
    /**
     * 分页获取产品事件的列表
     */
    DescribeProductEventList(req: DescribeProductEventListRequest, cb?: (error: string, rep: DescribeProductEventListResponse) => void): Promise<DescribeProductEventListResponse>;
    /**
     * 查询告警历史

请注意，**如果使用子用户进行告警历史的查询，只能查询到被授权项目下的告警历史**，或不区分项目的产品的告警历史。如何对子账户授予项目的权限，请参考 [访问管理-项目与标签](https://cloud.tencent.com/document/product/598/32738)。
     */
    DescribeAlarmHistories(req: DescribeAlarmHistoriesRequest, cb?: (error: string, rep: DescribeAlarmHistoriesResponse) => void): Promise<DescribeAlarmHistoriesResponse>;
    /**
     * 创建通知模板
     */
    CreateAlarmNotice(req: CreateAlarmNoticeRequest, cb?: (error: string, rep: CreateAlarmNoticeResponse) => void): Promise<CreateAlarmNoticeResponse>;
    /**
     * Grafana可视化服务 删除授权用户
     */
    DeleteSSOAccount(req: DeleteSSOAccountRequest, cb?: (error: string, rep: DeleteSSOAccountResponse) => void): Promise<DeleteSSOAccountResponse>;
    /**
     * 查询单个通知模板的详情
     */
    DescribeAlarmNotice(req: DescribeAlarmNoticeRequest, cb?: (error: string, rep: DescribeAlarmNoticeResponse) => void): Promise<DescribeAlarmNoticeResponse>;
    /**
     * 创建 Grafana 集成配置，其中 Prometheus 集成不通过该接口创建，可参考 BindPrometheusManagedGrafana 接口
     */
    CreateGrafanaIntegration(req: CreateGrafanaIntegrationRequest, cb?: (error: string, rep: CreateGrafanaIntegrationResponse) => void): Promise<CreateGrafanaIntegrationResponse>;
    /**
     * 拉取模板列表，默认模板将总是在最前面
     */
    DescribePrometheusTemp(req: DescribePrometheusTempRequest, cb?: (error: string, rep: DescribePrometheusTempResponse) => void): Promise<DescribePrometheusTempResponse>;
    /**
     * 更新 Grafana 白名单
     */
    UpdateGrafanaWhiteList(req: UpdateGrafanaWhiteListRequest, cb?: (error: string, rep: UpdateGrafanaWhiteListResponse) => void): Promise<UpdateGrafanaWhiteListResponse>;
    /**
     * 设置一个策略为该告警策略类型、该项目的默认告警策略。
同一项目下相同的告警策略类型，就会被设置为非默认。
     */
    SetDefaultAlarmPolicy(req: SetDefaultAlarmPolicyRequest, cb?: (error: string, rep: SetDefaultAlarmPolicyResponse) => void): Promise<SetDefaultAlarmPolicyResponse>;
    /**
     * 本接口（DeleteGrafanaInstance）用于 Grafana 包年包月实例的退费，调用后实例处于停服状态，不可使用，7天后自动销毁。
     */
    DeleteGrafanaInstance(req: DeleteGrafanaInstanceRequest, cb?: (error: string, rep: DeleteGrafanaInstanceResponse) => void): Promise<DeleteGrafanaInstanceResponse>;
    /**
     * 删除Prometheus配置，如果目标不存在，将返回成功
     */
    DeletePrometheusConfig(req: DeletePrometheusConfigRequest, cb?: (error: string, rep: DeletePrometheusConfigResponse) => void): Promise<DeletePrometheusConfigResponse>;
    /**
     * Grafana实例授权其他腾讯云用户
     */
    CreateSSOAccount(req: CreateSSOAccountRequest, cb?: (error: string, rep: CreateSSOAccountResponse) => void): Promise<CreateSSOAccountResponse>;
    /**
     * 发送自定义消息告警
     */
    SendCustomAlarmMsg(req: SendCustomAlarmMsgRequest, cb?: (error: string, rep: SendCustomAlarmMsgResponse) => void): Promise<SendCustomAlarmMsgResponse>;
    /**
     * 修改告警策略绑定的告警通知模板
     */
    ModifyAlarmPolicyNotice(req: ModifyAlarmPolicyNoticeRequest, cb?: (error: string, rep: ModifyAlarmPolicyNoticeResponse) => void): Promise<ModifyAlarmPolicyNoticeResponse>;
    /**
     * 设置 Grafana 公网访问
     */
    EnableGrafanaInternet(req: EnableGrafanaInternetRequest, cb?: (error: string, rep: EnableGrafanaInternetResponse) => void): Promise<EnableGrafanaInternetResponse>;
    /**
     * 创建 Grafana 告警通道
     */
    CreateGrafanaNotificationChannel(req: CreateGrafanaNotificationChannelRequest, cb?: (error: string, rep: CreateGrafanaNotificationChannelResponse) => void): Promise<CreateGrafanaNotificationChannelResponse>;
    /**
     * 修改 Grafana 实例属性
     */
    ModifyGrafanaInstance(req: ModifyGrafanaInstanceRequest, cb?: (error: string, rep: ModifyGrafanaInstanceResponse) => void): Promise<ModifyGrafanaInstanceResponse>;
    /**
     * 本接口（ResumeGrafanaInstance）用于 Grafana 包年包月实例的停服续费，调用后按原版本续费一个月。仍在运行中的实例无法使用该接口进行续费。
     */
    ResumeGrafanaInstance(req: ResumeGrafanaInstanceRequest, cb?: (error: string, rep: ResumeGrafanaInstanceResponse) => void): Promise<ResumeGrafanaInstanceResponse>;
    /**
     * 创建一个云原生Prometheus模板
     */
    CreatePrometheusTemp(req: CreatePrometheusTempRequest, cb?: (error: string, rep: CreatePrometheusTempResponse) => void): Promise<CreatePrometheusTempResponse>;
    /**
     * 列出当前grafana实例的所有授权账号
     */
    DescribeSSOAccount(req: DescribeSSOAccountRequest, cb?: (error: string, rep: DescribeSSOAccountResponse) => void): Promise<DescribeSSOAccountResponse>;
    /**
     * 获取基础告警列表
     */
    DescribeBasicAlarmList(req: DescribeBasicAlarmListRequest, cb?: (error: string, rep: DescribeBasicAlarmListResponse) => void): Promise<DescribeBasicAlarmListResponse>;
    /**
     * 创建 Prometheus CVM Agent
     */
    CreatePrometheusAgent(req: CreatePrometheusAgentRequest, cb?: (error: string, rep: CreatePrometheusAgentResponse) => void): Promise<CreatePrometheusAgentResponse>;
    /**
     * 同步模板到实例或者集群，针对V2版本实例
     */
    SyncPrometheusTemp(req: SyncPrometheusTempRequest, cb?: (error: string, rep: SyncPrometheusTempResponse) => void): Promise<SyncPrometheusTempResponse>;
    /**
     * 创建全局告警通知渠道
     */
    CreatePrometheusGlobalNotification(req: CreatePrometheusGlobalNotificationRequest, cb?: (error: string, rep: CreatePrometheusGlobalNotificationResponse) => void): Promise<CreatePrometheusGlobalNotificationResponse>;
    /**
     * 更新 Prometheus 报警策略状态
     */
    UpdateAlertRuleState(req: UpdateAlertRuleStateRequest, cb?: (error: string, rep: UpdateAlertRuleStateResponse) => void): Promise<UpdateAlertRuleStateResponse>;
    /**
     * 修改模板内容
     */
    ModifyPrometheusTemp(req: ModifyPrometheusTempRequest, cb?: (error: string, rep: ModifyPrometheusTempResponse) => void): Promise<ModifyPrometheusTempResponse>;
    /**
     * 解除实例绑定的 Grafana 可视化实例
     */
    UnbindPrometheusManagedGrafana(req: UnbindPrometheusManagedGrafanaRequest, cb?: (error: string, rep: UnbindPrometheusManagedGrafanaResponse) => void): Promise<UnbindPrometheusManagedGrafanaResponse>;
    /**
     * 初始化TMP实例，开启集成中心时调用
     */
    RunPrometheusInstance(req: RunPrometheusInstanceRequest, cb?: (error: string, rep: RunPrometheusInstanceResponse) => void): Promise<RunPrometheusInstanceResponse>;
    /**
     * 查询集成中心 exporter 集成列表
     */
    DescribeExporterIntegrations(req: DescribeExporterIntegrationsRequest, cb?: (error: string, rep: DescribeExporterIntegrationsResponse) => void): Promise<DescribeExporterIntegrationsResponse>;
    /**
     * 列出实例已安装的插件
     */
    DescribeInstalledPlugins(req: DescribeInstalledPluginsRequest, cb?: (error: string, rep: DescribeInstalledPluginsResponse) => void): Promise<DescribeInstalledPluginsResponse>;
    /**
     * 查询全局告警通知渠道
     */
    DescribePrometheusGlobalNotification(req: DescribePrometheusGlobalNotificationRequest, cb?: (error: string, rep: DescribePrometheusGlobalNotificationResponse) => void): Promise<DescribePrometheusGlobalNotificationResponse>;
    /**
     * 升级 Grafana Dashboard
     */
    UpgradeGrafanaDashboard(req: UpgradeGrafanaDashboardRequest, cb?: (error: string, rep: UpgradeGrafanaDashboardResponse) => void): Promise<UpgradeGrafanaDashboardResponse>;
    /**
     * 查询通知模板列表
     */
    DescribeAlarmNotices(req: DescribeAlarmNoticesRequest, cb?: (error: string, rep: DescribeAlarmNoticesResponse) => void): Promise<DescribeAlarmNoticesResponse>;
    /**
     * 列出 Grafana DNS 配置
     */
    DescribeDNSConfig(req: DescribeDNSConfigRequest, cb?: (error: string, rep: DescribeDNSConfigResponse) => void): Promise<DescribeDNSConfigResponse>;
    /**
     * 修改全局告警通知渠道
     */
    ModifyPrometheusGlobalNotification(req: ModifyPrometheusGlobalNotificationRequest, cb?: (error: string, rep: ModifyPrometheusGlobalNotificationResponse) => void): Promise<ModifyPrometheusGlobalNotificationResponse>;
    /**
     * 获取关联目标集群的实例列表
     */
    DescribePrometheusAgentInstances(req: DescribePrometheusAgentInstancesRequest, cb?: (error: string, rep: DescribePrometheusAgentInstancesResponse) => void): Promise<DescribePrometheusAgentInstancesResponse>;
    /**
     * 删除聚合实例
     */
    DeletePrometheusRecordRuleYaml(req: DeletePrometheusRecordRuleYamlRequest, cb?: (error: string, rep: DeletePrometheusRecordRuleYamlResponse) => void): Promise<DeletePrometheusRecordRuleYamlResponse>;
    /**
     * 本接口 (DescribePrometheusInstances) 用于查询一个或多个实例的详细信息。
<ul>
<li>可以根据实例ID、实例名称或者实例状态等信息来查询实例的详细信息</li>
<li>如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的实例。</li>
</ul>
     */
    DescribePrometheusInstances(req: DescribePrometheusInstancesRequest, cb?: (error: string, rep: DescribePrometheusInstancesResponse) => void): Promise<DescribePrometheusInstancesResponse>;
    /**
     * 列出用户所有的 Grafana 服务
     */
    DescribeGrafanaInstances(req: DescribeGrafanaInstancesRequest, cb?: (error: string, rep: DescribeGrafanaInstancesResponse) => void): Promise<DescribeGrafanaInstancesResponse>;
    /**
     * 通过yaml的方式修改Prometheus聚合实例
     */
    ModifyPrometheusRecordRuleYaml(req: ModifyPrometheusRecordRuleYamlRequest, cb?: (error: string, rep: ModifyPrometheusRecordRuleYamlResponse) => void): Promise<ModifyPrometheusRecordRuleYamlResponse>;
    /**
     * 更新 Grafana 配置
     */
    UpdateGrafanaConfig(req: UpdateGrafanaConfigRequest, cb?: (error: string, rep: UpdateGrafanaConfigResponse) => void): Promise<UpdateGrafanaConfigResponse>;
    /**
     * 列出 Grafana 告警通道
     */
    DescribeGrafanaNotificationChannels(req: DescribeGrafanaNotificationChannelsRequest, cb?: (error: string, rep: DescribeGrafanaNotificationChannelsResponse) => void): Promise<DescribeGrafanaNotificationChannelsResponse>;
    /**
     * 修改被关联集群的external labels
     */
    ModifyPrometheusAgentExternalLabels(req: ModifyPrometheusAgentExternalLabelsRequest, cb?: (error: string, rep: ModifyPrometheusAgentExternalLabelsResponse) => void): Promise<ModifyPrometheusAgentExternalLabelsResponse>;
    /**
     * 更新策略组
     */
    ModifyPolicyGroup(req: ModifyPolicyGroupRequest, cb?: (error: string, rep: ModifyPolicyGroupResponse) => void): Promise<ModifyPolicyGroupResponse>;
    /**
     * 获取平台事件列表
     */
    DescribeAccidentEventList(req: DescribeAccidentEventListRequest, cb?: (error: string, rep: DescribeAccidentEventListResponse) => void): Promise<DescribeAccidentEventListResponse>;
    /**
     * 获取模板关联实例信息，针对V2版本实例
     */
    DescribePrometheusTempSync(req: DescribePrometheusTempSyncRequest, cb?: (error: string, rep: DescribePrometheusTempSyncResponse) => void): Promise<DescribePrometheusTempSyncResponse>;
    /**
     * 列出 Prometheus 服务可用区
     */
    DescribePrometheusZones(req: DescribePrometheusZonesRequest, cb?: (error: string, rep: DescribePrometheusZonesResponse) => void): Promise<DescribePrometheusZonesResponse>;
    /**
     * 查询告警指标列表
     */
    DescribeAlarmMetrics(req: DescribeAlarmMetricsRequest, cb?: (error: string, rep: DescribeAlarmMetricsResponse) => void): Promise<DescribeAlarmMetricsResponse>;
    /**
     * 修改告警策略的触发任务，TriggerTasks字段放触发任务列表，TriggerTasks传空数组时，代表解绑该策略的所有触发任务。
     */
    ModifyAlarmPolicyTasks(req: ModifyAlarmPolicyTasksRequest, cb?: (error: string, rep: ModifyAlarmPolicyTasksResponse) => void): Promise<ModifyAlarmPolicyTasksResponse>;
    /**
     * 删除 exporter 集成
     */
    DeleteExporterIntegration(req: DeleteExporterIntegrationRequest, cb?: (error: string, rep: DeleteExporterIntegrationResponse) => void): Promise<DeleteExporterIntegrationResponse>;
    /**
     * 删除2.0实例告警策略
     */
    DeletePrometheusAlertPolicy(req: DeletePrometheusAlertPolicyRequest, cb?: (error: string, rep: DeletePrometheusAlertPolicyResponse) => void): Promise<DeletePrometheusAlertPolicyResponse>;
    /**
     * 更新 Prometheus CVM Agent 状态
     */
    UpdatePrometheusAgentStatus(req: UpdatePrometheusAgentStatusRequest, cb?: (error: string, rep: UpdatePrometheusAgentStatusResponse) => void): Promise<UpdatePrometheusAgentStatusResponse>;
    /**
     * 创建 Prometheus 的预聚合规则
     */
    CreateRecordingRule(req: CreateRecordingRuleRequest, cb?: (error: string, rep: CreateRecordingRuleResponse) => void): Promise<CreateRecordingRuleResponse>;
    /**
     * Prometheus 报警规则查询接口
     */
    DescribeAlertRules(req: DescribeAlertRulesRequest, cb?: (error: string, rep: DescribeAlertRulesResponse) => void): Promise<DescribeAlertRulesResponse>;
    /**
     * 获得实例级别抓取配置
     */
    DescribePrometheusGlobalConfig(req: DescribePrometheusGlobalConfigRequest, cb?: (error: string, rep: DescribePrometheusGlobalConfigResponse) => void): Promise<DescribePrometheusGlobalConfigResponse>;
    /**
     * 列出 Prometheus CVM Agent
     */
    DescribePrometheusAgents(req: DescribePrometheusAgentsRequest, cb?: (error: string, rep: DescribePrometheusAgentsResponse) => void): Promise<DescribePrometheusAgentsResponse>;
    /**
     * 查询告警策略列表
     */
    DescribeAlarmPolicies(req: DescribeAlarmPoliciesRequest, cb?: (error: string, rep: DescribeAlarmPoliciesResponse) => void): Promise<DescribeAlarmPoliciesResponse>;
    /**
     * 获取targets信息
     */
    DescribePrometheusTargetsTMP(req: DescribePrometheusTargetsTMPRequest, cb?: (error: string, rep: DescribePrometheusTargetsTMPResponse) => void): Promise<DescribePrometheusTargetsTMPResponse>;
    /**
     * 列出 Prometheus 服务所有可用的地域
     */
    DescribePrometheusRegions(req: DescribePrometheusRegionsRequest, cb?: (error: string, rep: DescribePrometheusRegionsResponse) => void): Promise<DescribePrometheusRegionsResponse>;
    /**
     * 列出 Grafana 白名单
     */
    DescribeGrafanaWhiteList(req: DescribeGrafanaWhiteListRequest, cb?: (error: string, rep: DescribeGrafanaWhiteListResponse) => void): Promise<DescribeGrafanaWhiteListResponse>;
    /**
     * 创建告警策略
     */
    CreatePrometheusAlertPolicy(req: CreatePrometheusAlertPolicyRequest, cb?: (error: string, rep: CreatePrometheusAlertPolicyResponse) => void): Promise<CreatePrometheusAlertPolicyResponse>;
    /**
     * 强制销毁 Grafana 实例
     */
    CleanGrafanaInstance(req: CleanGrafanaInstanceRequest, cb?: (error: string, rep: CleanGrafanaInstanceResponse) => void): Promise<CleanGrafanaInstanceResponse>;
    /**
     * 删除 Grafana Dashboard
     */
    UninstallGrafanaDashboard(req: UninstallGrafanaDashboardRequest, cb?: (error: string, rep: UninstallGrafanaDashboardResponse) => void): Promise<UninstallGrafanaDashboardResponse>;
    /**
     * 获取2.0实例告警策略列表
     */
    DescribePrometheusAlertPolicy(req: DescribePrometheusAlertPolicyRequest, cb?: (error: string, rep: DescribePrometheusAlertPolicyResponse) => void): Promise<DescribePrometheusAlertPolicyResponse>;
    /**
     * 获取基础策略告警组列表
     */
    DescribePolicyGroupList(req: DescribePolicyGroupListRequest, cb?: (error: string, rep: DescribePolicyGroupListResponse) => void): Promise<DescribePolicyGroupListResponse>;
    /**
     * 修改 Prometheus 实例相关属性
     */
    ModifyPrometheusInstanceAttributes(req: ModifyPrometheusInstanceAttributesRequest, cb?: (error: string, rep: ModifyPrometheusInstanceAttributesResponse) => void): Promise<ModifyPrometheusInstanceAttributesResponse>;
    /**
     * 删除告警策略
     */
    DeleteAlarmPolicy(req: DeleteAlarmPolicyRequest, cb?: (error: string, rep: DeleteAlarmPolicyResponse) => void): Promise<DeleteAlarmPolicyResponse>;
    /**
     * 获取云产品的监控数据。此接口不适用于拉取容器服务监控数据，如需拉取容器服务监控数据，请使用[根据维度条件查询监控数据](https://cloud.tencent.com/document/product/248/51845)接口。
传入产品的命名空间、对象维度描述和监控指标即可获得相应的监控数据。
接口调用限制：单请求最多可支持批量拉取10个实例的监控数据，单请求的数据点数限制为1440个。
若您需要调用的指标、对象较多，可能存在因限频出现拉取失败的情况，建议尽量将请求按时间维度均摊。

>?
>- 2022年9月1日起，腾讯云可观测平台开始对GetMonitorData接口计费。每个主账号每月可获得100万次免费请求额度，超过免费额度后如需继续调用接口需要开通 [API请求按量付费](https://buy.cloud.tencent.com/APIRequestBuy)。计费规则可查看[API计费文档](https://cloud.tencent.com/document/product/248/77914)。
     */
    GetMonitorData(req: GetMonitorDataRequest, cb?: (error: string, rep: GetMonitorDataResponse) => void): Promise<GetMonitorDataResponse>;
    /**
     * 更新 Grafana 的 DNS 配置
     */
    UpdateDNSConfig(req: UpdateDNSConfigRequest, cb?: (error: string, rep: UpdateDNSConfigResponse) => void): Promise<UpdateDNSConfigResponse>;
    /**
     * 列出在腾讯云容器服务下创建的 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    DescribeServiceDiscovery(req: DescribeServiceDiscoveryRequest, cb?: (error: string, rep: DescribeServiceDiscoveryResponse) => void): Promise<DescribeServiceDiscoveryResponse>;
    /**
     * 列出 Grafana 已安装的集成
     */
    DescribeGrafanaIntegrations(req: DescribeGrafanaIntegrationsRequest, cb?: (error: string, rep: DescribeGrafanaIntegrationsResponse) => void): Promise<DescribeGrafanaIntegrationsResponse>;
    /**
     * 拉取Prometheus配置
     */
    DescribePrometheusConfig(req: DescribePrometheusConfigRequest, cb?: (error: string, rep: DescribePrometheusConfigResponse) => void): Promise<DescribePrometheusConfigResponse>;
    /**
     * 获取基础策略组详情
     */
    DescribePolicyGroupInfo(req: DescribePolicyGroupInfoRequest, cb?: (error: string, rep: DescribePolicyGroupInfoResponse) => void): Promise<DescribePolicyGroupInfoResponse>;
    /**
     * 拉取Prometheus聚合规则yaml列表
     */
    DescribePrometheusRecordRuleYaml(req: DescribePrometheusRecordRuleYamlRequest, cb?: (error: string, rep: DescribePrometheusRecordRuleYamlResponse) => void): Promise<DescribePrometheusRecordRuleYamlResponse>;
    /**
     * 查询所有名字空间
     */
    DescribeAllNamespaces(req: DescribeAllNamespacesRequest, cb?: (error: string, rep: DescribeAllNamespacesResponse) => void): Promise<DescribeAllNamespacesResponse>;
    /**
     * 在腾讯云容器服务下创建 Prometheus 服务发现。
<p>注意：前提条件，已经通过 Prometheus 控制台集成了对应的腾讯云容器服务，具体请参考
<a href="https://cloud.tencent.com/document/product/248/48859" target="_blank">Agent 安装</a>。</p>
     */
    CreateServiceDiscovery(req: CreateServiceDiscoveryRequest, cb?: (error: string, rep: CreateServiceDiscoveryResponse) => void): Promise<CreateServiceDiscoveryResponse>;
    /**
     * 以Yaml的方式创建聚合规则
     */
    CreatePrometheusRecordRuleYaml(req: CreatePrometheusRecordRuleYamlRequest, cb?: (error: string, rep: CreatePrometheusRecordRuleYamlResponse) => void): Promise<CreatePrometheusRecordRuleYamlResponse>;
    /**
     * 删除一个云原生Prometheus配置模板
     */
    DeletePrometheusTemp(req: DeletePrometheusTempRequest, cb?: (error: string, rep: DeletePrometheusTempResponse) => void): Promise<DeletePrometheusTempResponse>;
    /**
     * 获取告警通知模板所有回调URL
     */
    DescribeAlarmNoticeCallbacks(req: DescribeAlarmNoticeCallbacksRequest, cb?: (error: string, rep: DescribeAlarmNoticeCallbacksResponse) => void): Promise<DescribeAlarmNoticeCallbacksResponse>;
    /**
     * 彻底删除 Prometheus 实例相关数据，给定的实例必须先被 Terminate
     */
    DestroyPrometheusInstance(req: DestroyPrometheusInstanceRequest, cb?: (error: string, rep: DestroyPrometheusInstanceResponse) => void): Promise<DestroyPrometheusInstanceResponse>;
    /**
     * 删除已安装的插件
     */
    UninstallGrafanaPlugins(req: UninstallGrafanaPluginsRequest, cb?: (error: string, rep: UninstallGrafanaPluginsResponse) => void): Promise<UninstallGrafanaPluginsResponse>;
    /**
     * 更新 Grafana 集成配置
     */
    UpdateGrafanaIntegration(req: UpdateGrafanaIntegrationRequest, cb?: (error: string, rep: UpdateGrafanaIntegrationResponse) => void): Promise<UpdateGrafanaIntegrationResponse>;
    /**
     * 增加策略组
     */
    CreatePolicyGroup(req: CreatePolicyGroupRequest, cb?: (error: string, rep: CreatePolicyGroupResponse) => void): Promise<CreatePolicyGroupResponse>;
    /**
     * 销毁按量 Prometheus 实例
     */
    TerminatePrometheusInstances(req: TerminatePrometheusInstancesRequest, cb?: (error: string, rep: TerminatePrometheusInstancesResponse) => void): Promise<TerminatePrometheusInstancesResponse>;
    /**
     * 获取与 Prometheus 监控融合实例列表
     */
    DescribePrometheusInstancesOverview(req: DescribePrometheusInstancesOverviewRequest, cb?: (error: string, rep: DescribePrometheusInstancesOverviewResponse) => void): Promise<DescribePrometheusInstancesOverviewResponse>;
    /**
     * 解除模板同步，这将会删除目标中该模板所生产的配置，针对V2版本实例
     */
    DeletePrometheusTempSync(req: DeletePrometheusTempSyncRequest, cb?: (error: string, rep: DeletePrometheusTempSyncResponse) => void): Promise<DeletePrometheusTempSyncResponse>;
    /**
     * 创建prometheus配置
     */
    CreatePrometheusConfig(req: CreatePrometheusConfigRequest, cb?: (error: string, rep: CreatePrometheusConfigResponse) => void): Promise<CreatePrometheusConfigResponse>;
    /**
     * 列出可安装的所有 Grafana 插件
     */
    DescribePluginOverviews(req?: DescribePluginOverviewsRequest, cb?: (error: string, rep: DescribePluginOverviewsResponse) => void): Promise<DescribePluginOverviewsResponse>;
    /**
     * 获取prom实例中集群详细的关联状态
     */
    DescribeClusterAgentCreatingProgress(req?: DescribeClusterAgentCreatingProgressRequest, cb?: (error: string, rep: DescribeClusterAgentCreatingProgressResponse) => void): Promise<DescribeClusterAgentCreatingProgressResponse>;
    /**
     * 根据条件查询 Prometheus 预聚合规则
     */
    DescribeRecordingRules(req: DescribeRecordingRulesRequest, cb?: (error: string, rep: DescribeRecordingRulesResponse) => void): Promise<DescribeRecordingRulesResponse>;
    /**
     * 修改prometheus配置，如果配置项不存在，则会新增
     */
    ModifyPrometheusConfig(req: ModifyPrometheusConfigRequest, cb?: (error: string, rep: ModifyPrometheusConfigResponse) => void): Promise<ModifyPrometheusConfigResponse>;
    /**
     * 获取单个告警策略详情
     */
    DescribeAlarmPolicy(req: DescribeAlarmPolicyRequest, cb?: (error: string, rep: DescribeAlarmPolicyResponse) => void): Promise<DescribeAlarmPolicyResponse>;
}
