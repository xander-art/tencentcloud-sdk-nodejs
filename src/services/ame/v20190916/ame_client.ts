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
  Album,
  DescribeMusicResponse,
  DescribePkgOfflineMusicRequest,
  DescribeLyricResponse,
  ModifyMusicOnShelvesResponse,
  UseRange,
  DescribeKTVPlaylistDetailRequest,
  Station,
  Music,
  MusicDetailInfo,
  DescribeKTVMusicDetailRequest,
  DescribeStationsResponse,
  DescribePackageItemsResponse,
  DescribeCloudMusicPurchasedRequest,
  PackageItem,
  DescribeCloudMusicPurchasedResponse,
  DescribeKTVPlaylistsRequest,
  DataInfo,
  DescribeKTVPlaylistDetailResponse,
  Package,
  ReportDataResponse,
  ModifyMusicOnShelvesRequest,
  DescribePackageItemsRequest,
  AuthInfo,
  TakeMusicOffShelvesRequest,
  PutMusicOnTheShelvesResponse,
  TakeMusicOffShelves,
  Lyric,
  OfflineMusicDetail,
  DescribeItemByIdRequest,
  DescribeAuthInfoRequest,
  DescribeKTVPlaylistsResponse,
  Artist,
  DescribeStationsRequest,
  MusicOpenDetail,
  SearchKTVMusicsResponse,
  DescribeItemsRequest,
  Item,
  DescribeCloudMusicResponse,
  KTVMusicBaseInfo,
  DescribePackagesRequest,
  DescribeMusicSaleStatusRequest,
  SearchKTVMusicsRequest,
  ImagePath,
  DescribeItemsResponse,
  DescribePkgOfflineMusicResponse,
  KTVPlaylistBaseInfo,
  DescribeItemByIdResponse,
  MusicStatus,
  DescribeMusicSaleStatusResponse,
  PutMusicOnTheShelvesRequest,
  DescribePackagesResponse,
  DescribeCloudMusicRequest,
  DescribeAuthInfoResponse,
  TakeMusicOffShelvesResponse,
  DescribeLyricRequest,
  DescribeKTVMusicDetailResponse,
  DescribeMusicRequest,
  ReportDataRequest,
  KTVMusicDefinitionInfo,
} from "./ame_models"

