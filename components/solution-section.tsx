"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Activity,
  Smartphone,
  Shield,
  LineChart,
  Users,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function SolutionSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="solution" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            How MemoTag Works
          </h2>
          <p className="text-xl text-muted-foreground">
            MemoTag combines physical tracking, cognitive assessment, and
            AI-powered insights to provide comprehensive dementia care.
          </p>
        </motion.div>

        <div className="relative mb-20">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden md:block"></div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative grid gap-8 md:grid-cols-3"
          >
            <motion.div variants={item} className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg -mt-5 z-10 hidden md:flex">
                1
              </div>
              <Card className="h-full">
                <CardContent className="p-6 pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Physical Tracking</h3>
                  <p className="text-muted-foreground">
                    Wearable sensors and smart home devices monitor movement
                    patterns, sleep quality, medication adherence, and daily
                    activities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg -mt-5 z-10 hidden md:flex">
                2
              </div>
              <Card className="h-full">
                <CardContent className="p-6 pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Cognitive Assessment</h3>
                  <p className="text-muted-foreground">
                    Regular, non-intrusive cognitive tests through our app
                    measure memory, problem-solving, and language abilities over
                    time.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg -mt-5 z-10 hidden md:flex">
                3
              </div>
              <Card className="h-full">
                <CardContent className="p-6 pt-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">AI-Powered Insights</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes combined data to detect subtle changes,
                    predict potential issues, and provide personalized care
                    recommendations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">
              Comprehensive Care Platform
            </h3>
            <p className="text-lg text-muted-foreground">
              MemoTag creates a complete ecosystem for dementia care, connecting
              patients, caregivers, and healthcare providers.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Early Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    Identify subtle changes that may indicate cognitive decline
                    before traditional methods.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                  <LineChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Personalized Care Plans</h4>
                  <p className="text-sm text-muted-foreground">
                    AI-generated recommendations tailored to each patient's
                    unique needs and progression.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Caregiver Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduce burden with actionable insights, alerts, and a
                    supportive community.
                  </p>
                </div>
              </div>
            </div>

            <Button className="mt-4" asChild>
              <a href="#cta">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-50"></div>
            <div className="relative bg-background border rounded-3xl shadow-xl overflow-hidden">
              <div className="p-1">
                <div className="rounded-t-2xl bg-muted p-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-muted-foreground">
                    MemoTag Dashboard
                  </div>
                </div>
                <div className="p-4">
                  <img
                    src="/dashboard1.jpg?height=400&width=600"
                    alt="MemoTag Dashboard"
                    className="rounded-lg border shadow-sm w-full"
                  />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="text-sm font-medium mb-2">
                        Daily Activity
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Tracking movement patterns and routines
                      </p>
                      <div className="h-20 mt-2 flex items-end gap-1">
                        <div className="h-1/3 w-full bg-primary/30 rounded-sm"></div>
                        <div className="h-1/2 w-full bg-primary/50 rounded-sm"></div>
                        <div className="h-3/4 w-full bg-primary/70 rounded-sm"></div>
                        <div className="h-2/3 w-full bg-primary/60 rounded-sm"></div>
                        <div className="h-full w-full bg-primary rounded-sm"></div>
                        <div className="h-3/5 w-full bg-primary/50 rounded-sm"></div>
                        <div className="h-2/5 w-full bg-primary/40 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="text-sm font-medium mb-2">
                        Cognitive Score
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Weekly assessment results
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-2xl font-bold">78/100</span>
                        <span className="text-xs text-green-500 flex items-center">
                          +3% <ArrowRight className="h-3 w-3 ml-1 rotate-45" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
