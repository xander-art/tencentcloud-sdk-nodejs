/**
 * DescribeInstanceUsedSubnets返回参数结构体
 */
export interface DescribeInstanceUsedSubnetsResponse {
    /**
     * 集群使用的vpc信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 集群使用的subnet信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UsedSubnets?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceNodes返回参数结构体
 */
export interface DescribeInstanceNodesResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 实例节点总数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceNodesList?: Array<InstanceNode>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeClusterConfigsHistory返回参数结构体
 */
export interface DescribeClusterConfigsHistoryResponse {
    /**
     * 实例总数
     */
    TotalCount?: number;
    /**
     * 配置文件修改历史
     */
    ClusterConfHistory?: Array<ClusterConfigsHistory>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceOperations请求参数结构体
 */
export interface DescribeInstanceOperationsRequest {
    /**
     * 集群ID
     */
    InstanceId: string;
    /**
     * 分页参数，偏移量，从0开始
     */
    Offset?: number;
    /**
     * 分页参数，每页数目，默认为10
     */
    Limit?: number;
    /**
     * 开始时间
     */
    StartTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
}
/**
 * DescribeClusterConfigs返回参数结构体
 */
export interface DescribeClusterConfigsResponse {
    /**
     * 返回实例的配置文件相关的信息
     */
    ClusterConfList?: Array<ClusterConfigsInfoFromEMR>;
    /**
     * 返回当前内核版本 如果不存在则返回空字符串
     */
    BuildVersion?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ScaleOutInstance返回参数结构体
 */
export interface ScaleOutInstanceResponse {
    /**
     * 流程ID
     */
    FlowId?: string;
    /**
     * 集群ID
     */
    InstanceId?: string;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyUserPrivilegesV3返回参数结构体
 */
export interface ModifyUserPrivilegesV3Response {
    /**
     * 错误信息，为空就是没有错误
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 集群id
     */
    InstanceId?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyUserPrivilegesV3请求参数结构体
 */
export interface ModifyUserPrivilegesV3Request {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 用户名
     */
    UserName: string;
    /**
     * 用户权限
     */
    UserPrivileges: UpdateUserPrivileges;
    /**
     * 用户链接来自的 IP
     */
    WhiteHost?: string;
}
/**
 * DestroyInstance请求参数结构体
 */
export interface DestroyInstanceRequest {
    /**
     * 集群ID
     */
    InstanceId: string;
}
/**
 * 资源组绑定的用户信息，需要username和host信息进行授权
 */
export interface BindUser {
    /**
     * 用户名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * 主机信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Host?: string;
}
/**
 * CancelBackupJob请求参数结构体
 */
export interface CancelBackupJobRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 需要取消的备份实例id
     */
    BackUpJobId?: number;
}
/**
 * ModifyWorkloadGroup请求参数结构体
 */
export interface ModifyWorkloadGroupRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 修改的资源组信息
     */
    WorkloadGroup?: WorkloadGroupConfig;
}
/**
 * 用户绑定资源组信息
 */
export interface UserWorkloadGroup {
    /**
     * test
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserName?: string;
    /**
     * normal
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkloadGroupName?: string;
}
/**
 * DescribeSlowQueryRecordsDownload返回参数结构体
 */
export interface DescribeSlowQueryRecordsDownloadResponse {
    /**
     * cos地址
     */
    CosUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteWorkloadGroup请求参数结构体
 */
export interface DeleteWorkloadGroupRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 需要删除的资源组名称
     */
    WorkloadGroupName?: string;
}
/**
 * 资源组相关配置
 */
export interface WorkloadGroupConfig {
    /**
     * 资源组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    WorkloadGroupName?: string;
    /**
     * CPU权重
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuShare?: number;
    /**
     * 内存限制，所有资源组的内存限制值之和应该小于等于100
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemoryLimit?: number;
    /**
     * 是否允许超配分配
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableMemoryOverCommit?: boolean;
    /**
     * cpu硬限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CpuHardLimit?: string;
}
/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
    /**
     * 实例总数
     */
    TotalCount?: number;
    /**
     * 实例数组
     */
    InstancesList?: Array<InstanceInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 客户提供cos认证信息。
 */
export interface CosSourceInfo {
    /**
     * cos认证中的Id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretId?: string;
    /**
     * cos认证中的key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SecretKey?: string;
    /**
     * cos认证中的路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosPath?: string;
}
/**
 * ReduceInstance返回参数结构体
 */
export interface ReduceInstanceResponse {
    /**
     * 流程ID
     */
    FlowId?: string;
    /**
     * 集群ID
     */
    InstanceId?: string;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyCoolDownPolicy请求参数结构体
 */
export interface ModifyCoolDownPolicyRequest {
    /**
     * 集群id
     */
    InstanceId?: string;
    /**
     * 策略名称
     */
    PolicyName?: string;
    /**
     * cooldown_ttl
     */
    CoolDownTtl?: string;
    /**
     * cooldown_datetime
     */
    CoolDownDatetime?: string;
}
/**
 * DescribeBackUpTaskDetail请求参数结构体
 */
export interface DescribeBackUpTaskDetailRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 任务id
     */
    BackUpJobId: number;
}
/**
 * RecoverBackUpJob请求参数结构体
 */
export interface RecoverBackUpJobRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 任务id
     */
    BackUpJobId: number;
    /**
     * 恢复出来的新表副本数
     */
    ReplicationNum?: number;
    /**
     * 恢复是否保持源表中的配置，1时表示保留源表中的配置
     */
    ReserveSourceConfig?: number;
    /**
     * 0默认 1cos恢复
     */
    RecoverType?: number;
    /**
     * CosSourceInfo对象
     */
    CosSourceInfo?: CosSourceInfo;
    /**
     * 0默认 1定期执行
     */
    ScheduleType?: number;
    /**
     * 年-月-日 时:分:秒
     */
    NextTime?: string;
    /**
     * 调度名称
     */
    ScheduleName?: string;
    /**
     * create update
     */
    OperationType?: string;
    /**
     * 恢复粒度：All全量、Database按库、Table按表
     */
    RecoverScope?: string;
    /**
     * 恢复库：如果是按库备份，则需要该字段，库之间用","分割
     */
    RecoverDatabase?: string;
}
/**
 * 磁盘规格描述
 */
export interface DiskSpec {
    /**
     * 磁盘类型，例如“CLOUD_SSD", "LOCAL_SSD"等
     */
    DiskType: string;
    /**
     * 磁盘类型说明，例如"云SSD", "本地SSD"等
     */
    DiskDesc: string;
    /**
     * 磁盘最小规格大小，单位G
     */
    MinDiskSize: number;
    /**
     * 磁盘最大规格大小，单位G
     */
    MaxDiskSize: number;
    /**
     * 磁盘数目
     */
    DiskCount: number;
}
/**
 * DescribeInstanceOperations返回参数结构体
 */
export interface DescribeInstanceOperationsResponse {
    /**
     * 操作记录总数
     */
    TotalCount: number;
    /**
     * 操作记录具体数据
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operations: Array<InstanceOperation>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeUserBindWorkloadGroup返回参数结构体
 */
export interface DescribeUserBindWorkloadGroupResponse {
    /**
     * 用户绑定资源组信息
     */
    UserBindInfos?: Array<UserWorkloadGroup>;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ScaleOutInstance请求参数结构体
 */
export interface ScaleOutInstanceRequest {
    /**
     * 集群ID
     */
    InstanceId: string;
    /**
     * 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE
     */
    Type: string;
    /**
     * 节点数量
     */
    NodeCount: number;
    /**
     * 扩容后集群高可用类型：0：非高可用，1：读高可用，2：读写高可用。
     */
    HaType?: number;
}
/**
 * 更新用户权限结构体
 */
export interface UpdateUserPrivileges {
    /**
     * 是否设置catalog权限
     */
    IsSetGlobalCatalog?: boolean;
}
/**
 * ModifyClusterConfigs请求参数结构体
 */
export interface ModifyClusterConfigsRequest {
    /**
     * 集群ID，例如cdwch-xxxx
     */
    InstanceId: string;
    /**
     * 配置文件修改信息
     */
    ModifyConfContext: Array<ConfigSubmitContext>;
    /**
     * 修改原因
     */
    Remark?: string;
}
/**
 * DescribeInstanceState请求参数结构体
 */
export interface DescribeInstanceStateRequest {
    /**
     * 集群实例名称
     */
    InstanceId: string;
}
/**
 * 网络信息
 */
export interface NetworkInfo {
    /**
     * 可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * 子网id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 当前子网可用ip数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetIpNum?: number;
}
/**
 * 可用区描述信息
 */
export interface ZoneInfo {
    /**
     * 可用区名称，例如"ap-guangzhou-1"
     */
    Name?: string;
    /**
     * 可用区描述信息，例如“广州一区”
     */
    Desc?: string;
    /**
     * 可用区唯一标记
     */
    ZoneId?: number;
    /**
     * Encryptid
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Encrypt?: number;
}
/**
 * DescribeAreaRegion返回参数结构体
 */
export interface DescribeAreaRegionResponse {
    /**
     * 地域列表
     */
    Items?: Array<RegionAreaInfo>;
    /**
     * 前端规则描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FrontEndRules?: Array<FrontEndRule>;
    /**
     * 返回可用的白名单名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AvailableWhiteListNames?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DeleteBackUpData请求参数结构体
 */
export interface DeleteBackUpDataRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 任务id
     */
    BackUpJobId?: number;
    /**
     * 是否删除所有数据
     */
    IsDeleteAll?: boolean;
}
/**
 * UpdateCoolDown返回参数结构体
 */
export interface UpdateCoolDownResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 返回配置的文件内容（key-value）
 */
export interface ConfigKeyValue {
    /**
     * key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    KeyName?: string;
    /**
     * 值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
    /**
     * 备注
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
    /**
     * 1-只读，2-可修改但不可删除，3-可删除
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Display?: number;
    /**
     * 0不支持 1支持热更新
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SupportHotUpdate?: number;
}
/**
 * 标签描述
 */
export interface Tag {
    /**
     * 标签的键
     */
    TagKey: string;
    /**
     * 标签的值
     */
    TagValue: string;
}
/**
 * ResizeDisk返回参数结构体
 */
export interface ResizeDiskResponse {
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 流程ID
     */
    FlowId?: string;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * OpenCoolDown请求参数结构体
 */
export interface OpenCoolDownRequest {
    /**
     * 集群id
     */
    InstanceId?: string;
}
/**
 * DescribeCoolDownTableData请求参数结构体
 */
export interface DescribeCoolDownTableDataRequest {
    /**
     * 集群id
     */
    InstanceId?: string;
    /**
     * 数据库名称
     */
    DatabaseName?: string;
}
/**
 * CheckCoolDownWorkingVariableConfigCorrect返回参数结构体
 */
export interface CheckCoolDownWorkingVariableConfigCorrectResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstance返回参数结构体
 */
export interface ModifyInstanceResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSlowQueryRecordsDownload请求参数结构体
 */
export interface DescribeSlowQueryRecordsDownloadRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 慢查询时间
     */
    QueryDurationMs: number;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 排序参数
     */
    DurationMs?: string;
    /**
     * 查询sql
     */
    Sql?: string;
    /**
     * 排序参数
     */
    ReadRows?: string;
    /**
     * 排序参数
     */
    ResultBytes?: string;
    /**
     * 排序参数
     */
    MemoryUsage?: string;
    /**
     * IsQuery条件
     */
    IsQuery?: number;
    /**
     * 数据库名称
     */
    DbName?: Array<string>;
    /**
     * catalog名称
     */
    CatalogName?: Array<string>;
}
/**
 * DescribeRestoreTaskDetail返回参数结构体
 */
export interface DescribeRestoreTaskDetailResponse {
    /**
     * 恢复任务进度详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RestoreStatus: Array<RestoreStatus>;
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNodeStatus请求参数结构体
 */
export interface ModifyNodeStatusRequest {
    /**
     * 集群ID，例如cdwch-xxxx
     */
    InstanceId: string;
    /**
     * 节点信息
     */
    NodeInfos: Array<NodeInfos>;
    /**
     * 节点操作
     */
    OperationCode: string;
    /**
     * 超时时间（秒）
     */
    RestartTimeOut?: string;
}
/**
 * RestartClusterForNode返回参数结构体
 */
export interface RestartClusterForNodeResponse {
    /**
     * 流程相关信息
     */
    FlowId?: number;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * CancelBackupJob返回参数结构体
 */
export interface CancelBackupJobResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeAreaRegion请求参数结构体
 */
export interface DescribeAreaRegionRequest {
    /**
     * 是否是国际站
     */
    IsInternationalSite?: boolean;
}
/**
 * 慢查询记录
 */
export interface SlowQueryRecord {
    /**
     * 查询用户
     */
    OsUser?: string;
    /**
     * 查询ID
     */
    InitialQueryId?: string;
    /**
     * SQL语句
     */
    Sql?: string;
    /**
     * 开始时间
     */
    QueryStartTime?: string;
    /**
     * 执行耗时
     */
    DurationMs?: number;
    /**
     * 读取行数
     */
    ReadRows?: number;
    /**
     * 读取字节数
     */
    ResultRows?: number;
    /**
     * 结果字节数
     */
    ResultBytes?: number;
    /**
     * 内存
     */
    MemoryUsage?: number;
    /**
     * 初始查询IP
     */
    InitialAddress?: string;
    /**
     * 数据库名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbName?: string;
    /**
     * 是否是查询，0：否，1：查询语句
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsQuery?: number;
    /**
     * ResultBytes的MB格式
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultBytesMB?: number;
    /**
     * MemoryUsage的MB表示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemoryUsageMB?: number;
    /**
     * DurationMs的秒表示
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DurationSec?: number;
}
/**
 * DescribeInstanceNodes请求参数结构体
 */
export interface DescribeInstanceNodesRequest {
    /**
     * 集群实例ID
     */
    InstanceId: string;
    /**
     * 集群角色类型，默认为 "data"数据节点
     */
    NodeRole?: string;
    /**
     * 分页参数，第一页为0，第二页为10
     */
    Offset?: number;
    /**
     * 分页参数，分页步长，默认为10
     */
    Limit?: number;
    /**
     * 展现策略，All时显示所有
     */
    DisplayPolicy?: string;
}
/**
 * 集群计费相关信息
 */
export interface ChargeProperties {
    /**
     * 计费类型，“PREPAID” 预付费，“POSTPAID_BY_HOUR” 后付费
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ChargeType?: string;
    /**
     * 是否自动续费，1表示自动续费开启
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: number;
    /**
     * 计费时间长度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeSpan?: number;
    /**
     * 计费时间单位，“m”表示月等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TimeUnit?: string;
}
/**
 * DescribeWorkloadGroup请求参数结构体
 */
export interface DescribeWorkloadGroupRequest {
    /**
     * 集群id
     */
    InstanceId: string;
}
/**
 * DescribeCoolDownBackends请求参数结构体
 */
export interface DescribeCoolDownBackendsRequest {
    /**
     * 集群id
     */
    InstanceId?: string;
}
/**
 * CheckCoolDownWorkingVariableConfigCorrect请求参数结构体
 */
export interface CheckCoolDownWorkingVariableConfigCorrectRequest {
    /**
     * 集群id
     */
    InstanceId?: string;
}
/**
 * 集群操作描述
 */
export interface InstanceOperation {
    /**
     * 操作名称，例如“create_instance"、“scaleout_instance”等
     */
    Name?: string;
    /**
     * 操作结果，“Success"表示成功，”Fail"表示失败
     */
    Result?: string;
    /**
     * 操作名称描述，例如“创建”，“修改集群名称”等
     */
    Desc?: string;
    /**
     * 操作级别，例如“Critical", "Normal"等
     */
    Level?: string;
    /**
     * 操作级别描述，例如“高危”，“一般”等
     */
    LevelDesc?: string;
    /**
     * 操作开始时间
     */
    StartTime?: string;
    /**
     * 操作结束时间
     */
    EndTime?: string;
    /**
     * 操作结果描述，例如“成功”，“失败”
     */
    ResultDesc?: string;
    /**
     * 操作用户ID
     */
    OperateUin?: string;
    /**
     * 操作对应的jobid
     */
    JobId?: number;
    /**
     * 操作明细
     */
    OperationDetail?: string;
}
/**
 * 备份表信息
 */
export interface BackupTableContent {
    /**
     * 数据库
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Database: string;
    /**
     * 表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Table: string;
    /**
     * 表总字节数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalBytes: number;
    /**
     * 表单个副本的大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SingleReplicaBytes?: string;
    /**
     * 备份状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupStatus?: number;
    /**
     * 备份的错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupErrorMsg?: string;
    /**
     * 改库表是否绑定降冷策略
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsOpenCoolDown?: boolean;
}
/**
 * CreateInstanceNew返回参数结构体
 */
export interface CreateInstanceNewResponse {
    /**
     * 流程ID
     */
    FlowId?: string;
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSqlApis请求参数结构体
 */
export interface DescribeSqlApisRequest {
    /**
     * 用户链接来自的 IP
     */
    WhiteHost?: string;
    /**
     * catalog名称
     */
    Catalog?: string;
    /**
     * catalog集合
     */
    Catalogs?: Array<string>;
}
/**
 * ModifySecurityGroups请求参数结构体
 */
export interface ModifySecurityGroupsRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 修改前的安全组信息
     */
    OldSecurityGroupIds?: Array<string>;
    /**
     * 修改后的安全组信息
     */
    ModifySecurityGroupIds?: Array<string>;
}
/**
 * CreateInstanceNew请求参数结构体
 */
export interface CreateInstanceNewRequest {
    /**
     * 可用区
     */
    Zone: string;
    /**
     * FE规格
     */
    FeSpec: CreateInstanceSpec;
    /**
     * BE规格
     */
    BeSpec: CreateInstanceSpec;
    /**
     * 是否高可用
     */
    HaFlag: boolean;
    /**
     * 用户VPCID
     */
    UserVPCId: string;
    /**
     * 用户子网ID
     */
    UserSubnetId: string;
    /**
     * 产品版本号
     */
    ProductVersion: string;
    /**
     * 付费类型
     */
    ChargeProperties: ChargeProperties;
    /**
     * 实例名字
     */
    InstanceName: string;
    /**
     * 数据库密码
     */
    DorisUserPwd: string;
    /**
     * 标签列表
     */
    Tags?: Array<Tag>;
    /**
     * 高可用类型：
  0：非高可用（只有1个FE，FeSpec.CreateInstanceSpec.Count=1），
  1：读高可用（至少需部署3个FE，FeSpec.CreateInstanceSpec.Count>=3，且为奇数），
  2：读写高可用（至少需部署5个FE，FeSpec.CreateInstanceSpec.Count>=5，且为奇数）。
     */
    HaType?: number;
    /**
     * 表名大小写是否敏感，0：敏感；1：不敏感，以小写进行比较；2：不敏感，表名改为以小写存储
     */
    CaseSensitive?: number;
    /**
     * 是否开启多可用区
     */
    EnableMultiZones?: boolean;
    /**
     * 开启多可用区后，用户的所有可用区和子网信息
     */
    UserMultiZoneInfos?: NetworkInfo;
}
/**
 * UpdateCoolDown请求参数结构体
 */
export interface UpdateCoolDownRequest {
    /**
     * 集群id
     */
    InstanceId?: string;
    /**
     * 是否启用 0：不启用 1：启用
     */
    Enable?: number;
    /**
     * 用户存放冷热分层数据Cos桶地址
     */
    Bucket?: string;
}
/**
 * 冷热分层策略
 */
export interface CoolDownPolicyInfo {
    /**
     * 策略名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PolicyName?: string;
    /**
     * cooldown_ttl
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CooldownDatetime?: string;
    /**
     * cooldown_datetime
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CooldownTtl?: string;
}
/**
 * OpenCoolDownPolicy请求参数结构体
 */
export interface OpenCoolDownPolicyRequest {
    /**
     * 实例id
     */
    InstanceId?: string;
    /**
     * db名称
     */
    DatabaseName?: string;
    /**
     * table名称
     */
    TableName?: string;
    /**
     * 操作类型
     */
    OperationType?: string;
    /**
     * 逗号分隔 需要带上db的名字 db1.tb1,db1.tb2,db2.tb1
     */
    BatchOpenCoolDownTables?: string;
    /**
     * 绑定的时候用 策略名称
     */
    PolicyName?: string;
    /**
     * 逗号分隔 p1,p2,p3
     */
    BatchOpenCoolDownPartitions?: string;
}
/**
 * 外部doris集群的连接信息
 */
export interface DorisSourceInfo {
    /**
     * doris集群的fe的ip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Host?: string;
    /**
     * doris集群的fe的端口号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Port?: number;
    /**
     * doris集群的账号
  注意：此字段可能返回 null，表示取不到有效值。
     */
    User?: string;
    /**
     * doris集群的密码
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Password?: string;
}
/**
 * OpenCoolDown返回参数结构体
 */
export interface OpenCoolDownResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 集群内节点的规格磁盘规格描述
 */
export interface AttachCBSSpec {
    /**
     * 节点磁盘类型，例如“CLOUD_SSD”\"CLOUD_PREMIUM"
     */
    DiskType?: string;
    /**
     * 磁盘容量，单位G
     */
    DiskSize?: number;
    /**
     * 磁盘总数
     */
    DiskCount?: number;
    /**
     * 描述
     */
    DiskDesc?: string;
}
/**
 * 数据库审计
 */
export interface DataBaseAuditRecord {
    /**
     * 查询用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    OsUser?: string;
    /**
     * 查询ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InitialQueryId?: string;
    /**
     * SQL语句
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Sql?: string;
    /**
     * 开始时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    QueryStartTime?: string;
    /**
     * 执行耗时
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DurationMs?: number;
    /**
     * 读取行数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ReadRows?: number;
    /**
     * 读取字节数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultRows?: number;
    /**
     * 结果字节数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResultBytes?: number;
    /**
     * 内存
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MemoryUsage?: number;
    /**
     * 初始查询IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InitialAddress?: string;
    /**
     * 数据库
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DbName?: string;
    /**
     * sql类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SqlType?: string;
    /**
     * catalog名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Catalog?: string;
}
/**
 * DescribeSlowQueryRecords返回参数结构体
 */
export interface DescribeSlowQueryRecordsResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 记录列表
     */
    SlowQueryRecords?: Array<SlowQueryRecord>;
    /**
     * 所有数据库名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DBNameList?: Array<string>;
    /**
     * 所有catalog名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CatalogNameList?: Array<string>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 集群的配置文件的修改历史
 */
export interface ClusterConfigsHistory {
    /**
     * 配置文件名称
     */
    FileName: string;
    /**
     * 修改后的配置文件内容，base64编码
     */
    NewConfValue: string;
    /**
     * 修改前的配置文件内容，base64编码
     */
    OldConfValue: string;
    /**
     * 修改原因
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Remark: string;
    /**
     * 修改时间
     */
    ModifyTime: string;
    /**
     * 修改子账号id
     */
    UserUin: string;
}
/**
 * KV配置
 */
export interface InstanceConfigItem {
    /**
     * key
     */
    ConfKey: string;
    /**
     * value
     */
    ConfValue: string;
}
/**
 * CreateBackUpSchedule请求参数结构体
 */
export interface CreateBackUpScheduleRequest {
    /**
     * 编辑时需要传
     */
    ScheduleId?: number;
    /**
     * 选择的星期 逗号分隔
  废弃：使用ScheduleInfo
     */
    WeekDays?: string;
    /**
     * 执行小时
  废弃：使用ScheduleInfo
     */
    ExecuteHour?: number;
    /**
     * 备份表列表
     */
    BackUpTables?: Array<BackupTableContent>;
    /**
     * 0为默认。1时是对远端的doris进行备份，不周期，一次性
     */
    BackupType?: number;
    /**
     * 远端doris集群的连接信息
     */
    DorisSourceInfo?: DorisSourceInfo;
    /**
     * 0为默认。1时是一次性备份。2时是远端备份
     */
    BackupTimeType?: number;
    /**
     * 0为默认。1时是备份完成后立即恢复
     */
    RestoreType?: number;
    /**
     * 0为默认。1时是提供自定义的secret连接cos
     */
    AuthType?: number;
    /**
     * cos认证的信息
     */
    CosSourceInfo?: CosSourceInfo;
}
/**
 * ActionAlterUser返回参数结构体
 */
export interface ActionAlterUserResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSpec请求参数结构体
 */
export interface DescribeSpecRequest {
    /**
     * 地域信息，例如"ap-guangzhou-1"
     */
    Zone: string;
    /**
     * 计费类型，PREPAID 包年包月，POSTPAID_BY_HOUR 按量计费
     */
    PayMode?: string;
    /**
     * 多可用区
     */
    Zones?: Array<string>;
    /**
     * 机型名称
     */
    SpecName?: string;
}
/**
 * DescribeClusterConfigsHistory请求参数结构体
 */
export interface DescribeClusterConfigsHistoryRequest {
    /**
     * 集群id名称
     */
    InstanceId: string;
    /**
     * 分页参数，第一页为0，第二页为10
     */
    Offset: number;
    /**
     * 分页参数，分页步长，默认为10
     */
    Limit: number;
    /**
     * 配置修改历史的时间范围开始
     */
    StartTime: string;
    /**
     * 配置修改历史的时间范围结束
     */
    EndTime: string;
    /**
     * 需要查询的配置文件名称数组，如果为空则查询全部历史记录。目前支持的配置文件名称有：
  apache_hdfs_broker.conf、be.conf、fe.conf、core-site.xml、hdfs-site.xml、odbcinst.ini
     */
    ConfigFileNames?: Array<string>;
}
/**
 * CreateWorkloadGroup请求参数结构体
 */
export interface CreateWorkloadGroupRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 资源组配置
     */
    WorkloadGroup?: WorkloadGroupConfig;
}
/**
 * DescribeInstanceNodesInfo请求参数结构体
 */
export interface DescribeInstanceNodesInfoRequest {
    /**
     * 集群id
     */
    InstanceID: string;
}
/**
 * DescribeInstancesHealthState返回参数结构体
 */
export interface DescribeInstancesHealthStateResponse {
    /**
     * 出参
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Data?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeSlowQueryRecords请求参数结构体
 */
export interface DescribeSlowQueryRecordsRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 慢查询时间
     */
    QueryDurationMs: number;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 分页
     */
    PageSize: number;
    /**
     * 分页
     */
    PageNum: number;
    /**
     * 排序参数
     */
    DurationMs?: string;
    /**
     * 数据库名称
     */
    DbName?: Array<string>;
    /**
     * 是否是查询，0：否， 1：是
     */
    IsQuery?: number;
    /**
     * catalog名称
     */
    CatalogName?: Array<string>;
    /**
     * sql名
     */
    Sql?: string;
    /**
     * ReadRows排序字段
     */
    ReadRows?: string;
    /**
     * ResultBytes排序字段
     */
    ResultBytes?: string;
    /**
     * MemoryUsage排序字段
     */
    MemoryUsage?: string;
}
/**
 * DescribeInstanceNodesRole返回参数结构体
 */
export interface DescribeInstanceNodesRoleResponse {
    /**
     * 错误码
     */
    ErrorMsg?: string;
    /**
     * 节点总数
     */
    TotalCount?: number;
    /**
     * 无
     */
    NodeInfos?: Array<NodeInfos>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DestroyInstance返回参数结构体
 */
export interface DestroyInstanceResponse {
    /**
     * 流程ID
     */
    FlowId?: string;
    /**
     * 集群ID
     */
    InstanceId?: string;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ResizeDisk请求参数结构体
 */
export interface ResizeDiskRequest {
    /**
     * 集群ID
     */
    InstanceId: string;
    /**
     * 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE
     */
    Type: string;
    /**
     * 云盘大小
     */
    DiskSize: number;
}
/**
 * ModifyWorkloadGroupStatus请求参数结构体
 */
export interface ModifyWorkloadGroupStatusRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 是否开启资源组：open-开启、close-关闭
     */
    OperationType?: string;
}
/**
 * CreateCoolDownPolicy请求参数结构体
 */
export interface CreateCoolDownPolicyRequest {
    /**
     * 集群id
     */
    InstanceId?: string;
    /**
     * 策略名称
     */
    PolicyName?: string;
    /**
     * cooldown_ttl
     */
    CoolDownTtl?: string;
    /**
     * cooldown_datetime
     */
    CoolDownDatetime?: string;
}
/**
 * DescribeSqlApis返回参数结构体
 */
export interface DescribeSqlApisResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstance请求参数结构体
 */
export interface ModifyInstanceRequest {
    /**
     * 实例Id
     */
    InstanceId: string;
    /**
     * 新修改的实例名称
     */
    InstanceName: string;
}
/**
 * DescribeSpec返回参数结构体
 */
export interface DescribeSpecResponse {
    /**
     * zookeeper节点规格描述
     */
    MasterSpec?: Array<ResourceSpec>;
    /**
     * 数据节点规格描述
     */
    CoreSpec?: Array<ResourceSpec>;
    /**
     * 云盘列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttachCBSSpec?: Array<DiskSpec>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstanceKeyValConfigs返回参数结构体
 */
export interface ModifyInstanceKeyValConfigsResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * ID
     */
    FlowId?: number;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBackUpSchedules返回参数结构体
 */
export interface DescribeBackUpSchedulesResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBackUpTables返回参数结构体
 */
export interface DescribeBackUpTablesResponse {
    /**
     * 可备份表列表
     */
    AvailableTables?: Array<BackupTableContent>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeDatabaseAuditRecords返回参数结构体
 */
export interface DescribeDatabaseAuditRecordsResponse {
    /**
     * 总数
     */
    TotalCount?: number;
    /**
     * 记录列表
     */
    SlowQueryRecords?: DataBaseAuditRecord;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例节点描述信息
 */
export interface InstanceNode {
    /**
     * IP地址
     */
    Ip?: string;
    /**
     * 机型，如 S1
     */
    Spec?: string;
    /**
     * cpu核数
     */
    Core?: number;
    /**
     * 内存大小
     */
    Memory?: number;
    /**
     * 磁盘类型
     */
    DiskType?: string;
    /**
     * 磁盘大小
     */
    DiskSize?: number;
    /**
     * 所属clickhouse cluster名称
     */
    Role?: string;
    /**
     * 状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * rip
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rip?: string;
    /**
     * FE节点角色
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeRole?: string;
    /**
     * UUID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UUID?: string;
}
/**
 * ModifyCoolDownPolicy返回参数结构体
 */
export interface ModifyCoolDownPolicyResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstancesHealthState请求参数结构体
 */
export interface DescribeInstancesHealthStateRequest {
    /**
     * 集群Id
     * @deprecated
     */
    InstanceID?: string;
    /**
     * "" 或者  某个集群Id
     */
    Input?: string;
}
/**
 * NodeInfo
 */
export interface NodeInfo {
    /**
     * 用户IP
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Ip?: string;
    /**
     * 节点状态
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: number;
    /**
     * 节点角色名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeName?: string;
    /**
     * 组件名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComponentName?: string;
    /**
     * 节点角色
  注意：此字段可能返回 null，表示取不到有效值。
     */
    NodeRole?: string;
    /**
     * 节点上次重启的时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    LastRestartTime?: string;
    /**
     * 节点所在可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
}
/**
 * 前端规则描述
 */
export interface FrontEndRule {
    /**
     * id序列
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ID: number;
    /**
     * 规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Name: string;
    /**
     * 详细规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Rule: string;
}
/**
 * RestartClusterForConfigs返回参数结构体
 */
export interface RestartClusterForConfigsResponse {
    /**
     * 流程相关信息
     */
    FlowId?: number;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 实例描述信息
 */
export interface InstanceInfo {
    /**
     * 集群实例ID, "cdw-xxxx" 字符串类型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceId?: string;
    /**
     * 集群实例名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceName?: string;
    /**
     * 状态,
  Init 创建中; Serving 运行中；
  Deleted已销毁；Deleting 销毁中；
  Modify 集群变更中；
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status?: string;
    /**
     * 版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Version?: string;
    /**
     * 地域, ap-guangzhou
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Region?: string;
    /**
     * 可用区， ap-guangzhou-3
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zone?: string;
    /**
     * 私有网络名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    VpcId?: string;
    /**
     * 子网名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubnetId?: string;
    /**
     * 付费类型，"hour", "prepay"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    PayMode?: string;
    /**
     * 创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime?: string;
    /**
     * 过期时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExpireTime?: string;
    /**
     * 数据节点描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MasterSummary?: NodesSummary;
    /**
     * zookeeper节点描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoreSummary?: NodesSummary;
    /**
     * 高可用，“true" "false"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HA?: string;
    /**
     * 高可用类型：
  0：非高可用
  1：读高可用
  2：读写高可用。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HaType?: number;
    /**
     * 访问地址，例如 "10.0.0.1:9000"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccessInfo?: string;
    /**
     * 记录ID，数值型
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Id?: number;
    /**
     * regionId, 表示地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionId?: number;
    /**
     * 可用区说明，例如 "广州二区"
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ZoneDesc?: string;
    /**
     * 错误流程说明信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowMsg?: string;
    /**
     * 状态描述，例如“运行中”等
  注意：此字段可能返回 null，表示取不到有效值。
     */
    StatusDesc?: string;
    /**
     * 自动续费标记
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RenewFlag?: boolean;
    /**
     * 标签列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Tags?: Array<Tag>;
    /**
     * 监控信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Monitor?: string;
    /**
     * 是否开通日志
  注意：此字段可能返回 null，表示取不到有效值。
     */
    HasClsTopic?: boolean;
    /**
     * 日志主题ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClsTopicId?: string;
    /**
     * 日志集ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ClsLogSetId?: string;
    /**
     * 是否支持xml配置管理
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableXMLConfig?: number;
    /**
     * 区域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionDesc?: string;
    /**
     * 弹性网卡地址
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Eip?: string;
    /**
     * 冷热分层系数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosMoveFactor?: number;
    /**
     * external/local/yunti
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Kind?: string;
    /**
     * cos桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosBucketName?: string;
    /**
     * cbs
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CanAttachCbs?: boolean;
    /**
     * 小版本
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BuildVersion?: string;
    /**
     * 组件信息
  注：这里返回类型实际为map[string]struct类型，并非显示的string类型，可以参考“示例值”进行数据的解析。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Components?: string;
    /**
     * 判断审计日志表是否有catalog字段
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    IfExistCatalog?: number;
    /**
     * 页面特性，用于前端屏蔽一些页面入口
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Characteristic?: Array<string>;
    /**
     * 超时时间 单位s
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RestartTimeout?: string;
    /**
     * 内核优雅重启超时时间，如果为-1说明未设置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    GraceShutdownWaitSeconds?: string;
    /**
     * 表名大小写是否敏感，0：敏感；1：不敏感，以小写进行比较；2：不敏感，表名改为以小写存储
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CaseSensitive?: number;
    /**
     * 用户是否可以绑定安全组
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsWhiteSGs?: boolean;
    /**
     * 已绑定的安全组信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BindSGs?: Array<string>;
    /**
     * 是否为多可用区
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableMultiZones?: boolean;
    /**
     * 用户可用区和子网信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    UserNetworkInfos?: string;
    /**
     * 是否启用冷热分层。0：未开启 1：已开启
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableCoolDown?: number;
    /**
     * 冷热分层使用COS桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CoolDownBucket?: string;
    /**
     * 实例扩展信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Details?: InstanceDetail;
    /**
     * 是否启用DLC 0:关闭 1:开启
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableDlc?: number;
    /**
     * 账户类型 0:普通用户 1:CAM用户
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountType?: number;
}
/**
 * DescribeUserBindWorkloadGroup请求参数结构体
 */
export interface DescribeUserBindWorkloadGroupRequest {
    /**
     * 集群id
     */
    InstanceId?: string;
}
/**
 * ScaleUpInstance请求参数结构体
 */
export interface ScaleUpInstanceRequest {
    /**
     * 集群ID
     */
    InstanceId: string;
    /**
     * 节点规格
     */
    SpecName: string;
    /**
     * 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE
     */
    Type: string;
}
/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
    /**
     * 搜索的集群id名称
     */
    SearchInstanceId?: string;
    /**
     * 搜索的集群name
     */
    SearchInstanceName?: string;
    /**
     * 分页参数，第一页为0，第二页为10
     */
    Offset?: number;
    /**
     * 分页参数，分页步长，默认为10
     */
    Limit?: number;
    /**
     * 搜索标签列表
     */
    SearchTags?: Array<SearchTags>;
}
/**
 * DescribeBackUpSchedules请求参数结构体
 */
export declare type DescribeBackUpSchedulesRequest = null;
/**
 * DescribeClusterConfigs请求参数结构体
 */
export interface DescribeClusterConfigsRequest {
    /**
     * 集群实例ID
     */
    InstanceId: string;
    /**
     *  0 公有云查询；1青鹅查询，青鹅查询显示所有需要展示的
     */
    ConfigType?: number;
    /**
     * 模糊搜索关键字文件
     */
    FileName?: string;
    /**
     * 0集群维度 1节点维度
     */
    ClusterConfigType?: number;
    /**
     * eth0的ip地址
     */
    IPAddress?: string;
}
/**
 * CreateCoolDownPolicy返回参数结构体
 */
export interface CreateCoolDownPolicyResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyWorkloadGroup返回参数结构体
 */
export interface ModifyWorkloadGroupResponse {
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeRestoreTaskDetail请求参数结构体
 */
export interface DescribeRestoreTaskDetailRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 任务id
     */
    BackUpJobId: number;
}
/**
 * CreateBackUpSchedule返回参数结构体
 */
export interface CreateBackUpScheduleResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyNodeStatus返回参数结构体
 */
export interface ModifyNodeStatusResponse {
    /**
     * 流程相关信息
     */
    FlowId?: number;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstance返回参数结构体
 */
export interface DescribeInstanceResponse {
    /**
     * 实例描述信息
     */
    InstanceInfo?: InstanceInfo;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBackUpJob返回参数结构体
 */
export interface DescribeBackUpJobResponse {
    /**
     * 任务列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackUpJobs?: Array<BackUpJobDisplay>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RestartClusterForNode请求参数结构体
 */
export interface RestartClusterForNodeRequest {
    /**
     * 集群ID，例如cdwch-xxxx
     */
    InstanceId: string;
    /**
     * 配置文件名称
     */
    ConfigName: string;
    /**
     * 每次重启的批次
     */
    BatchSize?: number;
    /**
     * 重启节点
     */
    NodeList?: Array<string>;
    /**
     * false表示非滚动重启，true表示滚动重启
     */
    RollingRestart?: boolean;
}
/**
 * 备份任务的进度详情
 */
export interface BackupStatus {
    /**
     * 备份任务id
     */
    JobId?: number;
    /**
     * 快照名称
     */
    SnapshotName?: string;
    /**
     * 库名
     */
    DbName?: string;
    /**
     * 状态
     */
    State?: string;
    /**
     * 备份对象
     */
    BackupObjects?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 快照结束时间
     */
    SnapshotFinishedTime?: string;
    /**
     * 上传结束时间
     */
    UploadFinishedTime?: string;
    /**
     * 结束时间
     */
    FinishedTime?: string;
    /**
     * 未完成任务
     */
    UnfinishedTasks?: string;
    /**
     * 进度
     */
    Progress?: string;
    /**
     * 错误信息
     */
    TaskErrMsg?: string;
    /**
     * 状态
     */
    Status?: string;
    /**
     * 超时信息
     */
    Timeout?: number;
    /**
     * 备份实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupJobId?: number;
    /**
     * 实例对应snapshoit的id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: number;
}
/**
 * 列表页搜索的标记列表
 */
export interface SearchTags {
    /**
     * 标签的键
     */
    TagKey?: string;
    /**
     * 标签的值
     */
    TagValue?: string;
    /**
     * 1表示只输入标签的键，没有输入值；0表示输入键时且输入值
     */
    AllValue?: number;
}
/**
 * 新增或是修改用户
 */
export interface UserInfo {
    /**
     * 集群实例id
     */
    InstanceId: string;
    /**
     * 用户名
     */
    UserName: string;
    /**
     * 密码
     */
    PassWord: string;
    /**
     * 用户链接来自的 IP
     */
    WhiteHost?: string;
    /**
     * 修改前用户链接来自的 IP
     */
    OldWhiteHost?: string;
    /**
     * 描述
     */
    Describe?: string;
    /**
     * 旧密码
     */
    OldPwd?: string;
}
/**
 * DescribeInstanceUsedSubnets请求参数结构体
 */
export interface DescribeInstanceUsedSubnetsRequest {
    /**
     * 集群id
     */
    InstanceId: string;
}
/**
 * DescribeDatabaseAuditRecords请求参数结构体
 */
export interface DescribeDatabaseAuditRecordsRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 分页
     */
    PageSize: number;
    /**
     * 分页
     */
    PageNum: number;
    /**
     * 排序参数
     */
    OrderType?: string;
    /**
     * 用户
     */
    User?: string;
    /**
     * 数据库
     */
    DbName?: string;
    /**
     * sql类型
     */
    SqlType?: string;
    /**
     * sql语句
     */
    Sql?: string;
    /**
     * 用户 （多选）
     */
    Users?: Array<string>;
    /**
     * 数据库 （多选）
     */
    DbNames?: Array<string>;
    /**
     * sql类型 （多选）
     */
    SqlTypes?: Array<string>;
    /**
     * catalog名称（多选）
     */
    Catalogs?: Array<string>;
}
/**
 * DescribeBackUpJobDetail返回参数结构体
 */
export interface DescribeBackUpJobDetailResponse {
    /**
     * 备份表详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableContents: Array<BackupTableContent>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeBackUpJobDetail请求参数结构体
 */
export interface DescribeBackUpJobDetailRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 任务id
     */
    BackUpJobId: number;
}
/**
 * DescribeCoolDownBackends返回参数结构体
 */
export interface DescribeCoolDownBackendsResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 节点信息列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<CoolDownBackend>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCoolDownPolicies返回参数结构体
 */
export interface DescribeCoolDownPoliciesResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 冷热分层策略列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<CoolDownPolicyInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTableList请求参数结构体
 */
export interface DescribeTableListRequest {
    /**
     * 资源ID，建表所用的TCHouse-D资源ID。
     */
    InstanceId: string;
    /**
     * 需要获取表列表的库
     */
    DbName: string;
    /**
     * 使用该用户进行操作，该用户需要有对应的权限。如果该TCHouse-D集群使用CAM用户注册内核账户，则不需要填写
     */
    UserName?: string;
    /**
     * 用户对应的密码。如果该TCHouse-D集群使用CAM用户注册内核账户，则不需要填写
     */
    PassWord?: string;
    /**
     * 查询库所在的数据源，不填则默认为内部数据源（internal）。
     */
    CatalogName?: string;
}
/**
 * DescribeWorkloadGroup返回参数结构体
 */
export interface DescribeWorkloadGroupResponse {
    /**
     * 资源组信息
     */
    WorkloadGroups?: Array<WorkloadGroupConfig>;
    /**
     * 是否开启资源组：开启-open、关闭-close
     */
    Status?: string;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 冷热分层Table数据信息
 */
export interface CoolDownTableDataInfo {
    /**
     * 列：DatabaseName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DatabaseName?: string;
    /**
     * 列：TableName
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableName?: string;
    /**
     * 列：Size
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Size?: string;
    /**
     * 列：RemoteSize
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemoteSize?: string;
}
/**
 * ModifySecurityGroups返回参数结构体
 */
export interface ModifySecurityGroupsResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 备份实例中关于cos的信息
 */
export interface BackupCosInfo {
    /**
     * 备份文件所在的cos桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosBucket?: string;
    /**
     * 备份文件所在的完整cos路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CosPath?: string;
    /**
     * 备份文件名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SnapShotPath?: string;
}
/**
 * 冷热分层backend节点信息
 */
export interface CoolDownBackend {
    /**
     * 字段：Host
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Host?: string;
    /**
     * 字段：DataUsedCapacity
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataUsedCapacity?: string;
    /**
     * 字段：TotalCapacity
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TotalCapacity?: string;
    /**
     * 字段：RemoteUsedCapacity
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RemoteUsedCapacity?: string;
}
/**
 * DescribeBackUpTaskDetail返回参数结构体
 */
export interface DescribeBackUpTaskDetailResponse {
    /**
     * 备份任务进度详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupStatus: Array<BackupStatus>;
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * OpenCoolDownPolicy返回参数结构体
 */
export interface OpenCoolDownPolicyResponse {
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 返回信息
     */
    QueryDocument?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ReduceInstance请求参数结构体
 */
export interface ReduceInstanceRequest {
    /**
     * 集群ID
     */
    InstanceId: string;
    /**
     * 节点列表
     */
    DelHosts: Array<string>;
    /**
     * 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE
     */
    Type: string;
    /**
     * 缩容后集群高可用类型：0：非高可用，1：读高可用，2：读写高可用。
     */
    HaType: number;
}
/**
 * DeleteWorkloadGroup返回参数结构体
 */
export interface DeleteWorkloadGroupResponse {
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * Instance表detail字段
 */
export interface InstanceDetail {
    /**
     * 告警策略是否可用
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EnableAlarmStrategy?: boolean;
}
/**
 * DescribeCoolDownTableData返回参数结构体
 */
export interface DescribeCoolDownTableDataResponse {
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ErrorMsg?: string;
    /**
     * 冷热分层Table数据列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    List?: Array<CoolDownTableDataInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * RestartClusterForConfigs请求参数结构体
 */
export interface RestartClusterForConfigsRequest {
    /**
     * 集群ID，例如cdwch-xxxx
     */
    InstanceId: string;
    /**
     * 配置文件名称
     */
    ConfigName: string;
    /**
     * grace_restart为优雅滚动重启 不填默认立刻重启
     */
    OperationType?: string;
}
/**
 * 可用区的地域大类描述
 */
export interface RegionAreaInfo {
    /**
     * 大类地域信息，如"south_china", "east_china"等
     */
    Name: string;
    /**
     * 对应Name的描述，例如“华南地区”，“华东地区”等
     */
    Desc: string;
    /**
     * 具体地域列表1
     */
    Regions: Array<RegionInfo>;
}
/**
 * ModifyWorkloadGroupStatus返回参数结构体
 */
export interface ModifyWorkloadGroupStatusResponse {
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 配置文件修改信息
 */
export interface ConfigSubmitContext {
    /**
     * 配置文件名称
     */
    FileName: string;
    /**
     * 配置文件新内容，base64编码
     */
    NewConfValue: string;
    /**
     * 配置文件旧内容，base64编码
     */
    OldConfValue?: string;
    /**
     * 文件路径
     */
    FilePath?: string;
}
/**
 * 地域描述信息
 */
export interface RegionInfo {
    /**
     * 地域名称，例如“ap-guangzhou"
     */
    Name?: string;
    /**
     * 地域描述，例如"广州”
     */
    Desc?: string;
    /**
     * 地域唯一标记
     */
    RegionId?: number;
    /**
     * 地域下所有可用区列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Zones?: Array<ZoneInfo>;
    /**
     * 该地域下集群数目
     */
    Count?: number;
    /**
     * 0代表是国际站 1代表不是
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IsInternationalSite?: number;
    /**
     * 桶
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Bucket?: string;
}
/**
 * CreateWorkloadGroup返回参数结构体
 */
export interface CreateWorkloadGroupResponse {
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeInstanceState返回参数结构体
 */
export interface DescribeInstanceStateResponse {
    /**
     * 集群状态，例如：Serving
     */
    InstanceState?: string;
    /**
     * 集群操作创建时间
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowCreateTime?: string;
    /**
     * 集群操作名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowName?: string;
    /**
     * 集群操作进度
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowProgress?: number;
    /**
     * 集群状态描述，例如：运行中
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceStateDesc?: string;
    /**
     * 集群流程错误信息，例如：“创建失败，资源不足”
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FlowMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeCoolDownPolicies请求参数结构体
 */
export interface DescribeCoolDownPoliciesRequest {
    /**
     * 集群id
     */
    InstanceId?: string;
}
/**
 * 资源规格描述信息
 */
export interface ResourceSpec {
    /**
     * 规格名称，例如“SCH1"
     */
    Name?: string;
    /**
     * cpu核数
     */
    Cpu?: number;
    /**
     * 内存大小，单位G
     */
    Mem?: number;
    /**
     * 分类标记，STANDARD/BIGDATA/HIGHIO分别表示标准型/大数据型/高IO
     */
    Type?: string;
    /**
     * 系统盘描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SystemDisk?: DiskSpec;
    /**
     * 数据盘描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DataDisk?: DiskSpec;
    /**
     * 最大节点数目限制
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxNodeSize?: number;
    /**
     * 是否可用，false代表售罄
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Available?: boolean;
    /**
     * 规格描述信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComputeSpecDesc?: string;
    /**
     * cvm库存
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InstanceQuota?: number;
}
/**
 * ModifyClusterConfigs返回参数结构体
 */
export interface ModifyClusterConfigsResponse {
    /**
     * 流程相关信息
     */
    FlowId?: number;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 恢复任务信息
 */
export interface RestoreStatus {
    /**
     * 恢复任务id
     */
    JobId?: number;
    /**
     * 恢复任务标签
     */
    Label?: string;
    /**
     * 恢复任务时间戳
     */
    Timestamp?: string;
    /**
     * 恢复任务所在库
     */
    DbName?: string;
    /**
     * 恢复任务状态
     */
    State?: string;
    /**
     * 恢复时是否允许导入
     */
    AllowLoad?: boolean;
    /**
     * 副本数
     */
    ReplicationNum?: string;
    /**
     * 副本数
     */
    ReplicaAllocation?: string;
    /**
     * 恢复对象
     */
    RestoreObjects?: string;
    /**
     * 创建时间
     */
    CreateTime?: string;
    /**
     * 元数据准备时间
     */
    MetaPreparedTime?: string;
    /**
     * 快照结束时间
     */
    SnapshotFinishedTime?: string;
    /**
     * 下载结束时间
     */
    DownloadFinishedTime?: string;
    /**
     * 结束时间
     */
    FinishedTime?: string;
    /**
     * 未完成任务
     */
    UnfinishedTasks?: string;
    /**
     * 进度
     */
    Progress?: string;
    /**
     * 错误信息
     */
    TaskErrMsg?: string;
    /**
     * 状态
     */
    Status?: string;
    /**
     * 作业超时时间
     */
    Timeout?: number;
    /**
     * 是否保持源表中的副本数
     */
    ReserveReplica?: boolean;
    /**
     * 是否保持源表中的动态分区
     */
    ReserveDynamicPartitionEnable?: boolean;
    /**
     * 备份实例id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupJobId?: number;
    /**
     * 实例对应snapshot的id
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TaskId?: number;
}
/**
 * DeleteBackUpData返回参数结构体
 */
export interface DeleteBackUpDataResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyInstanceKeyValConfigs请求参数结构体
 */
export interface ModifyInstanceKeyValConfigsRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 文件名称
     */
    FileName: string;
    /**
     * 新增配置列表
     */
    AddItems?: Array<InstanceConfigItem>;
    /**
     * 更新配置列表
     */
    UpdateItems?: Array<InstanceConfigItem>;
    /**
     * 删除配置列表
     */
    DelItems?: Array<InstanceConfigItem>;
    /**
     * 备注（50字以内）
     */
    Message?: string;
    /**
     * 热更新列表
     */
    HotUpdateItems?: Array<InstanceConfigItem>;
    /**
     * 删除配置列表
     */
    DeleteItems?: InstanceConfigItem;
    /**
     * ip地址
     */
    IPAddress?: string;
}
/**
 * 备份实例详情
 */
export interface BackUpJobDisplay {
    /**
     * 备份实例id
     */
    JobId?: number;
    /**
     * 备份实例名
     */
    Snapshot?: string;
    /**
     * 备份数据量
     */
    BackUpSize?: number;
    /**
     * 备份单副本数据量
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackUpSingleSize?: number;
    /**
     * 实例创建时间
     */
    BackUpTime?: string;
    /**
     * 实例过期时间
     */
    ExpireTime?: string;
    /**
     * 实例状态
     */
    JobStatus?: string;
    /**
     * 0为默认。1时是对远端的doris进行备份，不周期，一次性
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupType?: number;
    /**
     * 0为默认。1时是立即备份。2时是迁移
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupTimeType?: number;
    /**
     * 远端doris的连接信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DorisSourceInfo?: DorisSourceInfo;
    /**
     * 实例状态对应的数值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    JobStatusNum?: number;
    /**
     * 备份实例中关于cos的信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BackupCosInfo?: BackupCosInfo;
}
/**
 * ModifyUserBindWorkloadGroup返回参数结构体
 */
export interface ModifyUserBindWorkloadGroupResponse {
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 用于返回XML格式的配置文件和内容以及其他配置文件有关的信息
 */
export interface ClusterConfigsInfoFromEMR {
    /**
     * 配置文件名称
     */
    FileName?: string;
    /**
     * 配置文件对应的相关属性信息
     */
    FileConf?: string;
    /**
     * 配置文件对应的其他属性信息
     */
    KeyConf?: string;
    /**
     * 配置文件的内容，base64编码
     */
    OriParam?: string;
    /**
     * 用于表示当前配置文件是不是有过修改后没有重启，提醒用户需要重启
     */
    NeedRestart?: number;
    /**
     * 配置文件路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FilePath?: string;
    /**
     * 配置文件kv值
  注意：此字段可能返回 null，表示取不到有效值。
     * @deprecated
     */
    FileKeyValues?: string;
    /**
     * 配置文件kv值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FileKeyValuesNew?: Array<ConfigKeyValue>;
}
/**
 * RecoverBackUpJob返回参数结构体
 */
export interface RecoverBackUpJobResponse {
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * DescribeTableList返回参数结构体
 */
export interface DescribeTableListResponse {
    /**
     * 表名列表
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TableNames?: Array<string>;
    /**
     * 错误信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Message?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ModifyUserBindWorkloadGroup请求参数结构体
 */
export interface ModifyUserBindWorkloadGroupRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 需要绑定资源组的用户信息，如果一个账户拥有多个主机信息，需要将这些信息都传入
     */
    BindUsers?: Array<BindUser>;
    /**
     * 修改前绑定的资源组名称
     */
    OldWorkloadGroupName?: string;
    /**
     * 修改后绑定的资源组名称
     */
    NewWorkloadGroupName?: string;
}
/**
 * 节点角色描述信息
 */
export interface NodesSummary {
    /**
     * 机型，如 S1
     */
    Spec?: string;
    /**
     * 节点数目
     */
    NodeSize?: number;
    /**
     * cpu核数，单位个
     */
    Core?: number;
    /**
     * 内存大小，单位G
     */
    Memory?: number;
    /**
     * 磁盘大小，单位G
     */
    Disk?: number;
    /**
     * 磁盘类型
     */
    DiskType?: string;
    /**
     * 磁盘描述
     */
    DiskDesc?: string;
    /**
     * 挂载云盘信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AttachCBSSpec?: AttachCBSSpec;
    /**
     * 子产品名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SubProductType?: string;
    /**
     * 规格核数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpecCore?: number;
    /**
     * 规格内存
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SpecMemory?: number;
    /**
     * 磁盘大小
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DiskCount?: number;
    /**
     * 是否加密
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Encrypt?: number;
    /**
     * 最大磁盘
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaxDiskSize?: number;
}
/**
 * DescribeDatabaseAuditDownload请求参数结构体
 */
export interface DescribeDatabaseAuditDownloadRequest {
    /**
     * 实例ID
     */
    InstanceId: string;
    /**
     * 开始时间
     */
    StartTime: string;
    /**
     * 结束时间
     */
    EndTime: string;
    /**
     * 分页
     */
    PageSize: number;
    /**
     * 分页
     */
    PageNum: number;
    /**
     * 排序参数
     */
    OrderType?: string;
    /**
     * 用户
     */
    User?: string;
    /**
     * 数据库
     */
    DbName?: string;
    /**
     * sql类型
     */
    SqlType?: string;
    /**
     * sql语句
     */
    Sql?: string;
    /**
     * 用户 多选
     */
    Users?: Array<string>;
    /**
     * 数据库 多选
     */
    DbNames?: Array<string>;
    /**
     * sql类型 多选
     */
    SqlTypes?: Array<string>;
    /**
     * catalog名称 （多选）
     */
    Catalogs?: Array<string>;
}
/**
 * 集群规格
 */
export interface CreateInstanceSpec {
    /**
     * 规格名字
     */
    SpecName: string;
    /**
     * 数量
     */
    Count: number;
    /**
     * 云盘大小
     */
    DiskSize: number;
}
/**
 * DescribeInstance请求参数结构体
 */
export interface DescribeInstanceRequest {
    /**
     * 集群实例ID
     */
    InstanceId: string;
}
/**
 * DescribeBackUpJob请求参数结构体
 */
export interface DescribeBackUpJobRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 分页大小
     */
    PageSize?: number;
    /**
     * 页号
     */
    PageNum?: number;
    /**
     * 开始时间
     */
    BeginTime?: string;
    /**
     * 结束时间
     */
    EndTime?: string;
    /**
     * jobid的string类型
     */
    JobIdFiltersStr?: string;
}
/**
 * ActionAlterUser请求参数结构体
 */
export interface ActionAlterUserRequest {
    /**
     * 用户信息
     */
    UserInfo: UserInfo;
    /**
     * api接口类型
     */
    ApiType: string;
    /**
     * 用户权限类型 0:普通用户 1:管理员
     */
    UserPrivilege?: number;
}
/**
 * DescribeBackUpTables请求参数结构体
 */
export interface DescribeBackUpTablesRequest {
    /**
     * 集群id
     */
    InstanceId: string;
    /**
     * 0为默认。1时是对远端的doris进行备份，不周期，一次性。2时为cos恢复，一次性
     */
    BackupType?: number;
    /**
     * 远端doris集群的连接信息
     */
    DorisSourceInfo?: DorisSourceInfo;
    /**
     * cos信息
     */
    CosSourceInfo?: CosSourceInfo;
}
/**
 * DescribeInstanceNodesRole请求参数结构体
 */
export interface DescribeInstanceNodesRoleRequest {
    /**
     * 实例id
     */
    InstanceId: string;
    /**
     * 过滤ip
     */
    IpFilter?: string;
}
/**
 * DescribeDatabaseAuditDownload返回参数结构体
 */
export interface DescribeDatabaseAuditDownloadResponse {
    /**
     * 日志的cos地址
     */
    CosUrl?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 节点信息列表
 */
export interface NodeInfos {
    /**
     * 节点在doris中明朝n
     */
    NodeName?: string;
    /**
     * 节点状态
     */
    Status?: number;
    /**
     * 节点ip
     */
    Ip?: string;
    /**
     * 节点角色
     */
    NodeRole?: string;
    /**
     * 组件名
     */
    ComponentName?: string;
    /**
     * 上一次重启时间
     */
    LastRestartTime?: string;
}
/**
 * DescribeInstanceNodesInfo返回参数结构体
 */
export interface DescribeInstanceNodesInfoResponse {
    /**
     * Be节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeNodes?: Array<string>;
    /**
     * Fe节点
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeNodes?: Array<string>;
    /**
     * Fe master节点
     */
    FeMaster?: string;
    /**
     * Be节点信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    BeNodeInfos?: Array<NodeInfo>;
    /**
     * Fe节点信息
  注意：此字段可能返回 null，表示取不到有效值。
     */
    FeNodeInfos?: Array<NodeInfo>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * ScaleUpInstance返回参数结构体
 */
export interface ScaleUpInstanceResponse {
    /**
     * 流程ID
     */
    FlowId?: string;
    /**
     * 实例ID
     */
    InstanceId?: string;
    /**
     * 错误信息
     */
    ErrorMsg?: string;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
