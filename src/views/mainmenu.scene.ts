import { Action, Ctx, Scene, SceneEnter } from 'nestjs-telegraf'
import { SceneContext } from 'telegraf/typings/scenes'
import { Message, Update } from 'telegraf/typings/core/types/typegram'
import { menuButtons } from 'src/views/buttons.service'

@Scene('MenuScene')
export class MenuScene {
	public lastMessageID: Message

  @SceneEnter()
  async enter(@Ctx() context: SceneContext) {		
		if(this.lastMessageID == null || undefined) {
			const sentMessage = await context.reply(`Здравствуйте 👋\nВы находитесь в главном меню бота!`, menuButtons())
			this.lastMessageID = sentMessage
		} else {
			if(!this.lastMessageID.from.is_bot) {
				const sentMessage = await context.reply(`Здравствуйте 👋\nВы находитесь в главном меню бота!`, menuButtons())
				this.lastMessageID = sentMessage
			} else {
				await context.editMessageText(`Здравствуйте 👋\nВы находитесь в главном меню бота!`, menuButtons())
			}
		}
  } 

  @Action(/user-hi|transit-SettingsScene/)
  async onAnswer(@Ctx() context: SceneContext & {update: Update.CallbackQueryUpdate}) {
		const cbQuery = context.update.callback_query
		const userAnswer = 'data' in cbQuery ? cbQuery.data : null
		
		switch (userAnswer) {
			case 'say-hi':
				await context.answerCbQuery('Hello World!')
				break;
 
			case 'transit-SettingsScene':
				await context.scene.enter('SettingsScene');
				break;
		
			default:
				await context.answerCbQuery('Техническая Ошибка!')
				break;
		}
  }
}