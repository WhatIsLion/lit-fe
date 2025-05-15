import type { CampaignStatus } from '../type';
import type { ICampaignSummaryList } from '../model/type';

import { BaseResponse } from '@/shared/type/api';
import { getBasePath } from '@/shared/util/url-helper';
import { checkUndefined } from '@/shared/util/value-helper';
import { CAMPAIGN_STATUS } from '../constant';

interface ICampaignSummaryListRequestParam {
  campaignStatus?: CampaignStatus;
  category?: string;
  keyword?: string;
  page?: number;
  size?: number;
  orderBy?: number;
  createBy?: string;
}

interface ICampaignSummaryListResponse {
  campaigns: ICampaignSummaryOriginal[];
}

interface ICampaignSummaryOriginal {
  campaignId: string;
  categoryId: string;
  title: string;
  linkUrl: string;
  mainImg: string;
  maxAttendeeCnt: number;
  curAttendeeCnt: number;
  totalPrice: number;
  state: CampaignStatus;
  isMyCampaign: false;
}

/**
 * @description 캠페인 리스트 조회
 */
const getCampaignList = async (reqParam?: ICampaignSummaryListRequestParam): Promise<ICampaignSummaryList> => {
  const basePath = getBasePath();
  const param = new URLSearchParams();

  param.set('campaignStatus', reqParam?.campaignStatus ?? CAMPAIGN_STATUS.RECRUITING);
  if (!checkUndefined(reqParam?.category)) {
    param.set('category', reqParam.category);
  }
  if (!checkUndefined(reqParam?.keyword)) {
    param.set('keyword', reqParam.keyword);
  }
  if (!checkUndefined(reqParam?.page)) {
    param.set('page', reqParam.page.toString());
  }
  if (!checkUndefined(reqParam?.size)) {
    param.set('size', reqParam.size.toString());
  }
  if (!checkUndefined(reqParam?.orderBy)) {
    param.set('order-by', reqParam.orderBy.toString());
  }
  if (!checkUndefined(reqParam?.createBy)) {
    param.set('created-by', reqParam.createBy);
  }

  const response = await fetch(`${basePath}/api/dev/campaigns?${param.toString()}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const original = (await response.json()) as BaseResponse<ICampaignSummaryListResponse>;

  if (!original.success) {
    const errorMessage =
      original.errors.find((error) => !!error.message)?.message ?? '캠페인 리스트 조회에 실패했습니다.';
    throw new Error(errorMessage);
  }

  const result: ICampaignSummaryList = {
    campaigns: [],
  };

  original.result.campaigns.forEach((res) => {
    result.campaigns.push({
      campaignId: res.campaignId.toString(),
      categoryId: res.categoryId.toString(),
      title: res.title.toString(),
      link: res.linkUrl.toString(),
      imageSrc: res.mainImg.toString(),
      maxAttendeeCnt: Number(res.maxAttendeeCnt),
      curAttendeeCnt: Number(res.curAttendeeCnt),
      totalPrice: Number(res.totalPrice),
      campaignStatus: res.state,
      isMyCampaign: res.isMyCampaign,
    });
  });

  return result;
};

export { getCampaignList };
