import authTwaHandler from './_telegram/auth-twa.js';
import webhookHandler from './_telegram/webhook.js';
import notifyDailyHandler from './_telegram/notify-daily.js';
import dispatchDailyHandler from './_telegram/dispatch-daily-dataset.js';
import generateCodeHandler from './_telegram/generate-code.js';
import checkLinkHandler from './_telegram/check-link.js';
import unlinkHandler from './_telegram/unlink.js';
import toggleNotificationsHandler from './_telegram/toggle-notifications.js';
import sendTestHandler from './_telegram/send-test.js';
import dispatchGroupBattleHandler from './_telegram/dispatch-group-battle.js';

/**
 * Exact path-segment dispatch.
 *
 * The previous implementation used `url.includes('...')`, which also matched the
 * query string — `/api/telegram/notify-daily?debug=webhook` was routed to the
 * webhook handler (and cron URLs are attacker-reachable paths).
 */
const ROUTES = {
  'auth-twa': authTwaHandler,
  'webhook': webhookHandler,
  'notify-daily': notifyDailyHandler,
  'dispatch-daily-dataset': dispatchDailyHandler,
  'dispatch-group-battle': dispatchGroupBattleHandler,
  'generate-code': generateCodeHandler,
  'check-link': checkLinkHandler,
  'unlink': unlinkHandler,
  'toggle-notifications': toggleNotificationsHandler,
  'send-test': sendTestHandler,
};

export function resolveTelegramAction(url) {
  const pathOnly = String(url || '')
    .split('?')[0]
    .split('#')[0];
  const segments = pathOnly.split('/').filter(Boolean);

  for (let i = segments.length - 1; i >= 0; i--) {
    const segment = segments[i];
    if (Object.prototype.hasOwnProperty.call(ROUTES, segment)) {
      return segment;
    }
  }
  return null;
}

export default async function handler(req, res) {
  const action = resolveTelegramAction(req.url);
  if (!action) {
    return res.status(404).json({ error: 'Telegram endpoint not found' });
  }
  return ROUTES[action](req, res);
}
