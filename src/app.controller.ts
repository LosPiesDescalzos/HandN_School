import { Controller, Render, Get, UseInterceptors, UseGuards, BadRequestException  } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeController } from "@nestjs/swagger";
import { ResponseTimeInterceptor } from './response_time_interceptor';
import { AuthGuard } from './auth/auth.guard';
import { StudentService } from './student/services/student.service'
import { Session } from './auth/session/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { getUserById } from 'supertokens-node/lib/build/recipe/thirdparty';

@UseInterceptors(ResponseTimeInterceptor)
@ApiExcludeController()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly studentServise: StudentService) {}


  @Get('/auth/callback/google')
  @Render('callback')
  async handleAuth() {
    return { layout: false };
  }

  @Get('/student/callback/google')
  @Render('auth')
  async getAuth() {
    return { layout: false };
  }

  @UseGuards(new AuthGuard({ sessionRequired: false }))
  @Get(['/', '/index'])
  @Render('index')
  async root(@Session() session?: SessionContainer) {
    const studentId = session?.getUserId();
    if(studentId !== undefined) {
      const email = (await getUserById(studentId)).email;
      const student = await this.studentServise.findByEmail(email);
      if(student.email == undefined) {
        return {email: null};
      }
      return { email: student.name };
    } else {
      return { email: null};
    }
  }

  @Get('/feedback')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  @Render('feedback')
  async feedback(@Session() session?: SessionContainer) {
    const studentId = session?.getUserId();
    if(studentId !== undefined) {
      const email = (await getUserById(studentId)).email;
      const student = await this.studentServise.findByEmail(email);
      if(student.email == undefined) {
        return {email: null};
      }
      return { email: student.name };
    } else {
      return { email: null};
    }
  }

  @Get('/account')
  @UseGuards(new AuthGuard())
  @Render('account')
  async account(@Session() session?: SessionContainer) {
    const studentId = session?.getUserId();
    if(studentId !== undefined) {
      const email = (await getUserById(studentId)).email;
      const student = await this.studentServise.findByEmail(email);
      if(student.email == undefined) {
        return {email: null};
      }
      return { email: student.name };
    } else {
      return { email: null};
    }
  }

  @Get('/enter')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  @Render('enter')
  async enter(@Session() session?: SessionContainer) {
    const studentId = session?.getUserId();
    if(studentId !== undefined) {
      const email = (await getUserById(studentId)).email;
      const student = await this.studentServise.findByEmail(email);
      if(student.email == undefined) {
        return {email: null};
      }
      return { email: student.name };
    } else {
      return { email: null};
    }
  }


  @Get('/parents')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  @Render('parents')
  async parents(@Session() session?: SessionContainer) {
    const studentId = session?.getUserId();
    if(studentId !== undefined) {
      const email = (await getUserById(studentId)).email;
      const student = await this.studentServise.findByEmail(email);
      if(student.email == undefined) {
        return {email: null};
      }
      return { email: student.name };
    } else {
      return { email: null};
    }
  }

  @Get('/students')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  @Render('students')
  async students(@Session() session?: SessionContainer) {
    const studentId = session?.getUserId();
    if(studentId !== undefined) {
      const email = (await getUserById(studentId)).email;
      const student = await this.studentServise.findByEmail(email);
      if(student.email == undefined) {
        return {email: null};
      }
      return { email: student.name };
    } else {
      return { email: null};
    }
  }

  @Get('/team')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  @Render('team')
  async team(@Session() session?: SessionContainer) {
    const studentId = session?.getUserId();
    if(studentId !== undefined) {
      const email = (await getUserById(studentId)).email;
      const student = await this.studentServise.findByEmail(email);
      if(student.email == undefined) {
        return {email: null};
      }
      return { email: student.name };
    } else {
      return { email: null};
    }
  }

  @Get('/register')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  @Render('register')
  async coworking(@Session() session?: SessionContainer) {
    const studentId = session?.getUserId();
    if(studentId !== undefined) {
      const email = (await getUserById(studentId)).email;
      return { email: email };
    } else {
      return { email: null};
    }
  }

  @Get('/store')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  @Render('store')
  async store(@Session() session?: SessionContainer) {
    const studentId = session?.getUserId();
    if(studentId !== undefined) {
      const email = (await getUserById(studentId)).email;
      const student = await this.studentServise.findByEmail(email);
      if(student.email == undefined) {
        return {email: null};
      }
      return { email: student.name };
    } else {
      return { email: null};
    }
  }

  @Get('/courses')
  @UseGuards(new AuthGuard({ sessionRequired: false }))
  @Render('courses')
  async courses(@Session() session?: SessionContainer) {
    const studentId = session?.getUserId();
    if(studentId !== undefined) {
      const email = (await getUserById(studentId)).email;
      const student = await this.studentServise.findByEmail(email);
      if(student.email == undefined) {
        return {email: null};
      }
      return { email: student.name };
    } else {
      return { email: null};
    }
  }
}
