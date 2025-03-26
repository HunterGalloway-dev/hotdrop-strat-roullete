'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define types for the strategy
interface Strategy {
  title: string;
  desc: string;
}

export default function RandomStratGenerator() {
  // Predefined lists

  const strats: Strategy[] = [
    {
      title: "Goonado Gauntlet",
      desc: "Run around in a tornado formation for as long as possible without dying"
    },
    {
      title: "Sneaky Beaky Like",
      desc: "All 4 randomly choose a corner to prone out in and wait to get theirs."
    },
    {
      title: "Hostage Situation",
      desc: "Knock and extract high value target in vehicle as far as possible from enemy combatents for interogation."
    },
    {
      title: "Explosive Finish",
      desc: "Knock a guy normally and flush with a panzer then mag dump the body."
    },
    {
      title: "Rim Job",
      desc: "Land and secure all vehicles onto a singular position then proceed to blow them all up and die in the flames."
    },
    {
      title: "4 Dude 1 Couch",
      desc: "Knock an enemy and all gather around trapping them in and emoting on them."
    },
    {
      title: "Goonilla Warfare",
      desc: "Hide in camoflaughe, knock then flush then run away to a different bush."
    },
    {
      title: "Loot Denial",
      desc: "Land directly on top tier loot spots and grab all high tier loot, then retreat."
    },
    {
      title: "Weapon Roulette",
      desc: "Grab only one type of weapon between all four players. Everyone gets identical loadouts."
    },
    {
      title: "First Blood",
      desc: "Focus fire to instantly eliminate one specific enemy player in the first 10 seconds, regardless of cost and then disengage just to third party their next fight."
    },
    {
      title: "Leap Frog",
      desc: "Land separately then constantly rotate positions in a circular pattern, never engaging from the same angle twice."
    },
    {
      title: "Window Pain",
      desc: "Focus only on shooting through windows, never push inside buildings regardless of knocks."
    },
    {
      title: "False Security",
      desc: "Hide directly behind the target team during landing, letting them think they're safe before striking."
    },
    {
      title: "Sound Warfare",
      desc: "Keep shooting non-stop in their vicinity without direct engagement to drain focus and create anxiety."
    },
    {
      title: "IGL Hunter",
      desc: "Identify and relentlessly pursue their shot-caller while avoiding the rest of the team."
    },
    {
      title: "The Gauntlet",
      desc: "Create a corridor of death between where they land and the nearest loot location."
    },
    {
      title: "Revenge Tour",
      desc: "Target whoever knocked your teammate with extreme prejudice, even if it means sacrificing tactical advantage."
    },
    {
      title: "Thirst Master",
      desc: "Immediately finish any knock without regard for personal safety or tactical position."
    },
    {
      title: "Vulture Squad",
      desc: "Hide nearby until they get into a fight with another team, then third party at the most frustrating moment."
    },
  ];

  // State for current selections

  const [selectedStrat, setSelectedStrat] = useState<Strategy | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Function to randomly select a name and strat
  const generateRandomPair = () => {
    setIsGenerating(true);

    // Reset current selections
    setSelectedStrat(null);

    // Delayed selection for animation effect
    setTimeout(() => {
      const randomStrat = strats[Math.floor(Math.random() * strats.length)];
      setSelectedStrat(randomStrat);
      setIsGenerating(false);
    }, 500);
  };

  // Generate initial values on component mount
  useEffect(() => {
    generateRandomPair();
  }, [generateRandomPair]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-black/30 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border-2 border-green-400">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-green-300 mb-8">GOON SQUAD TACTICS</h1>

          {/* Results Section - MOVED ABOVE */}
          <div className="bg-black/20 rounded-lg p-6 text-center mb-8 border border-green-500/50">
            <h2 className="text-xl font-semibold text-green-400 mb-4">Target Assignment</h2>
            {isGenerating ? (
              <div className="flex justify-center items-center h-20">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
              </div>
            ) : (
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-green-300"
                >
                </motion.p>
                {selectedStrat && (
                  <div className="space-y-2">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-xl text-green-400"
                    >
                      {selectedStrat.title}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="text-sm text-green-200 italic"
                    >
                      {selectedStrat.desc}
                    </motion.p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Button - MOVED ABOVE */}
          <button
            onClick={generateRandomPair}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-green-100 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center border-2 border-green-500 mb-8"
          >
            {isGenerating ? 'DEPLOYING GOONS...' : 'ASSIGN GOON MISSION'}
          </button>

          <div className="space-y-6">
            {/* Strats List */}
            <div className="bg-black/20 rounded-lg p-4 border border-green-500/50">
              <h2 className="text-xl font-semibold text-green-400 mb-2">Available Strats</h2>
              <div className="flex flex-wrap gap-2">
                {strats.map((strat) => (
                  <span
                    key={strat.title}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${selectedStrat && selectedStrat.title === strat.title
                      ? 'bg-green-500 text-black font-bold'
                      : 'bg-black/30 text-green-300 border border-green-500/30'
                      }`}
                  >
                    {strat.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}