import { ApiProperty } from '@nestjs/swagger';

export class CommonUserResponse {
  @ApiProperty({ example: 'username - 1' })
  username: string;
}
