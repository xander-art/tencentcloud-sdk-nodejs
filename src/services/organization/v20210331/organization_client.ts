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
  DescribeShareUnitResourcesResponse,
  UpdateOrganizationIdentityRequest,
  DeleteOrganizationRequest,
  ListOrganizationIdentityRequest,
  DeleteOrganizationMembersRequest,
  CreateOrganizationResponse,
  AddShareUnitResourcesResponse,
  AddOrganizationNodeResponse,
  DescribeOrganizationFinancialByMonthResponse,
  OrgFinancialByMonth,
  DeleteShareUnitResponse,
  DeleteShareUnitMembersResponse,
  CreateOrganizationIdentityRequest,
  DescribeOrganizationResponse,
  DescribeOrganizationMemberPoliciesRequest,
  DeleteOrganizationMembersPolicyResponse,
  ShareUnitMember,
  CancelOrganizationMemberAuthAccountRequest,
  DeleteOrganizationResponse,
  OrgMemberAuthAccount,
  MemberMainInfo,
  DescribeShareUnitResourcesRequest,
  DeleteShareUnitResourcesRequest,
  UpdateOrganizationNodeRequest,
  DescribeShareAreasResponse,
  DescribeOrganizationAuthNodeResponse,
  BindOrganizationMemberAuthAccountRequest,
  DescribeShareUnitsResponse,
  UpdateOrganizationMemberEmailBindResponse,
  DeleteOrganizationMembersResponse,
  ManagerShareUnit,
  DescribeOrganizationMemberAuthIdentitiesRequest,
  CreateOrganizationMemberAuthIdentityResponse,
  DescribeOrganizationRequest,
  DescribeOrganizationNodesRequest,
  BindOrganizationMemberAuthAccountResponse,
  CreateOrganizationMemberResponse,
  MoveOrganizationNodeMembersRequest,
  UpdateOrganizationMemberResponse,
  AuthNode,
  DescribeOrganizationMemberEmailBindResponse,
  DeleteOrganizationNodesRequest,
  QuitOrganizationResponse,
  IdentityPolicy,
  AddOrganizationMemberEmailRequest,
  ListOrganizationIdentityResponse,
  DescribeOrganizationMembersResponse,
  QuitOrganizationRequest,
  AddOrganizationNodeRequest,
  AddShareUnitMembersRequest,
  AddShareUnitRequest,
  CreateOrganizationMemberRequest,
  DescribeOrganizationAuthNodeRequest,
  DescribeOrganizationMemberAuthAccountsRequest,
  DescribeShareUnitMembersResponse,
  DescribeShareAreasRequest,
  DescribeOrganizationMemberAuthAccountsResponse,
  OrgIdentity,
  DescribeOrganizationMembersRequest,
  UpdateShareUnitResponse,
  DeleteOrganizationMemberAuthIdentityResponse,
  UpdateOrganizationMemberEmailBindRequest,
  UpdateShareUnitRequest,
  DescribeShareUnitsRequest,
  OrgPermission,
  OrgMemberFinancial,
  AddOrganizationMemberEmailResponse,
  AddShareUnitMembersResponse,
  CreateOrganizationMemberPolicyRequest,
  CreateOrganizationRequest,
  ShareResource,
  CreateOrganizationMembersPolicyRequest,
  MemberIdentity,
  OrgProductFinancial,
  AddShareUnitResponse,
  DescribeOrganizationFinancialByProductResponse,
  DescribeOrganizationFinancialByProductRequest,
  OrgMemberPolicy,
  CreateOrganizationMemberPolicyResponse,
  DescribeShareUnitMembersRequest,
  CancelOrganizationMemberAuthAccountResponse,
  UpdateOrganizationMemberRequest,
  AddShareUnitResourcesRequest,
  ShareMember,
  DeleteShareUnitMembersRequest,
  DescribeOrganizationMemberAuthIdentitiesResponse,
  ShareUnitResource,
  DeleteOrganizationIdentityResponse,
  DescribeOrganizationMemberEmailBindRequest,
  OrgMember,
  MoveOrganizationNodeMembersResponse,
  OrgMemberAuthIdentity,
  OrgNode,
  DeleteAccountRequest,
  CreateOrganizationMemberAuthIdentityRequest,
  DescribeOrganizationFinancialByMemberRequest,
  DescribeOrganizationFinancialByMonthRequest,
  CreateOrganizationMembersPolicyResponse,
  DeleteShareUnitResourcesResponse,
  CreateOrganizationIdentityResponse,
  UpdateOrganizationIdentityResponse,
  DescribeOrganizationNodesResponse,
  DeleteOrganizationMembersPolicyRequest,
  DeleteOrganizationIdentityRequest,
  UpdateOrganizationNodeResponse,
  DeleteOrganizationNodesResponse,
  DescribeOrganizationFinancialByMemberResponse,
  ProductResource,
  DeleteShareUnitRequest,
  DescribeOrganizationMemberPoliciesResponse,
  DeleteOrganizationMemberAuthIdentityRequest,
  ShareArea,
  DeleteAccountResponse,
} from "./organization_models"

