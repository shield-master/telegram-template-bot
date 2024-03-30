import { Context } from "telegraf";

export const combineName = (firstName: string, lastName: string): string => {
	const first = firstName ?? '';
	const last = lastName !== undefined ? ` ${lastName}` : '';
	return String(`${first}${last}`)
}

export const getFirstname = (ctx: Context): string => {
	return String(ctx.from.first_name)
}

export const getLastname = (ctx: Context): string => {
	return String(ctx.from.last_name)
}

export const getUsername = (ctx: Context): string => {
	return String(ctx.from.username)
}

export const getUserID = (ctx: Context): string => {
	return String(ctx.from.id)
}