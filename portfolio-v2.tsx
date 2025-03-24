"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const typingCursorStyle = {
  animation: 'blink 1s step-end infinite',
}

export default function PortfolioV2() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [typingComplete, setTypingComplete] = useState(false)

  // Adicionar estilos para o cursor pulsante
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes blink {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }
      
      .typing-cursor {
        display: inline-block;
        width: 2px;
        height: 1em;
        background-color: #a855f7;
        margin-left: 4px;
        position: relative;
        top: 3px;
        animation: blink 1s infinite;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Cambiar tema claro/oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Cambiar sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

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
    { category: "Frontend", items: ["React", "Angular", "Vue", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Java", "Python", "TypeScript"] },
    { category: "Ferramentas", items: ["Swagger", "Git", "Jest", "Figma"] },
  ]

  const projects = [
    {
      title: "BuzzFeed Clone",
      description: "Uma aplicação um clone do BuzzFeed, onde o usuário participa de um quiz e recebe um resultado final, projeto foi realizado em um Bootcamp sobre Angular.",
      technologies: ["Angular", "Javascript", "Vercel"],
      image: "/images/projects/buzzfeed.png",
      github: "https://github.com/pnascimentodev/angular-buzzfeed-quizz",
      demo: "https://angular-buzzfeed-quizz-indol.vercel.app/",
    },
    {
      title: "Api RestFull em Java",
      description: "RESTful API do Bootcamp Decola Tech Avanade 2025 construída em Java 17 com Spring Boot 3, documentada com Swagger e hospedada na Railway.",
      technologies: ["Java", "SprintBoot", "Swagger", "Railway"],
      image: "/images/projects/preview3.png",
      github: "https://github.com/pnascimentodev/spring-decola-tech-2025",
      demo: "https://spring-decola-tech-2025-production.up.railway.app/swagger-ui/index.html",
    },
    {
      title: "Landing Page PetShop",
      description: "Projeto que simula uma landing page de um PetShop, com integração ao Whatsapp e Google Maps, como também depoimentos de clientes, e marcas que utilizam no PetShop.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      image: "/images/projects/preview2.png",
      github: "https://github.com/pnascimentodev/pets-lp",
      demo: "https://petsdev.netlify.app/",
    },
  ]

  const education = [
    {
      period: "2017 - 2020",
      title: "Graduação em Redes de Computadores",
      institution: "Universidade Tiradentes",
      description: "Estudos focados em redes de computadores e segurança da informação, com uma base básica em programação.",
    },
    {
      period: "2024 - 2025",
      title: "MBA em Engenharia de Software",
      institution: "Uninassau",
      description: "Pós graduação em Engenharia de Software, com foco em desenvolvimento de software e gerenciamento de projetos.",
    },
    {
      period: "Em andamento",
      title: "Graduação em Análise e Desenvolvimento de Sistemas",
      institution: "Uninassau",
      description: "Cursando o 1º semestre, com foco em desenvolvimento de software e gerenciamento de projetos.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl hidden sm:block"></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-gray-100 dark:bg-gray-800 text-purple-500 dark:text-purple-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-16"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">{item.icon}</div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex items-center py-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Olá, me chamo{" "}
                  <span>
                    <TypeAnimation
                      sequence={[
                        'Priscila Nascimento',
                        () => setTypingComplete(true)
                      ]}
                      wrapper="span"
                      speed={75}
                      cursor={false}
                      repeat={0}
                      style={{ 
                        backgroundImage: 'linear-gradient(to right, #a855f7, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    />
                    <span className="typing-cursor"></span>
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Sou uma desenvolvedora FullStack apaixonada por criar experiências digitais envolventes e funcionais, integrando-as perfeitamente aos seus serviços.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#projects">
                    <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white border-0">
                      Ver projetos <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="/files/curriculo.pdf" download>
                    <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                      Baixar CV
                    </Button>
                  </a>
                </div>

                <div className="mt-12 flex gap-4">
                  <a
                    href="https://github.com/pnascimentodev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/devpnascimento/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:pnascimento2808@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 md:order-2 flex justify-center"
              >
                <div className="relative">
                  <div className="w-80 h-80 md:w-[32rem] md:h-[32rem] bg-gradient-to-br from-purple-500 to-violet-500 blur-3xl opacity-20 absolute -inset-4"></div>
                  <div className="w-80 h-80 md:w-[32rem] md:h-[32rem] overflow-visible relative z-10 transition-transform duration-300 hover:scale-105">
                    <img
                      src="/images/pndev.png"
                      alt="Foto Priscila Nascimento"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400">
                Sobre mim
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Minhas habilidades</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Tecnologias e ferramentas com as quais trabalho diariamente para criar soluções eficientes.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="Frontend" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  {skills.map((skill) => (
                    <TabsTrigger key={skill.category} value={skill.category}>
                      {skill.category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {skills.map((skill) => (
                  <TabsContent key={skill.category} value={skill.category} className="mt-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {skill.items.map((item) => (
                        <div
                          key={item}
                          className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
              
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <div className="text-3xl font-bold text-purple-500 dark:text-purple-400 mb-1">2+</div>
                  <div className="text-gray-600 dark:text-gray-300">Anos de experiência</div>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                  <div className="text-3xl font-bold text-violet-500 dark:text-violet-400 mb-1">5+</div>
                  <div className="text-gray-600 dark:text-gray-300">Projetos completados</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400">
                Projetos
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Meus trabalhos recentes</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Dê uma olhada em alguns dos projetos nos quais trabalhei recentemente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <Github size={18} className="text-white" />
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink size={18} className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400">
                Educação
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Minha jornada acadêmica</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Conheça minha formação e cursos que construíram minha base de conhecimento.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="hidden sm:block pt-1">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-violet-500"></div>
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-6 mt-2"></div>
                    )}
                  </div>

                  <Card className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-violet-500/10 text-violet-500 dark:bg-violet-400/10 dark:text-violet-400">
                        {item.period}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">{item.institution}</p>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/pnascimentodev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/devpnascimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:pnascimento2808@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
            
            <div className="text-gray-500 dark:text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Priscila Nascimento. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

