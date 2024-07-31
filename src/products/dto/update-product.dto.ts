import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiPropertyOptional({
    example: 'มะละกอ',
    description: 'The name of the product',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: 'ป๊อก, ส้มตำ',
    description: 'Other names of the product',
  })
  @IsString()
  @IsOptional()
  otherNames?: string;

  @ApiPropertyOptional({
    example: 'ราคาต่อถุง บ.',
    description: 'Price per bag',
  })
  @IsString()
  @IsOptional()
  pricePerBag?: string;

  @ApiPropertyOptional({
    example: 'ราคาต่อกก. 40 บ.',
    description: 'Price per kg',
  })
  @IsString()
  @IsOptional()
  pricePerKg?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/image.jpg',
    description: 'Image URL of the product',
  })
  @IsString()
  @IsOptional()
  imageUrl?: string;
}
