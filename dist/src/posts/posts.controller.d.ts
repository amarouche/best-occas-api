/// <reference types="multer" />
import { Posts } from './posts.entity';
import { PostsService } from './posts.service';
export declare class PostsController {
    service: PostsService;
    constructor(service: PostsService);
    createOne(postBody: Posts, files: Array<Express.Multer.File>): Promise<Posts>;
}
