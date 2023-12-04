import { Injectable } from "@nestjs/common";
import { UtilService } from "../util/util.service";

@Injectable()
export class RandomStringService {
	constructor(private util: UtilService) {}
	public getRandomString(): string[] {
		return this.util.generateRandomString();
	}
}
