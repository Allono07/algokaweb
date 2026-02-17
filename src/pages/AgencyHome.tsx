import Navbar from "@/components/Navbar/Navbar";
import { ArrowRight, CheckCircle, Smartphone, Globe, Zap, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const AgencyHome = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 max-w-4xl"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                        Accepting new clients for 2024
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Digital Experiences That Matter
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We transform ideas into exceptional digital products. Elevate your brand with our strategic design and development solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/25">
                            Start Your Project <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 transition-all px-8 py-4 rounded-full font-semibold text-lg border border-border">
                            View Our Work
                        </button>
                    </div>
                </motion.div>

                {/* Hero Image / Abstract Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 w-full rounded-2xl overflow-hidden shadow-2xl border border-border aspect-video bg-muted relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 z-0" />
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-9xl select-none z-0">
                        AGENCY
                    </div>
                    {/* Placeholder for an actual image or 3D element */}
                    <div className="w-full h-full bg-grid-pattern opacity-10" />
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Our Services</h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">Full-Cycle Digital Solutions</h3>
                        <p className="text-muted-foreground text-lg">
                            From concept to launch, we handle every aspect of your digital presence with precision and creativity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Globe className="w-10 h-10 text-blue-500" />,
                                title: "Web Development",
                                description: "High-performance websites built with modern technologies like React, Next.js, and TypeScript."
                            },
                            {
                                icon: <Smartphone className="w-10 h-10 text-purple-500" />,
                                title: "Mobile Apps",
                                description: "Native and cross-platform mobile applications that provide seamless user experiences."
                            },
                            {
                                icon: <BarChart className="w-10 h-10 text-green-500" />,
                                title: "Digital Strategy",
                                description: "Data-driven insights to grow your business and reach your target audience effectively."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card hover:bg-card/80 transition-colors p-8 rounded-2xl border border-border shadow-sm hover:shadow-md"
                            >
                                <div className="mb-6 p-4 rounded-xl bg-background border border-border inline-block shadow-sm">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature / About Split */}
            <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-9xl font-black text-foreground/5">01</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-8">
                        <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                            We build easy-to-use websites that drive growth.
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            We believe that great design is not just about aesthetics—it's about problem-solving. Our team collaborates closely with you to understand your goals and deliver solutions that work.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "User-Centric Design Philosophy",
                                "Scalable & Secure Architecture",
                                "SEO & Performance Optimized",
                                "24/7 Dedicated Support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="text-primary font-bold text-lg hover:underline underline-offset-4 inline-flex items-center gap-2 mt-4">
                            Learn more about us <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Projects Completed", value: "150+" },
                            { label: "Happy Clients", value: "80+" },
                            { label: "Years Experience", value: "5+" },
                            { label: "Awards Won", value: "12" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold">Ready to scale your business?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Let's build something amazing together. Schedule a free consultation call with our team.
                    </p>
                    <button className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                        Get Started Now
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-border bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-bold tracking-widest text-foreground">ALGOKA</div>
                    <div className="text-muted-foreground text-sm">© 2024 Algoka. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AgencyHome;
