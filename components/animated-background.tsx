"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export function AnimatedBackground({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000))

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
      particlesRef.current = particles
    }

    const drawParticle = (particle: Particle) => {
      if (!ctx) return
      const color = isDark ? `rgba(255, 255, 255, ${particle.opacity})` : `rgba(0, 0, 0, ${particle.opacity * 0.6})`
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
    }

    const drawConnections = () => {
      if (!ctx) return
      const particles = particlesRef.current
      const connectionDistance = 150
      const mouseDistance = 200

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15
            const color = isDark ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity * 0.5})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = color
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        const mdx = particles[i].x - mouseRef.current.x
        const mdy = particles[i].y - mouseRef.current.y
        const mouseDistCalc = Math.sqrt(mdx * mdx + mdy * mdy)

        if (mouseDistCalc < mouseDistance) {
          const opacity = (1 - mouseDistCalc / mouseDistance) * 0.3
          const color = isDark ? `rgba(100, 200, 255, ${opacity})` : `rgba(0, 100, 200, ${opacity})`
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.strokeStyle = color
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    const updateParticles = () => {
      const particles = particlesRef.current

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      })
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawConnections()
      particlesRef.current.forEach(drawParticle)
      updateParticles()

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  )
}
