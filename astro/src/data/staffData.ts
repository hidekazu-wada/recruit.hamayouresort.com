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
  comment: string;
  tags: string[];
  position?: string;
  career?: string[];
  hobbies?: string[];
  facilities?: string[];
  qa: {
    question: string;
    answer: string;
  }[];
  imageUrl?: string;
}

const staffDataArray: Omit<StaffMember, 'imageUrl'>[] = [
  {
    id: 'kazama-hideki',
    name: '風間秀樹',
    message: '経験や技術は不要です。',
    comment:
      'HAMAYOUリゾートには個性豊かな面白いスタッフが揃っています。皆さんの価値観や大切にしていることをリスペクトしてくれるスタッフばかりです。経験や技術は不要です。前向きに情熱を持って取り組んで頂ける方をお待ちしております。',
    tags: ['営業', '中途入社'],
    facilities: ['ホテル', '温泉', 'キャンプ場'],
    position: '総支配人（取締役）',
    career: [
      '2018年入社',
      '前職：都内高級ホテル勤務',
      'ホスピタリティ管理学修士',
    ],
    hobbies: ['旅行', '料理', 'ゴルフ'],
    qa: [
      {
        question:
          '仕事のやりがいや面白さ、仕事で大切にしていることは何ですか？',
        answer:
          '相手の価値観を尊重すること、楽しむこと、情熱を持つこと、全ての方に配慮すること、自分の立場をわきまえること、自分に厳しくすること',
      },
      {
        question:
          '仕事で大変だったことや、それをどう乗り越えたか、エピソードを教えてください。',
        answer:
          'HAMAYOUリゾートに入社してからは体力的に大変なことはありますが、メンタルで大変と思うことはほとんどありません。あっても10回もないと思います。周囲の方に助けて頂いているからだと思います。',
      },
      {
        question: '社内でよく利用する制度や福利厚生はありますか？',
        answer: '特にありません。',
      },
      {
        question: '休日はどのように過ごしていますか？',
        answer: '仕事が中心です。',
      },
      {
        question: '仕事とプライベートの両立はどのようにしていますか？',
        answer: '仕事が中心です。',
      },
      {
        question:
          ' 趣味や特技など、あなたの個性が業務で活きたエピソードはありますか？',
        answer:
          '趣味や特技ではありませんが、過去の仕事で携わっていた音響の知識や技術が活きていることはあると思います。',
      },
      {
        question:
          '「富士山が噴火して西湖が生まれたように、あなたの人生で『これまでの価値観がガラッと変わった』HAMAYOUリゾートでの“大噴火級”に心が動いたエピソードを教えてください。」',
        answer:
          'そんなに大きなことではないかもしれませんが、自分に営業は出来るとは思っていませんでした。（むしろ苦手な分野でした。）営業を楽しいと思えるようにして頂いたのが大きな価値観の変化だと思います。',
      },
    ],
  },
];

// 画像パスを自動的に追加したスタッフデータ
export const staffData: StaffMember[] = staffDataArray.map((staff, index) => ({
  ...staff,
  imageUrl: `/assets/images/staff/img-staff-${getImageNumber(index)}.webp`,
}));

// トップページ用の厳選されたスタッフ（特定のIDを指定＆順序も制御）
const featuredStaffIds = [
  'kazama-hideki', // 最初に表示
  'watanabe-kyoko', // 2番目に表示
  'yamada-taro', // 3番目に表示
  'kobayashi-sakura', // 4番目に表示
];

// 指定した順序でスタッフを並べる
export const featuredStaff = featuredStaffIds
  .map((id) => staffData.find((staff) => staff.id === id))
  .filter((staff): staff is StaffMember => staff !== undefined);
