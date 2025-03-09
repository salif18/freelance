"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchPage = () => {

  const [candidates, setCandidates] = useState([]);


  return (
    <div>
      <h1>Rechercher des candidats</h1>
    
      <ul>
        {candidates?.map((candidate) => (
          <li key={candidate._id}>
            <h2>{candidate.name}</h2>
            <p>Compétences : {candidate.skills.join(', ')}</p>
            <p>Expérience : {candidate.experience} ans</p>
            <p>Localisation : {candidate.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
