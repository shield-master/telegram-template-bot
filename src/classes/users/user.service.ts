import { Injectable } from '@nestjs/common';
import { Ctx } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { getUserID } from '../../utils/user.utils';

@Injectable()
export class UserService {
	async getID(@Ctx() ctx: Context): Promise<string | null> {
		try {
			return getUserID(ctx)
		} catch (error) {
			console.log(error)
			throw new Error('Error in user.service.ts | -> async getID()')
		}
	}

	async test(): Promise<string> {
		try {
			return 'Returned from UserService.test()'
		} catch (error) {
			console.log(error);
			throw new Error('Error in user.service.ts | -> async test()')
		}
  }
}
 