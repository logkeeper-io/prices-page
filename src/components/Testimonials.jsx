import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Javier Moreno",
    customerTitle: "Chief Data Analyst of TechVanguard Solutions",
    content:
      "The advanced log analysis tools have truly transformed our operations and enabled us to make informed decisions that enhance our productivity. LogKeeper has been instrumental in this shift. Its user-friendly interface and the valuable insights it provides have led to substantial improvements in our efficiency and effectiveness.",
    image: testimonial1,
  },
  {
    customerName: "Alexandra Hartman",
    customerTitle: "Senior Product Manager of InnoWave Technologies",
    content:
      "LogKeeper has truly revolutionized our data management approach. Its innovative features and user-centric design have made it incredibly easy to navigate and extract valuable insights. Since integrating LogKeeper, we've seen a dramatic boost in our operational efficiency, allowing us to tackle challenges more proactively and drive our business forward with confidence.",
    image: testimonial2,
  },
  {
    customerName: "Ethan Brooks",
    customerTitle: "Lead Systems Architect in NexaTech Innovations",
    content:
      "Discovering LogKeeper has been a game changer for our team. The platform's advanced analytics and intuitive design have streamlined our data processing like never before. We've been able to quickly pinpoint issues and optimize our strategies, leading to significant improvements in both productivity and decision-making.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">Testimonials</div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          People like you love LogKeeper
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div>
                  <img
                    src={testimonial.image.src}
                    alt="Customer avatar"
                    width="45px"
                    height="5px"
                    aria-label={testimonial.customerName}
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
