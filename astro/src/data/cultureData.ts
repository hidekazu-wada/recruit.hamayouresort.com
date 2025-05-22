import Culture01 from '@assets/images/culture/culturepage-equipment-01.png';
import Culture02 from '@assets/images/culture/culturepage-equipment-02.jpg';
import Culture03 from '@assets/images/culture/culturepage-equipment-03.jpg';
// 必要に応じて他の画像もインポート

export interface CultureItem {
  id: string;
  image: ImageMetadata;
  title: string;
  description?: string;
  // 詳細ページ用の追加情報
  fullDescription?: string;
  tags?: string[];
  location?: string;
  relatedImages?: ImageMetadata[];
}

export const cultureData: CultureItem[] = [
  {
    id: 'sauna',
    image: Culture01,
    title: '働きながら、湖畔でサウナ',
    description: '仕事の合間にリフレッシュできる環境が整っています。',
    fullDescription:
      '当リゾートでは、スタッフも施設を利用することができます。特に人気なのが湖畔に設置されたサウナ。仕事の休憩時間や勤務後に利用でき、心と体のリフレッシュに最適です。',
    tags: ['福利厚生', 'リフレッシュ'],
    location: '湖畔エリア',
  },
  {
    id: 'bbq',
    image: Culture02,
    title: '社内BBQ',
    description: 'チーム間の交流を深める機会が豊富にあります。',
    fullDescription:
      '毎月開催されるスタッフBBQは、部門を超えた交流の場となっています。カジュアルな雰囲気の中で、普段話す機会の少ない同僚とのコミュニケーションが生まれます。',
    tags: ['スタッフイベント', 'チームビルディング'],
    location: 'BBQエリア',
  },
  {
    id: 'nature',
    image: Culture03,
    title: '働きながら、自然にふれる',
    description:
      '自然に囲まれた環境で、リゾートならではの働き方を体験できます。',
    fullDescription:
      '四季折々の自然を感じながら働ける環境が、私たちの大きな魅力です。春の桜、夏の緑、秋の紅葉、冬の雪景色…季節ごとに変わる景色を楽しみながら働くことができます。',
    tags: ['自然環境', 'ワークライフバランス'],
    location: 'リゾート全域',
  },
];

// トップページ用のカルチャーアイテム
export const featuredCulture = cultureData.slice(0, 3);
