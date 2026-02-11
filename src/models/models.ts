export interface Conference {
  title: string;
  priority: number;
  imageUrls: string[];
}

export enum SponsorCategory {
  MAIN_SPONSOR = "MAIN_SPONSOR",
  FEATURED_SPONSOR = "FEATURED_SPONSOR",
  SPONSOR = "SPONSOR",
}

export interface Company {
  logoUrl: string;
  name: string;
  url: string;
  category: SponsorCategory;
}

export interface Organiser {
  name: string;
  rank: string;
  emailAddress: string;
  pictureUrl: string;
  priority: number;
}

export interface Presenter {
  name: string;
  rank: string;
  pictureUrl: string;
  company?: Company;
}

export interface Break {
  slug: string;
  title: string;
  room: "IB028" | "IB025" | "BOTH";
  language: "en" | "hu";
  startTime: string;
  endTime: string;
  isBreak?: boolean;
}

export interface PresentationModel {
  slug: string;
  title: string;
  presenter: Presenter;
  room: "IB028" | "IB025" | "BOTH";
  language: "en" | "hu";
  startTime: string;
  questionsUrl: string;
  endTime: string;
  description: string;
  videoUrl?: string;
  imageUrls?: string[];
  isBreak?: boolean;
}

export interface Delay {
  delay: number;
}

export interface PresentationWithDates extends PresentationModel {
  startDate: Date;
  endDate: Date;
}

export interface BreakWithDates extends Break {
  startDate: Date;
  endDate: Date;
}

export interface RegistraionData {
  buttonText: string;
  cooltixEventId: string;
}

export interface MobilAppData {
  description: string;
  androidUrl: string;
  iosUrl: string;
}

export interface GiveawayData {
  sectionTitle: string;
  description: string;
  pictureUrl: string;
  rules: string;
}

export interface PromoVideoData {
  sectionTitle: string;
  youtubeUrl: string;
  description: string;
}

export interface PrevConfData {
  sectionTitle: string;
  conferences: Conference[];
}

export interface IndexPageData {
  previousConferences: PrevConfData;
  registration: RegistraionData;
  mobilApp: MobilAppData;
  giveaway: GiveawayData;
  promoVideo: PromoVideoData;
  sponsors: {
    sectionTitle: string;
    companies: Company[];
  };
  organisers: Organiser[];
  featuredPresentation: FeaturedPresentation;
  presentations: PresentationModel[];
}

export interface FeaturedPresentation {
  sectionTitle: string;
  description: string;
}

export interface StreamData {
  title: string;
  youtubeUrl: string;
}
