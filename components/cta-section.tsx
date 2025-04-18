"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist-form";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="cta" className="py-20 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Join Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Connect to MemoTag
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you're a caregiver, healthcare provider, or investor,
              there's a place for you in our community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h3 className="font-bold mb-2">For Caregivers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get early access to our platform and join our supportive
                  community.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="#waitlist">
                    Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h3 className="font-bold mb-2">For Healthcare Providers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Partner with us to bring MemoTag to your patients.
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="#contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-muted"></div>
                  <div className="w-8 h-8 rounded-full bg-muted"></div>
                  <div className="w-8 h-8 rounded-full bg-muted"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Join 5,000+ users already transforming dementia care
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            id="waitlist"
            className="bg-background rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6">Join Our Waitlist</h3>
            <WaitlistForm />
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                By joining our waitlist, you'll be among the first to experience
                MemoTag when we launch in your area.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
