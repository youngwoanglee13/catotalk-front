import { PostDTO } from './post.dto';
import { ReviewDTO } from './review.dto';
import { UserDTO } from './user.dto';
export interface UserInfoDTO {
    name: string;
    posts: PostDTO[];
    reviews: ReviewDTO[];
    user: UserDTO;
    image: string;
}
