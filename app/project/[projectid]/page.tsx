import { Project } from "../../../utils/constants";
import { toSlug } from "../../../utils/slug";
import ProjectDetailClient from "./project_detail_client";

const BASE_URL = "https://www.bite-point.com";

export async function generateStaticParams() {
  return Project.filter((p) => p.title).map((project) => ({
    projectid: toSlug(project.title),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { projectid: string };
}) {
  const project = Project.find((p) => toSlug(p.title) === params.projectid);

  if (!project) {
    return {
      title: "Project Not Found | Htet Myat",
    };
  }

  const title = `${project.title} | Htet Myat`;
  const description = project.description || "Project by Htet Myat";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/project/${params.projectid}`,
      images: project.project_image
        ? [{ url: project.project_image }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ProjectDetailPage() {
  return <ProjectDetailClient />;
}
