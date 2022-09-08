/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  SchemaSpaceTimeSeries,
  RedisKeySpaceData,
  HealthReportTask,
  CreateDBDiagReportTaskRequest,
  TableSpaceTimeSeries,
  DescribeTopSpaceTablesRequest,
  ScoreItem,
  InstanceConfs,
  CreateSecurityAuditLogExportTaskRequest,
  DescribeDBDiagEventResponse,
  DescribeDBDiagEventsResponse,
  DescribeDBDiagReportTasksResponse,
  AddUserContactResponse,
  CancelKillTaskResponse,
  DescribeRedisTopBigKeysResponse,
  DescribeSqlTemplateRequest,
  DescribeTopSpaceSchemaTimeSeriesResponse,
  SlowLogTopSqlItem,
  DescribeNoPrimaryKeyTablesResponse,
  DiagHistoryEventItem,
  DescribeProxySessionKillTasksRequest,
  DescribeMySqlProcessListResponse,
  HealthStatus,
  DescribeTopSpaceTablesResponse,
  TaskInfo,
  ModifySqlFiltersResponse,
  KillMySqlThreadsResponse,
  CreateSchedulerMailProfileRequest,
  ContactItem,
  DescribeDBSpaceStatusRequest,
  TimeSlice,
  ModifyDiagDBInstanceConfRequest,
  DescribeSecurityAuditLogDownloadUrlsRequest,
  CreateDBDiagReportTaskResponse,
  CreateMailProfileResponse,
  DescribeSlowLogTimeSeriesStatsRequest,
  CancelKillTaskRequest,
  MySqlProcess,
  DescribeDBDiagHistoryRequest,
  CreateKillTaskResponse,
  DeleteSqlFiltersResponse,
  DescribeDBDiagEventsRequest,
  CreateDBDiagReportUrlResponse,
  CreateKillTaskRequest,
  SlowLogHost,
  CreateMailProfileRequest,
  MonitorFloatMetricSeriesData,
  MailConfiguration,
  VerifyUserAccountRequest,
  DescribeSlowLogUserHostStatsResponse,
  TableSpaceData,
  EventInfo,
  DescribeMailProfileRequest,
  DeleteSecurityAuditLogExportTasksResponse,
  KillMySqlThreadsRequest,
  DescribeSqlFiltersResponse,
  CreateDBDiagReportUrlRequest,
  DescribeSecurityAuditLogExportTasksResponse,
  DescribeRedisTopKeyPrefixListRequest,
  DescribeSqlTemplateResponse,
  HealthScoreInfo,
  DescribeTopSpaceTableTimeSeriesResponse,
  DescribeDBDiagHistoryResponse,
  DescribeDBDiagEventRequest,
  ModifySqlFiltersRequest,
  DescribeAllUserContactResponse,
  MonitorMetric,
  ProfileInfo,
  UserProfile,
  AddUserContactRequest,
  CreateSqlFilterRequest,
  InstanceBasicInfo,
  SchemaSpaceData,
  DescribeAllUserContactRequest,
  DescribeDiagDBInstancesRequest,
  DescribeNoPrimaryKeyTablesRequest,
  InstanceInfo,
  CreateSqlFilterResponse,
  VerifyUserAccountResponse,
  DescribeSqlFiltersRequest,
  DescribeSecurityAuditLogExportTasksRequest,
  DeleteSecurityAuditLogExportTasksRequest,
  CreateSchedulerMailProfileResponse,
  DescribeTopSpaceSchemaTimeSeriesRequest,
  DescribeSlowLogTopSqlsRequest,
  DescribeMailProfileResponse,
  DescribeRedisTopBigKeysRequest,
  DescribeHealthScoreRequest,
  IssueTypeInfo,
  DescribeDiagDBInstancesResponse,
  DescribeAllUserGroupRequest,
  CreateProxySessionKillTaskRequest,
  CreateSecurityAuditLogExportTaskResponse,
  SchemaItem,
  DescribeSlowLogUserHostStatsRequest,
  DescribeTopSpaceSchemasResponse,
  CreateProxySessionKillTaskResponse,
  DescribeSlowLogTimeSeriesStatsResponse,
  MonitorFloatMetric,
  DescribeRedisTopKeyPrefixListResponse,
  DescribeAllUserGroupResponse,
  ModifyDiagDBInstanceConfResponse,
  DescribeUserSqlAdviceResponse,
  DescribeDBSpaceStatusResponse,
  SQLFilter,
  GroupItem,
  RedisPreKeySpaceData,
  DescribeTopSpaceTableTimeSeriesRequest,
  DescribeDBDiagReportTasksRequest,
  MonitorMetricSeriesData,
  SecLogExportTaskInfo,
  DescribeHealthScoreResponse,
  ScoreDetail,
  DescribeTopSpaceSchemasRequest,
  DescribeSlowLogTopSqlsResponse,
  DeleteSqlFiltersRequest,
  DescribeUserSqlAdviceRequest,
  Table,
  DescribeMySqlProcessListRequest,
  DescribeSecurityAuditLogDownloadUrlsResponse,
  DescribeProxySessionKillTasksResponse,
} from "./dbbrain_models"

