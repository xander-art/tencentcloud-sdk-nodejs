import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ModifyInstanceResponse, DescribeInstanceStateRequest, DestroyInstanceByApiResponse, DestroyInstanceByApiRequest, CreateInstanceByApiRequest, ModifyInstanceRequest, CreateInstanceByApiResponse, DescribeSimpleInstancesResponse, DescribeInstanceStateResponse, DescribeSimpleInstancesRequest } from "./cdwpg_models";
/**
 * cdwpg client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 销毁集群
     */
    DestroyInstanceByApi(req: DestroyInstanceByApiRequest, cb?: (error: string, rep: DestroyInstanceByApiResponse) => void): Promise<DestroyInstanceByApiResponse>;
    /**
     * 创建集群
     */
    CreateInstanceByApi(req: CreateInstanceByApiRequest, cb?: (error: string, rep: CreateInstanceByApiResponse) => void): Promise<CreateInstanceByApiResponse>;
    /**
     * 集群详情页中显示集群状态、流程进度等
     */
    DescribeInstanceState(req: DescribeInstanceStateRequest, cb?: (error: string, rep: DescribeInstanceStateResponse) => void): Promise<DescribeInstanceStateResponse>;
    /**
     * 修改实例信息，目前为实例名称
     */
    ModifyInstance(req: ModifyInstanceRequest, cb?: (error: string, rep: ModifyInstanceResponse) => void): Promise<ModifyInstanceResponse>;
    /**
     * 获取集群实例列表
     */
    DescribeSimpleInstances(req: DescribeSimpleInstancesRequest, cb?: (error: string, rep: DescribeSimpleInstancesResponse) => void): Promise<DescribeSimpleInstancesResponse>;
}
