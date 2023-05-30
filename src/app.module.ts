import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { CourseModule } from './course/course.module';
import { GroupModule } from './group/group.module';
import { ReviewModule } from './review/review.module';
import { AuthModule } from './auth/auth.module';
import * as SuperTokensConfig from './auth/supertokens/supertokens.config';
import { StudentService } from "./student/services/student.service";
import { AppGatewayModule } from './web-soket/web-soket.module';
import { AppGateway } from './web-soket/app.gateway';
import { ProductsModule } from './products/products.module';
import { ProductsService } from "./products/services/products.service";

@Module({
  imports: [
    AuthModule.forRoot({
      connectionURI: SuperTokensConfig.connectionUri,
      apiKey: SuperTokensConfig.apiKey,
      appInfo: SuperTokensConfig.appInfo,
    }),
    StudentModule,
    TeacherModule,
    CourseModule,
    GroupModule,
    ReviewModule,
    AppGatewayModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, StudentService, ProductsService, AppGateway],
})
export class AppModule {}
