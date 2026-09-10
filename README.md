# Figmatutor

디자이너와 IT 팀의 워크플로우를 개선하는 교육·컨설팅 소개 사이트입니다.

- 운영 도메인: https://figmatutor.info
- 실무자료실: https://huddling.ai/
- 커뮤니티: https://huddling.club/

## 개발과 검증

```sh
npm ci
npm run dev
npm run build
```

Next.js 정적 내보내기를 사용합니다. 홈에는 Notion·Supabase 환경변수나 외부 폰트 다운로드가 필요하지 않습니다.

## 주요 파일

- `src/components/home/WorkflowHome.tsx`: 소개, 교육 영역, 자료실, 문의
- `src/components/home/HomeNavigation.tsx`: 데스크톱·모바일 내비게이션
- `src/components/home/LectureHistory.tsx`: 분야 필터·조직 검색이 있는 전체 이력
- `src/data/lectures.json`: 공개 강의 진행 이력 106개와 자문 1건
- `src/app/layout.tsx`: 도메인, 메타데이터, 로컬 Pretendard 폰트

기관별 강의 주제나 성과를 추정하지 않고 제공된 조직·시기·횟수·과정 표기를 유지합니다. 문의·미팅 기록은 실적에 포함하지 않습니다.

CSV로 이력을 갱신하려면 로컬 원본 경로를 지정합니다. 원본 CSV 대신 공개 데이터 JSON을 커밋합니다.

```sh
python3 scripts/sync-lectures.py /path/to/figmatutor_lectures.csv
npm run build
```

## 배포

Vercel의 `yiseos-projects-5e4c1781/figmatutor` 프로젝트에서 이 저장소의 `main` 브랜치를 배포합니다. 프로젝트 루트는 저장소 루트입니다. CLI 배포가 필요하면:

```sh
vercel link --yes --project figmatutor --scope yiseos-projects-5e4c1781
vercel deploy --prod --skip-domain --yes --no-wait
vercel inspect <deployment-url> --format=json
vercel promote <deployment-url> --yes
```

배포 상태가 READY인지 확인한 뒤 운영 도메인에 반영합니다.
