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
import { SendMessageResponse, BatchContent, SendMessageRequest } from "./dataintegration_models"

/**
 * dataintegration client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dataintegration.tencentcloudapi.com", "2022-06-13", clientConfig)
  }

  /**
   * 使用SDK将数据上报到DIP
   */
  async SendMessage(
    req: SendMessageRequest,
    cb?: (error: string, rep: SendMessageResponse) => void
  ): Promise<SendMessageResponse> {
    return this.request("SendMessage", req, cb)
  }
}
