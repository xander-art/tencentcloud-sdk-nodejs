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
 * DescribeWorkSpaceBuildingCountAndArea请求参数结构体
 */
export type DescribeWorkSpaceBuildingCountAndAreaRequest = null

/**
 * DescribeSpaceDeviceRelationList请求参数结构体
 */
export type DescribeSpaceDeviceRelationListRequest = null

/**
 * DescribeAlarmTypeList返回参数结构体
 */
export interface DescribeAlarmTypeListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceStatusStat请求参数结构体
 */
export type DescribeDeviceStatusStatRequest = null

/**
 * DescribeVideoLiveStream返回参数结构体
 */
export interface DescribeVideoLiveStreamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTenantBuildingCountAndArea请求参数结构体
 */
export type DescribeTenantBuildingCountAndAreaRequest = null

/**
 * AddAlarmProcessRecord请求参数结构体
 */
export type AddAlarmProcessRecordRequest = null

/**
 * DescribeInterfaceList返回参数结构体
 */
export interface DescribeInterfaceListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDeviceName返回参数结构体
 */
export interface ModifyDeviceNameResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEdgeApplicationToken返回参数结构体
 */
export interface DescribeEdgeApplicationTokenResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 租户人员结果
 */
export interface SsoUserResult {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 租户人员数据
注意：此字段可能返回 null，表示取不到有效值。
   */
  Users?: Array<SsoUser>
}

/**
 * 部门用户
 */
export interface SsoTeamUser {
  /**
   * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealName?: string
  /**
   * 用户类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserType?: string
  /**
   * 所属租户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: string
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 电话
注意：此字段可能返回 null，表示取不到有效值。
   */
  Phone?: string
  /**
   * 用户状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateAt?: number
  /**
   * 部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentId?: string
  /**
   * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentName?: string
  /**
   * 是否关联权限
注意：此字段可能返回 null，表示取不到有效值。
   */
  LinkFilter?: number
}

/**
 * DescribeWorkspaceList返回参数结构体
 */
export interface DescribeWorkspaceListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeModelList返回参数结构体
 */
export interface DescribeModelListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleDetail请求参数结构体
 */
export type DescribeRuleDetailRequest = null

/**
 * BatchCreateDevice返回参数结构体
 */
export interface BatchCreateDeviceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApplicationToken返回参数结构体
 */
export interface CreateApplicationTokenResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTenantUserList请求参数结构体
 */
export interface DescribeTenantUserListRequest {
  /**
   * 翻页页码
   */
  Offset: number
  /**
   * 翻页大小
   */
  Limit: number
  /**
   * token
   */
  ApplicationToken: string
  /**
   * 租户ID
   */
  TenantId?: string
  /**
   * 更新时间戳，单位秒
   */
  UpdateAt?: number
  /**
   * 部门ID
   */
  DepartmentId?: string
  /**
   * 用户id
   */
  Cursor?: string
  /**
   * 状态，0，获取所有数据，1正常启用，2禁用
   */
  Status?: number
  /**
   * 项目空间id
   */
  WorkspaceId?: string
  /**
   * 关键词
   */
  Keyword?: string
  /**
   * 是否递归获取子级数据，0需要，1不需要，默认为0
   */
  NoRecursive?: string
}

/**
 * StopVideoStreaming返回参数结构体
 */
export interface StopVideoStreamingResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceStatusList返回参数结构体
 */
export interface DescribeDeviceStatusListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDeviceName请求参数结构体
 */
export type ModifyDeviceNameRequest = null

/**
 * DescribeFileUploadURL返回参数结构体
 */
export interface DescribeFileUploadURLResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileDownloadURL返回参数结构体
 */
export interface DescribeFileDownloadURLResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRuleDetail返回参数结构体
 */
export interface DescribeRuleDetailResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceInfoByDeviceId返回参数结构体
 */
export interface DescribeSpaceInfoByDeviceIdResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationList请求参数结构体
 */
export type DescribeApplicationListRequest = null

/**
 * DescribeSceneList请求参数结构体
 */
