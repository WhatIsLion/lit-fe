type CampaignStatus =
  | 'RECRUITING' // 모집중
  | 'RECRUITMENT_CLOSED' // 모집 마감
  | 'REMITTANCE_REQUEST' // 송금 요청 (구매자가 참여자에게 요청)
  | 'PURCHASING' // 구매 중 (실상품을 구매)
  | 'PICKUP_AVAILABLE' // 참여자 기준, 회수 가능
  | 'COMPLETED'; // 모든 참여자가 회수 종료

export type { CampaignStatus };
