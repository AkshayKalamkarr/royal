'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '../utils/animation';

const CompanySection = () => {
    const statistics = [
        { icon: "🏠", startValue: 0, endValue: 300, label: "Completed Projects" },
        { icon: "👥", startValue: 0, endValue: 400, label: "Happy Customers" },
        { icon: "🏢", startValue: 0, endValue: 250, label: "Property Sold" },
        { icon: "👤", startValue: 0, endValue: 150, label: "Agents" }
    ];

    const [counts, setCounts] = useState(statistics.map(stat => stat.startValue));

    useEffect(() => {
        const duration = 2000; // Animation duration in milliseconds
        const frameRate = 1000 / 60; // 60 fps
        const totalFrames = duration / frameRate;

        const intervalIds = statistics.map((stat, index) => {
            const increment = (stat.endValue - stat.startValue) / totalFrames;
            let frame = 0;

            return setInterval(() => {
                frame++;
                if (frame <= totalFrames) {
                    setCounts(prevCounts => {
                        const newCounts = [...prevCounts];
                        newCounts[index] = Math.round(stat.startValue + increment * frame);
                        return newCounts;
                    });
                } else {
                    clearInterval(intervalIds[index]);
                }
            }, frameRate);
        });

        return () => intervalIds.forEach(id => clearInterval(id));
    }, []);

    return (
        <div className="relative bg-[url('/images/header/reviewsBuilding.jpg')] bg-cover bg-center bg-no-repeat h-96">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
                    {statistics.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={titleVariants}
                            className="bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg"
                        >
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <div className="text-3xl font-bold mb-1">
                                {counts[index]}+
                            </div>
                            <div className="text-sm">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanySection;