import { PostDTO } from './post.dto';
import { UserInfoDTO } from './userinfo.dto';

export interface ReviewDTO {
    comment: string;
    userInfo: UserInfoDTO;
    userName: string;
    post: PostDTO;   
}
