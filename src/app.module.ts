import { Module } from '@nestjs/common';
import { BlogModule } from './module/blog/blog.module';
import { PostModule } from './module/post/post.module';
import {ConfigModule} from "@nestjs/config";
// import { PrismaModule } from './module/prisma/prisma.module';
// import { PrismaModule } from './module/prisma/prisma/prisma.module';
// import { PrismaModule } from './module/prisma/prisma.module';

@Module({
  imports: [
      BlogModule,
      PostModule,
      ConfigModule.forRoot({
        isGlobal: true
      })
      ],
})
export class AppModule {}
