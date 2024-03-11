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

/**
 * DescribeBRI请求参数结构体
 */
export interface DescribeBRIRequest {
  /**
   * 业务风险情报请求体
   */
  RequestData: BRIRequest
  /**
   * 客户用于计费的资源ID
   */
  ResourceId: string
}

/**
 * BRI请求
 */
export interface BRIRequest {
  /**
   * 业务名, 必须是以下六个业务名之一(bri_num,bri_dev,bri_ip_bri_apk,bri_url,bri_social)
   */
  Service: string
  /**
   * QQ号 (业务名为bri_social时必填, 除非已填Wechat)
   */
  QQ?: string
  /**
   * QQ号的可疑标签
   */
  QQTag?: string
  /**
   * 网址 (业务名为bri_url时必填)
   */
  Url?: string
  /**
   * Apk证书Md5  (业务名为bri_apk时必填，除非已填FileMd5)
   */
  CertMd5?: string
  /**
   * Apk安装包名 (业务名为bri_apk时必填，除非已填FileMd5)
   */
  PackageName?: string
  /**
   * Apk文件Md5 (业务名为bri_apk时必填，除非已填PackageName,CertMd5,FileSize)
   */
  FileMd5?: string
  /**
   * 业务场景 (1-注册, 2-登录, 3-发消息)
   */
  Scene?: string
  /**
   * 电话号码 (业务名为bri_num时必填)
   */
  PhoneNumber?: string
  /**
   * Apk文件大小  (业务名为bri_apk时必填，除非已填FileMd5)
   */
  FileSize?: number
  /**
   * 点分格式的IP (业务名为bri_ip时必填)
   */
  Ip?: string
  /**
   * 安卓设备的Imei (业务名为bri_dev时必填)
   */
  Imei?: string
  /**
   * 微信号 (业务名为bri_social时必填, 除非已填QQ)
   */
  Wechat?: string
  /**
   * 微信号的可疑标签
   */
  WechatTag?: string
  /**
   * 子客户ID
   */
  SubAppid?: string
}

/**
 * DescribeBRI返回参数结构体
 */
export interface DescribeBRIResponse {
  /**
   * 业务风险情报响应体
   */
  ResponseData?: BRIResponse
  /**
   * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 响应
 */
export interface BRIResponse {
  /**
   * 风险分值，取值[0,100], 分值越高风险越高
   */
  Score?: number
  /**
   * 当Service为bri_num时,返回的风险标签有:
1) 疑似垃圾流量     说明: 结合号码的历史数据表现，判断该号码历史用互联网业务作恶行为，其产生的互联网行为对于其他业务来说属于作弊或垃圾流量。 
2) 疑似新客户       说明: 通过号码互联网行为（社交，浏览等）是否异常判断为小号或接码平台帐号。 

当Service为bri_dev时,返回的风险标签有:
1) 疑似真机假用户    说明: 根据设备的一些数据表现，我们判定为群控设备
2) 疑似假机         说明: 根据设备的一些数据表现，我们判定为模拟器或虚假设备ID
3) 疑似真用户假行为  说明: 根据设备的用户使用情况，我们判定该用户存在使用脚本、外挂、病毒等作弊行为

当Service为bri_ip时,返回的风险标签有:
1) 疑似垃圾流量     说明:结合IP的历史数据表现，判断该IP历史用互联网业务作恶行为，其产生的互联网行为对于其他业务来说属于作弊或垃圾流量。

当Service为bri_url时,返回的风险标签有:
1) 社工欺诈    说明: URL为社工欺诈
2) 信息诈骗    说明: URL为信息诈骗
3) 虚假销售    说明: URL为虚假销售
4) 恶意文件    说明: URL为恶意文件
5) 博彩网站    说明: URL为博彩网站
6) 色情网站    说明: URL为色情网站

当Service为bri_apk时,返回的风险标签有:
1) 安全   说明: APK为正规应用
2) 一般   说明: APK为未发现问题的正常应用
3) 风险   说明: APK为外挂或色情等风险应用
4) 病毒   说明: APK为包含恶意代码的恶意软件,可能破坏系统或者其他app正常使用
   */
  Tags?: Array<string>
}
