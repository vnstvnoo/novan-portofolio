"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const GithubIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2C6.477 2 2 6.486 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0022 12.017C22 6.486 17.522 2 12 2z" />
  </svg>
)

const InstagramIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 013.95 3.95v8.5a3.95 3.95 0 01-3.95 3.95h-8.5a3.95 3.95 0 01-3.95-3.95v-8.5A3.95 3.95 0 017.75 3.8zm8.95 1.35a.9.9 0 100 1.8.9.9 0 000-1.8zM12 6.85A5.15 5.15 0 106.85 12 5.156 5.156 0 0012 6.85zm0 1.8A3.35 3.35 0 118.65 12 3.354 3.354 0 0112 8.65z" />
  </svg>
)

const LinkedinIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5 4.98 2.396 4.98 3.5zM1.5 8h3V22h-3V8zm7 0h2.879v1.91h.041C11.82 8.95 13.28 8 15.16 8 19 8 19.5 10.42 19.5 13.56V22h-3v-7.01c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V22h-3V8z" />
  </svg>
)

const ArrowIcon = () => (
  <span className="text-lg">→</span>
)

const SparkleIcon = () => (
  <span className="text-indigo-400">✦</span>
)

const projects = [
  {
    title: 'Consumer Behavior Analytics',
    desc: 'Analyzing customer behavior patterns and purchasing trends for strategic business decisions.',
    emoji: '📊',
  },
  {
    title: 'Digital Asset Prediction',
    desc: 'Predictive analytics for stock markets and digital assets using machine learning approaches.',
    emoji: '📈',
  },
  {
    title: 'Logistics AI Optimization',
    desc: 'Developing intelligent systems for delivery optimization and driver performance prediction.',
    emoji: '🚚',
  },
  {
    title: 'Breast Cancer Analysis ML',
    desc: 'Machine learning classification system for detecting benign and malignant tumors using predictive analytics.',
    emoji: '🧠',
  },
  {
    title: 'Motor Rental Website',
    desc: 'Responsive rental website using HTML, CSS, and JavaScript integrated with WhatsApp ordering flow.',
    emoji: '💻',
  },
]

