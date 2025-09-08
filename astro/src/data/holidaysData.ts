/**
 * 休日・休暇データ管理ファイル
 */

export interface HolidayData {
  annualDays: number; // 年間休日数
  paidLeaveRate: number; // 有給取得率（%）
  requestedLeaveRate: number; // 希望休取得率（%）
  maxConsecutiveDays: number; // 最大連休日数
  consecutiveExamples: {
    season: string;
    icon: string;
    days: number;
    description: string;
  }[];
}

// 全社共通の休日・休暇データ
export const companyHolidayData: HolidayData = {
  annualDays: 120,
  paidLeaveRate: 100,
  requestedLeaveRate: 95,
  maxConsecutiveDays: 9,
  consecutiveExamples: [
    {
      season: '夏季休暇',
      icon: '🏖️',
      days: 9,
      description: '最大9連休',
    },
    {
      season: '年末年始',
      icon: '🎍',
      days: 7,
      description: '最大7連休',
    },
    {
      season: 'GW',
      icon: '🌸',
      days: 5,
      description: '最大5連休',
    },
  ],
};

// 職種別の休日データ（必要に応じて拡張可能）
export const positionHolidayData: { [key: string]: Partial<HolidayData> } = {
  'front-staff': {
    annualDays: 112,
    paidLeaveRate: 100,
    maxConsecutiveDays: 9,
  },
  chef: {
    annualDays: 112,
    paidLeaveRate: 90,
    maxConsecutiveDays: 7,
  },
  'spa-therapist': {
    annualDays: 115,
    paidLeaveRate: 90,
    maxConsecutiveDays: 8,
  },
  housekeeping: {
    // パート・アルバイトは年間休日の概念が異なるため、別途管理
    paidLeaveRate: 85,
  },
};
