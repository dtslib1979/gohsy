// assets/discord/messages-feed.js
import { CFG } from './config.js';

function isPlaceholder() {
  return CFG.CACHE_BASE && CFG.CACHE_BASE.includes('PLACEHOLDER');
}

async function fetchMsgs() {
  // 1순위: papyrus 캐시 (없으면 silent skip)
  try {
    const r = await fetch(`${CFG.CACHE_BASE}/${CFG.REPO}.json`, { mode: 'cors' });
    if (r.ok) {
      const data = await r.json();
      if (Array.isArray(data) && data.length) return data;
    }
  } catch {}
  // 2순위: 로컬 fallback
  try {
    const r = await fetch('./data/latest-messages.json');
    if (r.ok) return r.json();
  } catch {}
  return [];
}

function msgHTML(m) {
  const d = new Date(m.timestamp).toLocaleDateString('ko-KR');
  return `<article class="discord-feed-item">
    <time class="discord-feed-time">${d}</time>
    <p class="discord-feed-content">${m.content}</p>
    <span class="discord-feed-author">— ${m.author ?? 'GOHSY'}</span>
  </article>`;
}

export async function renderFeed(el) {
  if (isPlaceholder()) {
    el.innerHTML = '<p class="feed-fallback">🔒 관리자가 Discord 연동을 설정 중입니다.</p>';
    return;
  }
  try {
    const msgs = await fetchMsgs();
    if (!msgs.length) throw new Error('empty');
    el.innerHTML = msgs.slice(0, 5).map(msgHTML).join('');
  } catch {
    el.innerHTML = '<p class="feed-fallback">최신 공지가 없습니다.</p>';
  }
}