export default function NovanStevanoPortfolio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2600)

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative flex flex-col items-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                className="absolute w-[300px] h-[300px] border border-indigo-500/20 rounded-full"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                className="absolute w-[220px] h-[220px] border border-purple-500/20 rounded-full"
              />

              <motion.h1
                initial={{ letterSpacing: '0.5em', opacity: 0 }}
                animate={{ letterSpacing: '0.15em', opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 z-10"
              >
                NOVAN
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-6 text-zinc-400 tracking-[0.35em] uppercase text-sm z-10"
              >
                Data • Business • Technology
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 220 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 mt-10 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{
          opacity: loading ? 0 : 1,
          scale: loading ? 1.05 : 1,
        }}
        transition={{ duration: 1.2 }}
      >
        <div className="bg-black text-white overflow-hidden min-h-screen">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_35%)]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-600/20 blur-[150px] rounded-full" />
      </div>

      <motion.nav
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black">Novan Stevano</h1>
            <p className="text-xs text-zinc-400">
              Data Enthusiast • Entrepreneur • Informatics Student
            </p>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </motion.nav>

      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8">
              <SparkleIcon />
              <span className="text-sm text-indigo-200">
                Data-Driven Problem Solver
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
              Data-Driven
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
                Entrepreneur
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
              I am focused on machine learning, data analysis, predictive systems, digital business, and long-term personal branding development.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-4 rounded-2xl font-semibold flex items-center gap-2"
              >
                Explore Portfolio
                <ArrowIcon />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/10 bg-white/5 px-7 py-4 rounded-2xl font-semibold"
              >
                Download CV
              </motion.button>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/vnstvnoo"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500/20 transition-all"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>

              <a
                href="https://github.com/vnstvnoo"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500/20 transition-all"
              >
                <GithubIcon className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/novan-stevano"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500/20 transition-all"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[450px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl overflow-hidden shadow-2xl shadow-purple-500/20 p-8">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-black">
                  N
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Novan Stevano</h3>
                  <p className="text-zinc-400">
                    Machine Learning • Data Science
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  'Machine Learning',
                  'Data Mining',
                  'Predictive Analytics',
                  'Business Strategy',
                  'Digital Product Development',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="p-5 rounded-2xl border border-white/10 bg-white/5"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-32 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-indigo-400 uppercase tracking-[0.35em] text-sm mb-6">
              About Me
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-[1.05] max-w-5xl mb-10">
              Turning curiosity,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
                {' '}data, business,
              </span>
              and technology into meaningful innovation.
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-4xl">
              I believe technology becomes powerful when it solves real-world problems.
              My journey started from curiosity about digital systems, then evolved into interests in machine learning,
              predictive analytics, digital business, and human behavior analysis.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl">
                  🚀
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Who I Am</h3>
                  <p className="text-zinc-400 text-sm">
                    Adaptive • Explorative • Long-Term Oriented
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed text-lg mb-6">
                I am an Informatics student from Universitas Amikom Yogyakarta who combines
                technical exploration with entrepreneurial thinking. I enjoy learning how data,
                systems, branding, and business strategy connect to create scalable impact.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                Beyond academics, I actively explore digital business, culinary ventures,
                content strategy, and personal branding development to strengthen both
                analytical and real-world problem-solving skills.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-[36px] border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-2xl p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-2xl">
                  🎯
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Vision & Direction</h3>
                  <p className="text-zinc-400 text-sm">
                    Data-Driven Future Builder
                  </p>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed text-lg mb-6">
                My goal is to build intelligent systems and data-driven solutions that can help businesses,
                creators, and communities make smarter decisions.
              </p>

              <div className="space-y-4">
                {[
                  'Machine Learning & Predictive Analytics',
                  'Behavioral & Consumer Analytics',
                  'Digital Product Development',
                  'AI & Data for Real Business Problems',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-white/10 bg-black/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span className="text-zinc-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                number: '3+',
                label: 'Business Experiences',
                desc: 'Culinary business, travel services, and digital branding exploration.',
              },
              {
                number: '5+',
                label: 'Project Interests',
                desc: 'Focused on machine learning, predictive systems, and consumer analytics.',
              },
              {
                number: '∞',
                label: 'Long-Term Growth Mindset',
                desc: 'Continuously learning technology, business, systems, and personal development.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
              >
                <h3 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                  {item.number}
                </h3>

                <h4 className="text-xl font-bold mb-3">
                  {item.label}
                </h4>

                <p className="text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
              Project Interests
            </p>

            <h2 className="text-5xl font-black">
              Research & Business Focus
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
              >
                <div className="text-5xl mb-6">{project.emoji}</div>

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-8">
                  {project.desc}
                </p>

                <button className="flex items-center gap-2 text-indigo-300 font-medium">
                  View Project
                  <ArrowIcon />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
            Entrepreneurial Journey
          </p>

          <h2 className="text-5xl font-black mb-8">
            Building business with data-driven thinking.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Beyond technology, I also explore entrepreneurship through culinary businesses such as tahu bakso, dimsum mentai, and travel package services.
          </p>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/10 py-12 bg-black/30"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black mb-2">Novan Stevano</h3>
            <p className="text-zinc-500">
              Machine Learning • Data Science • Entrepreneur
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://instagram.com/vnstvnoo" target="_blank" rel="noreferrer">
              <InstagramIcon className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" />
            </a>

            <a href="https://github.com/vnstvnoo" target="_blank" rel="noreferrer">
              <GithubIcon className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" />
            </a>

            <a href="https://www.linkedin.com/in/novan-stevano" target="_blank" rel="noreferrer">
              <LinkedinIcon className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </footer>
            </div>
      </motion.div>
    </>
  )
}
