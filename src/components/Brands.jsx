import { motion } from "framer-motion";
import { AWSLogo } from "../assets/logos/AWSLogo";
import { AzureLogo } from "../assets/logos/AzureLogo";
import { GCPLogo } from "../assets/logos/GCPLogo";
import { CassandraLogo } from "../assets/logos/CassandraLogo";
import { NginxLogo } from "../assets/logos/NginxLogo";
import { MysqlLogo } from "../assets/logos/MysqlLogo";
import { PgsqlLogo } from "../assets/logos/PgsqlLogo";
import { MongoDbLogo } from "../assets/logos/MongoDbLogo";
import { RabbitMqLogo } from "../assets/logos/RabbitMqLogo";
import { GolangLogo } from "../assets/logos/GolangLogo";
import { JavaLogo } from "../assets/logos/JavaLogo";
import { PythonLogo } from "../assets/logos/PythonLogo";
import { PhpLogo } from "../assets/logos/PhpLogo";
import { AwsLambdaLogo } from "../assets/logos/AwsLambdaLogo";
import { EKSLogo } from "../assets/logos/EKSLogo";
import { RedisLogo } from "../assets/logos/RedisLogo";
import { AKSLogo } from "../assets/logos/AKSLogo";
import { GKELogo } from "../assets/logos/GKELogo";
import { ECSLogo } from "../assets/logos/ECSLogo";

const logos = [
  <AWSLogo key="AWS" />,
  <AzureLogo key="Azure" />,
  <GCPLogo key="GCP" />,
  <CassandraLogo key="Cassandra" />,
  <NginxLogo key="Nginx" />,
  <MysqlLogo key="Mysql" />,
  <PgsqlLogo key="Pgsql" />,
  <MongoDbLogo key="MongoDb" />,
  <RabbitMqLogo key="RabbitMq" />,
  <GolangLogo key="Golang" />,
  <JavaLogo key="Java" />,
  <PythonLogo key="Python" />,
  <PhpLogo key="Php" />,
  <AwsLambdaLogo key="AwsLambda" />,
  <EKSLogo key="EKS" />,
  <RedisLogo key="Redis" />,
  <AKSLogo key="AKS" />,
  <GKELogo key="GKE" />,
  <ECSLogo key="ECS" />,
  // <CassandraLogo key="Cassandra" />,
  // <NginxLogo key="Nginx" />,
  // <MysqlLogo key="Mysql" />,
  // <PgsqlLogo key="Pgsql" />,
  // <MongoDbLogo key="MongoDb" />,
  // <RabbitMqLogo key="RabbitMq" />
];

const renderLogoGrid = () => (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      {logos.map((logo) => (
          <div className="p-1 flex justify-center items-center" key={logo.key}>
            {logo}
          </div>
      ))}
    </div>
);

export const Brands = () => (
    <section className="py-12 sm:py-24 bg-bgDark1 w-full lg:mt-16 mb-8 lg:mb-16">
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
          <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="flex flex-col">
                <h2 className="mb-2 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-primaryText">
                  Seamless Integrations
                </h2>
                <h2 className=" text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondaryColor">
                  with your tools and services.
                </h2>
              </div>
            </div>
            <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
              <div className="relative overflow-hidden">
                <motion.div
                    className="flex"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }} // Adjust duration for smoothness
                    style={{ display: 'flex', width: '128%' }} // Ensure width is double the container
                >
                  <div className="flex-shrink-0 w-full flex">
                    {renderLogoGrid()}
                  </div>
                  <div className="flex-shrink-0 w-full flex">
                    {renderLogoGrid()}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
);
