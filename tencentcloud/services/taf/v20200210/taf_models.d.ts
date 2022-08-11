/**
 * CheckKol
 */
export interface InputKolBspData {
    /**
      * BspData
      */
    DataList: Array<InputKolDataList>;
}
/**
 * 返回结果
 */
export interface OutputSendTrafficSecuritySmsMsg {
    /**
      * 返回码（0：接口调用成功 非0：接口调用失败）
      */
    Code: number;
    /**
      * 返回码对应的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 发送失败的号码列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: Array<string>;
}
/**
 * DetectFraudKOL请求参数结构体
 */
export interface DetectFraudKOLRequest {
    /**
      * 业务数据
      */
    BspData: InputKolBspData;
    /**
      * 业务加密数据
      */
    BusinessEncryptData?: InputBusinessEncryptData;
}
/**
 * RecognizeCustomizedAudience请求参数结构体
 */
export interface RecognizeCustomizedAudienceRequest {
    /**
      * 业务入参
      */
    BspData: InputRecognizeTargetAudience;
}
/**
 * RecognizeTargetAudience请求参数结构体
 */
export interface RecognizeTargetAudienceRequest {
    /**
      * 业务数据
      */
    BspData: InputRecognizeTargetAudience;
    /**
      * 业务加密数据
      */
    BusinessEncryptData?: InputBusinessEncryptData;
}
/**
 * RecognizeTargetAudience返回参数结构体
 */
export interface RecognizeTargetAudienceResponse {
    /**
      * 回包数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: OutputRecognizeTargetAudience;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 流量反欺诈-验准返回的查询分值
 */
export interface OutputRecognizeTargetAudienceValue {
    /**
      * 模型ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ModelId: number;
    /**
      * 是否正常返回结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsFound: number;
    /**
      * 返回分值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
}
/**
 * SendTrafficSecuritySmsMessage请求参数结构体
 */
export interface SendTrafficSecuritySmsMessageRequest {
    /**
      * 业务入参
      */
    BspData: InputSendTrafficSecuritySmsMsg;
}
/**
 * RecognizePreciseTargetAudience返回参数结构体
 */
export interface RecognizePreciseTargetAudienceResponse {
    /**
      * 回包数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: OutputRecognizeTargetAudience;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 流量反欺诈-验准返回值
 */
export interface OutputRecognizeTargetAudience {
    /**
      * 返回码（0，成功，其他失败）
      */
    Code: number;
    /**
      * 返回码对应的信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 返回模型结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: Array<OutputRecognizeTargetAudienceValue>;
}
/**
 * DetectFraudKOL返回参数结构体
 */
export interface DetectFraudKOLResponse {
    /**
      * 回包数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: OutputKolData;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RecognizeCustomizedAudience返回参数结构体
 */
export interface RecognizeCustomizedAudienceResponse {
    /**
      * 业务出参
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data?: OutputRecognizeTargetAudience;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CheckKol
 */
export interface OutputKolValue {
    /**
      * KOL账号ID[比如微信公众号ID]
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: string;
    /**
      * 是否查得[0：未查得；1：查得]
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsCheck: number;
    /**
      * 作弊的可能性[0～100]
注意：此字段可能返回 null，表示取不到有效值。
      */
    FraudPScore: number;
    /**
      * 作弊的严重性[0～100]
注意：此字段可能返回 null，表示取不到有效值。
      */
    EvilPScore: number;
}
/**
 * 流量反欺诈-验准入参
 */
export interface InputRecognizeTargetAudience {
    /**
      * 模型ID列表
      */
    ModelIdList: Array<number>;
    /**
      * 设备ID，AccountType指定的类型
      */
    Uid?: string;
    /**
      * 设备号类型，1.imei 2.imeiMd5（小写后转MD5转小写）3.idfa， 4.idfaMd5（大写后转MD5转小写），5.手机号,256.其它
      */
    AccountType?: number;
    /**
      * 用户IP
      */
    Ip?: string;
    /**
      * 操作系统类型(unknown，android，ios，windows)
      */
    Os?: string;
    /**
      * 操作系统版本
      */
    Osv?: string;
    /**
      * 纬度
      */
    Lat?: string;
    /**
      * 经度
      */
    Lon?: string;
    /**
      * 设备型号(MI 6)
      */
    DeviceModel?: string;
    /**
      * 竞价底价
      */
    BidFloor?: number;
    /**
      * 年龄
      */
    Age?: number;
    /**
      * 性别(1.MALE 2.FEMALE)
      */
    Gender?: number;
    /**
      * 用户地址
      */
    Location?: string;
    /**
      * 投放模式（0=PDB，1=PD，2=RTB，10=其他）
      */
    DeliveryMode?: number;
    /**
      * 广告位类型<br />（0=前贴片，1=开屏广告，2=网页头部广告、3=网页中部广告、4=网页底部广告、5=悬浮广告、10=其它）
      */
    AdvertisingType?: number;
    /**
      * mac地址，建议提供
      */
    Mac?: string;
    /**
      * 电话号码
      */
    Phone?: string;
    /**
      * 浏览器类型
      */
    Ua?: string;
    /**
      * 客户端应用
      */
    App?: string;
    /**
      * 应用包名
      */
    Package?: string;
    /**
      * 设备制造商
      */
    Maker?: string;
    /**
      * 设备类型（PHONE,TABLET）
      */
    DeviceType?: string;
    /**
      * 入网方式(wifi,4g,3g,2g)
      */
    AccessMode?: string;
    /**
      * 运营商(1.移动 2.联通 3.电信等)
      */
    Sp?: number;
    /**
      * 设备屏幕分辨率宽度像素数
      */
    DeviceW?: number;
    /**
      * 设备屏幕分辨率高度像素数
      */
    DeviceH?: number;
    /**
      * 是否全屏插广告(0-否，1-是)
      */
    FullScreen?: number;
    /**
      * 广告位宽度
      */
    ImpBannerW?: number;
    /**
      * 广告位高度
      */
    ImpBannerH?: number;
    /**
      * 网址
      */
    Url?: string;
    /**
      * 上下文信息
      */
    Context?: string;
    /**
      * 渠道
      */
    Channel?: string;
    /**
      * 请求ID
      */
    ReqId?: string;
    /**
      * 请求ID的md5值
      */
    ReqMd5?: string;
    /**
      * ad_type
      */
    AdType?: number;
    /**
      * app名称
      */
    AppName?: string;
    /**
      * app版本描述
      */
    AppVer?: string;
    /**
      * 竞价模式1：rtb 2:pd
      */
    ReqType?: number;
    /**
      * 用户是否授权,1为授权，0为未授权
      */
    IsAuthorized?: number;
    /**
      * 设备信息
      */
    DeviceList?: Array<Device>;
}
/**
 * CheckKol
 */
export interface OutputKolData {
    /**
      * 错误码[0:成功；非0：失败的错误码]
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: number;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
    /**
      * 业务返回数据
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: Array<OutputKolValue>;
}
/**
 * 业务入参
 */
export interface Device {
    /**
      * 业务入参id
      */
    DeviceId: string;
    /**
      * 业务入参类型
      */
    DeviceType: number;
}
/**
 * SendTrafficSecuritySmsMessage返回参数结构体
 */
export interface SendTrafficSecuritySmsMessageResponse {
    /**
      * 返回结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: OutputSendTrafficSecuritySmsMsg;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 业务入参
 */
export interface InputSendTrafficSecuritySmsMsg {
    /**
      * 投放任务ID
      */
    TaskId: string;
    /**
      * 手机号码列表（号码量<=200）
      */
    Mobiles: Array<string>;
    /**
      * 是否授权，1：已授权
      */
    IsAuthorized?: number;
    /**
      * 加密方式，0：AES加密；1：DES加密
      */
    EncryptMethod?: number;
    /**
      * 加密算法中的块处理模式，0：ECB模式；1：CBC模式；2：CTR模式；3：CFB模式；4：OFB模式；
      */
    EncryptMode?: number;
    /**
      * 填充模式，0：ZeroPadding；1：PKCS5Padding；2：PKCS7Padding；
      */
    PaddingType?: number;
    /**
      * 加密数据
      */
    EncryptData?: string;
}
/**
 * RecognizePreciseTargetAudience请求参数结构体
 */
export interface RecognizePreciseTargetAudienceRequest {
    /**
      * 业务数据
      */
    BspData: InputRecognizeTargetAudience;
}
/**
 * CheckKOL
 */
export interface InputKolDataList {
    /**
      * 账号类型[1：微信；2：qq；3：微博]
      */
    Type: number;
    /**
      * KOL账号ID[比如微信公众号ID]
      */
    Id: string;
    /**
      * KOL名称
      */
    Name: string;
    /**
      * 手机号
      */
    Phone?: string;
    /**
      * 代理商名称
      */
    AgentInfo?: string;
    /**
      * 是否授权
      */
    IsAuthorized?: number;
}
/**
 * 业务入参
 */
export declare type InputBusinessEncryptData = null;
