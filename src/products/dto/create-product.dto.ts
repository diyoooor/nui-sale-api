import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'มะละกอ', description: 'The name of the product' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'ป๊อก, ส้มตำ',
    description: 'Other names of the product',
  })
  @IsString()
  @IsNotEmpty()
  otherNames: string;

  @ApiProperty({ example: 'ราคาต่อถุง บ.', description: 'Price per bag' })
  @IsString()
  @IsNotEmpty()
  pricePerBag: string;

  @ApiProperty({ example: 'ราคาต่อกก. 40 บ.', description: 'Price per kg' })
  @IsString()
  @IsNotEmpty()
  pricePerKg: string;

  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'Image URL of the product',
  })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}
