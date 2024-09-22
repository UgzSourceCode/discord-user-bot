import type { ClientEvents, ClientOptions } from "discord.js";
import type { DiscordListener } from "../types";

export const getAllIntents = (
	listeners: DiscordListener<keyof ClientEvents>[],
): ClientOptions["intents"] => {
	const result: string[] = [];
	for (const listener of listeners) {
		for (const intent of listener.intents as string[]) {
			if (!result.find((p) => p === intent)) {
				result.push(intent);
			}
		}
	}

	return result as ClientOptions["intents"];
};
