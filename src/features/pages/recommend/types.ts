export type BestRanking = {
  title: string;
  key: string;
  official_url: string;
  description: string;
  links: {
    netflix_url?: string;
    u_next_url?: string;
    amazon_prime_url?: string;
  };
  data: [string, string, string | undefined];
  slug: number;
};
