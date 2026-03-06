"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

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

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "talks", "thoughts", "education", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
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
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2026</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Arun
                  <br />
                  <span className="text-muted-foreground">Addagatla</span>
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
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Open to Work
                  </div>
                  <div>Mumbai, India</div>
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
                  {["LLM", "Conversational AI", "GenAI", "Agentic AI", "MLOps", "Python"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
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
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
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
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
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
              <h2 className="text-3xl sm:text-4xl font-light">Talks & Presentations</h2>
              <div className="text-sm text-muted-foreground font-mono">2025 — 2026</div>
            </div>

            <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
              {[
                {
                  title: "Why MCP Matters: Revolutionizing Context for LLMs",
                  event: "Daytona Developers Club Tour '25",
                  location: "Mumbai, India",
                  date: "May 3, 2025",
                  type: "In-Person",
                  description:
                    "Presented how Model Context Protocol (MCP) enables LLMs to connect with live data and tools in real-time, breaking free from rigid APIs and static integrations. Included hands-on Python and OpenAI demos.",
                  image: "/talk1.png",
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
                },
              ].map((talk, index) => (
                <div
                  key={index}
                  className="group border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={talk.image}
                      alt={talk.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 text-xs font-mono bg-background/80 backdrop-blur-sm border border-border rounded-full">
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
            <h2 className="text-3xl sm:text-4xl font-light">Popular Posts</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
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
                  <article className="h-full p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer">
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
            {/* <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Education & Certifications</h2>
              <div className="text-sm text-muted-foreground font-mono">2018 — 2022</div>
            </div> */}

          <h2 className="text-3xl sm:text-4xl font-light">Education & Certifications</h2>


            <div className="space-y-10">
              <div className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500">
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
                      className="group/cert flex items-start justify-between gap-4 p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300"
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
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

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
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
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
