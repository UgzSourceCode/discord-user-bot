import { getStatisticTextListener } from './listeners/statisticTextListener';
import { getDiscordClientExecutors } from './executors/discordClientExecutor';
import { createLog } from './helpers/logger';
import { getWaveHelloListener } from './listeners/waveHelloListener';
import { getWelcomeListener } from './listeners/welcomeListener';
import { getDiscordManager } from './managers/discordManager';
import { getListenerManager } from './managers/listenersManager';
import { getTriggerManager } from './managers/triggerManager';
import { getPayReminderMsgTrigger } from './triggers/payReminderMsgTrigger';

require('dotenv').config();

createLog.info("Bot is starting...");
const listenerManager = getListenerManager();
listenerManager.registerListener(getWelcomeListener());
listenerManager.registerListener(getWaveHelloListener());

const discordManager = getDiscordManager(listenerManager);
discordManager.login();

const triggerManagger = getTriggerManager();
triggerManagger.registerExecutor(getDiscordClientExecutors(discordManager.getDiscordClient()));
triggerManagger.registerTrigger(getPayReminderMsgTrigger());
triggerManagger.runAll();