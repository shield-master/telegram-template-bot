import { Module } from '@nestjs/common'
import { TelegrafModule } from 'nestjs-telegraf'
import { ConfigService } from './config/config.service'
import { UserModule } from './classes/users/user.module'
import { MenuScene } from './views/mainmenu.scene'
import { SettingsScene } from './views/settings.scene'
import * as LocalSession from 'telegraf-session-local'
import { AppUpdate } from './app.update'

const sessions = new LocalSession({ database: 'sessions_db.json '})
const configService = new ConfigService()

@Module({
  imports: [
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: configService.get('TOKEN')
    }),
    UserModule,
  ],
  controllers: [],
  providers: [
    AppUpdate,
    MenuScene,
    SettingsScene
  ],
})
export class AppModule {}
