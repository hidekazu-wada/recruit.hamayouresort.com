// ページセグメントからタイトルを取得
export function getPageTitle(segment: string): string {
  const pageTitles: Record<string, string> = {
    about: '会社概要',
    people: '社員紹介',
    culture: '働く環境',
    jobs: '求人',
    flow: '選考フロー',
    // 他のページも必要に応じて追加
  };

  return pageTitles[segment] || segment;
}

// ホームURLを取得（必要に応じて環境変数から読み込むなど）
export function getHomeUrl(): string {
  return '/';
}
