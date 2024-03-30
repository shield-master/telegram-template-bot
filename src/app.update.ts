import { Start, Update } from "nestjs-telegraf";
import { SceneContext } from "telegraf/typings/scenes";

@Update()
export class AppUpdate {
	@Start()
	async startCommand(ctx: SceneContext) {
		ctx.scene.enter('MenuScene');
	}
}