export type DescribeSceneListRequest = null

/**
 * DescribeDeviceList请求参数结构体
 */
export type DescribeDeviceListRequest = null

/**
 * DescribeSpaceRelationByDeviceId请求参数结构体
 */
export type DescribeSpaceRelationByDeviceIdRequest = null

/**
 * ChangeAlarmStatus返回参数结构体
 */
export interface ChangeAlarmStatusResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBuildingModel返回参数结构体
 */
export interface DescribeBuildingModelResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchReportAppMessage返回参数结构体
 */
export interface BatchReportAppMessageResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeElementProfilePage请求参数结构体
 */
export type DescribeElementProfilePageRequest = null

/**
 * DescribePropertyList返回参数结构体
 */
export interface DescribePropertyListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeApplicationList返回参数结构体
 */
export interface DescribeApplicationListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFileDownloadURL请求参数结构体
 */
export type DescribeFileDownloadURLRequest = null

/**
 * StopVideoStreaming请求参数结构体
 */
export type StopVideoStreamingRequest = null

/**
 * DescribeSpaceTypeList请求参数结构体
 */
export type DescribeSpaceTypeListRequest = null

/**
 * DescribeModelList请求参数结构体
 */
export type DescribeModelListRequest = null

/**
 * 部门用户结果
 */
export interface SsoDepartmentsResult {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 部门列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Departments?: Array<SsoDepartment>
}

/**
 * DescribeBuildingList返回参数结构体
 */
export interface DescribeBuildingListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 空间用户结果
 */
export interface SsoTeamUserResult {
  /**
   * 总数
注意：此字段可能返回 null，表示取不到有效值。
   */
  Total?: number
  /**
   * 部门用户列表
注意：此字段可能返回 null，表示取不到有效值。
   */
  Users?: Array<SsoTeamUser>
}

/**
 * DescribeWorkspaceUserList返回参数结构体
 */
