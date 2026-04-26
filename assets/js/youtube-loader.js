// assets/js/youtube-loader.js
// GOHSY_PERSONAS → 페르소나별 YouTube embed iframe 생성
// 사용법: youtubeLoader.renderAll() or youtubeLoader.renderOne('wife')

const youtubeLoader = {
  /**
   * 모든 페르소나 카드의 .persona-youtube-embed 자리에 iframe 박음
   */
  renderAll() {
    const personas = window.GOHSY_PERSONAS?.personas;
    if (!personas) return;

    personas.forEach(p => {
      const container = document.querySelector(
        `.persona-card[data-persona-id="${p.id}"] .persona-youtube-embed`
      );
      if (!container) return;
      this._embed(container, p);
    });
  },

  /**
   * 특정 페르소나 카드 하나만 렌더
   */
  renderOne(personaId) {
    const personas = window.GOHSY_PERSONAS?.personas;
    if (!personas) return;
    const p = personas.find(x => x.id === personaId);
    if (!p) return;
    const container = document.querySelector(
      `.persona-card[data-persona-id="${p.id}"] .persona-youtube-embed`
    );
    if (!container) return;
    this._embed(container, p);
  },

  _embed(container, persona) {
    const pid = persona.youtube?.playlist_id;
    if (!pid || pid.startsWith('PLACEHOLDER_')) {
      container.innerHTML = '<div class="yt-placeholder"><p>YouTube 준비 중</p></div>';
      return;
    }
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/videoseries?list=${pid}`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    container.innerHTML = '';
    container.appendChild(iframe);
  }
};

// DOMContentLoaded에서 personas-loader 완료 후 실행
document.addEventListener('DOMContentLoaded', () => {
  // personas-loader(defer)가 먼저 실행됐을 것 — 그래도 안전장치
  const check = setInterval(() => {
    if (window.GOHSY_PERSONAS) {
      clearInterval(check);
      youtubeLoader.renderAll();
    }
  }, 100);
  // 5초 타임아웃
  setTimeout(() => clearInterval(check), 5000);
});
