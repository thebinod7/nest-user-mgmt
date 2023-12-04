import { Module } from "@nestjs/common";
import { RandomStringService } from "./random-string.service";
import { UtilModule } from "../util/util.module";

@Module({
	providers: [RandomStringService],
	imports: [UtilModule],
})
export class RandomStringModule {}
