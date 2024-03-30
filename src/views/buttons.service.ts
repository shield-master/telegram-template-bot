import { Markup } from 'telegraf'

export function menuButtons () {
	return Markup.inlineKeyboard([
			Markup.button.callback('Hello World!', 'say-hi'),
			Markup.button.callback('👤 Управление Аккаунтом', 'transit-SettingsScene'),
		], { columns: 1 }
	)
}

export function settingsButtons(){
	return Markup.inlineKeyboard([
			Markup.button.callback('🪪 Информация о Аккаунте', 'get-info'),
			Markup.button.callback('↩️ Назад', 'transit-MainScene'),
		], { columns: 1}
	)
}