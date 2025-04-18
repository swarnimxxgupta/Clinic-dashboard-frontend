"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BarChartIcon as ChartBarIcon, PieChartIcon as ChartPieIcon, ClockIcon, HeartPulseIcon } from "lucide-react"
import {
  Chart,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
  ChartTooltipItem,
  ChartXAxis,
  ChartYAxis,
  ChartBar,
  ChartPie,
} from "@/components/ui/chart"

export function ProblemSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  // Sample data for charts
  const dementiaData = [
    { name: "2020", value: 50 },
    { name: "2030", value: 82 },
    { name: "2040", value: 115 },
    { name: "2050", value: 152 },
  ]

  const diagnosisData = [
    { name: "Diagnosed", value: 40 },
    { name: "Undiagnosed", value: 60 },
  ]

  return (
    <section id="problem" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">The Challenge</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Dementia Care Needs a Revolution</h2>
          <p className="text-xl text-muted-foreground">
            With an aging global population, dementia cases are rising dramatically, yet care solutions remain
            fragmented and ineffective.
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
                <ChartBarIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-2xl font-bold">55M+</h3>
                <p className="text-muted-foreground">People living with dementia worldwide</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <ChartPieIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-2xl font-bold">60%</h3>
                <p className="text-muted-foreground">Cases go undiagnosed until moderate or severe stages</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <ClockIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-2xl font-bold">$1.3T</h3>
                <p className="text-muted-foreground">Annual global cost of dementia care</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <HeartPulseIcon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-2xl font-bold">250M</h3>
                <p className="text-muted-foreground">Family caregivers providing unpaid care</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Projected Growth in Dementia Cases (Millions)</h3>
            <div className="h-[300px]">
              <ChartContainer>
                <Chart>
                  <ChartBar data={dementiaData} dataKey="value" />
                  <ChartXAxis dataKey="name" />
                  <ChartYAxis />
                  <ChartTooltip>
                    <ChartTooltipContent>
                      <ChartTooltipItem label="Year" value="{name}" />
                      <ChartTooltipItem label="Cases (millions)" value="{value}" />
                    </ChartTooltipContent>
                  </ChartTooltip>
                </Chart>
              </ChartContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-background rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-4">Diagnosis Gap</h3>
            <div className="h-[300px]">
              <ChartContainer>
                <Chart>
                  <ChartPie data={diagnosisData} dataKey="value" nameKey="name" />
                  <ChartTooltip>
                    <ChartTooltipContent>
                      <ChartTooltipItem label="Status" value="{name}" />
                      <ChartTooltipItem label="Percentage" value="{value}%" />
                    </ChartTooltipContent>
                  </ChartTooltip>
                  <ChartLegend />
                </Chart>
              </ChartContainer>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-background rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4">The Current Care Gap</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Fragmented Monitoring</h4>
              <p className="text-sm text-muted-foreground">
                Current solutions track either physical OR cognitive symptoms, never both in an integrated way.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Reactive, Not Proactive</h4>
              <p className="text-sm text-muted-foreground">
                Care typically responds to crises rather than preventing them through early intervention.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Caregiver Burnout</h4>
              <p className="text-sm text-muted-foreground">
                Family caregivers experience high rates of stress, depression, and physical health problems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
