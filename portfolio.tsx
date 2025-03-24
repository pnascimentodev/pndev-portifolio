"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  ExternalLink,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Cambiar sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Início", icon: <Code size={18} /> },
    { id: "about", label: "Sobre mim", icon: <User size={18} /> },
    { id: "projects", label: "Projetos", icon: <Briefcase size={18} /> },
    { id: "education", label: "Educação", icon: <GraduationCap size={18} /> },
  ]

  const skills = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "Git", level: 75 },
  ]

  const projects = [
    {
      title: "E-commerce App",
      description: "Uma aplicação de comércio eletrônico com carrinho de compras e gateway de pagamento.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
    {
      title: "Gerenciador de Tarefas",
      description: "Aplicação para gerenciar tarefas diárias com funcionalidade de arrastar e soltar.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
    {
      title: "App de Clima",
      description: "Aplicação que mostra o clima atual e previsão utilizando uma API externa.",
      technologies: ["React", "API REST", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 font-sans">
      {/* Navegación móvil */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-gray-800 p-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            SeuNome
          </span>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-4"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    activeSection === item.id ? "bg-gray-800 text-blue-400" : "hover:bg-gray-800/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>

      {/* Navegación de escritorio */}
      <nav className="hidden md:flex fixed left-8 top-1/2 transform -translate-y-1/2 flex-col gap-6 z-50">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2 p-2 rounded-full transition-all ${
              activeSection === item.id
                ? "bg-gray-800 text-blue-400 shadow-lg shadow-blue-500/20"
                : "hover:bg-gray-800/50"
            }`}
            title={item.label}
          >
            {item.icon}
            <span
              className={`${
                activeSection === item.id ? "opacity-100 w-auto" : "opacity-0 w-0"
              } overflow-hidden transition-all duration-300`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 pt-20 md:pt-0">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center py-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors">
                Desenvolvedor Web Junior
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Olá, sou{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  SeuNome
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Desenvolvedor frontend apaixonado por criar experiências web atraentes e funcionais.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Ver projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Contactar
                </Button>
              </div>
            </motion.div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <User size={24} className="text-blue-400" />
              Sobre mim
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-6">
                  Sou um desenvolvedor web junior com paixão por aprender novas tecnologias e criar soluções
                  inovadoras. Meu objetivo é combinar design e funcionalidade para criar experiências de usuário
                  excepcionais.
                </p>
                <p className="text-gray-300 mb-6">
                  Atualmente estou focado no desenvolvimento frontend com React, mas também tenho experiência com
                  Node.js e bancos de dados. Adoro resolver problemas e colaborar em equipes multidisciplinares.
                </p>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                  Baixar CV
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Minhas habilidades</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase size={24} className="text-blue-400" />
              Meus Projetos
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover border-b border-gray-800"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-sm flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Github size={16} /> Código
                      </a>
                      <a
                        href={project.demo}
                        className="text-sm flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={16} /> Demo
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap size={24} className="text-blue-400" />
              Educação
            </h2>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-gray-800 pb-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                <div className="mb-1 text-blue-400">2020 - 2023</div>
                <h3 className="text-xl font-semibold">Grado em Desenvolvimento Web</h3>
                <p className="text-gray-400">Universidade Exemplo</p>
                <p className="mt-2 text-gray-300">
                  Estudios centrados em desenvolvimento web, programação e design de interfaces.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-800 pb-8">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500" />
                <div className="mb-1 text-purple-400">2023</div>
                <h3 className="text-xl font-semibold">Bootcamp de Desenvolvimento Frontend</h3>
                <p className="text-gray-400">Academia Código</p>
                <p className="mt-2 text-gray-300">
                  Formacao intensiva em React, JavaScript moderno e desenvolvimento de aplicacoes web.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500" />
                <div className="mb-1 text-green-400">Em curso</div>
                <h3 className="text-xl font-semibold">Certificacao em UX/UI Design</h3>
                <p className="text-gray-400">Plataforma Online</p>
                <p className="mt-2 text-gray-300">
                  Aprendendo princípios de design de experiência do usuário e interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SeuNome. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

