import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) { }
  @MessagePattern('seed.ofi-uni')
  executeSeed() {
    return this.seedService.runSeedOfiUni();
  }
}
