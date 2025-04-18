"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, Award, TrendingUp } from "lucide-react";

export function TractionSection() {
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
    <section id="traction" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Our Traction
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Making Real Impact
          </h2>
          <p className="text-xl text-muted-foreground">
            MemoTag is already transforming dementia care for families and
            healthcare providers worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={item}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Users className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-3xl font-bold">5,000+</h3>
                <p className="text-muted-foreground">
                  Active users on our platform
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Building className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-3xl font-bold">12</h3>
                <p className="text-muted-foreground">
                  Healthcare facility partnerships
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <Award className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-3xl font-bold">3</h3>
                <p className="text-muted-foreground">
                  Innovation awards for healthcare tech
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-3xl font-bold">$2.5M</h3>
                <p className="text-muted-foreground">
                  Funding raised to accelerate growth
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-1"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4">Clinical Results</h3>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Early Detection Rate</h4>
                        <span className="text-green-500 text-sm">+68%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Medication Adherence</h4>
                        <span className="text-green-500 text-sm">+42%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "42%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">
                          Caregiver Stress Reduction
                        </h4>
                        <span className="text-green-500 text-sm">+37%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "37%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      "MemoTag has transformed how we approach dementia care.
                      The early detection capabilities alone have helped us
                      intervene months earlier than traditional methods would
                      allow."
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted">
                        <img src="/female-doctor-hospital-with-stethoscope_23-2148827774.avif"></img>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Dr. Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">
                          Neurologist, Memory Care Center
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
