import Staff01 from '@assets/images/staff/img-staff-01.png';
import Staff02 from '@assets/images/staff/img-staff-02.png';
import Staff03 from '@assets/images/staff/img-staff-03.png';
import Staff04 from '@assets/images/staff/img-staff-04.png';
import Staff05 from '@assets/images/staff/img-staff-05.png';
import Staff06 from '@assets/images/staff/img-staff-06.png';
import Staff07 from '@assets/images/staff/img-staff-07.png';
import Staff08 from '@assets/images/staff/img-staff-08.png';
export interface StaffMember {
  id: string;
  image: ImageMetadata;
  name: string;
  message: string;
  tags: string[];
  position?: string;
  description?: string;
  fullDescription?: string;
  career?: string[];
  hobbies?: string[];
}

export const staffData: StaffMember[] = [
  {
    id: 'yamada-taro',
    image: Staff01,
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
    image: Staff02,
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
    image: Staff03,
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
    image: Staff04,
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
    image: Staff05,
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
    image: Staff06,
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
    image: Staff07,
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
    image: Staff08,
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

// トップページ用の厳選されたスタッフ
export const featuredStaff = staffData.slice(0, 4);