/**
 * ame client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("ame.tencentcloudapi.com", "2019-09-16", clientConfig)
  }

  /**
   * 根据 Id 查询歌曲的详细信息，包含基础信息及播放信息。
   */
  async DescribeKTVMusicDetail(
    req: DescribeKTVMusicDetailRequest,
    cb?: (error: string, rep: DescribeKTVMusicDetailResponse) => void
  ): Promise<DescribeKTVMusicDetailResponse> {
    return this.request("DescribeKTVMusicDetail", req, cb)
  }

  /**
   * 根据歌曲ID查询歌曲信息
   */
  async DescribeItemById(
    req: DescribeItemByIdRequest,
    cb?: (error: string, rep: DescribeItemByIdResponse) => void
  ): Promise<DescribeItemByIdResponse> {
    return this.request("DescribeItemById", req, cb)
  }

  /**
   * 获取已购曲库包列表接口
   */
  async DescribePackages(
    req: DescribePackagesRequest,
    cb?: (error: string, rep: DescribePackagesResponse) => void
  ): Promise<DescribePackagesResponse> {
    return this.request("DescribePackages", req, cb)
  }

  /**
   * 根据接口的模式及歌曲ID来取得歌词信息或者波形图信息。
   */
  async DescribeLyric(
    req: DescribeLyricRequest,
    cb?: (error: string, rep: DescribeLyricResponse) => void
  ): Promise<DescribeLyricResponse> {
    return this.request("DescribeLyric", req, cb)
  }

  /**
   * 根据音乐信息查询音乐是否在售
   */
  async DescribeMusicSaleStatus(
    req: DescribeMusicSaleStatusRequest,
    cb?: (error: string, rep: DescribeMusicSaleStatusResponse) => void
  ): Promise<DescribeMusicSaleStatusResponse> {
    return this.request("DescribeMusicSaleStatus", req, cb)
  }

  /**
   * 根据歌单 Id 获取歌单详情，包括歌单的基础信息以及歌曲列表。
   */
  async DescribeKTVPlaylistDetail(
    req: DescribeKTVPlaylistDetailRequest,
    cb?: (error: string, rep: DescribeKTVPlaylistDetailResponse) => void
  ): Promise<DescribeKTVPlaylistDetailResponse> {
    return this.request("DescribeKTVPlaylistDetail", req, cb)
  }

  /**
   * 获取曲库包下已核销歌曲列表接口
   */
  async DescribePackageItems(
    req: DescribePackageItemsRequest,
    cb?: (error: string, rep: DescribePackageItemsResponse) => void
  ): Promise<DescribePackageItemsResponse> {
    return this.request("DescribePackageItems", req, cb)
  }

  /**
   * 该服务后续会停用，不再建议使用
   */
  async DescribeItems(
    req: DescribeItemsRequest,
    cb?: (error: string, rep: DescribeItemsResponse) => void
  ): Promise<DescribeItemsResponse> {
    return this.request("DescribeItems", req, cb)
  }

  /**
   * 获取授权项目信息列表
   */
  async DescribeAuthInfo(
    req: DescribeAuthInfoRequest,
    cb?: (error: string, rep: DescribeAuthInfoResponse) => void
  ): Promise<DescribeAuthInfoResponse> {
    return this.request("DescribeAuthInfo", req, cb)
  }

  /**
   * 客户上报用户数据功能，为了更好地为用户提供优质服务
   */
  async ReportData(
    req: ReportDataRequest,
    cb?: (error: string, rep: ReportDataResponse) => void
  ): Promise<ReportDataResponse> {
    return this.request("ReportData", req, cb)
  }

  /**
   * 获取曲库包歌曲播放信息接口
   */
  async DescribeMusic(
    req: DescribeMusicRequest,
    cb?: (error: string, rep: DescribeMusicResponse) => void
  ): Promise<DescribeMusicResponse> {
    return this.request("DescribeMusic", req, cb)
  }

  /**
   * 获取云音乐播放信息接口
   */
  async DescribeCloudMusic(
    req: DescribeCloudMusicRequest,
    cb?: (error: string, rep: DescribeCloudMusicResponse) => void
  ): Promise<DescribeCloudMusicResponse> {
    return this.request("DescribeCloudMusic", req, cb)
  }

  /**
   * 根据资源方，需要变更的参数，请求该接口进行变更，为空的参数默认为无变更
   */
  async ModifyMusicOnShelves(
    req: ModifyMusicOnShelvesRequest,
    cb?: (error: string, rep: ModifyMusicOnShelvesResponse) => void
  ): Promise<ModifyMusicOnShelvesResponse> {
    return this.request("ModifyMusicOnShelves", req, cb)
  }

  /**
   * 根据搜索条件，返回匹配的歌曲列表。
   */
  async SearchKTVMusics(
    req: SearchKTVMusicsRequest,
    cb?: (error: string, rep: SearchKTVMusicsResponse) => void
  ): Promise<SearchKTVMusicsResponse> {
    return this.request("SearchKTVMusics", req, cb)
  }

  /**
   * 获取直播互动曲库推荐歌单列表。
   */
  async DescribeKTVPlaylists(
    req: DescribeKTVPlaylistsRequest,
    cb?: (error: string, rep: DescribeKTVPlaylistsResponse) => void
  ): Promise<DescribeKTVPlaylistsResponse> {
    return this.request("DescribeKTVPlaylists", req, cb)
  }

  /**
   * 根据资源方所传MusicId进行将歌曲进行下架，多个MusicId使用逗号隔开
   */
  async TakeMusicOffShelves(
    req: TakeMusicOffShelvesRequest,
    cb?: (error: string, rep: TakeMusicOffShelvesResponse) => void
  ): Promise<TakeMusicOffShelvesResponse> {
    return this.request("TakeMusicOffShelves", req, cb)
  }

  /**
   * 获取授权项目下已购云音乐列表
   */
  async DescribeCloudMusicPurchased(
    req: DescribeCloudMusicPurchasedRequest,
    cb?: (error: string, rep: DescribeCloudMusicPurchasedResponse) => void
  ): Promise<DescribeCloudMusicPurchasedResponse> {
    return this.request("DescribeCloudMusicPurchased", req, cb)
  }

  /**
   * 该服务后续会停用，不再建议使用
   */
  async DescribeStations(
    req: DescribeStationsRequest,
    cb?: (error: string, rep: DescribeStationsResponse) => void
  ): Promise<DescribeStationsResponse> {
    return this.request("DescribeStations", req, cb)
  }

  /**
   * 根据资源方所传歌曲信息，进行歌曲上架，多个歌曲同时请求时，需构造复合结构进行请求
   */
  async PutMusicOnTheShelves(
    req: PutMusicOnTheShelvesRequest,
    cb?: (error: string, rep: PutMusicOnTheShelvesResponse) => void
  ): Promise<PutMusicOnTheShelvesResponse> {
    return this.request("PutMusicOnTheShelves", req, cb)
  }

  /**
   * 根据购买曲库包用户可查询已回退的歌曲信息
   */
  async DescribePkgOfflineMusic(
    req: DescribePkgOfflineMusicRequest,
    cb?: (error: string, rep: DescribePkgOfflineMusicResponse) => void
  ): Promise<DescribePkgOfflineMusicResponse> {
    return this.request("DescribePkgOfflineMusic", req, cb)
  }
}
