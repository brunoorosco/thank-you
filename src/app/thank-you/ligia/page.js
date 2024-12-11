"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const name = "Ligia Hirata";
const message = `É impossível não destacar meu agradecimento pelo seu constante empenho. 
Seu desempenho é uma prova clara do seu compromisso com o sucesso e da sua dedicação em fazer sempre o melhor. 
Continue brilhando! 
  Parabéns pelo seu comprometimento e dedicação!`;
const message1 = "Desejo um Feliz Natal e um próspero Ano Novo!";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="mb-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden border-4 border-white rounded-full shadow-lg"
        >
          <Image
            width={250}
            height={250}
            src={"/ligia.jpg"}
            alt="LinkedIn Profile"
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="p-6 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">Muito Obrigado</h1>
        <h1 className="mb-4 text-5xl font-bold">{name}!</h1>
        <p className="container w-1/3 mx-auto mb-6 text-lg">{message}</p>
        <p className="container w-1/3 mx-auto mb-6 text-lg">{message1}</p>
      </div>
    </div>
  );
}
