import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDto } from './dtos';

const isAnagram = require('@pelevesque/is-anagram');

@Injectable()
export class AnagramService {
    constructor(private prismaService: PrismaService) {}

    async create(dto: CreateDto) {
        const options = {
            canonicalize: true,
            substringsToIgnore: [',', ' ']
        };
        if(!isAnagram(dto.a, dto.b, options))
            throw new BadRequestException();
        return await this.prismaService.anagram.create({
            data: {
                a: dto.a,
                b: dto.b
            }
        });
    }
}
