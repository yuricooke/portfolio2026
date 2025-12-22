import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yuricooke.com"; // Update with your actual domain

  // Get all project IDs from your projects data
  const projects = [
    "hellstrom",
    "jotron",
    "logopadie",
    "hello-sales",
    "great-hikes",
    "barbarian-kingdoms",
  ];

  const projectUrls = projects.map((projectId) => ({
    url: `${baseUrl}/project/${projectId}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}

