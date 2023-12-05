import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { SignupDto, LoginDto, OtpDto, WalletLoginDto } from "./dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@Post("signup")
	singup(@Body() dto: SignupDto) {
		return this.authService.signup(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Post("login")
	login(@Body() dto: LoginDto) {
		return this.authService.login(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Post("wallet-login")
	walletLogin(@Body() dto: WalletLoginDto) {
		return "Wallet Login";
	}
}
