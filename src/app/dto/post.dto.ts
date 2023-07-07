import { UserInfoDTO } from './userinfo.dto';
import { ReviewDTO } from './review.dto';
export interface PostDTO {
    id: number;
    description: string;
    userinfo: UserInfoDTO;
    date: string;
    reviews: ReviewDTO[];
    image: string;
}
