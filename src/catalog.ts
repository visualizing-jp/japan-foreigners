/**
 * シリーズ・ハブのカタログ。
 *
 * 公開 URL は japan-foreigners-{slug}.visualizing.jp、ローカル作業ディレクトリは ../japan-foreigners-{slug}/。
 * 住民基本台帳でみる居住地は japan-data シリーズの foreign-residents が受け持つので、ここでは扱わない。
 */

export type CategoryId = "visit" | "live";

export type ProjectStatus = "published" | "pending";

export type CatalogEntry = {
  slug: string;
  title: string;
  source: string;
  period: string;
  category: CategoryId;
  status: ProjectStatus;
  url: string | null;
  art: string;
};

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "visit", label: "訪れる" },
  { id: "live", label: "住む" },
];

export const CATALOG: CatalogEntry[] = [
  // —— 訪れる ——
  {
    slug: "visitors",
    title: "日本には、どれだけの外国人が訪れてきたか",
    source: "JNTO 訪日外客統計",
    period: "1964–2026",
    category: "visit",
    status: "published",
    url: "https://japan-foreigners-visitors.visualizing.jp/",
    art: "/art/visitors.svg",
  },
  {
    slug: "spending",
    title: "訪れた外国人は、いくら使ってきたか",
    source: "観光庁 インバウンド消費動向調査",
    period: "2010–2026",
    category: "visit",
    status: "published",
    url: "https://japan-foreigners-spending.visualizing.jp/",
    art: "/art/spending.svg",
  },
  {
    slug: "stays",
    title: "訪れた外国人は、どこに泊まってきたか",
    source: "観光庁 宿泊旅行統計調査",
    period: "2011–2025",
    category: "visit",
    status: "published",
    url: "https://japan-foreigners-stays.visualizing.jp/",
    art: "/art/stays.svg",
  },

  // —— 住む ——
  {
    slug: "status",
    title: "日本に住む外国人は、どんな在留資格でいるか",
    source: "出入国在留管理庁 在留外国人統計",
    period: "2006–2025",
    category: "live",
    status: "published",
    url: "https://japan-foreigners-status.visualizing.jp/",
    art: "/art/status.svg",
  },
];
