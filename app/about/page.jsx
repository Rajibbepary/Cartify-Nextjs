'use client'
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  PackageCheck,
  Truck,
  Headset,
  HeartHandshake,
  Target,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Reusable animation settings
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description:
      "Shop with confidence through a carefully designed shopping experience.",
  },
  {
    icon: PackageCheck,
    title: "Quality Products",
    description:
      "Discover products selected to meet your everyday needs.",
  },
  {
    icon: Truck,
    title: "Convenient Delivery",
    description:
      "Enjoy a convenient ordering experience from checkout to delivery.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "Get help with your questions and shopping-related concerns.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Our Mission",
    description:
      "To make online shopping simpler, more accessible, and more convenient for everyone.",
  },
  {
    icon: Target,
    title: "Our Vision",
    description:
      "To become a trusted destination where customers can discover products for everyday life.",
  },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
        variants: fadeUp,
      };

  return (
    <main className="overflow-hidden bg-white text-slate-800">
    <Navbar/>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              <Sparkles size={16} />
              GET TO KNOW QuickCat
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Shopping Made Simple,
              <span className="mt-2 block text-orange-500">
                Life Made Better.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              Welcome to QuickCat, your online shopping destination.
              Discover useful products, explore new possibilities, and
              enjoy a shopping experience designed around convenience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/all-products"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>

              <a
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-600"
              >
                Our Story
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <CheckCircle2
                size={19}
                className="shrink-0 text-orange-500"
              />
              A convenient way to discover your next favorite product.
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={
              shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-orange-100 blur-2xl" />
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-slate-200 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl bg-slate-100 p-3 shadow-xl shadow-slate-900/5">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1100&q=85"
                alt="Electronic products available for online shopping"
                className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-9 sm:left-9 sm:right-9 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      Discover More with QuickCat
                
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Products for your everyday needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="bg-slate-50 py-16 sm:py-20">
        <motion.div
          {...reveal}
          className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              A Better Way to Shop Online
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              QuickCat is built around a simple idea: finding the products
              you need should feel easy and enjoyable. We bring products
              together in one place so you can browse, compare, and shop
              with greater convenience.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From discovering something new to placing your next order,
              our goal is to create a smooth, user-friendly experience
              that helps you shop with confidence.
            </p>

            <a
              href="/shop"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:gap-3"
            >
              Discover our collection
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <img
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=700&q=80"
              alt="Consumer electronics"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover shadow-md sm:h-72"
            />
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80"
              alt="Modern watch product"
              loading="lazy"
              className="mt-8 h-56 w-full rounded-2xl object-cover shadow-md sm:mt-12 sm:h-72"
            />
          </div>
        </motion.div>
      </section>

      {/* Mission and Vision */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div {...reveal} className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            What Drives Us
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Mission & Vision
          </h2>
          <p className="mt-4 leading-7 text-slate-500">
            Every detail starts with the goal of making shopping
            more convenient for our customers.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                {...reveal}
                transition={{ ...fadeUp.visible.transition, delay: index * 0.12 }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-900/5 transition-shadow hover:shadow-xl sm:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...reveal} className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              The QuickCat Difference
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Choose QuickCat?
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              A customer-focused experience from browsing to checkout.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  {...reveal}
                  transition={{
                    ...fadeUp.visible.transition,
                    delay: index * 0.1,
                  }}
                  whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                  className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          {...reveal}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-600 px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-orange-300">
              <Sparkles size={16} />
              YOUR NEXT DISCOVERY STARTS HERE
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Ready to Find Something You Love?
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Explore our collection and discover products that fit
              your everyday needs.
            </p>

            <a
              href="/all-products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Start Shopping
              <ArrowRight size={19} />
            </a>
          </div>
        </motion.div>
      </section>
      <Footer/>
    </main>
  );
};

export default About;
