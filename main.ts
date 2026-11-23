// BreakoutSniper — Winner Takes All entry.
//
// Revision note (main session): the breakout leg only fires on a tight
// confirmation — runup >= +80% with exactly 3 buyers, age 1-10 slots.
// Looser breakouts add small wins but destroy the net, so the filter
// stays narrow even though it passes fewer coins.
// buyers, stake 0.2 SOL, stop -2%, take-profit +25%) plus a
// confirmed-breakout leg (coins aged 1-10 slots, runup >= +80% with
// exactly 3 buyers, stake 0.3 SOL). Max hold 20 slots, exit if the
// creator sells. Winner-takes-all means only first place is paid, so
// this entry is tuned for a strong right tail, not for the median.
// See strategy.ts for the design and README.md for the numbers.

import { runBot } from './vendor/makefun-bot.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

const strategy = createStrategy(DEFAULT_PARAMS);

await runBot({
  onBatch(state, batch) {
    return strategy.onBatch(state, batch);
  },
});
