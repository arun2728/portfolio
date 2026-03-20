"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <AnimatedBackground isDark={isDark} />
      
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] -translate-x-1/2 -translate-y-1/2 z-0 transition-opacity duration-300"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)",
        }}
      />
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "talks", "thoughts", "education", "connect"].map((section) => (
            <div key={section} className="group relative flex items-center">
              <button
                onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
                className={`w-2 h-8 rounded-full transition-all duration-500 ${
                  activeSection === section 
                    ? "bg-foreground shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Navigate to ${section}`}
              />
              <span className="absolute left-6 px-2 py-1 text-xs font-mono bg-background/90 backdrop-blur-sm border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => { sectionsRef.current[0] = el }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider animate-pulse-slow">PORTFOLIO / 2026</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Arun
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-muted-foreground via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Addagatla
                  </span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  AI Engineer passionate about building innovative
                  <span className="text-foreground"> GenAI</span> and
                  <span className="text-foreground"> Agentic AI</span> solutions that solve
                  <span className="text-foreground"> real-world problems</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    <span className="text-green-500">Open to Work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Mumbai, India
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Founding Engineer - AI</div>
                  <div className="text-muted-foreground cursor-pointer"><a href="https://lamatic.ai" target="_blank" rel="noopener noreferrer">@ Lamatic.ai</a></div>
                  <div className="text-xs text-muted-foreground">March 2024 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["LLM", "Conversational AI", "GenAI", "Agentic AI", "MLOps", "Python"].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => { sectionsRef.current[1] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light relative inline-block">
                Selected Work
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              </h2>
              <div className="text-sm text-muted-foreground font-mono">2019 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2024",
                  role: "Founding Engineer - AI",
                  company: "Lamatic.ai",
                  description: "Architected core tech stack, including serverless flow executor, ETL pipeline, semantic RAG, and agentic AI infrastructure supporting 1M+ monthly requests.",
                  tech: ["Python", "Kubernetes", "LLM", "GenAI", "Semantic RAG"],
                },
                {
                  year: "2022",
                  role: "SDE - AI/ML",
                  company: "Samespace",
                  description: "Created ML-based productivity monitoring system, AI messaging assistant, meeting insights using ASR, and semantic image search.",
                  tech: ["Python", "TensorFlow", "NLP", "OpenAI", "ASR"],
                },
                {
                  year: "2021",
                  role: "ML Engineer - NLP",
                  company: "Enterpret",
                  description: "Improved text classification pipeline, optimized ML models, designed CI/CD pipelines, and implemented drift & anomaly detection systems.",
                  tech: ["Python", "ML Pipelines", "CI/CD", "Data Science"],
                },
                {
                  year: "2020",
                  role: "Data Science Intern",
                  company: "Algoritmo Lab",
                  description: "Performed statistical analysis on 100k+ transactions for anomaly detection and developed API for threshold-based alerting systems.",
                  tech: ["Python", "Statistical Analysis", "SQL"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group relative grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-transparent transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 rounded-lg hover:px-4 hover:-mx-4"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="talks"
          ref={(el) => { sectionsRef.current[2] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light relative inline-block">
                Talks & Presentations
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              </h2>
              <div className="text-sm text-muted-foreground font-mono">2025 — 2026</div>
            </div>

            <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
              {[
                {
                  title: "Why LLMs Need Memory",
                  event: "Lamatic.ai Community Session",
                  location: "Online",
                  date: "Mar 14, 2026",
                  type: "Online",
                  description:
                    "Explored why memory is the missing infrastructure layer for production AI agents — covering long-term memory implementation, reliable and explainable AI systems at scale, and a live deep dive into Lamatic.ai's agent-building platform.",
                  image: "/talk3.png",
                  youtube: "https://www.youtube.com/watch?v=iwrBZWDOnSo",
                  linkedin: "https://www.linkedin.com/events/whyllmsneedmemory7437920348341161984/",
                  medium: "https://medium.com/@arunaddagatla/why-llms-need-memory-building-ai-agents-with-a-hands-on-implementation-849dbbf6fd0d",
                },
                {
                  title: "What is MCP and how it works",
                  event: "Daytona Developers Club Tour '25",
                  location: "Mumbai, India",
                  date: "May 3, 2025",
                  type: "In-Person",
                  description:
                    "Presented how Model Context Protocol (MCP) enables LLMs to connect with live data and tools in real-time, breaking free from rigid APIs and static integrations. Included hands-on Python and OpenAI demos.",
                  image: "/talk1.png",
                  medium: "https://medium.com/@arunaddagatla/building-your-first-mcp-server-with-python-a-beginners-guide-b76665e2b2ff",
                },
                {
                  title: "Why Prompting Isn't Enough: The Case for RAG",
                  event: "Lamatic.ai Community Session",
                  location: "Online",
                  date: "Jan 16, 2026",
                  type: "Online",
                  description:
                    "Discussed why RAG is a system design problem, not just a feature — covering common failure modes, retrieval strategies, evaluation loops, and why prompt engineering alone falls short in production.",
                  image: "/talk2.png",
                  medium: "https://medium.com/gopenai/why-real-ai-systems-need-more-than-clever-prompts-41ccf0f1dbce",
                },
                {
                  title: "Context is the New Code",
                  event: "TBA",
                  location: "TBA",
                  date: "Coming Soon",
                  type: "Upcoming",
                  description:
                    "For decades, we believed the magic of software was in the instructions — the code. Now, with AI, a quiet revolution is underway: the quality of what you feed an AI matters more than how you build it.",
                },
                {
                  title: "Beyond Words: How AI Learned to See, Hear, and Think Together",
                  event: "TBA",
                  location: "TBA",
                  date: "Coming Soon",
                  type: "Upcoming",
                  description:
                    "Language was AI's first great breakthrough. But human intelligence was never just about words. Multimodal AI is the ability of a single model to understand and reason across text, images, audio, and video — not separately, but together.",
                },
                {
                  title: "The Autonomous Turn: When AI Stops Waiting for Instructions",
                  event: "TBA",
                  location: "TBA",
                  date: "Coming Soon",
                  type: "Upcoming",
                  description:
                    "There's a subtle but seismic shift happening in AI right now. For years, AI was reactive — you asked, it answered. That era is ending. Agentic AI doesn't wait. It plans, acts, evaluates, and tries again.",
                },
              ].map((talk, index) => (
                <div
                  key={index}
                  className="group border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-all duration-500 hover-lift glow-on-hover"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {talk.image ? (
                      <Image
                        src={talk.image}
                        alt={talk.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <svg className="w-12 h-12 mx-auto text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-xs text-muted-foreground/70 font-mono">Date TBA</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 text-xs font-mono bg-background/80 backdrop-blur-sm border border-border rounded-full ${talk.type === "Upcoming" ? "text-yellow-500 border-yellow-500/50" : ""}`}>
                        {talk.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{talk.date}</span>
                      <span>{talk.location}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {talk.title}
                    </h3>

                    <div className="text-sm text-muted-foreground">{talk.event}</div>

                    <p className="text-muted-foreground leading-relaxed">{talk.description}</p>

                    {(talk.youtube || talk.linkedin || talk.medium) && (
                      <div className="flex items-center gap-2 pt-2">
                        {talk.youtube && (
                          <Link
                            href={talk.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-2.5 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 hover:bg-muted/50 transition-all duration-300 whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            YouTube
                          </Link>
                        )}
                        {talk.linkedin && (
                          <Link
                            href={talk.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-2.5 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 hover:bg-muted/50 transition-all duration-300 whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                          </Link>
                        )}
                        {talk.medium && (
                          <Link
                            href={talk.medium}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-2.5 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 hover:bg-muted/50 transition-all duration-300 whitespace-nowrap"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                            </svg>
                            Medium
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => { sectionsRef.current[3] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light relative inline-block">
              Popular Posts
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></span>
            </h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Why LLMs Need Memory: Building AI Agents with a Hands-On Implementation",
                  excerpt: "LLMs forget by design. Here's how external memory makes AI agents more personalized, consistent, and useful over time.",
                  date: "Mar 20, 2026",
                  readTime: "15 min",
                  url: "https://medium.com/@arunaddagatla/why-llms-need-memory-building-ai-agents-with-a-hands-on-implementation-849dbbf6fd0d",
                },
                {
                  title: "Why real AI systems need more than clever prompts",
                  excerpt: "The moment prompt tricks fail and engineering finally takes over.",
                  date: "Jan 17, 2026",
                  readTime: "8 min",
                  url: "https://medium.com/gopenai/why-real-ai-systems-need-more-than-clever-prompts-41ccf0f1dbce",
                },
                {
                  title: "Cut Token Costs by 60%: How TOON Outperforms JSON for AI Workflows",
                  excerpt: "Stop wasting tokens — discover the new data format replacing JSON for LLMs. A 60% efficiency boost inside.",
                  date: "Nov 28, 2025",
                  readTime: "5 min",
                  url: "https://medium.com/@arunaddagatla/cut-token-costs-by-60-how-toon-outperforms-json-for-ai-workflows-cf67d038db2d",
                },
                {
                  title: "Inside NVIDIA Nemotron 3: Hybrid MoE Models Built for Multi-Agent AI",
                  excerpt: "A deep dive into Nemotron 3 Nano, Super, and Ultra - architecture, benchmarks, and why sparse models win on token economics.",
                  date: "Dec 24, 2025",
                  readTime: "12 min",
                  url: "https://medium.com/gopenai/inside-nvidia-nemotron-3-hybrid-moe-models-built-for-multi-agent-ai-2aabcc056e93",
                },
                {
                  title: "Building Your First MCP Server with Python: A Beginner's Guide",
                  excerpt: "Learn how to create a streaming MCP server and connect to it with GPT-4o mini, step-by-step.",
                  date: "Apr 26, 2025",
                  readTime: "11 min",
                  url: "https://medium.com/@arunaddagatla/building-your-first-mcp-server-with-python-a-beginners-guide-b76665e2b2ff",
                },
              ].map((post, index) => (
                <Link
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <article className="h-full p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover-lift glow-on-hover cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                  </article>
                </Link>
              ))}
            </div>

            <Link
              href="https://arunaddagatla.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 py-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
            >
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Read more on Medium
              </span>
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-foreground transform group-hover:translate-x-1 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        <section
          id="education"
          ref={(el) => { sectionsRef.current[4] = el }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
          <h2 className="text-3xl sm:text-4xl font-light relative inline-block">
            Education & Certifications
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
          </h2>


            <div className="space-y-10">
              <div className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover-lift">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-medium">B.E. in Computer Engineering</h3>
                    <div className="text-muted-foreground">MCT&apos;s Rajiv Gandhi Institute of Technology</div>
                    <div className="text-sm text-muted-foreground">University of Mumbai</div>
                  </div>
                  <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                    {/* <div className="text-sm text-muted-foreground font-mono">2018 — 2022</div> */}
                    <span className="px-3 py-1 text-xs border border-border rounded-full font-mono">
                      9.33 CGPA
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  Studied core CS subjects including Data Structures, Algorithms, DBMS, OS, and AI. Completed additional coursework in Deep Learning, Data Science, and Machine Learning.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-sm text-muted-foreground font-mono">CERTIFICATIONS</div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      name: "Deep Learning A-Z: Hands-On ANNs",
                      issuer: "Udemy",
                      date: "Mar 2021",
                      url: "https://www.udemy.com/certificate/UC-ed81752d-7a2a-4846-8ee3-c2b5e84db8c1/",
                    },
                    {
                      name: "Neural Networks and Deep Learning",
                      issuer: "Coursera · deeplearning.ai",
                      date: "Dec 2020",
                      url: "https://coursera.org/share/e377adb2fd7534cfa6ae43630370e967",
                    },
                    {
                      name: "The Data Science Course 2020",
                      issuer: "Udemy",
                      date: "Nov 2020",
                      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-e74f9313-11ec-4602-b27e-917920654ea4.jpg?v=1606298747000",
                    },
                    {
                      name: "Master Python Programming",
                      issuer: "Udemy",
                      date: "Apr 2020",
                      url: "https://udemy-certificate.s3.amazonaws.com/image/UC-0d7f635b-4497-4737-aadc-edf1d152abdc.jpg?v=1586978193000",
                    },
                    {
                      name: "Tools for Data Science",
                      issuer: "Coursera · IBM",
                      date: "Jan 2020",
                      url: "https://www.coursera.org/account/accomplishments/verify/PGBAD347DM26",
                    },
                    {
                      name: "Foundation of Data Science?",
                      issuer: "Coursera · IBM",
                      date: "Dec 2019",
                      url: "https://www.coursera.org/account/accomplishments/certificate/K9GF6BVCF2RR",
                    },
                    // {
                    //   name: "Python Data Structures",
                    //   issuer: "Coursera · University of Michigan",
                    //   date: "Dec 2019",
                    //   url: "https://coursera.org/share/1f96751248e13812bfe3d91e96a6c5bd",
                    // },
                  ].map((cert, index) => (
                    <Link
                      key={index}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cert flex items-start justify-between gap-4 p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover-lift"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="text-sm font-medium group-hover/cert:text-muted-foreground transition-colors duration-300 truncate">
                          {cert.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{cert.issuer}</div>
                      </div>
                      <div className="text-xs text-muted-foreground font-mono shrink-0">{cert.date}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => { sectionsRef.current[5] = el }} className="min-h-[60vh] py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light relative inline-block">
                Let's Connect
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></span>
              </h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about AI, ML, and building innovative solutions.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:arun.a.addagatla@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">arun.a.addagatla@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@arun2728", url: "https://github.com/arun2728" },
                  { name: "LinkedIn", handle: "arun-addagatla", url: "https://www.linkedin.com/in/arun-addagatla" },
                  { name: "Resume", handle: "Open PDF", url: "https://drive.google.com/file/d/1d8OQIpGrO33-Pyp8J8rlAwLHwNfI_xOr/view?usp=drive_link" },
                  { name: "Blog", handle: "Medium", url: "https://arunaddagatla.medium.com/" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover-lift glow-on-hover"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2026 Arun Addagatla. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with v0.dev by Arun Addagatla</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
