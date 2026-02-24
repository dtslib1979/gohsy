# GOHSY 에이전트 프로토콜 v3.0

---

## 헌법 제1조: 레포지토리는 소설이다

> **모든 레포지토리는 한 권의 소설책이다.**
> **커밋이 문장이고, 브랜치가 챕터이고, git log --reverse가 줄거리다.**

- 삽질, 실패, 방향 전환 전부 남긴다. squash로 뭉개지 않는다.
- 기능 구현 과정 = 플롯 (문제→시도→실패→전환→해결)
- 레포 서사 → 블로그/웹툰/방송 콘텐츠로 파생 (액자 구성)

### 서사 추출 명령

```bash
narrative-extract.py --repo .                    # 이 레포 줄거리
narrative-extract.py --repo . --format synopsis  # 시놉시스
narrative-extract.py --repo . --format blog      # 블로그 원고
narrative-extract.py --repo . --climax           # 전환점만
narrative-extract.py --all ~                     # 28개 레포 연작 인덱스
```

### 서사 분류

| 커밋 유형 | 서사 | 의미 |
|-----------|------|------|
| `feat:` / 기능 추가 | 시도 | 주인공이 무언가를 만든다 |
| `fix:` / 버그 수정 | 삽질 | 예상대로 안 됐다 |
| `migration` / 전환 | 전환 | 버리고 다른 길을 간다 |
| `rewrite` / v2 | 각성 | 처음부터 제대로 다시 한다 |
| `refactor:` | 성장 | 같은 일을 더 잘하게 됐다 |
| `docs:` | 정리 | 지나온 길을 돌아본다 |

---


> 이 문서는 Claude Code가 gohsy 레포지토리에서 작업할 때 따라야 하는 가이드입니다.

---

## 1. Branch Identity (2-Axis System)

| 축 | 값 | 설명 |
|----|-----|------|
| **Governance** | `collaborator` | HQ와 강하게 연동. 구조/룰/업데이트 HQ 주도 |
| **Cognitive** | `creator` | 콘텐츠 중심. AI는 도우미. 출력=콘텐츠 |

### HQ Access 권한
```
✅ templates    - 페이지/컴포넌트 템플릿
✅ sync         - HQ 동기화 시스템
✅ broadcast    - 방송/강의 시스템
❌ claude-code  - (Creator 타입 - 불필요)
❌ sdk          - (Creator 타입 - 불필요)
```

### 캐릭터 프로필
- **욕망**: 유튜브, 프로덕션, 꿈 실현
- **관심**: 콘텐츠 제작에만 집중
- **전략**: 시스템은 HQ가 대신, 본인은 창작에 몰입

---

## 2. 프로젝트 개요

### 목적
소원 실현 플랫폼 - 목표 설정 및 달성 추적 서비스

### Focus 영역
- 유튜브 콘텐츠
- 프로덕션
- 꿈 실현 / 목표 달성

### 기술 스택
- 순수 정적 사이트 (HTML/CSS/JS)
- GitHub Pages 호스팅

---

## 3. HQ 연동

이 프로젝트는 **DTSLIB HQ**에서 관리됩니다.

| 항목 | 값 |
|------|-----|
| **본사 레포** | dtslib1979/dtslib-branch |
| **브랜치 ID** | gohsy |
| **상태** | active |
| **공개** | private |
| **레지스트리** | `hq/registry/branches.json` |

---

## 4. 폴더 구조

```
gohsy/
├── index.html              # 메인 페이지
├── config.json             # 설정 파일
├── CLAUDE.md               # 이 문서
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
└── pages/                  # 추가 페이지
```

---

## 5. 커밋 컨벤션

```
feat: 새 기능 추가
fix: 버그 수정
docs: 문서 업데이트
style: 디자인 변경
goal: 목표/소원 관련 기능
content: 콘텐츠 추가
```

커밋 메시지 끝:
```
Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

---

## 6. Creator 타입 작업 가이드

### 핵심 원칙
> "콘텐츠에 집중. 시스템은 HQ가 알아서."

### AI 활용 방식
- 글 초안 작성 보조
- 아이디어 브레인스토밍
- 콘텐츠 구조 제안
- 영상 스크립트 정리

### 하지 않는 것
- 복잡한 코드 작업 (HQ 요청)
- 자동화 시스템 구축 (HQ 담당)
- SDK 개발 (필요 시 HQ에서 제공)

---

## 7. 작업 시 주의사항

1. 수정 전 반드시 `git pull` 실행
2. 커밋 메시지는 한글로 명확하게
3. **Private 레포** - 외부 노출 주의
4. 사용자 개인정보 처리 주의

---

*Version: 3.0*
*Last Updated: 2026-01-26*
*Affiliation: DTSLIB HQ (Collaborator)*