/**
 * 求人データ管理ファイル
 */

export interface JobPosition {
  id: string;
  title: string;
  facility: string;
  jobType: string;
  employmentType: string;
  description: string;
  duties: string[];
  requirements: {
    required: string;
    preferred: string;
  };
  location: string;
  workInfo: {
    shifts: string;
    overtime: string;
    workStyle: string;
  };
  benefits: string[];
  holidays: string[];
}

export const jobsData: JobPosition[] = [
  {
    id: 'front-staff-kuwarubi',
    title: 'フロントスタッフ',
    facility: '光風閣くわるび',
    jobType: 'フロント',
    employmentType: '正社員',
    description: 'ゲストの "ただいま" を演出するホテルの顔。',
    duties: [
      'チェックイン／アウト対応',
      '予約管理（PMS入力）',
      '観光案内、インフォメーション',
      '館内イベント企画',
      'など',
    ],
    requirements: {
      required: '接客経験1年以上 または ホスピタリティ基礎知識',
      preferred: '英会話（TOEIC600目安）、普通自動車免許',
    },
    location: '山梨県富士河口湖町西湖 1023',
    workInfo: {
      shifts: '早番 07:00-16:00｜遅番 13:00-22:00',
      overtime: '月8.2h',
      workStyle: 'リモート不可（対面接客のため）',
    },
    benefits: [
      '月給 250,000〜280,000円＋各種手当',
      '賞与 年2回／昇給 年1回',
      '住宅・資格・温泉パスほか福利厚生充実',
    ],
    holidays: [
      '週休2日（シフト制）／年間112日',
      '有休取得率99%／連休取得最大9日',
    ],
  },
  {
    id: 'chef-kuwarubi',
    title: '調理スタッフ',
    facility: '光風閣くわるび',
    jobType: '調理',
    employmentType: '正社員',
    description: '地元の食材を活かした創作料理で感動を届ける。',
    duties: [
      '和食・洋食の調理全般',
      'メニュー開発',
      '仕入れ管理',
      '衛生管理',
      'など',
    ],
    requirements: {
      required: '調理師免許、実務経験3年以上',
      preferred: '和食または洋食の専門店での経験',
    },
    location: '山梨県富士河口湖町西湖 1023',
    workInfo: {
      shifts: '早番 05:00-14:00｜遅番 12:00-21:00',
      overtime: '月10h',
      workStyle: 'リモート不可（現場作業のため）',
    },
    benefits: [
      '月給 280,000〜350,000円＋各種手当',
      '賞与 年2回／昇給 年1回',
      '住宅・資格・温泉パスほか福利厚生充実',
    ],
    holidays: [
      '週休2日（シフト制）／年間112日',
      '有休取得率95%／連休取得最大7日',
    ],
  },
  {
    id: 'housekeeping-kuwarubi',
    title: 'ハウスキーピングスタッフ',
    facility: '光風閣くわるび',
    jobType: '客室管理',
    employmentType: 'パート・アルバイト',
    description: '快適な空間づくりで、くつろぎの時間を支える。',
    duties: [
      '客室清掃',
      'アメニティ補充・管理',
      'リネン管理',
      '共用部の清掃',
      'など',
    ],
    requirements: {
      required: '未経験可、体力に自信のある方',
      preferred: 'ホテルでの清掃経験',
    },
    location: '山梨県富士河口湖町西湖 1023',
    workInfo: {
      shifts: '早番 08:00-17:00｜遅番 13:00-22:00',
      overtime: '月5h程度',
      workStyle: 'リモート不可（現場作業のため）',
    },
    benefits: [
      '時給 1,200〜1,500円＋各種手当',
      '昇給 年1回',
      '温泉パス・食事補助あり',
    ],
    holidays: ['シフト制（週3日〜応相談）', '有給休暇あり'],
  },
  {
    id: 'spa-therapist-kuwarubi',
    title: 'スパセラピスト',
    facility: '光風閣くわるび',
    jobType: 'エステ・セラピー',
    employmentType: '正社員',
    description: '心身の癒しと美容で、特別な寛ぎを提供。',
    duties: [
      'ボディトリートメント',
      'フェイシャルケア',
      'アロマセラピー',
      'カウンセリング',
      'など',
    ],
    requirements: {
      required: 'エステティシャン資格、実務経験2年以上',
      preferred: 'アロマセラピスト資格',
    },
    location: '山梨県富士河口湖町西湖 1023',
    workInfo: {
      shifts: '早番 09:00-18:00｜遅番 12:00-21:00',
      overtime: '月7h',
      workStyle: 'リモート不可（対面施術のため）',
    },
    benefits: [
      '月給 260,000〜320,000円＋施術手当',
      '賞与 年2回／昇給 年1回',
      '住宅・資格・温泉パスほか福利厚生充実',
    ],
    holidays: [
      '週休2日（シフト制）／年間115日',
      '有休取得率90%／連休取得最大8日',
    ],
  },
];
