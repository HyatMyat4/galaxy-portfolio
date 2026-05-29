import { Project } from "../utils/constants";
import { toSlug } from "../utils/slug";

const BASE_URL = "https://www.bite-point.com";

export default async function sitemap() {
  const projectEntries = Project.filter((p) => p.title).map((project) => ({
    url: `${BASE_URL}/project/${toSlug(project.title)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    ...projectEntries,
  ];
}
