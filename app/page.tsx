'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Menu, Zap, Globe, Target, Users, Code, Cloud, Smartphone, Palette, Shield, Brain, CheckCircle2, Star, MapPin, Mail, Phone, Clock, Linkedin, Facebook, Instagram, X, Search, Rocket, Building2, Heart, ShoppingCart, GraduationCap, Factory, Car, Hotel, Gamepad2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function TynatoWebsite() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary"
              >
                <span className="text-lg font-bold text-primary-foreground">T</span>
              </motion.div>
              <span className="text-xl font-bold">TYNATO</span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              {['Service', 'About Us', 'Portfolio', 'Testimonials', 'Careers', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '')}`} 
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button size="sm" className="hidden md:flex group" asChild>
              <Link href="#contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden border-b py-24 md:py-40">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div 
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(66, 100, 210, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(66, 153, 225, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(66, 100, 210, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div
                variants={fadeInUp}
                className="mb-4 inline-block"
              >
                <Badge variant="outline" className="border-primary/50 bg-primary/5 px-4 py-1.5 text-sm">
                  Transforming Businesses Since 2010
                </Badge>
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Innovation
                </span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                TYNATO delivers cutting-edge IT services and product development solutions that drive growth and efficiency for businesses worldwide.
              </motion.p>
              
              {/* Key Features */}
              <motion.div
                variants={fadeInUp}
                className="mb-8 flex flex-col gap-3 sm:gap-4"
              >
                {[
                  { icon: Zap, text: "Agile methodologies ensure rapid project completion" },
                  { icon: Target, text: "Cutting-edge solutions using latest technologies" },
                  { icon: Users, text: "Tailored solutions for your business needs" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3 justify-center lg:justify-start"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="text-left text-sm text-muted-foreground">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Button size="lg" className="gap-2 group shadow-lg shadow-primary/20" asChild>
                  <Link href="#service">
                    Explore Services 
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group bg-transparent" asChild>
                  <Link href="#contact">
                    Get In Touch
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { 
                    number: "100+",
                    label: "Projects Delivered",
                    icon: Target,
                    gradient: "from-blue-500 to-cyan-500"
                  },
                  { 
                    number: "30+",
                    label: "Happy Clients",
                    icon: Users,
                    gradient: "from-purple-500 to-pink-500"
                  },
                  { 
                    number: "25+",
                    label: "Team Members",
                    icon: Globe,
                    gradient: "from-green-500 to-emerald-500"
                  },
                  { 
                    number: "98%",
                    label: "Client Satisfaction",
                    icon: Star,
                    gradient: "from-orange-500 to-red-500"
                  }
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    variants={scaleIn}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className={`group relative h-full overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl hover:border-transparent ${i % 2 === 0 ? 'mt-8' : ''}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                      <CardContent className="relative p-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg`}>
                            <stat.icon className="h-6 w-6" />
                          </div>
                        </motion.div>
                        <div className={`mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-3xl font-bold text-transparent md:text-4xl`}>
                          {stat.number}
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key Numbers with Counter Animation */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "30+", label: "Happy Clients" },
              { number: "25+", label: "Team Members" },
              { number: "3+", label: "Years Experience" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary">{stat.number}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-b py-20">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Comprehensive IT solutions designed to elevate your business to new heights. We offer end-to-end services that cover every aspect of your digital transformation journey.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: Code,
                title: "Software Development",
                desc: "Custom software solutions built with modern technologies and best practices. From enterprise applications to microservices, we deliver scalable, maintainable code.",
                features: ["Web Application Development", "Enterprise Software Solutions", "RESTful API Development", "SaaS Product Development"]
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                desc: "Leverage the power of cloud computing with our expertise in AWS, Azure, and Google Cloud. We help you migrate, optimize, and scale effortlessly.",
                features: ["Cloud Migration & Strategy", "DevOps & CI/CD Implementation", "Cloud Security & Compliance", "Serverless Architecture"]
              },
              {
                icon: Smartphone,
                title: "Mobile App Development",
                desc: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
                features: ["Native iOS Development (Swift)", "Native Android Development (Kotlin)", "React Native Applications", "Flutter Development"]
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                desc: "Beautiful, intuitive interfaces that users love. Our design team creates experiences that combine aesthetics with functionality.",
                features: ["User Research & Analysis", "Wireframing & Prototyping", "Visual Design & Branding", "Design System Creation"]
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                desc: "Protect your digital assets with comprehensive security solutions. We identify vulnerabilities and implement robust protection measures.",
                features: ["Security Audits & Assessments", "Penetration Testing", "Compliance Management", "Network Security"]
              },
              {
                icon: Brain,
                title: "Data Analytics & AI",
                desc: "Turn data into actionable insights with advanced analytics and machine learning. Predict trends and automate complex business processes.",
                features: ["Business Intelligence Solutions", "Data Visualization Dashboards", "Predictive Analytics", "Machine Learning Models"]
              }
            ].map((service, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/50">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="mb-3 h-12 w-12 text-primary" />
                    </motion.div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.features.map((feature, j) => (
                        <motion.li 
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16"
          >
            <h3 className="mb-8 text-center text-2xl font-bold">Technology Stack</h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {["React", "Node.js", "Python", "AWS", "Azure", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "TypeScript", "Firebase"].map((tech, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="px-4 py-2 text-sm cursor-default">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="border-b bg-muted/30 py-16"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold">Ready to Start Your Digital Transformation?</h2>
            <p className="mb-8 text-pretty text-muted-foreground">
              {"Let's turn your vision into reality. Our team is ready to help you build innovative solutions that drive business growth."}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">View Our Services</Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Development Process Section */}
      <section id="process" className="border-b bg-muted/30 py-20">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Development Process</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              We follow a proven methodology to ensure project success and client satisfaction
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                step: "1",
                icon: Search,
                title: "Discovery & Planning",
                desc: "We start by understanding your business goals, requirements, and challenges. Our team conducts thorough research and creates a detailed project roadmap.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-500",
                shadowColor: "group-hover:shadow-blue-500/20"
              },
              {
                step: "2",
                icon: Palette,
                title: "Design & Prototype",
                desc: "Our designers create wireframes and interactive prototypes. We refine the design based on your feedback to ensure it meets your vision perfectly.",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-500",
                shadowColor: "group-hover:shadow-purple-500/20"
              },
              {
                step: "3",
                icon: Code,
                title: "Development & Testing",
                desc: "Our developers build your solution using agile methodologies. We conduct rigorous testing at every stage to ensure quality and performance.",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-500",
                shadowColor: "group-hover:shadow-green-500/20"
              },
              {
                step: "4",
                icon: Rocket,
                title: "Launch & Support",
                desc: "We handle the deployment and provide comprehensive training. Our support team is always available to help you succeed post-launch.",
                color: "from-orange-500 to-red-500",
                bgColor: "bg-orange-500",
                shadowColor: "group-hover:shadow-orange-500/20"
              }
            ].map((process, i) => (
              <motion.div 
                key={i} 
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className={`group relative h-full overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl ${process.shadowColor} hover:border-transparent`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />
                  <motion.div 
                    className="absolute -right-8 -top-8 text-9xl font-bold opacity-5"
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {process.step}
                  </motion.div>
                  <CardHeader className="relative">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${process.color} text-white shadow-lg transition-shadow duration-300 group-hover:shadow-xl`}>
                        <process.icon className="h-7 w-7" />
                      </div>
                    </motion.div>
                    <div className={`mb-2 inline-block rounded-full bg-gradient-to-r ${process.color} bg-clip-text text-sm font-bold text-transparent`}>
                      Step {process.step}
                    </div>
                    <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-sm leading-relaxed">{process.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section id="industries" className="border-b py-20">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Industries We Serve</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
          >
            {[
              { icon: Building2, title: "Finance & Banking", gradient: "from-blue-500 to-blue-600", shadow: "group-hover:shadow-blue-500/30" },
              { icon: Heart, title: "Healthcare", gradient: "from-red-500 to-rose-600", shadow: "group-hover:shadow-red-500/30" },
              { icon: ShoppingCart, title: "E-Commerce", gradient: "from-green-500 to-emerald-600", shadow: "group-hover:shadow-green-500/30" },
              { icon: GraduationCap, title: "Education", gradient: "from-purple-500 to-violet-600", shadow: "group-hover:shadow-purple-500/30" },
              { icon: Factory, title: "Manufacturing", gradient: "from-orange-500 to-amber-600", shadow: "group-hover:shadow-orange-500/30" },
              { icon: Car, title: "Transportation", gradient: "from-cyan-500 to-blue-600", shadow: "group-hover:shadow-cyan-500/30" },
              { icon: Hotel, title: "Hospitality", gradient: "from-pink-500 to-rose-600", shadow: "group-hover:shadow-pink-500/30" },
              { icon: Gamepad2, title: "Entertainment", gradient: "from-indigo-500 to-purple-600", shadow: "group-hover:shadow-indigo-500/30" }
            ].map((industry, i) => (
              <motion.div 
                key={i} 
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Card className={`group relative h-full overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl ${industry.shadow} hover:border-transparent`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                  <CardHeader className="relative text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="mx-auto mb-4"
                    >
                      <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.gradient} text-white shadow-lg transition-all duration-300 group-hover:shadow-2xl`}>
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <industry.icon className="h-10 w-10" />
                        </motion.div>
                        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${industry.gradient} opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50`} />
                      </div>
                    </motion.div>
                    <CardTitle className="text-base font-semibold transition-colors duration-300 group-hover:text-primary">{industry.title}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="aboutus" className="border-b py-20">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About TYNATO</h2>
            <p className="mx-auto max-w-2xl text-pretty italic text-muted-foreground">
              {"Building the future of technology, one solution at a time, founded on the principles of being smart, scalable, and secure."}
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Mission</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At TYNATO, we believe technology should empower businesses, not complicate them. Our mission is to deliver innovative IT solutions that drive real business value, helping organizations of all sizes achieve their goals through digital transformation.
                  </p>
                  <p>
                    We combine technical excellence with deep industry knowledge to create solutions that are not just functional, but transformative. Every project we undertake is an opportunity to push boundaries and set new standards in software development.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent p-8">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary text-white">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Our Values</h3>
                <div className="space-y-3">
                  {[
                    { title: "Innovation", desc: "Constantly exploring new technologies and methodologies", color: "text-blue-500" },
                    { title: "Quality", desc: "Delivering excellence in every line of code we write", color: "text-purple-500" },
                    { title: "Collaboration", desc: "Working closely with clients as true partners", color: "text-green-500" },
                    { title: "Transparency", desc: "Clear communication and honest project management", color: "text-orange-500" },
                    { title: "Growth", desc: "Investing in our team's continuous development", color: "text-pink-500" }
                  ].map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-3 rounded-lg p-3 transition-colors duration-300 hover:bg-accent/5"
                    >
                      <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 ${value.color}`} />
                      <div>
                        <div className={`font-semibold ${value.color}`}>{value.title}</div>
                        <div className="text-sm text-muted-foreground">{value.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16"
          >
            <h3 className="mb-8 text-center text-2xl font-bold">Our Journey</h3>
            <div className="relative max-w-3xl mx-auto">
              <motion.div 
                className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
              {[
                { year: "2021", title: "Foundation", desc: "TYNATO was founded with a vision to revolutionize IT services", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/30", dotColor: "bg-primary" },
                { year: "2022", title: "Growth", desc: "Expanded team to 15+ professionals and served 20+ clients", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/30", dotColor: "bg-primary" },
                { year: "2023", title: "Innovation", desc: "Launched AI/ML division and cloud migration services", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/30", dotColor: "bg-accent" },
                { year: "2024", title: "Excellence", desc: "Achieved 30+ happy clients with 100+ successful projects", color: "text-accent", bgColor: "bg-accent/10", borderColor: "border-accent/30", dotColor: "bg-accent" }
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-12 ${i % 2 === 0 ? 'pr-1/2 text-right' : 'pl-1/2 ml-auto'} md:w-1/2`}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`group border-2 transition-all duration-300 hover:shadow-2xl hover:border-primary/50 ${milestone.bgColor} ${milestone.borderColor}`}>
                    <CardContent className="pt-6">
                      <div className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg ${milestone.bgColor} ${milestone.color} text-xs font-bold border border-current/20`}>
                        {milestone.year.slice(-2)}
                      </div>
                      <div className={`mb-3 text-xl font-bold ${milestone.color}`}>{milestone.title}</div>
                      <p className="text-sm text-muted-foreground">{milestone.desc}</p>
                    </CardContent>
                  </Card>
                  <motion.div 
                    className={`absolute top-8 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-background shadow-lg ${milestone.dotColor}`}
                    whileHover={{ scale: 1.3 }}
                    style={{ [i % 2 === 0 ? 'right' : 'left']: '-2.5rem' }} 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="border-b py-20 bg-muted/30">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Portfolio</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Explore some of our recent projects that showcase our expertise and commitment to excellence. Each project represents our dedication to delivering outstanding results.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { title: "E-Commerce Platform", category: "Web Development", tech: ["React", "Node.js", "MongoDB"], image: "/images/portfolio-ecommerce.jpg" },
              { title: "Healthcare Management System", category: "Enterprise Software", tech: ["Angular", "Python", "PostgreSQL"], image: "/images/portfolio-healthcare.jpg" },
              { title: "Financial Analytics Dashboard", category: "Data Analytics", tech: ["React", "D3.js", "AWS"], image: "/images/portfolio-analytics.jpg" },
              { title: "Fitness Tracking App", category: "Mobile Development", tech: ["React Native", "Firebase"], image: "/images/portfolio-fitness.jpg" },
              { title: "Cloud Migration Project", category: "Cloud Solutions", tech: ["AWS", "Docker", "Kubernetes"], image: "/images/portfolio-cloud.jpg" },
              { title: "AI Chatbot Platform", category: "AI/ML", tech: ["Python", "TensorFlow", "NLP"], image: "/images/portfolio-ai.jpg" }
            ].map((project, i) => (
              <motion.div 
                key={i} 
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="group h-full overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <CardHeader>
                    <CardTitle className="transition-colors duration-300 group-hover:text-primary">{project.title}</CardTitle>
                    <CardDescription>{project.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <Badge key={j} variant="outline" className="text-xs transition-colors duration-300 group-hover:border-primary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button size="lg" variant="outline" className="group bg-transparent">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="border-b py-20">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Client Testimonials</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              {"Don't just take our word for it. Here's what our clients have to say about working with TYNATO."}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                quote: "TYNATO transformed our outdated system into a modern, scalable platform. Their expertise and professionalism are unmatched.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CTO, DataFlow Solutions",
                quote: "The team's technical skills and ability to understand our business needs resulted in a product that exceeded our expectations.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager, HealthTech Co.",
                quote: "Working with TYNATO was seamless. They delivered on time, within budget, and the quality was outstanding.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic">
                      {`"${testimonial.quote}"`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="border-b py-20 bg-muted/30">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Join Our Team</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              {"We're always looking for talented individuals who are passionate about technology and innovation. Explore our open positions and become part of our growing team."}
            </p>
          </motion.div>

          {/* Why Work at TYNATO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <h3 className="mb-8 text-center text-2xl font-bold">Why Work at TYNATO?</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🌟",
                  title: "Career Growth Opportunities",
                  desc: "We invest in our team's professional development with continuous learning programs, certifications, mentorship opportunities, and clear career progression paths."
                },
                {
                  icon: "💼",
                  title: "Competitive Benefits Package",
                  desc: "Comprehensive health insurance, dental and vision coverage, retirement plans with company matching, performance bonuses, and annual salary reviews."
                },
                {
                  icon: "🏠",
                  title: "Flexible Work Environment",
                  desc: "Remote work options, flexible hours, work-from-anywhere policy for certain roles, and generous paid time off to maintain work-life balance."
                },
                {
                  icon: "🚀",
                  title: "Cutting-Edge Projects",
                  desc: "Work on innovative solutions using the latest technologies like AI, blockchain, cloud computing, and more. Every project is an opportunity to learn and grow."
                },
                {
                  icon: "🤝",
                  title: "Collaborative Culture",
                  desc: "Work in a supportive environment where ideas are valued, creativity is encouraged, and teamwork is celebrated. Regular team building activities and social events."
                },
                {
                  icon: "🎓",
                  title: "Learning & Development",
                  desc: "Access to online courses, conference tickets, workshops, tech talks, and a dedicated budget for professional development and certifications."
                }
              ].map((benefit, i) => (
                <motion.div key={i} variants={scaleIn}>
                  <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                    <CardHeader>
                      <div className="mb-3 text-4xl">{benefit.icon}</div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">{benefit.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <h3 className="mb-8 text-center text-2xl font-bold">Open Positions</h3>
            <div className="grid gap-4 max-w-3xl mx-auto">
              {[
                { title: "Senior Full Stack Developer", type: "Full-time", location: "Remote" },
                { title: "UI/UX Designer", type: "Full-time", location: "Hybrid" },
                { title: "DevOps Engineer", type: "Contract", location: "Remote" },
                { title: "Product Manager", type: "Full-time", location: "On-site" }
              ].map((job, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    <CardContent className="flex items-center justify-between p-6">
                      <div>
                        <h3 className="font-bold mb-2">{job.title}</h3>
                        <div className="flex gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <Button className="group/btn">
                        Apply
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How to Apply */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl">How to Apply</CardTitle>
                <CardDescription className="text-base">
                  Interested in joining our team? Send your resume, portfolio, and a cover letter explaining why you'd be a great fit to{' '}
                  <a href="mailto:support@tynato.com" className="font-semibold text-primary hover:underline">support@tynato.com</a>
                  {' '}with the position title in the subject line. We review all applications carefully and will contact qualified candidates within two weeks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-sm text-muted-foreground">
                  TYNATO is an equal opportunity employer committed to diversity and inclusion. We welcome applications from all qualified candidates regardless of race, gender, age, religion, identity, or experience level.
                </p>
                <Button size="lg" className="w-full sm:w-auto group" asChild>
                  <a href="mailto:support@tynato.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Your Resume
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-b py-20">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Have a project in mind? We would love to hear from you. Send us a message and we will get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>Fill out the form and we will respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Interested In</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software">Software Development</SelectItem>
                        <SelectItem value="cloud">Cloud Solutions</SelectItem>
                        <SelectItem value="mobile">Mobile Development</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                        <SelectItem value="security">Cybersecurity</SelectItem>
                        <SelectItem value="ai">Data Analytics & AI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Tell us about your project..." rows={5} />
                  </div>
                  <Button className="w-full group">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-sm text-muted-foreground">info@tynato.com</p>
                      <p className="text-sm text-muted-foreground">support@tynato.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <p className="text-sm text-muted-foreground">123 Tech Boulevard</p>
                      <p className="text-sm text-muted-foreground">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Linkedin, label: "LinkedIn" },
                      { icon: X, label: "X" },
                      { icon: Facebook, label: "Facebook" },
                      { icon: Instagram, label: "Instagram" }
                    ].map((social, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">T</span>
                </div>
                <span className="text-xl font-bold">TYNATO</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transform your business with innovative IT solutions that drive growth and efficiency.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#services" className="hover:text-foreground transition-colors">Software Development</Link></li>
                <li><Link href="#services" className="hover:text-foreground transition-colors">Cloud Solutions</Link></li>
                <li><Link href="#services" className="hover:text-foreground transition-colors">Mobile Development</Link></li>
                <li><Link href="#services" className="hover:text-foreground transition-colors">UI/UX Design</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#aboutus" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
                <li><Link href="#careers" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-3">Stay updated with our latest news and insights.</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="text-sm" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>&copy; 2024 TYNATO. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
