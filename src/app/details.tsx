'use client'

import React, { useState } from 'react'
import { Moon, Sun, Code, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const projects = [
    { id: 1, title: "E-commerce Platform", description: "A full-stack e-commerce solution" },
    { id: 2, title: "Task Management App", description: "A React-based task organizer" },
    { id: 3, title: "Portfolio Website", description: "A customizable portfolio template" },
  ]

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground">
        <header className="fixed top-0 left-0 right-0 z-10 bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Rhys Gregory</h1>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 pt-20">
          <section className="py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Hello, I'm Rhys Gregory</h2>
              <p className="text-xl mb-8">A passionate web developer crafting beautiful and functional websites</p>
              <Button asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
          </section>

          <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-md mb-4"></div>
                    <p>Technologies used: React, Next.js, Tailwind CSS</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link href={`/projects/${project.id}`}>View Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                <Card key={skill} className="flex items-center justify-center p-4">
                  <Code className="mr-2" />
                  <span>{skill}</span>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Get in touch</CardTitle>
                <CardDescription>Fill out the form below to send me a message</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="bg-muted py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
            <p>&copy; 2023 Rhys Gregory. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Portfolio