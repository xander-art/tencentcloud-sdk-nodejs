import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DetectFraudKOLRequest, RecognizeCustomizedAudienceRequest, RecognizeTargetAudienceRequest, RecognizeTargetAudienceResponse, SendTrafficSecuritySmsMessageRequest, RecognizePreciseTargetAudienceResponse, DetectFraudKOLResponse, RecognizeCustomizedAudienceResponse, SendTrafficSecuritySmsMessageResponse, RecognizePreciseTargetAudienceRequest } from "./taf_models";
/**
 * taf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 流量反欺诈-流量验准定制版
     */
    RecognizeCustomizedAudience(req: RecognizeCustomizedAudienceRequest, cb?: (error: string, rep: RecognizeCustomizedAudienceResponse) => void): Promise<RecognizeCustomizedAudienceResponse>;
    /**
     * 流量反欺诈-KOL欺诈识别
     */
    DetectFraudKOL(req: DetectFraudKOLRequest, cb?: (error: string, rep: DetectFraudKOLResponse) => void): Promise<DetectFraudKOLResponse>;
    /**
     * 流量反欺诈-流量验准高级版
     */
    RecognizePreciseTargetAudience(req: RecognizePreciseTargetAudienceRequest, cb?: (error: string, rep: RecognizePreciseTargetAudienceResponse) => void): Promise<RecognizePreciseTargetAudienceResponse>;
    /**
     * 流量反欺诈-流量验准
     */
    RecognizeTargetAudience(req: RecognizeTargetAudienceRequest, cb?: (error: string, rep: RecognizeTargetAudienceResponse) => void): Promise<RecognizeTargetAudienceResponse>;
    /**
     * 流量安选产品，短信发送接口
     */
    SendTrafficSecuritySmsMessage(req: SendTrafficSecuritySmsMessageRequest, cb?: (error: string, rep: SendTrafficSecuritySmsMessageResponse) => void): Promise<SendTrafficSecuritySmsMessageResponse>;
}
