'use client'

import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from 'react'

// This would typically come from a database or API
const projects = [
  { 
    id: 1, 
    title: "Travel Planner", 
    description: "A travel planner that displays petrol prices along a route.",
    longDescription: "This travel planner displays petrol prices along a route. It uses the Mapbox API to display the route and the Government Open data scheme for retrieving the petrol prices.",
    technologies: ["PHP", "HTML", "JavaScript", "CSS", "MySQL"],
    features: [
      "Responsive design for mobile and desktop",
      "Display petrol prices along a route", 
      "Display EV charging stations along a route",
      "Functionality in multiple countries",
      "Filtering of petrol/EV brands",
      "Historical data for petrol prices",
    ],
    images: [
      "/images/routepal-main.png",
      "/images/routepal-petrol.png",
      "/images/routepal-electric.png",
      "/images/routepal-history.png",
    ],
    url: "https://routepal.co.uk",
  },
  { 
    id: 2, 
    title: "BookBuddy", 
    description: "A Book review site",
    longDescription: "This Book review site allows users to search for books, read reviews, and leave their own reviews. It uses the Google Books API to retrieve book information and the Open Library API to retrieve book covers.",
    technologies: ["Symfony", "PHP", "HTML", "CSS", "MySQL"],
    features: [
      "User authentication",
      "Search for books",
      "Read reviews",
      "Write reviews",
      "User access control",
      "Notification system",
    ],
    images: [
      "/images/bookbuddy-main.png",
      "/images/bookbuddy-search.png",
      "/images/bookbuddy-review.png",
    ],
    url: "https://main-bvxea6i-bho7r3tnhlezk.uk-1.platformsh.site/books",
  },
  { 
    id: 3, 
    title: "Portfolio Website", 
    description: "A customizable portfolio template for developers.",
    longDescription: "This portfolio website template is designed for developers to showcase their projects and skills. It's built with Next.js and Tailwind CSS, offering a clean, modern design with easy customization options.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    features: [
      "Responsive design",
      "Dark mode toggle",
      "Project showcase with detailed project pages",
      "Skills section",
      "Contact form",
      "Easy to customize and extend",
      "SEO optimized"
    ],
    imageUrl: "/placeholder.svg?height=400&width=600"
  },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    notFound()
  }

  const nextImage = () => {
    if (!project.images) return;
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    if (!project.images) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Button asChild variant="ghost" className="mb-6 hover:bg-slate-100 dark:hover:bg-slate-800">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </Button>
      
      <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
        {/* Main Content */}
        <div className="space-y-6">
          <Card className="border-2">
            <CardHeader className="space-y-4">
              <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
              <CardDescription className="text-lg">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[300px] bg-muted rounded-md mb-6 overflow-hidden group">
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`} 
                  className="w-full h-full object-contain rounded-md"
                />
                
                {/* Navigation Buttons */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={previousImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-white w-4' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">{project.longDescription}</p>
              </div>
            </CardContent>
          </Card>

          {/* Features Section */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-3 list-none pl-0">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 w-6 h-6 mr-3 flex-shrink-0 text-green-600 dark:text-green-300 text-sm">
                      {index + 1}
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {project.url && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Live Website</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </a>
                  
                  {project.id === 2 && (
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium">Demo Login:</p>
                      <p>Username: john_reader</p>
                      <p>Password: Password123</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}