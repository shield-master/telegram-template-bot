import { Action, Ctx, Scene, SceneEnter } from 'nestjs-telegraf'
import { SceneContext } from 'telegraf/typings/scenes'
import { Update } from 'telegraf/typings/core/types/typegram'
import { UserService } from 'src/classes/users/user.service'
import { settingsButtons } from 'src/views/buttons.service'

@Scene('SettingsScene')
export class SettingsScene {
	constructor(
		private readonly userService: UserService,
	){}

	@SceneEnter()
	async enter(@Ctx() context: SceneContext) {	
		await context.editMessageText(`Вы находитесь в настройках своего аккаунта`, settingsButtons())
	}

	@Action(/get-info|transit-MainScene/)
	async onAnswer(@Ctx() context: SceneContext & {update: Update.CallbackQueryUpdate}) {
		const cbQuery = context.update.callback_query
		const userAnswer = 'data' in cbQuery ? cbQuery.data : null

		const textAccount = `Your account:\n \\- *TelegramID*: ${this.userService.getID(context)}`

		switch (userAnswer) {
			case 'get-info':
				await context.editMessageText(`Вы находитесь в настройках своего аккаунта\n\n${textAccount}`, settingsButtons())
				.catch(async () => await context.answerCbQuery('Вы уже выбрали этот параметр!'))
				break; 
			
			case 'transit-MainScene':
				await context.scene.enter('MenuScene');
				break;

			default:
				await context.answerCbQuery('Техническая Ошибка!')
				break;
		}
	}
}