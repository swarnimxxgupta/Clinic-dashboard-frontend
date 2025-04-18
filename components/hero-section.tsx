"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Brain } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Transforming Dementia Care
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              AI for Compassionate Dementia Care
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              MemoTag combines physical and cognitive tracking to provide personalized care for dementia patients and
              support for caregivers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <a href="#cta">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#solution">How It Works</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-50"></div>
            <div className="relative bg-background border rounded-3xl shadow-xl p-6 w-full max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">MemoTag Assistant</h3>
                  <p className="text-sm text-muted-foreground">AI-powered care companion</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">Dad hasn't taken his medication today.</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">Activity level is lower than usual. Consider a gentle walk.</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">Memory exercise completed: 8/10 correct. Improvement from last week!</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Updated 2 minutes ago</span>
                <Button size="sm" variant="secondary">
                  View Details
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
