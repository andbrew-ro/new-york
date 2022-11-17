import { IsString } from "class-validator";

export class CreateDto {
    @IsString()
    a: string;
    @IsString()
    b: string;
}
