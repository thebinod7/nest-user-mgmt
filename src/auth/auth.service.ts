import { Injectable } from "@nestjs/common";
import { LoginDto, SignupDto } from "./dto";

@Injectable()
export class AuthService {
	signup(dto: SignupDto) {
		return { message: "Signup", data: dto };
	}

	login(dto: LoginDto) {
		return { message: "Login", data: dto };
	}
}
