import { projectsData } from "@/data/projects";
import ProjectDetailView from "./project-detail-view";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetailView slug={slug} />;
}
