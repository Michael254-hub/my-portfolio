export type Project = {
  name: string;
  summary: string;
  description: string;
  tags: string[];
  href: string;
  accent: "blue" | "cyan" | "violet";
};

export const projects: Project[] = [
  {
    name: "Gifted Chana Crafts",
    summary: "E-commerce platform for a handmade crafts business",
    description:
      "A full storefront covering catalog browsing, cart, and checkout — built to give a small crafts business a fast, reliable online presence without the overhead of an off-the-shelf platform.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "https://www.giftedchanacrafts.com",
    accent: "blue",
  },
  {
    name: "Metro Sports Arena",
    summary: "Table tennis equipment storefront for the Kenyan market",
    description:
      "A product-led site for a table tennis retailer, positioning gear for players from beginner to professional and making equipment discovery straightforward.",
    tags: ["React", "Tailwind CSS", "Vercel"],
    href: "https://metro-sports.vercel.app/",
    accent: "cyan",
  },
  {
    name: "Twenty Four Seven Services",
    summary: "Maintenance & repair services company site",
    description:
      "A service-business site built around clear calls to action and fast load times, so prospective clients can find and request the right service with minimal friction.",
    tags: ["React", "Tailwind CSS"],
    href: "https://www.24-7solutions.co.ke",
    accent: "violet",
  },
];
