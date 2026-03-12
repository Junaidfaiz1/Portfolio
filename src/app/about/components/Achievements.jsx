import React from "react";
import { Server, Zap, Database, Users, Link } from "lucide-react";
import { motion } from "framer-motion";

const Achievements = () => (
  <section className="flex items-center justify-center min-h-[30vh] bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 px-4 py-16 animate-fadeIn">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="max-w-3xl w-full bg-white/95 dark:bg-gray-900/95 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 drop-shadow-lg text-center mb-6"
      >
        Achievements
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          className="bg-gradient-to-br from-blue-100 to-blue-50 dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center gap-6 transition-all duration-300"
        >
          <Server className="w-14 h-14 text-blue-600" />
          <span className="text-xl font-semibold text-blue-600">
            Developed and deployed scalable MERN stack applications for clients
          </span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          className="bg-gradient-to-br from-purple-100 to-purple-50 dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center gap-6 transition-all duration-300"
        >
          <Link className="w-14 h-14 text-purple-600" />
          <span className="text-xl font-semibold text-purple-600">
            Integrated RESTful APIs and GraphQL endpoints in production projects
          </span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          className="bg-gradient-to-br from-pink-100 to-pink-50 dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center gap-6 transition-all duration-300"
        >
          <Zap className="w-14 h-14 text-pink-600" />
          <span className="text-xl font-semibold text-pink-600">
            Automated CI/CD pipelines for seamless deployments
          </span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          className="bg-gradient-to-br from-emerald-100 to-emerald-50 dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center gap-6 transition-all duration-300"
        >
          <Database className="w-14 h-14 text-emerald-600" />
          <span className="text-xl font-semibold text-emerald-600">
            Optimized database queries and backend performance
          </span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
          className="bg-gradient-to-br from-blue-200 to-blue-100 dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center gap-6 transition-all duration-300"
        >
          <Users className="w-14 h-14 text-blue-500" />
          <span className="text-xl font-semibold text-blue-500">
            Mentored junior developers and contributed to team success
          </span>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Achievements;
