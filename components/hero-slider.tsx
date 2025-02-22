"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Slide {
  title: string
  subtitle: string
  image: string
}

const slides: Slide[] = [
  {
    title: "Nigeria Association Of Computing Students.",
    subtitle: "We are Students IT Professionals in almost all tertiary institutions in Nigeria.",
    image: "/slide00.jpg",
  },
  {
    title: "Towards Advanced Computing",
    subtitle: "We Develop; We Create; We Build Capacity.",
    image: "/slide01.jpg",
  },
  {
    title: "Empowering Students with Global Software Knowledge",
    subtitle: "We are the Umbrella body for students studying Computer Science, Computer Engineering, Information Systems, Cyber Security and all IT related courses in Nigeria.",
    image: "/slide02.jpg",
  },
  {
    title: "Build with AI in Partnership with Google",
    subtitle: "A program designed to help students learn about Artificial Intelligence and Machine Learning...",
    image: "/slide06.jpg",
  },
  {
    title: "Orientation for New Members",
    subtitle: "NACOS National invites all new members to an orientation program...",
    image: "/slide03.jpg",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length)
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, []) // Removed paginate from dependencies

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl text-4xl font-bold text-white sm:text-5xl md:text-6xl"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white hover:bg-black/75"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white hover:bg-black/75"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 transform space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              currentSlide === index ? "bg-white w-6" : "bg-white/50",
            )}
          />
        ))}
      </div>
    </div>
  )
}

