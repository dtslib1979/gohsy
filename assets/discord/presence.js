// assets/discord/presence.js
import { CFG } from './config.js';

function isPlaceholder() {
  return CFG.GUILD_ID && CFG.GUILD_ID.includes('PLACEHOLDER');
}

async function fetchCount() {
  const r = await fetch(`https://discord.com/api/guilds/${CFG.GUILD_ID}/widget.json`);
  const d = await r.json();
  return d.presence_count ?? 0;
}

export async function renderPresence(el) {
  if (isPlaceholder()) {
    el.innerHTML = '<span class="presence-fallback">💬 Discord 위젯 활성. CH_ID 채우면 gohsy 전용 채널 직접 진입.</span>';
    return;
  }
  try {
    el.textContent = await fetchCount();
  } catch {
    el.textContent = '—';
  }
}
