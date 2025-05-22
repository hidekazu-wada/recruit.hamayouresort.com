export const checkFirstVisit = () => {
  // デバッグ用のログ
  console.log('Current sessionStorage:', {
    hasVisited: sessionStorage.getItem('hasVisited'),
    allItems: Object.keys(sessionStorage),
  });

  // セッションストレージで初回訪問をチェック
  const hasVisited = sessionStorage.getItem('hasVisited');
  if (!hasVisited) {
    sessionStorage.setItem('hasVisited', 'true');
    console.log('First visit detected, setting hasVisited to true');
    return true;
  }
  console.log('Not first visit, hasVisited is:', hasVisited);
  return false;
};

// オープニングアニメーションの完了を通知するためのカスタムイベント
export const dispatchOpeningComplete = () => {
  const event = new CustomEvent('openingComplete');
  document.dispatchEvent(event);
  console.log('Opening animation complete event dispatched');
};
