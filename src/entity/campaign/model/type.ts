import { CampaignStatus } from '../type';

interface CampaignSummary {
  campaignId: string;
  categoryId: string;
  title: string;
  link: string;
  imageSrc: string;
  maxAttendeeCnt: number;
  curAttendeeCnt: number;
  totalPrice: number;
  campaignStatus: CampaignStatus;
  isMyCampaign: boolean;
}

interface CampaignSummaryList {
  campaigns: CampaignSummary[];
}

export type { CampaignSummary, CampaignSummaryList };
