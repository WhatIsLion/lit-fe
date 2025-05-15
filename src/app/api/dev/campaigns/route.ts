import { CAMPAIGN_STATUS_LIST } from '@/entity/campaign/constant';
import { getRandomInt } from '@/shared/util/number-helper';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const state = searchParams.get('state') ?? CAMPAIGN_STATUS_LIST[getRandomInt(0, CAMPAIGN_STATUS_LIST.length - 1)];
  const size = Number(searchParams.get('size') ?? 20);

  const campaigns = Array.from({ length: size }, (_, i) => {
    return {
      campaignId: (100 + i).toString(),
      categoryId: getRandomInt(1, 100).toString(),
      title: `샘플 상품 ${i + 1}`,
      linkUrl: `https://example.com/products/${100 + i}`,
      mainImg: `https://example.com/images/${100 + i}.jpg`,
      maxAttendeeCnt: getRandomInt(8, 16),
      curAttendeeCnt: getRandomInt(2, 7),
      totalPrice: getRandomInt(1000, 20000),
      state: state,
      isMyCampaign: Math.random() < 0.5,
    };
  });

  const mockData = {
    statusCode: 200,
    success: true,
    trackingId: getRandomInt(1000, 9999).toString(),
    timestamp: new Date().toISOString(),
    errors: [],
    result: {
      campaigns,
    },
  };

  return NextResponse.json(mockData);
}
