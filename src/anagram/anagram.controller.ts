import { Body, Controller, Post } from '@nestjs/common';
import { AnagramService } from './anagram.service';
import { CreateDto } from './dtos';

@Controller('anagram')
export class AnagramController {
    constructor(private anagramService: AnagramService) {}

    @Post()
    create(@Body() dto: CreateDto) {
        return this.anagramService.create(dto);
    }
}
