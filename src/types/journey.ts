export type JourneyEvent = {
  utmSource: string;
  utmCampaign: string;
  utmMedium: string;
  utmContent: string;
  sessionId: string;
  createdAt: Date | null;
};

export type Journey = {
  sessionId: string;
  journey: string[];
  touchPoints: number;
};
