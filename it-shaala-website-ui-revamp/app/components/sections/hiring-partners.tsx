import React, { useEffect, useRef } from "react";
import { HiringPartner } from "@/app/placements/page";
import Image from "next/image";

interface HiringPartnerCardProps {
  logo: string;
  name: string;
}

const HiringPartnerCard: React.FC<HiringPartnerCardProps> = ({
  logo,
  name,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 min-w-[140px] md:min-w-[180px] h-[60px] md:h-[80px] flex items-center justify-center group">
      <Image
        src={logo}
        alt={name}
        width={100}
        height={50}
        className="max-h-8 max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

const useMarquee = (reverse = false, speed = 1) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const contentWidth = content.offsetWidth;
    let position = 0;
    let animationFrame: number;

    const animate = () => {
      position += reverse ? speed : -speed;

      // Reset the position when it reaches the loop point
      if (!reverse && position <= -contentWidth / 2) {
        position = 0;
      }
      if (reverse && position >= contentWidth / 2) {
        position = 0;
      }

      content.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [reverse, speed]);

  return { containerRef, contentRef };
};

const HiringPartnersMarquee = ({
  hiringPartners,
}: {
  hiringPartners: HiringPartner[];
}) => {
  const marquee1 = useMarquee(false);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Hiring Partners</span>
          </h2>
          <p className="text-xl text-gray-600">
            We partner with leading companies to provide excellent placement
            opportunities
          </p>
        </div>

        <div className="overflow-hidden py-6" ref={marquee1.containerRef}>
          <div className="flex w-max gap-6" ref={marquee1.contentRef}>
            {[...hiringPartners, ...hiringPartners].map((company, idx) => (
              <HiringPartnerCard key={`top-${idx}`} {...company} />
            ))}
          </div>
        </div>
        {/* todo : this is not working properly it's ending very fast because of the reverse direction */}

        {/* <div className="mt-6 overflow-hidden py-6" ref={marquee2.containerRef}>
                    <div className="flex w-max gap-6" ref={marquee2.contentRef}>
                    {[...hiringPartners, ...hiringPartners, ...hiringPartners, ...hiringPartners].map((company, idx) => (
                        <HiringPartnerCard key={`bottom-${idx}`} {...company} />
                    ))}
                    </div>
                </div> */}
      </div>
    </section>
  );
};

export default HiringPartnersMarquee;
