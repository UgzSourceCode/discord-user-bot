import { getConfiguration } from "./configuration";

test("getConfiguration will give non null object with string value", () => {
	process.env.DISCORD_TOKEN = "SOME BOT API KEY";
	process.env.WELCOME_CHANNEL_NAME = "SOME CHANNEL NAME";

	const config = getConfiguration();
	expect(config).toBeTruthy();
	expect(config?.discordAPIToken).toBe(process.env.DISCORD_TOKEN);
	expect(config?.welcomeChannelName).toBe(process.env.WELCOME_CHANNEL_NAME);
});
