# GOHSY 경로 변수 리스트

> gohsy → gohsy 복제 시 업데이트 필요한 변수들

---

## 1. 도메인 & URL (필수 변경)

| 현재 값 (gohsy) | 변경할 값 (gohsy) | 설명 |
|-----------------|-------------------|------|
| `gohsy.com` | `gohsy.com` | 메인 도메인 |
| `dtslib1979.github.io/gohsy/` | `dtslib1979.github.io/gohsy/` | GitHub Pages URL |
| `github.com/dtslib1979/gohsy` | `github.com/dtslib1979/gohsy` | GitHub 레포 URL |

---

## 2. 이메일 주소

| 현재 값 | 변경할 값 | 위치 |
|---------|-----------|------|
| `gohsy@gohsy.com` | `gohsy@gohsy.com` | 메인 연락처 |
| `mathq@gohsy.com` | `mathq@gohsy.com` | affiliates/mathq.html |
| `sjoonmo@gohsy.com` | `sjoonmo@gohsy.com` | affiliates/sjoonmo.html |

---

## 3. 브랜드명 (대소문자 구분)

| 현재 값 | 변경할 값 | 사용처 |
|---------|-----------|--------|
| `GOHSY` | `GOHSY` | 타이틀, 헤더, 로고 텍스트 |
| `gohsy` | `gohsy` | URL 경로, 변수명 |

---

## 4. config.json 핵심 변수

```json
{
  "site": {
    "domain": "gohsy.com",
    "url": "https://dtslib1979.github.io/gohsy/"
  },
  "pwa": {
    "cacheName": "gohsy-v1"
  },
  "contact": {
    "email": "gohsy@gohsy.com",
    "website": "https://gohsy.com",
    "cardUrl": "https://gohsy.com/card/",
    "ogImage": "https://dtslib1979.github.io/gohsy/assets/icons/profile.jpg"
  }
}
```

---

## 5. manifest.json 변수

```json
{
  "name": "GOHSY",
  "short_name": "GOHSY",
  "description": "GOHSY ≡ ...",
  "start_url": "/gohsy/"
}
```

---

## 6. localStorage 키

| 현재 값 | 변경할 값 | 파일 |
|---------|-----------|------|
| `gohsy_repo_config` | `gohsy_repo_config` | index.html, staff/index.html |
| `gohsy_staff_auth` | `gohsy_staff_auth` | staff/index.html |
| `gohsy_staff_admin` | `gohsy_staff_admin` | staff/index.html |

---

## 7. GitHub 관련

| 현재 값 | 변경할 값 | 파일 |
|---------|-----------|------|
| `GITHUB_REPO = 'gohsy'` | `GITHUB_REPO = 'gohsy'` | staff/archive.html |
| `CHAT_GITHUB_REPO = 'gohsy'` | `CHAT_GITHUB_REPO = 'gohsy'` | staff/index.html |

---

## 8. 파일별 수정 위치

### index.html
- 라인 20, 24, 30: OG 이미지/URL
- 라인 1671: CSS 클래스 `.legend-dot.gohsy`
- 라인 1962-1987: 푸터 연락처
- 라인 2100: 공유 URL
- 라인 2143-2144: vCard
- 라인 2230: localStorage 키
- 라인 2294: affiliates 배열

### card/index.html
- 라인 8-34: 메타 태그
- 라인 357-374: 연락처 정보
- 라인 413, 427-428: vCard 데이터

### config.json
- 전체 파일 수정 필요

### assets/manifest.json
- 전체 파일 수정 필요

### staff/index.html
- 라인 2923-2924: 인증 키
- 라인 3046, 3051, 3536: 레포 설정

### articles/ 폴더
- 모든 HTML 파일의 타이틀, 메타 태그

### affiliates/ 폴더
- 이메일 주소, 백링크

---

## 9. 총 수정 필요 항목

- **파일 수**: 약 15개
- **참조 수**: 146개
- **주요 변수**: 8가지 카테고리

---

## 10. 일괄 치환 명령어 (참고용)

```bash
# 소문자 gohsy → gohsy
find . -type f \( -name "*.html" -o -name "*.json" -o -name "*.xml" -o -name "*.md" \) -exec sed -i 's/gohsy/gohsy/g' {} \;

# 대문자 GOHSY → GOHSY
find . -type f \( -name "*.html" -o -name "*.json" -o -name "*.xml" -o -name "*.md" \) -exec sed -i 's/GOHSY/GOHSY/g' {} \;
```

---

*생성일: 2026-01-15*