/**
 * organization client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("organization.tencentcloudapi.com", "2021-03-31", clientConfig)
  }

  /**
   * 获取企业组织成员列表
   */
  async DescribeOrganizationMembers(
    req: DescribeOrganizationMembersRequest,
    cb?: (error: string, rep: DescribeOrganizationMembersResponse) => void
  ): Promise<DescribeOrganizationMembersResponse> {
    return this.request("DescribeOrganizationMembers", req, cb)
  }

  /**
   * 退出企业组织
   */
  async QuitOrganization(
    req: QuitOrganizationRequest,
    cb?: (error: string, rep: QuitOrganizationResponse) => void
  ): Promise<QuitOrganizationResponse> {
    return this.request("QuitOrganization", req, cb)
  }

  /**
   * 获取组织成员访问身份列表
   */
  async ListOrganizationIdentity(
    req: ListOrganizationIdentityRequest,
    cb?: (error: string, rep: ListOrganizationIdentityResponse) => void
  ): Promise<ListOrganizationIdentityResponse> {
    return this.request("ListOrganizationIdentity", req, cb)
  }

  /**
   * 更新共享单元。
   */
  async UpdateShareUnit(
    req: UpdateShareUnitRequest,
    cb?: (error: string, rep: UpdateShareUnitResponse) => void
  ): Promise<UpdateShareUnitResponse> {
    return this.request("UpdateShareUnit", req, cb)
  }

  /**
   * 更新组织成员信息
   */
  async UpdateOrganizationMember(
    req: UpdateOrganizationMemberRequest,
    cb?: (error: string, rep: UpdateOrganizationMemberResponse) => void
  ): Promise<UpdateOrganizationMemberResponse> {
    return this.request("UpdateOrganizationMember", req, cb)
  }

  /**
   * 获取组织成员被绑定授权关系的子账号列表
   */
  async DescribeOrganizationMemberAuthAccounts(
    req: DescribeOrganizationMemberAuthAccountsRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberAuthAccountsResponse) => void
  ): Promise<DescribeOrganizationMemberAuthAccountsResponse> {
    return this.request("DescribeOrganizationMemberAuthAccounts", req, cb)
  }

  /**
   * 获取共享单元资源列表。
   */
  async DescribeShareUnitResources(
    req: DescribeShareUnitResourcesRequest,
    cb?: (error: string, rep: DescribeShareUnitResourcesResponse) => void
  ): Promise<DescribeShareUnitResourcesResponse> {
    return this.request("DescribeShareUnitResources", req, cb)
  }

  /**
   * 删除组织成员访问策略
   */
  async DeleteOrganizationMembersPolicy(
    req: DeleteOrganizationMembersPolicyRequest,
    cb?: (error: string, rep: DeleteOrganizationMembersPolicyResponse) => void
  ): Promise<DeleteOrganizationMembersPolicyResponse> {
    return this.request("DeleteOrganizationMembersPolicy", req, cb)
  }

  /**
   * 添加企业组织节点
   */
  async AddOrganizationNode(
    req: AddOrganizationNodeRequest,
    cb?: (error: string, rep: AddOrganizationNodeResponse) => void
  ): Promise<AddOrganizationNodeResponse> {
    return this.request("AddOrganizationNode", req, cb)
  }

  /**
   * 修改绑定成员邮箱
   */
  async UpdateOrganizationMemberEmailBind(
    req: UpdateOrganizationMemberEmailBindRequest,
    cb?: (error: string, rep: UpdateOrganizationMemberEmailBindResponse) => void
  ): Promise<UpdateOrganizationMemberEmailBindResponse> {
    return this.request("UpdateOrganizationMemberEmailBind", req, cb)
  }

  /**
   * 获取共享单元成员列表。
   */
  async DescribeShareUnitMembers(
    req: DescribeShareUnitMembersRequest,
    cb?: (error: string, rep: DescribeShareUnitMembersResponse) => void
  ): Promise<DescribeShareUnitMembersResponse> {
    return this.request("DescribeShareUnitMembers", req, cb)
  }

  /**
   * 获取组织成员访问授权列表
   */
  async DescribeOrganizationMemberAuthIdentities(
    req: DescribeOrganizationMemberAuthIdentitiesRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberAuthIdentitiesResponse) => void
  ): Promise<DescribeOrganizationMemberAuthIdentitiesResponse> {
    return this.request("DescribeOrganizationMemberAuthIdentities", req, cb)
  }

  /**
   * 更新企业组织节点
   */
  async UpdateOrganizationNode(
    req: UpdateOrganizationNodeRequest,
    cb?: (error: string, rep: UpdateOrganizationNodeResponse) => void
  ): Promise<UpdateOrganizationNodeResponse> {
    return this.request("UpdateOrganizationNode", req, cb)
  }

  /**
   * 删除共享单元成员
   */
  async DeleteShareUnitMembers(
    req: DeleteShareUnitMembersRequest,
    cb?: (error: string, rep: DeleteShareUnitMembersResponse) => void
  ): Promise<DeleteShareUnitMembersResponse> {
    return this.request("DeleteShareUnitMembers", req, cb)
  }

  /**
   * 批量删除企业组织成员
   */
  async DeleteOrganizationMembers(
    req: DeleteOrganizationMembersRequest,
    cb?: (error: string, rep: DeleteOrganizationMembersResponse) => void
  ): Promise<DeleteOrganizationMembersResponse> {
    return this.request("DeleteOrganizationMembers", req, cb)
  }

  /**
   * 更新组织身份
   */
  async UpdateOrganizationIdentity(
    req: UpdateOrganizationIdentityRequest,
    cb?: (error: string, rep: UpdateOrganizationIdentityResponse) => void
  ): Promise<UpdateOrganizationIdentityResponse> {
    return this.request("UpdateOrganizationIdentity", req, cb)
  }

  /**
   * 以月维度获取组织财务信息趋势
   */
  async DescribeOrganizationFinancialByMonth(
    req: DescribeOrganizationFinancialByMonthRequest,
    cb?: (error: string, rep: DescribeOrganizationFinancialByMonthResponse) => void
  ): Promise<DescribeOrganizationFinancialByMonthResponse> {
    return this.request("DescribeOrganizationFinancialByMonth", req, cb)
  }

  /**
   * 删除成员账号
   */
  async DeleteAccount(
    req: DeleteAccountRequest,
    cb?: (error: string, rep: DeleteAccountResponse) => void
  ): Promise<DeleteAccountResponse> {
    return this.request("DeleteAccount", req, cb)
  }

  /**
   * 批量删除企业组织节点
   */
  async DeleteOrganizationNodes(
    req: DeleteOrganizationNodesRequest,
    cb?: (error: string, rep: DeleteOrganizationNodesResponse) => void
  ): Promise<DeleteOrganizationNodesResponse> {
    return this.request("DeleteOrganizationNodes", req, cb)
  }

  /**
   * 删除共享单元资源
   */
  async DeleteShareUnitResources(
    req: DeleteShareUnitResourcesRequest,
    cb?: (error: string, rep: DeleteShareUnitResourcesResponse) => void
  ): Promise<DeleteShareUnitResourcesResponse> {
    return this.request("DeleteShareUnitResources", req, cb)
  }

  /**
   * 获取共享单元列表。
   */
  async DescribeShareUnits(
    req: DescribeShareUnitsRequest,
    cb?: (error: string, rep: DescribeShareUnitsResponse) => void
  ): Promise<DescribeShareUnitsResponse> {
    return this.request("DescribeShareUnits", req, cb)
  }

  /**
   * 获取组织成员的授权策略列表
   */
  async DescribeOrganizationMemberPolicies(
    req: DescribeOrganizationMemberPoliciesRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberPoliciesResponse) => void
  ): Promise<DescribeOrganizationMemberPoliciesResponse> {
    return this.request("DescribeOrganizationMemberPolicies", req, cb)
  }

  /**
   * 删除企业组织
   */
  async DeleteOrganization(
    req?: DeleteOrganizationRequest,
    cb?: (error: string, rep: DeleteOrganizationResponse) => void
  ): Promise<DeleteOrganizationResponse> {
    return this.request("DeleteOrganization", req, cb)
  }

  /**
     * 取消组织成员和组织管理员子账号的授权关系

     */
  async CancelOrganizationMemberAuthAccount(
    req: CancelOrganizationMemberAuthAccountRequest,
    cb?: (error: string, rep: CancelOrganizationMemberAuthAccountResponse) => void
  ): Promise<CancelOrganizationMemberAuthAccountResponse> {
    return this.request("CancelOrganizationMemberAuthAccount", req, cb)
  }

  /**
   * 以成员维度获取组织财务信息
   */
  async DescribeOrganizationFinancialByMember(
    req: DescribeOrganizationFinancialByMemberRequest,
    cb?: (error: string, rep: DescribeOrganizationFinancialByMemberResponse) => void
  ): Promise<DescribeOrganizationFinancialByMemberResponse> {
    return this.request("DescribeOrganizationFinancialByMember", req, cb)
  }

  /**
   * 添加组织成员访问授权
   */
  async CreateOrganizationMemberAuthIdentity(
    req: CreateOrganizationMemberAuthIdentityRequest,
    cb?: (error: string, rep: CreateOrganizationMemberAuthIdentityResponse) => void
  ): Promise<CreateOrganizationMemberAuthIdentityResponse> {
    return this.request("CreateOrganizationMemberAuthIdentity", req, cb)
  }

  /**
   * 添加共享单元资源
   */
  async AddShareUnitResources(
    req: AddShareUnitResourcesRequest,
    cb?: (error: string, rep: AddShareUnitResourcesResponse) => void
  ): Promise<AddShareUnitResourcesResponse> {
    return this.request("AddShareUnitResources", req, cb)
  }

  /**
   * 创建组织成员访问策略
   */
  async CreateOrganizationMembersPolicy(
    req: CreateOrganizationMembersPolicyRequest,
    cb?: (error: string, rep: CreateOrganizationMembersPolicyResponse) => void
  ): Promise<CreateOrganizationMembersPolicyResponse> {
    return this.request("CreateOrganizationMembersPolicy", req, cb)
  }

  /**
   * 获取可共享地域列表
   */
  async DescribeShareAreas(
    req: DescribeShareAreasRequest,
    cb?: (error: string, rep: DescribeShareAreasResponse) => void
  ): Promise<DescribeShareAreasResponse> {
    return this.request("DescribeShareAreas", req, cb)
  }

  /**
   * 获取企业组织信息
   */
  async DescribeOrganization(
    req: DescribeOrganizationRequest,
    cb?: (error: string, rep: DescribeOrganizationResponse) => void
  ): Promise<DescribeOrganizationResponse> {
    return this.request("DescribeOrganization", req, cb)
  }

  /**
   * 移动成员到指定企业组织节点
   */
  async MoveOrganizationNodeMembers(
    req: MoveOrganizationNodeMembersRequest,
    cb?: (error: string, rep: MoveOrganizationNodeMembersResponse) => void
  ): Promise<MoveOrganizationNodeMembersResponse> {
    return this.request("MoveOrganizationNodeMembers", req, cb)
  }

  /**
   * 删除共享单元。
   */
  async DeleteShareUnit(
    req: DeleteShareUnitRequest,
    cb?: (error: string, rep: DeleteShareUnitResponse) => void
  ): Promise<DeleteShareUnitResponse> {
    return this.request("DeleteShareUnit", req, cb)
  }

  /**
   * 添加组织身份
   */
  async CreateOrganizationIdentity(
    req: CreateOrganizationIdentityRequest,
    cb?: (error: string, rep: CreateOrganizationIdentityResponse) => void
  ): Promise<CreateOrganizationIdentityResponse> {
    return this.request("CreateOrganizationIdentity", req, cb)
  }

  /**
   * 删除组织身份
   */
  async DeleteOrganizationIdentity(
    req: DeleteOrganizationIdentityRequest,
    cb?: (error: string, rep: DeleteOrganizationIdentityResponse) => void
  ): Promise<DeleteOrganizationIdentityResponse> {
    return this.request("DeleteOrganizationIdentity", req, cb)
  }

  /**
   * 添加组织成员邮箱
   */
  async AddOrganizationMemberEmail(
    req: AddOrganizationMemberEmailRequest,
    cb?: (error: string, rep: AddOrganizationMemberEmailResponse) => void
  ): Promise<AddOrganizationMemberEmailResponse> {
    return this.request("AddOrganizationMemberEmail", req, cb)
  }

  /**
   * 查询成员邮箱绑定详细信息
   */
  async DescribeOrganizationMemberEmailBind(
    req: DescribeOrganizationMemberEmailBindRequest,
    cb?: (error: string, rep: DescribeOrganizationMemberEmailBindResponse) => void
  ): Promise<DescribeOrganizationMemberEmailBindResponse> {
    return this.request("DescribeOrganizationMemberEmailBind", req, cb)
  }

  /**
   * 创建组织成员
   */
  async CreateOrganizationMember(
    req: CreateOrganizationMemberRequest,
    cb?: (error: string, rep: CreateOrganizationMemberResponse) => void
  ): Promise<CreateOrganizationMemberResponse> {
    return this.request("CreateOrganizationMember", req, cb)
  }

  /**
   * 绑定组织成员和组织管理员子账号的授权关系
   */
  async BindOrganizationMemberAuthAccount(
    req: BindOrganizationMemberAuthAccountRequest,
    cb?: (error: string, rep: BindOrganizationMemberAuthAccountResponse) => void
  ): Promise<BindOrganizationMemberAuthAccountResponse> {
    return this.request("BindOrganizationMemberAuthAccount", req, cb)
  }

  /**
   * 创建共享单元，只有企业组织管理员可创建。
   */
  async AddShareUnit(
    req: AddShareUnitRequest,
    cb?: (error: string, rep: AddShareUnitResponse) => void
  ): Promise<AddShareUnitResponse> {
    return this.request("AddShareUnit", req, cb)
  }

  /**
   * 以产品维度获取组织财务信息
   */
  async DescribeOrganizationFinancialByProduct(
    req: DescribeOrganizationFinancialByProductRequest,
    cb?: (error: string, rep: DescribeOrganizationFinancialByProductResponse) => void
  ): Promise<DescribeOrganizationFinancialByProductResponse> {
    return this.request("DescribeOrganizationFinancialByProduct", req, cb)
  }

  /**
   * 获取已设置管理员的互信主体关系列表
   */
  async DescribeOrganizationAuthNode(
    req: DescribeOrganizationAuthNodeRequest,
    cb?: (error: string, rep: DescribeOrganizationAuthNodeResponse) => void
  ): Promise<DescribeOrganizationAuthNodeResponse> {
    return this.request("DescribeOrganizationAuthNode", req, cb)
  }

  /**
   * 添加共享单元成员
   */
  async AddShareUnitMembers(
    req: AddShareUnitMembersRequest,
    cb?: (error: string, rep: AddShareUnitMembersResponse) => void
  ): Promise<AddShareUnitMembersResponse> {
    return this.request("AddShareUnitMembers", req, cb)
  }

  /**
   * 获取组织节点列表
   */
  async DescribeOrganizationNodes(
    req: DescribeOrganizationNodesRequest,
    cb?: (error: string, rep: DescribeOrganizationNodesResponse) => void
  ): Promise<DescribeOrganizationNodesResponse> {
    return this.request("DescribeOrganizationNodes", req, cb)
  }

  /**
   * 创建企业组织
   */
  async CreateOrganization(
    req?: CreateOrganizationRequest,
    cb?: (error: string, rep: CreateOrganizationResponse) => void
  ): Promise<CreateOrganizationResponse> {
    return this.request("CreateOrganization", req, cb)
  }

  /**
   * 创建组织成员访问授权策略
   */
  async CreateOrganizationMemberPolicy(
    req: CreateOrganizationMemberPolicyRequest,
    cb?: (error: string, rep: CreateOrganizationMemberPolicyResponse) => void
  ): Promise<CreateOrganizationMemberPolicyResponse> {
    return this.request("CreateOrganizationMemberPolicy", req, cb)
  }

  /**
   * 删除组织成员访问授权
   */
  async DeleteOrganizationMemberAuthIdentity(
    req: DeleteOrganizationMemberAuthIdentityRequest,
    cb?: (error: string, rep: DeleteOrganizationMemberAuthIdentityResponse) => void
  ): Promise<DeleteOrganizationMemberAuthIdentityResponse> {
    return this.request("DeleteOrganizationMemberAuthIdentity", req, cb)
  }
}
