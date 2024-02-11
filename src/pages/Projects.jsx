import React from "react";
import { Suspense } from 'react'
import { projects } from "../constants";
import Loader from "../components/Loader";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
function Projects() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My {""}
        <span className="orange-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className=" mt-9 ">
        <p>
        I've completed several projects, as described below. In the realm of React and UI/UX design, I have a strong passion for creating beautifully designed web pages. Figma is my preferred tool for web design, and I approach each project with a deep appreciation for both aesthetics and functionality. Let's collaborate to create something beautiful together!
        </p>
      </div>
      <Suspense fallback={<Loader/>}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`w-full ${project.theme} p-10 mt-10 rounded-md`}
          >
            <CardHeader
              color="blue-gray"
              className="relative h-48 overflow-hidden shadow-md mb-8"
            >
              <img
                src={project.iconUrl}
                alt={`${project.name} icon`}
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-xl font-bold"
              >
                {project.name}
              </Typography>
              <Typography className="text-gray-600">
                {project.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                View Project
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
      </Suspense>
    </section>
  );
}

export default Projects;
