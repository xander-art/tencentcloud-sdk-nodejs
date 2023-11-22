/**
 * 规则详情
 */
export interface ConfigRule {
    /**
     * 规则标识
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Identifier: string;
    /**
     * 规则名
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleName: string;
    /**
     * 规则参数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    InputParameter: Array<InputParameter>;
    /**
     * 规则触发条件
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SourceCondition: Array<SourceConditionForManage>;
    /**
     * 规则支持的资源类型，规则仅对指定资源类型的资源生效。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ResourceType: Array<string>;
    /**
     * 规则所属标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Labels: Array<string>;
    /**
     * 规则风险等级
  1:低风险
  2:中风险
  3:高风险
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RiskLevel: number;
    /**
     * 规则对应的函数
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ServiceFunction: string;
    /**
     * 创建时间
  格式：YYYY-MM-DD h:i:s
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CreateTime: string;
    /**
     * 规则描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description: string;
    /**
     * ACTIVE：启用
  NO_ACTIVE：停止
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Status: string;
    /**
     * 合规： 'COMPLIANT'
  不合规： 'NON_COMPLIANT'
  无法应用规则： 'NOT_APPLICABLE'
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ComplianceResult: string;
    /**
     * ["",""]
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Annotation: Annotation;
    /**
     * 规则评估时间
  格式：YYYY-MM-DD h:i:s
  
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigRuleInvokedTime: string;
    /**
     * 规则ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ConfigRuleId: string;
    /**
     * CUSTOMIZE：自定义规则、
  SYSTEM：托管规则
  注意：此字段可能返回 null，表示取不到有效值。
     */
    IdentifierType: string;
    /**
     * 合规包ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompliancePackId: string;
    /**
     * 触发类型
  ScheduledNotification：周期触发、
  ConfigurationItemChangeNotification：变更触发
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TriggerType: Array<TriggerType>;
    /**
     * 参数详情
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ManageInputParameter: Array<InputParameterForManage>;
    /**
     * 规则名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    CompliancePackName: string;
    /**
     * 关联地域
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RegionsScope: Array<string>;
    /**
     * 关联标签
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagsScope: Array<Tag>;
    /**
     *  规则对指定资源ID无效，即不对该资源执行评估。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ExcludeResourceIdsScope: Array<string>;
    /**
     * 账号组ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountGroupId?: string;
    /**
     * 账号组名称
  注意：此字段可能返回 null，表示取不到有效值。
     */
    AccountGroupName?: string;
    /**
     * 规则所属用户ID
  注意：此字段可能返回 null，表示取不到有效值。
     */
    RuleOwnerId?: number;
    /**
     * 预设规则支持的触发方式
  ScheduledNotification：周期触发
  ConfigurationItemChangeNotification：变更触发
     */
    ManageTriggerType?: Array<string>;
}
/**
 * ListConfigRules返回参数结构体
 */
export interface ListConfigRulesResponse {
    /**
     * 总数
     */
    Total: number;
    /**
     * 详情
     */
    Items: Array<ConfigRule>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 规则入参
 */
export interface InputParameterForManage {
    /**
     * 值类型。数值：Integer， 字符串：String
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ValueType?: string;
    /**
     * 参数Key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    ParameterKey?: string;
    /**
     * 参数类型。必填类型：Require，可选类型：Optional。
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Type?: string;
    /**
     * 默认值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DefaultValue?: string;
    /**
     * 描述
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Description?: string;
}
/**
 * 管理端规则条件
 */
export interface SourceConditionForManage {
    /**
     * 条件为空，合规：COMPLIANT，不合规：NON_COMPLIANT，无法应用：NOT_APPLICABLE
  注意：此字段可能返回 null，表示取不到有效值。
     */
    EmptyAs?: string;
    /**
     * 配置路径
  注意：此字段可能返回 null，表示取不到有效值。
     */
    SelectPath?: string;
    /**
     * 操作运算符
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Operator?: string;
    /**
     * 是否必须
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Required?: boolean;
    /**
     * 期望值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DesiredValue?: string;
}
/**
 * 规则支持触发类型
 */
export interface TriggerType {
    /**
     * 触发类型
     */
    MessageType: string;
    /**
     * 触发时间周期
  注意：此字段可能返回 null，表示取不到有效值。
     */
    MaximumExecutionFrequency?: string;
}
/**
 * ListAggregateConfigRules请求参数结构体
 */
export interface ListAggregateConfigRulesRequest {
    /**
     * 每页限制
     */
    Limit: number;
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 账号组ID
     */
    AccountGroupId: string;
    /**
     * 排序类型, 倒序：desc，顺序：asc
     */
    OrderType?: string;
    /**
     * 风险等级
  1：高风险。
  2：中风险。
  3：低风险。
     */
    RiskLevel?: Array<number | bigint>;
    /**
     * 规则状态
     */
    State?: string;
    /**
     * 评估结果
     */
    ComplianceResult?: Array<string>;
    /**
     * 规则名
     */
    RuleName?: string;
    /**
     * 规则所属账号ID
     */
    RuleOwnerId?: number;
}
/**
 * ListAggregateConfigRules返回参数结构体
 */
export interface ListAggregateConfigRulesResponse {
    /**
     * 总数
     */
    Total?: number;
    /**
     * 详情
     */
    Items?: Array<ConfigRule>;
    /**
     * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * 标签
 */
export interface Tag {
    /**
     * 标签key
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagKey?: string;
    /**
     * 标签value
  注意：此字段可能返回 null，表示取不到有效值。
     */
    TagValue?: string;
}
/**
 * 参数值
 */
export interface InputParameter {
    /**
     * 参数名
     */
    ParameterKey: string;
    /**
     * 参数类型。必填类型：Require，可选类型：Optional。
     */
    Type?: string;
    /**
     * 参数值
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Value?: string;
}
/**
 * ListConfigRules请求参数结构体
 */
export interface ListConfigRulesRequest {
    /**
     * 每页限制
     */
    Limit: number;
    /**
     * 偏移量
     */
    Offset: number;
    /**
     * 排序类型, 倒序：desc，顺序：asc
     */
    OrderType?: string;
    /**
     * 风险等级
  1：高风险。
  2：中风险。
  3：低风险。
     */
    RiskLevel?: Array<number | bigint>;
    /**
     * 规则状态
     */
    State?: string;
    /**
     * 评估结果
     */
    ComplianceResult?: Array<string>;
    /**
     * 规则名
     */
    RuleName?: string;
}
/**
 * 合规详情
 */
export interface Annotation {
    /**
     * 资源当前实际配置。长度为0~256位字符，即资源不合规配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    Configuration: string;
    /**
     * 资源期望配置。长度为0~256位字符，即资源合规配置
  注意：此字段可能返回 null，表示取不到有效值。
     */
    DesiredValue: string;
    /**
     * 资源当前配置和期望配置之间的比较运算符。长度为0~16位字符，自定义规则上报评估结果此字段可能为空
     */
    Operator?: string;
    /**
     * 当前配置在资源属性结构体中的JSON路径。长度为0~256位字符，自定义规则上报评估结果此字段可能为空
     */
    Property?: string;
}
