/**
 * スタッフデータ管理ファイル
 *
 * === スタッフ追加手順 ===
 * 1. staffDataArrayに新しいスタッフ情報を追加する
 * 2. 画像ファイルをpublic/assets/images/staffディレクトリに配置する
 *    - ファイル名: img-staff-XX.webp (XXは連番で01から始まる)
 *    - 例: 9人目のスタッフなら img-staff-09.webp
 *
 * 注意:
 * - スタッフの順番を変更すると画像の割り当ても変更されます
 * - スタッフデータの配列の順番がそのまま画像ファイルの番号になります
 * - スタッフIDはユニークである必要があります
 * - 画像は自動的にインデックス（配列の位置）に基づいて割り当てられます
 */

// スタッフIDから画像パス（番号部分）を取得する関数
const getImageNumber = (index: number): string => {
  // 1から始まる2桁の数字にフォーマット
  return (index + 1).toString().padStart(2, '0');
};

export interface StaffMember {
  id: string;
  name: string;
  message: string;
  tags: string[];
  position?: string;
  description?: string;
  fullDescription?: string;
  career?: string[];
  hobbies?: string[];
  // 自動生成される画像パス
  imageUrl?: string;
}

const staffDataArray: Omit<StaffMember, 'imageUrl'>[] = [
  {
    id: 'yamada-taro',
    name: '山田太郎',
    message: '新しい仲間として、共に成長しましょう',
    tags: ['フロント（ホテル）', '中途入社'],
    position: 'フロントマネージャー',
    description:
      '前職での経験を活かし、お客様に最高のおもてなしを提供しています。',
    fullDescription:
      'ホテル業界で10年以上の経験を持ち、当リゾートには5年前に入社。お客様一人ひとりに合わせたサービスを心がけ、スタッフ教育にも力を入れています。',
    career: [
      '2018年入社',
      '前職：都内高級ホテル勤務',
      'ホスピタリティ管理学修士',
    ],
    hobbies: ['旅行', '料理', 'ゴルフ'],
  },
  {
    id: 'sato-hanako',
    name: '佐藤花子',
    message: '毎日がチャレンジの連続です',
    tags: ['レストラン', '新卒入社'],
    position: 'レストランスタッフ',
    description: '新卒で入社し、お客様との会話を楽しみながら成長しています。',
    fullDescription:
      '大学で栄養学を専攻し、卒業後すぐに当リゾートに入社。地元の食材を活かしたメニュー開発にも携わっています。',
    career: ['2022年入社', '栄養士免許取得', 'サービス接遇検定1級'],
    hobbies: ['ヨガ', '読書', 'カフェ巡り'],
  },
  {
    id: 'suzuki-ichiro',
    name: '鈴木一郎',
    message: '多様な経験ができる環境です',
    tags: ['マーケティング', '中途入社'],
    position: 'マーケティング担当',
    description:
      'デジタルマーケティングの知識を活かし、リゾートの魅力を発信しています。',
    fullDescription:
      '広告代理店での経験を経て、当リゾートのブランディングとマーケティングを担当。SNSやウェブサイトを通じて、リゾートの魅力を国内外に発信しています。',
    career: [
      '2020年入社',
      '前職：広告代理店',
      'デジタルマーケティング検定上級',
    ],
    hobbies: ['写真撮影', 'サーフィン', '映画鑑賞'],
  },
  {
    id: 'tanaka-misaki',
    name: '田中美咲',
    message: 'お客様の笑顔が私のやりがいです',
    tags: ['客室', 'アルバイト'],
    position: '客室アテンダント',
    description:
      '細やかな気配りと明るい接客で、お客様に快適な滞在をご提供しています。',
    fullDescription:
      '大学生の時からアルバイトとして勤務し、卒業後も週3日のパートタイムで活躍中。お客様一人ひとりのニーズに合わせたきめ細やかなサービスが評判です。',
    career: ['2021年入社', '接客サービス検定2級', '英語検定準1級'],
    hobbies: ['語学学習', '旅行', 'カフェ巡り'],
  },

  {
    id: 'takahashi-kenta',
    name: '高橋健太',
    message: '自然の中で働ける喜びを感じています',
    tags: ['アクティビティ', '中途入社'],
    position: 'アウトドアアクティビティ担当',
    description:
      '豊かな自然環境を活かしたアクティビティを企画・運営しています。',
    fullDescription:
      'アウトドアガイド歴10年の経験を活かし、当リゾート周辺の自然を満喫できるツアーを企画。安全管理にも細心の注意を払い、お子様からシニアの方まで楽しめるプログラムを提供しています。',
    career: [
      '2019年入社',
      '前職：アウトドア用品メーカー',
      '登山ガイド資格保有',
      '救命救急士資格',
    ],
    hobbies: ['トレッキング', 'カヤック', '野鳥観察'],
  },

  {
    id: 'watanabe-kyoko',
    name: '渡辺京子',
    message: '料理を通じてゲストに感動を届けたい',
    tags: ['シェフ', '中途入社'],
    position: 'レストラン副料理長',
    description:
      '地元の新鮮な食材を使った創作料理で、味覚の旅をご提供しています。',
    fullDescription:
      '都内の有名レストランで10年の経験を積み、当リゾートに入社。地元の食材を活かした独創的なメニュー開発を担当し、季節ごとの特別コースが好評を博しています。',
    career: [
      '2018年入社',
      '前職：都内フレンチレストラン',
      '調理師免許',
      'ソムリエ資格',
    ],
    hobbies: ['食材探し', 'ワイン研究', 'ガーデニング'],
  },

  {
    id: 'nakamura-daisuke',
    name: '中村大輔',
    message: '施設の安全と快適さを守ることが使命です',
    tags: ['施設管理', '中途入社'],
    position: '施設管理マネージャー',
    description:
      'リゾート全体の設備管理を担当し、快適な環境づくりに努めています。',
    fullDescription:
      '建設会社でのエンジニア経験を活かし、施設の保守・点検からリノベーション計画まで幅広く担当。持続可能な施設運営を目指し、省エネ設備の導入にも積極的に取り組んでいます。',
    career: [
      '2017年入社',
      '前職：建設会社施工管理',
      '一級建築士',
      '電気工事士資格',
    ],
    hobbies: ['DIY', '釣り', '古民家再生'],
  },

  {
    id: 'kobayashi-sakura',
    name: '小林さくら',
    message: 'お客様の特別な日をより素敵に演出します',
    tags: ['ウェディングプランナー', '新卒入社'],
    position: 'ウェディング担当',
    description:
      'カップルの希望に寄り添い、思い出に残るリゾートウェディングを提案しています。',
    fullDescription:
      '大学でホスピタリティを学び、新卒で入社。細部へのこだわりと柔軟な対応力で、国内外からのカップルに選ばれるウェディングプランナーとして成長中。自然を活かしたロケーションフォトが特に人気です。',
    career: [
      '2022年入社',
      'ブライダルプランナー検定1級',
      '英語・中国語対応可能',
    ],
    hobbies: ['フラワーアレンジメント', '写真撮影', '海外旅行'],
  },
];

// 画像パスを自動的に追加したスタッフデータ
export const staffData: StaffMember[] = staffDataArray.map((staff, index) => ({
  ...staff,
  imageUrl: `/assets/images/staff/img-staff-${getImageNumber(index)}.webp`,
}));

// トップページ用の厳選されたスタッフ（特定のIDを指定＆順序も制御）
const featuredStaffIds = [
  'suzuki-ichiro', // 最初に表示
  'watanabe-kyoko', // 2番目に表示
  'yamada-taro', // 3番目に表示
  'kobayashi-sakura', // 4番目に表示
];

// 指定した順序でスタッフを並べる
export const featuredStaff = featuredStaffIds
  .map((id) => staffData.find((staff) => staff.id === id))
  .filter((staff): staff is StaffMember => staff !== undefined);
