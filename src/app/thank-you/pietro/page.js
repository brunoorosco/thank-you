'use client' 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const name  = 'Pietro'
const message = 'Desejo a você muito sucesso em sua jornada de aprendizado e desenvolvimento de habilidades técnicas. Espero que você continue a se destacar e a contribuir para o sucesso da sua equipe. Parabéns pelo seu comprometimento e dedicação!';

export default function ThankYou() {
  const [photo, setPhoto] = useState(null);
  const linkedInProfile = 'https://www.linkedin.com/in/brunoorosco'; // Substitua pelo URL real.

  useEffect(() => {
    // Simular busca de foto no LinkedIn.
    async function fetchPhoto() {
      try {
        const response = await axios.get('/api/linkedin-photo', {
          params: { profileUrl: linkedInProfile },
        });
        setPhoto(response.data.photoUrl);
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    }
    fetchPhoto();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white p-6">
        <h1 className="text-4xl font-bold mb-4">Muito Obrigado {name}!</h1>
        <p className="text-lg mb-6 container mx-auto">
         {message}
        </p>
        {photo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white"
          >
            <img src={photo} alt="LinkedIn Profile" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </div>
    </div>
  );
}