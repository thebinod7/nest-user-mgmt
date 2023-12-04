import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { SignupDto, LoginDto, OtpDto, WalletLoginDto } from "./dto";

@Controller("auth")
export class AuthController {
	constructor() {}

	@HttpCode(HttpStatus.OK)
	@Post("signup")
	singup(@Body() dto: SignupDto) {
		return "Sign Up!";
	}

	@HttpCode(HttpStatus.OK)
	@Post("login")
	login(@Body() dto: LoginDto) {
		return "Login";
	}

	@HttpCode(HttpStatus.OK)
	@Post("wallet-login")
	walletLogin(@Body() dto: WalletLoginDto) {
		return "Wallet Login";
	}
}
