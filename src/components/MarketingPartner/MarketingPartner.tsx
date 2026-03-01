import { motion } from "framer-motion";

const MarketingPartner = () => {
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden border-t border-border/30">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Our Marketing Partner
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We've partnered with industry leaders to ensure your product not only looks great and functions perfectly, but also reaches the right audience.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col items-center justify-center p-8 md:p-12 rounded-2xl bg-card border border-border shadow-sm max-w-3xl mx-auto hover:shadow-md transition-shadow group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                        <div className="w-48 h-auto flex-shrink-0">
                            <img
                                src="/trendylogo.webp"
                                alt="Trendy Media Logo"
                                className="w-full h-auto object-contain transition-all duration-500"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold mb-2">Trendy Media</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Trendy Media is an innovative digital marketing agency specializing in growth strategies, SEO, and brand storytelling. Together, we elevate your digital presence and drive measurable results.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MarketingPartner;