export interface DescribeWorkspaceUserListResponse {
  /**
   * 返回数据
   */
  Result?: SsoTeamUserResult
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePropertyList请求参数结构体
 */
export type DescribePropertyListRequest = null

/**
 * DescribeProductList请求参数结构体
 */
export type DescribeProductListRequest = null

/**
 * ControlCameraPTZ返回参数结构体
 */
export interface ControlCameraPTZResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkspaceList请求参数结构体
 */
export type DescribeWorkspaceListRequest = null

/**
 * DescribeDeviceTypeList返回参数结构体
 */
export interface DescribeDeviceTypeListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoRecordStream返回参数结构体
 */
export interface DescribeVideoRecordStreamResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmLevelList请求参数结构体
 */
export type DescribeAlarmLevelListRequest = null

/**
 * BatchReportAppMessage请求参数结构体
 */
export type BatchReportAppMessageRequest = null

/**
 * DescribeDeviceStatusStat返回参数结构体
 */
export interface DescribeDeviceStatusStatResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBuildingModel请求参数结构体
 */
export type DescribeBuildingModelRequest = null

/**
 * AddAlarmProcessRecord返回参数结构体
 */
export interface AddAlarmProcessRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceDeviceIdList返回参数结构体
 */
export interface DescribeSpaceDeviceIdListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeElementProfileTree返回参数结构体
 */
export interface DescribeElementProfileTreeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTenantDepartmentList请求参数结构体
 */
export interface DescribeTenantDepartmentListRequest {
  /**
   * 翻页页码
   */
  Offset: number
  /**
   * 翻页大小
   */
  Limit: number
  /**
   * token
   */
  ApplicationToken: string
  /**
   * 租户ID
   */
  TenantId?: string
  /**
   * 更新时间戳，单位秒
   */
  UpdateAt?: number
  /**
   * 部门ID
   */
  DepartmentId?: string
  /**
   * 用户id
   */
  Cursor?: string
}

/**
 * DescribeBuildingProfile请求参数结构体
 */
export type DescribeBuildingProfileRequest = null

/**
 * DescribeDeviceShadowList返回参数结构体
 */
export interface DescribeDeviceShadowListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBuildingList请求参数结构体
 */
export type DescribeBuildingListRequest = null

/**
 * DescribeWorkspaceUserList请求参数结构体
 */
export interface DescribeWorkspaceUserListRequest {
  /**
   * 翻页页码
   */
  Offset: number
  /**
   * 翻页大小
   */
  Limit: number
  /**
   * 工作空间ID
   */
  WorkspaceId: string
  /**
   * token
   */
  ApplicationToken: string
  /**
   * 租户ID
   */
  TenantId?: string
  /**
   * 更新时间戳，单位秒
   */
  UpdateAt?: number
}

/**
 * DescribeVideoCloudRecord返回参数结构体
 */
export interface DescribeVideoCloudRecordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceDeviceRelationList返回参数结构体
 */
export interface DescribeSpaceDeviceRelationListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateWorkspaceParkAttributes请求参数结构体
 */
export type UpdateWorkspaceParkAttributesRequest = null

/**
 * DescribeLinkRuleList返回参数结构体
 */
export interface DescribeLinkRuleListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceTypeList返回参数结构体
 */
export interface DescribeSpaceTypeListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ControlDevice请求参数结构体
 */
export type ControlDeviceRequest = null

/**
 * DescribeAlarmLevelList返回参数结构体
 */
export interface DescribeAlarmLevelListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCityWorkspaceList请求参数结构体
 */
export type DescribeCityWorkspaceListRequest = null

/**
 * DescribeDeviceTagList返回参数结构体
 */
export interface DescribeDeviceTagListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeActionList返回参数结构体
 */
export interface DescribeActionListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchCreateDevice请求参数结构体
 */
export type BatchCreateDeviceRequest = null

/**
 * BatchKillAlarm请求参数结构体
 */
export type BatchKillAlarmRequest = null

/**
 * DescribeElementProfileTree请求参数结构体
 */
export type DescribeElementProfileTreeRequest = null

/**
 * DescribeLinkRuleList请求参数结构体
 */
export type DescribeLinkRuleListRequest = null

/**
 * DescribeEventList返回参数结构体
 */
export interface DescribeEventListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceTagList请求参数结构体
 */
export type DescribeDeviceTagListRequest = null

/**
 * DescribeBuildingProfile返回参数结构体
 */
export interface DescribeBuildingProfileResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReportAppMessage请求参数结构体
 */
export type ReportAppMessageRequest = null

/**
 * DescribeFileUploadURL请求参数结构体
 */
export type DescribeFileUploadURLRequest = null

/**
 * DescribeDeviceStatusList请求参数结构体
 */
export type DescribeDeviceStatusListRequest = null

/**
 * DescribeVideoCloudRecord请求参数结构体
 */
export type DescribeVideoCloudRecordRequest = null

/**
 * DescribeAdministrationByTag请求参数结构体
 */
export type DescribeAdministrationByTagRequest = null

/**
 * DescribeCityWorkspaceList返回参数结构体
 */
export interface DescribeCityWorkspaceListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ControlDevice返回参数结构体
 */
export interface ControlDeviceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmList返回参数结构体
 */
export interface DescribeAlarmListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceRelationByDeviceId返回参数结构体
 */
export interface DescribeSpaceRelationByDeviceIdResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ControlCameraPTZ请求参数结构体
 */
export type ControlCameraPTZRequest = null

/**
 * DescribeSpaceInfoByDeviceId请求参数结构体
 */
export type DescribeSpaceInfoByDeviceIdRequest = null

/**
 * DescribeInterfaceList请求参数结构体
 */
export type DescribeInterfaceListRequest = null

/**
 * DescribeProductList返回参数结构体
 */
export interface DescribeProductListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoRecordStream请求参数结构体
 */
export type DescribeVideoRecordStreamRequest = null

/**
 * DescribeAlarmStatusList返回参数结构体
 */
export interface DescribeAlarmStatusListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateApplicationToken请求参数结构体
 */
export type CreateApplicationTokenRequest = null

/**
 * DescribeAlarmStatusList请求参数结构体
 */
export type DescribeAlarmStatusListRequest = null

/**
 * UpdateWorkspaceParkAttributes返回参数结构体
 */
export interface UpdateWorkspaceParkAttributesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTenantDepartmentList返回参数结构体
 */
export interface DescribeTenantDepartmentListResponse {
  /**
   * 返回数据
   */
  Result?: SsoDepartmentsResult
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeWorkSpaceBuildingCountAndArea返回参数结构体
 */
export interface DescribeWorkSpaceBuildingCountAndAreaResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReportAppMessage返回参数结构体
 */
export interface ReportAppMessageResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAlarmList请求参数结构体
 */
export type DescribeAlarmListRequest = null

/**
 * DescribeAdministrationByTag返回参数结构体
 */
export interface DescribeAdministrationByTagResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 部门用户
 */
export interface SsoDepartment {
  /**
   * 部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentId?: string
  /**
   * 部门名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  Name?: string
  /**
   * 父级部门ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  ParentDepartmentId?: string
}

/**
 * BatchKillAlarm返回参数结构体
 */
export interface BatchKillAlarmResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceTypeList请求参数结构体
 */
export type DescribeDeviceTypeListRequest = null

/**
 * DescribeDeviceShadowList请求参数结构体
 */
export type DescribeDeviceShadowListRequest = null

/**
 * DescribeSceneList返回参数结构体
 */
export interface DescribeSceneListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDeviceList返回参数结构体
 */
export interface DescribeDeviceListResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTenantBuildingCountAndArea返回参数结构体
 */
export interface DescribeTenantBuildingCountAndAreaResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeVideoLiveStream请求参数结构体
 */
export type DescribeVideoLiveStreamRequest = null

/**
 * 用户结果
 */
export interface SsoUser {
  /**
   * 用户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserId?: string
  /**
   * 用户昵称
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserName?: string
  /**
   * 用户名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  RealName?: string
  /**
   * 用户类型
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserType?: string
  /**
   * 所属租户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  TenantId?: string
  /**
   * 所属组ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  UserGroup?: string
  /**
   * 邮箱
注意：此字段可能返回 null，表示取不到有效值。
   */
  Email?: string
  /**
   * 电话
注意：此字段可能返回 null，表示取不到有效值。
   */
  Phone?: string
  /**
   * 用户状态
注意：此字段可能返回 null，表示取不到有效值。
   */
  Status?: number
  /**
   * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  CreateAt?: number
  /**
   * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
   */
  UpdateAt?: number
  /**
   * 是否属于团队
注意：此字段可能返回 null，表示取不到有效值。
   */
  BelongTeam?: number
  /**
   * ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentId?: string
  /**
   * 名称
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentName?: string
  /**
   * 子账户ID
注意：此字段可能返回 null，表示取不到有效值。
   */
  DepartmentUserId?: number
  /**
   * 密码
注意：此字段可能返回 null，表示取不到有效值。
   */
  Password?: string
}

/**
 * ChangeAlarmStatus请求参数结构体
 */
export type ChangeAlarmStatusRequest = null

/**
 * DescribeAlarmTypeList请求参数结构体
 */
export type DescribeAlarmTypeListRequest = null

/**
 * DescribeCameraExtendInfo返回参数结构体
 */
export interface DescribeCameraExtendInfoResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeCameraExtendInfo请求参数结构体
 */
export type DescribeCameraExtendInfoRequest = null

/**
 * DescribeTenantUserList返回参数结构体
 */
export interface DescribeTenantUserListResponse {
  /**
   * 返回数据
   */
  Result?: SsoUserResult
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeEventList请求参数结构体
 */
export type DescribeEventListRequest = null

/**
 * DescribeElementProfilePage返回参数结构体
 */
export interface DescribeElementProfilePageResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSpaceDeviceIdList请求参数结构体
 */
export type DescribeSpaceDeviceIdListRequest = null

/**
 * DescribeActionList请求参数结构体
 */
export type DescribeActionListRequest = null

/**
 * DescribeEdgeApplicationToken请求参数结构体
 */
export type DescribeEdgeApplicationTokenRequest = null