/**
 * dbbrain client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dbbrain.tencentcloudapi.com", "2021-05-27", clientConfig)
  }

  /**
   * 查询安全审计日志导出文件下载链接。目前日志文件下载仅提供腾讯云内网地址，请通过广州地域的腾讯云服务器进行下载。
   */
  async DescribeSecurityAuditLogDownloadUrls(
    req: DescribeSecurityAuditLogDownloadUrlsRequest,
    cb?: (error: string, rep: DescribeSecurityAuditLogDownloadUrlsResponse) => void
  ): Promise<DescribeSecurityAuditLogDownloadUrlsResponse> {
    return this.request("DescribeSecurityAuditLogDownloadUrls", req, cb)
  }

  /**
   * 获取发送邮件的配置， 包括数据库巡检的邮件配置以及定期生成健康报告的邮件发送配置。
   */
  async DescribeMailProfile(
    req: DescribeMailProfileRequest,
    cb?: (error: string, rep: DescribeMailProfileResponse) => void
  ): Promise<DescribeMailProfileResponse> {
    return this.request("DescribeMailProfile", req, cb)
  }

  /**
   * 该接口用于创建定期生成健康报告并邮件发送的配置，将健康报告的定期生成时间作为参数传入（周一至周日），用于设置健康报告的定期生成时间，同时保存相应的定期邮件发送的配置。
   */
  async CreateSchedulerMailProfile(
    req: CreateSchedulerMailProfileRequest,
    cb?: (error: string, rep: CreateSchedulerMailProfileResponse) => void
  ): Promise<CreateSchedulerMailProfileResponse> {
    return this.request("CreateSchedulerMailProfile", req, cb)
  }

  /**
   * 查询SQL模板。
   */
  async DescribeSqlTemplate(
    req: DescribeSqlTemplateRequest,
    cb?: (error: string, rep: DescribeSqlTemplateResponse) => void
  ): Promise<DescribeSqlTemplateResponse> {
    return this.request("DescribeSqlTemplate", req, cb)
  }

  /**
   * 获取实例Top库的实时空间统计信息，默认返回按大小排序。
   */
  async DescribeTopSpaceSchemas(
    req: DescribeTopSpaceSchemasRequest,
    cb?: (error: string, rep: DescribeTopSpaceSchemasResponse) => void
  ): Promise<DescribeTopSpaceSchemasResponse> {
    return this.request("DescribeTopSpaceSchemas", req, cb)
  }

  /**
   * 查询关系型数据库的实时线程列表。
   */
  async DescribeMySqlProcessList(
    req: DescribeMySqlProcessListRequest,
    cb?: (error: string, rep: DescribeMySqlProcessListResponse) => void
  ): Promise<DescribeMySqlProcessListResponse> {
    return this.request("DescribeMySqlProcessList", req, cb)
  }

  /**
   * 创建邮件配置。其中入参ProfileType表示所创建配置的类型，ProfileType 取值包括：dbScan_mail_configuration（数据库巡检邮件配置）、scheduler_mail_configuration（定期生成健康报告的邮件发送配置）。Region统一选择广州，和实例所属地域无关。
   */
  async CreateMailProfile(
    req: CreateMailProfileRequest,
    cb?: (error: string, rep: CreateMailProfileResponse) => void
  ): Promise<CreateMailProfileResponse> {
    return this.request("CreateMailProfile", req, cb)
  }

  /**
   * 查询健康报告生成任务列表。
   */
  async DescribeDBDiagReportTasks(
    req: DescribeDBDiagReportTasksRequest,
    cb?: (error: string, rep: DescribeDBDiagReportTasksResponse) => void
  ): Promise<DescribeDBDiagReportTasksResponse> {
    return this.request("DescribeDBDiagReportTasks", req, cb)
  }

  /**
   * 获取邮件发送联系组的相关信息。
   */
  async DescribeAllUserGroup(
    req: DescribeAllUserGroupRequest,
    cb?: (error: string, rep: DescribeAllUserGroupResponse) => void
  ): Promise<DescribeAllUserGroupResponse> {
    return this.request("DescribeAllUserGroup", req, cb)
  }

  /**
   * 获取指定时间段内的诊断事件列表，支持依据风险等级、实例ID等条件过滤。
   */
  async DescribeDBDiagEvents(
    req: DescribeDBDiagEventsRequest,
    cb?: (error: string, rep: DescribeDBDiagEventsResponse) => void
  ): Promise<DescribeDBDiagEventsResponse> {
    return this.request("DescribeDBDiagEvents", req, cb)
  }

  /**
   * 获取慢日志统计柱状图。
   */
  async DescribeSlowLogTimeSeriesStats(
    req: DescribeSlowLogTimeSeriesStatsRequest,
    cb?: (error: string, rep: DescribeSlowLogTimeSeriesStatsResponse) => void
  ): Promise<DescribeSlowLogTimeSeriesStatsResponse> {
    return this.request("DescribeSlowLogTimeSeriesStats", req, cb)
  }

  /**
   * 获取慢日志来源地址统计分布图。
   */
  async DescribeSlowLogUserHostStats(
    req: DescribeSlowLogUserHostStatsRequest,
    cb?: (error: string, rep: DescribeSlowLogUserHostStatsResponse) => void
  ): Promise<DescribeSlowLogUserHostStatsResponse> {
    return this.request("DescribeSlowLogUserHostStats", req, cb)
  }

  /**
   * 按照Sql模板+schema的聚合方式，统计排序指定时间段内的top慢sql。
   */
  async DescribeSlowLogTopSqls(
    req: DescribeSlowLogTopSqlsRequest,
    cb?: (error: string, rep: DescribeSlowLogTopSqlsResponse) => void
  ): Promise<DescribeSlowLogTopSqlsResponse> {
    return this.request("DescribeSlowLogTopSqls", req, cb)
  }

  /**
   * 创建实例SQL限流任务。
   */
  async CreateSqlFilter(
    req: CreateSqlFilterRequest,
    cb?: (error: string, rep: CreateSqlFilterResponse) => void
  ): Promise<CreateSqlFilterResponse> {
    return this.request("CreateSqlFilter", req, cb)
  }

  /**
   * 获取指定时间段内的实例空间使用概览，包括磁盘增长量(MB)、磁盘剩余(MB)、磁盘总量(MB)及预计可用天数。
   */
  async DescribeDBSpaceStatus(
    req: DescribeDBSpaceStatusRequest,
    cb?: (error: string, rep: DescribeDBSpaceStatusResponse) => void
  ): Promise<DescribeDBSpaceStatusResponse> {
    return this.request("DescribeDBSpaceStatus", req, cb)
  }

  /**
   * 创建中止所有代理节点连接会话的异步任务。当前仅支持 Redis。得到的返回值为异步任务 id，可以作为参数传入接口 DescribeProxySessionKillTasks 查询kill会话任务执行状态。
   */
  async CreateProxySessionKillTask(
    req: CreateProxySessionKillTaskRequest,
    cb?: (error: string, rep: CreateProxySessionKillTaskResponse) => void
  ): Promise<CreateProxySessionKillTaskResponse> {
    return this.request("CreateProxySessionKillTask", req, cb)
  }

  /**
   * 根据实例ID获取指定时间段（30分钟）的健康得分，以及异常扣分项。
   */
  async DescribeHealthScore(
    req: DescribeHealthScoreRequest,
    cb?: (error: string, rep: DescribeHealthScoreResponse) => void
  ): Promise<DescribeHealthScoreResponse> {
    return this.request("DescribeHealthScore", req, cb)
  }

  /**
   * 终止中断会话任务。
   */
  async CancelKillTask(
    req: CancelKillTaskRequest,
    cb?: (error: string, rep: CancelKillTaskResponse) => void
  ): Promise<CancelKillTaskResponse> {
    return this.request("CancelKillTask", req, cb)
  }

  /**
   * 创建安全审计日志导出任务。
   */
  async CreateSecurityAuditLogExportTask(
    req: CreateSecurityAuditLogExportTaskRequest,
    cb?: (error: string, rep: CreateSecurityAuditLogExportTaskResponse) => void
  ): Promise<CreateSecurityAuditLogExportTaskResponse> {
    return this.request("CreateSecurityAuditLogExportTask", req, cb)
  }

  /**
   * 获取SQL优化建议。【产品用户回馈，此接口限免开放，后续将并入dbbrain专业版】
   */
  async DescribeUserSqlAdvice(
    req: DescribeUserSqlAdviceRequest,
    cb?: (error: string, rep: DescribeUserSqlAdviceResponse) => void
  ): Promise<DescribeUserSqlAdviceResponse> {
    return this.request("DescribeUserSqlAdvice", req, cb)
  }

  /**
   * 删除安全审计日志导出任务。
   */
  async DeleteSecurityAuditLogExportTasks(
    req: DeleteSecurityAuditLogExportTasksRequest,
    cb?: (error: string, rep: DeleteSecurityAuditLogExportTasksResponse) => void
  ): Promise<DeleteSecurityAuditLogExportTasksResponse> {
    return this.request("DeleteSecurityAuditLogExportTasks", req, cb)
  }

  /**
   * 更改实例限流任务状态，目前仅用于终止限流。
   */
  async ModifySqlFilters(
    req: ModifySqlFiltersRequest,
    cb?: (error: string, rep: ModifySqlFiltersResponse) => void
  ): Promise<ModifySqlFiltersResponse> {
    return this.request("ModifySqlFilters", req, cb)
  }

  /**
   * 查询redis实例大key列表。
   */
  async DescribeRedisTopBigKeys(
    req: DescribeRedisTopBigKeysRequest,
    cb?: (error: string, rep: DescribeRedisTopBigKeysResponse) => void
  ): Promise<DescribeRedisTopBigKeysResponse> {
    return this.request("DescribeRedisTopBigKeys", req, cb)
  }

  /**
   * 查询安全审计日志导出任务列表。
   */
  async DescribeSecurityAuditLogExportTasks(
    req: DescribeSecurityAuditLogExportTasksRequest,
    cb?: (error: string, rep: DescribeSecurityAuditLogExportTasksResponse) => void
  ): Promise<DescribeSecurityAuditLogExportTasksResponse> {
    return this.request("DescribeSecurityAuditLogExportTasks", req, cb)
  }

  /**
   * 获取邮件发送中联系人的相关信息。
   */
  async DescribeAllUserContact(
    req: DescribeAllUserContactRequest,
    cb?: (error: string, rep: DescribeAllUserContactResponse) => void
  ): Promise<DescribeAllUserContactResponse> {
    return this.request("DescribeAllUserContact", req, cb)
  }

  /**
   * 获取实例异常诊断事件的详情信息。
   */
  async DescribeDBDiagEvent(
    req: DescribeDBDiagEventRequest,
    cb?: (error: string, rep: DescribeDBDiagEventResponse) => void
  ): Promise<DescribeDBDiagEventResponse> {
    return this.request("DescribeDBDiagEvent", req, cb)
  }

  /**
   * 获取实例诊断事件的列表。
   */
  async DescribeDBDiagHistory(
    req: DescribeDBDiagHistoryRequest,
    cb?: (error: string, rep: DescribeDBDiagHistoryResponse) => void
  ): Promise<DescribeDBDiagHistoryResponse> {
    return this.request("DescribeDBDiagHistory", req, cb)
  }

  /**
   * 查询redis实例top key前缀列表。
   */
  async DescribeRedisTopKeyPrefixList(
    req: DescribeRedisTopKeyPrefixListRequest,
    cb?: (error: string, rep: DescribeRedisTopKeyPrefixListResponse) => void
  ): Promise<DescribeRedisTopKeyPrefixListResponse> {
    return this.request("DescribeRedisTopKeyPrefixList", req, cb)
  }

  /**
   * 创建健康报告，并可以选择是否发送邮件。
   */
  async CreateDBDiagReportTask(
    req: CreateDBDiagReportTaskRequest,
    cb?: (error: string, rep: CreateDBDiagReportTaskResponse) => void
  ): Promise<CreateDBDiagReportTaskResponse> {
    return this.request("CreateDBDiagReportTask", req, cb)
  }

  /**
   * 获取实例信息列表。Region统一选择广州。
   */
  async DescribeDiagDBInstances(
    req: DescribeDiagDBInstancesRequest,
    cb?: (error: string, rep: DescribeDiagDBInstancesResponse) => void
  ): Promise<DescribeDiagDBInstancesResponse> {
    return this.request("DescribeDiagDBInstances", req, cb)
  }

  /**
   * 删除实例SQL限流任务。
   */
  async DeleteSqlFilters(
    req: DeleteSqlFiltersRequest,
    cb?: (error: string, rep: DeleteSqlFiltersResponse) => void
  ): Promise<DeleteSqlFiltersResponse> {
    return this.request("DeleteSqlFilters", req, cb)
  }

  /**
   * 添加邮件接收联系人的姓名， 邮件地址，返回值为添加成功的联系人id。
   */
  async AddUserContact(
    req: AddUserContactRequest,
    cb?: (error: string, rep: AddUserContactResponse) => void
  ): Promise<AddUserContactResponse> {
    return this.request("AddUserContact", req, cb)
  }

  /**
   * 获取实例占用空间最大的前几个库在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
   */
  async DescribeTopSpaceSchemaTimeSeries(
    req: DescribeTopSpaceSchemaTimeSeriesRequest,
    cb?: (error: string, rep: DescribeTopSpaceSchemaTimeSeriesResponse) => void
  ): Promise<DescribeTopSpaceSchemaTimeSeriesResponse> {
    return this.request("DescribeTopSpaceSchemaTimeSeries", req, cb)
  }

  /**
   * 创建中断会话的任务。
   */
  async CreateKillTask(
    req: CreateKillTaskRequest,
    cb?: (error: string, rep: CreateKillTaskResponse) => void
  ): Promise<CreateKillTaskResponse> {
    return this.request("CreateKillTask", req, cb)
  }

  /**
   * 查询实例无主键表。
   */
  async DescribeNoPrimaryKeyTables(
    req: DescribeNoPrimaryKeyTablesRequest,
    cb?: (error: string, rep: DescribeNoPrimaryKeyTablesResponse) => void
  ): Promise<DescribeNoPrimaryKeyTablesResponse> {
    return this.request("DescribeNoPrimaryKeyTables", req, cb)
  }

  /**
   * 获取实例Top表的实时空间统计信息，默认返回按大小排序。
   */
  async DescribeTopSpaceTables(
    req: DescribeTopSpaceTablesRequest,
    cb?: (error: string, rep: DescribeTopSpaceTablesResponse) => void
  ): Promise<DescribeTopSpaceTablesResponse> {
    return this.request("DescribeTopSpaceTables", req, cb)
  }

  /**
   * 查询实例SQL限流任务列表。
   */
  async DescribeSqlFilters(
    req: DescribeSqlFiltersRequest,
    cb?: (error: string, rep: DescribeSqlFiltersResponse) => void
  ): Promise<DescribeSqlFiltersResponse> {
    return this.request("DescribeSqlFilters", req, cb)
  }

  /**
   * 获取实例占用空间最大的前几张表在指定时间段内的每日由DBbrain定时采集的空间数据，默认返回按大小排序。
   */
  async DescribeTopSpaceTableTimeSeries(
    req: DescribeTopSpaceTableTimeSeriesRequest,
    cb?: (error: string, rep: DescribeTopSpaceTableTimeSeriesResponse) => void
  ): Promise<DescribeTopSpaceTableTimeSeriesResponse> {
    return this.request("DescribeTopSpaceTableTimeSeries", req, cb)
  }

  /**
   * 修改实例巡检开关。
   */
  async ModifyDiagDBInstanceConf(
    req: ModifyDiagDBInstanceConfRequest,
    cb?: (error: string, rep: ModifyDiagDBInstanceConfResponse) => void
  ): Promise<ModifyDiagDBInstanceConfResponse> {
    return this.request("ModifyDiagDBInstanceConf", req, cb)
  }

  /**
   * 根据会话ID中断当前会话，该接口分为两次提交：第一次为预提交阶段，Stage为"Prepare"，得到的返回值包含SqlExecId；第二次为确认提交， Stage为"Commit"， 将SqlExecId的值作为参数传入，最终终止会话进程。
   */
  async KillMySqlThreads(
    req: KillMySqlThreadsRequest,
    cb?: (error: string, rep: KillMySqlThreadsResponse) => void
  ): Promise<KillMySqlThreadsResponse> {
    return this.request("KillMySqlThreads", req, cb)
  }

  /**
   * 创建健康报告的浏览地址。
   */
  async CreateDBDiagReportUrl(
    req: CreateDBDiagReportUrlRequest,
    cb?: (error: string, rep: CreateDBDiagReportUrlResponse) => void
  ): Promise<CreateDBDiagReportUrlResponse> {
    return this.request("CreateDBDiagReportUrl", req, cb)
  }

  /**
   * 验证用户数据库账号权限，获取会话token。
   */
  async VerifyUserAccount(
    req: VerifyUserAccountRequest,
    cb?: (error: string, rep: VerifyUserAccountResponse) => void
  ): Promise<VerifyUserAccountResponse> {
    return this.request("VerifyUserAccount", req, cb)
  }

  /**
   * 用于查询 redis 执行 kill 会话任务后代理节点的执行结果，入参异步任务 ID 从接口 CreateProxySessionKillTask 调用成功后取得。当前 product 只支持：redis。
   */
  async DescribeProxySessionKillTasks(
    req: DescribeProxySessionKillTasksRequest,
    cb?: (error: string, rep: DescribeProxySessionKillTasksResponse) => void
  ): Promise<DescribeProxySessionKillTasksResponse> {
    return this.request("DescribeProxySessionKillTasks", req, cb)
  }
}
