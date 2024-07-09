import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SubmitDrawPortraitJobResponse, ImageToImageRequest, QueryTextToImageProJobResponse, UploadTrainPortraitImagesRequest, QueryTrainPortraitModelJobRequest, SubmitTextToImageProJobRequest, QueryDrawPortraitJobResponse, QueryTrainPortraitModelJobResponse, SubmitTextToImageProJobResponse, SubmitTrainPortraitModelJobRequest, TextToImageRequest, GenerateAvatarRequest, SubmitTrainPortraitModelJobResponse, QueryDrawPortraitJobRequest, ImageToImageResponse, ReplaceBackgroundRequest, ReplaceBackgroundResponse, UploadTrainPortraitImagesResponse, QueryTextToImageProJobRequest, GenerateAvatarResponse, TextToImageResponse, SubmitDrawPortraitJobRequest } from "./aiart_models";
/**
 * aiart client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口已迁移至腾讯混元大模型-混元生图，即将停止此处维护，可切换至 [混元生图 API](https://cloud.tencent.com/document/product/1729/105969) 继续使用。
文生图（高级版）接口基于高级版文生图大模型，将根据输入的文本描述，智能生成与之相关的结果图。分为提交任务和查询任务2个接口。
提交任务：输入文本等，提交一个文生图（高级版）异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得生成图像结果。
并发任务数（并发）说明：并发任务数指能同时处理的任务数量。文生图（高级版）默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    SubmitTextToImageProJob(req: SubmitTextToImageProJobRequest, cb?: (error: string, rep: SubmitTextToImageProJobResponse) => void): Promise<SubmitTextToImageProJobResponse>;
    /**
     * 商品背景生成接口根据指定的背景描述 Prompt，将商品图中的原背景替换为自定义的新背景并保留商品主体形象，实现商品背景的自由生成与更换。

商品背景生成默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    ReplaceBackground(req: ReplaceBackgroundRequest, cb?: (error: string, rep: ReplaceBackgroundResponse) => void): Promise<ReplaceBackgroundResponse>;
    /**
     * AI 写真提供 AI 写真形象照的训练与生成能力，分为上传训练图片、训练模型、生成图片3个环节，需要依次调用对应接口。
每个写真模型自训练完成起1年内有效，有效期内可使用写真模型 ID 生成图片，期满后需要重新训练。
训练模型分为提交任务和查询任务2个接口。
- 提交训练写真模型任务：完成上传训练图片后，提交一个训练写真模型异步任务，根据写真模型 ID 开始训练模型。
- 查询训练写真模型任务：根据写真模型 ID 查询训练任务的处理状态、处理结果。
提交训练写真模型任务按并发任务数计费，无默认并发额度。
     */
    SubmitTrainPortraitModelJob(req: SubmitTrainPortraitModelJobRequest, cb?: (error: string, rep: SubmitTrainPortraitModelJobResponse) => void): Promise<SubmitTrainPortraitModelJobResponse>;
    /**
     * 本接口已迁移至腾讯混元大模型-混元生图，即将停止此处维护，可切换至 [混元生图 API](https://cloud.tencent.com/document/product/1729/105970) 继续使用。
文生图（高级版）接口基于高级版文生图大模型，将根据输入的文本描述，智能生成与之相关的结果图。分为提交任务和查询任务2个接口。
提交任务：输入文本等，提交一个文生图（高级版）异步任务，获得任务 ID。
查询任务：根据任务 ID 查询任务的处理状态、处理结果，任务处理完成后可获得生成图像结果。
并发任务数（并发）说明：并发任务数指能同时处理的任务数量。文生图（高级版）默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    QueryTextToImageProJob(req: QueryTextToImageProJobRequest, cb?: (error: string, rep: QueryTextToImageProJobResponse) => void): Promise<QueryTextToImageProJobResponse>;
    /**
     * 百变头像接口将根据输入的人像照片，生成风格百变的头像。
百变头像默认提供1个并发任务数，代表最多能同时处理1个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    GenerateAvatar(req: GenerateAvatarRequest, cb?: (error: string, rep: GenerateAvatarResponse) => void): Promise<GenerateAvatarResponse>;
    /**
     * AI 写真提供 AI 写真形象照的训练与生成能力，分为上传训练图片、训练模型、生成图片3个环节，需要依次调用对应接口。
每个写真模型自训练完成起1年内有效，有效期内可使用写真模型 ID 生成图片，期满后需要重新训练。
训练模型分为提交任务和查询任务2个接口。
- 提交训练写真模型任务：完成上传训练图片后，提交一个训练写真模型异步任务，根据写真模型 ID 开始训练模型。
- 查询训练写真模型任务：根据写真模型 ID 查询训练任务的处理状态、处理结果。
     */
    QueryTrainPortraitModelJob(req: QueryTrainPortraitModelJobRequest, cb?: (error: string, rep: QueryTrainPortraitModelJobResponse) => void): Promise<QueryTrainPortraitModelJobResponse>;
    /**
     * AI 写真提供 AI 写真形象照的训练与生成能力，分为上传训练图片、训练模型、生成图片3个环节，需要依次调用对应接口。
本接口用于指定一个人物形象的写真模型 ID，上传用于训练该模型的图片。一个写真模型仅用于一个人物形象的写真生成，上传的训练图片要求所属同一人，建议上传单人、正脸、脸部区域占比较大、脸部清晰无遮挡、无大角度偏转、无夸张表情的图片。
上传写真训练图片默认提供1个并发任务数。
     */
    UploadTrainPortraitImages(req: UploadTrainPortraitImagesRequest, cb?: (error: string, rep: UploadTrainPortraitImagesResponse) => void): Promise<UploadTrainPortraitImagesResponse>;
    /**
     * AI 写真提供 AI 写真形象照的训练与生成能力，分为上传训练图片、训练模型、生成图片3个环节，需要依次调用对应接口。
每个写真模型自训练完成起1年内有效，有效期内可使用写真模型 ID 生成图片，期满后需要重新训练。
生成图片分为提交任务和查询任务2个接口。
- 提交生成写真图片任务：完成训练写真模型后，选择写真风格模板，提交一个生成写真图片异步任务，根据写真模型 ID 开始生成人物形象在指定风格上的写真图片，获得任务 ID。
- 查询生成写真图片任务：根据任务 ID 查询生成图片任务的处理状态、处理结果。
     */
    QueryDrawPortraitJob(req: QueryDrawPortraitJobRequest, cb?: (error: string, rep: QueryDrawPortraitJobResponse) => void): Promise<QueryDrawPortraitJobResponse>;
    /**
     * 智能文生图接口基于文生图（标准版）模型，将根据输入的文本描述，智能生成与之相关的结果图。

智能文生图默认提供3个并发任务数，代表最多能同时处理3个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    TextToImage(req: TextToImageRequest, cb?: (error: string, rep: TextToImageResponse) => void): Promise<TextToImageResponse>;
    /**
     * AI 写真提供 AI 写真形象照的训练与生成能力，分为上传训练图片、训练模型、生成图片3个环节，需要依次调用对应接口。
每个写真模型自训练完成起1年内有效，有效期内可使用写真模型 ID 生成图片，期满后需要重新训练。
生成图片分为提交任务和查询任务2个接口。
- 提交生成写真图片任务：完成训练写真模型后，选择风格模板，提交一个生成写真图片异步任务，根据写真模型 ID 开始生成人物形象在指定风格上的写真图片，获得任务 ID。
- 查询生成写真图片任务：根据任务 ID 查询生成图片任务的处理状态、处理结果。

提交生成写真图片任务默认提供1个并发任务数。
     */
    SubmitDrawPortraitJob(req: SubmitDrawPortraitJobRequest, cb?: (error: string, rep: SubmitDrawPortraitJobResponse) => void): Promise<SubmitDrawPortraitJobResponse>;
    /**
     * 图像风格化（图生图）接口提供生成式的图生图风格转化能力，将根据输入的图像及文本描述，智能生成风格转化后的图像。建议避免输入人像过小、姿势复杂、人数较多的人像图片。
图像风格化（图生图）默认提供3个并发任务数，代表最多能同时处理3个已提交的任务，上一个任务处理完毕后才能开始处理下一个任务。
     */
    ImageToImage(req: ImageToImageRequest, cb?: (error: string, rep: ImageToImageResponse) => void): Promise<ImageToImageResponse>;
}
