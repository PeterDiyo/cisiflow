"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

const Page = () => {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  return (
    <div className="flex flex-col gap-2 p-4">
      <Button onClick={() => createProject({ name: "New Project" })}>
        Add new
      </Button>

      {projects?.map((project) => (
        <div
          className="border border-gray-300 rounded p-2 flex flex-col"
          key={project._id}
        >
          <p>{project.name}</p>
          <p className="text-sm text-gray-300">Owner ID: {project.ownerId}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
