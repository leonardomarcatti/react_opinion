import { createContext, useEffect, useState } from 'react';
const address = 'http://192.168.1.160:3001'
export const OpinionsContext = createContext({
   opinions: null,
   addOpinion: (opinion) => { },
   upvoteOpinion: (id) => { },
   downvoteOpinion: (id) => { },
});

export function OpinionsContextProvider({ children }) {
   const [opinions, setOpinions] = useState();

   useEffect(() => {
      async function loadOpinions() {
         const response = await fetch(`${address}/opinions`);
         const opinions = await response.json();
         setOpinions(opinions);
      }

      loadOpinions();
   }, []);

   async function addOpinion(enteredOpinionData) {
      const response = await fetch(`${address}/opinions`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(enteredOpinionData),
      });

      if (!response.ok) {
         return;
      }

      const savedOpinion = await response.json();
      setOpinions((prevOpinions) => [savedOpinion, ...prevOpinions]);
   }

   const upvoteOpinion = async id => {
      const response = await fetch(`${address}/opinions/${id}/upvote`, {
         method: 'post',         
      })

      if (!response.ok) {
         return;
      }

      setOpinions((prevOpinions) => {
         return prevOpinions.map((opinion) => {
            if (opinion.id === id) {
               return { ...opinion, votes: opinion.votes + 1 };
            }
            return opinion;
         });
      });
   }

   const downvoteOpinion = async id => {
      const response = await fetch(`${address}/opinions/${id}/downvote`, {
         method: 'post',
      })

      if (!response.ok) {
         return null;
      }
      setOpinions((prevOpinions) => {
         return prevOpinions.map((opinion) => {
            if (opinion.id === id) {
               return { ...opinion, votes: opinion.votes - 1 };
            }
            return opinion;
         });
      });
   }

   const contextValue = {
      opinions: opinions,
      addOpinion,
      upvoteOpinion,
      downvoteOpinion,
   };

   return <OpinionsContext value={contextValue}>{children}</OpinionsContext>;
}
