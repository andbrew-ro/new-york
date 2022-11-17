import { BadRequestException, Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AnagramService } from './anagram.service';
import { CreateDto } from './dtos';

@Controller('anagram')
export class AnagramController {
    constructor(private anagramService: AnagramService) {}

    @Get()
    list(@Query() query: {page: string}) {
        var page: number = parseInt(query.page);
        if(Number.isNaN(page) || page < 1)
            throw new BadRequestException();
        return this.anagramService.list(page);
    }

    @Post()
    create(@Body() dto: CreateDto) {
        return this.anagramService.create(dto);
    }
}
