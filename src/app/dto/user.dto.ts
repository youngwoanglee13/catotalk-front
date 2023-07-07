import { UserInfoDTO } from "./userinfo.dto";

export interface UserDTO {
    name: string;
    email: string;
    password: string;
    role: string;
    userInfo: UserInfoDTO;
}

