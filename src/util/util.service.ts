import { Injectable } from "@nestjs/common";

@Injectable()
export class UtilService {
	public generateRandomString(): string[] {
		return ["Hello", "worldy!"];
	}
}
