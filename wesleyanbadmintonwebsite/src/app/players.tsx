import Image from "next/image";
import { playersData } from "./data";
import { getImageDirectory } from "./getPlayerPhoto";

/* type Match = {
    [opponent: string] : number;
}; */

function Avatar({ personName, size} : { personName: string, size: number }) {
    return (
        <>
            <Image
                src = {getImageDirectory(personName.replace(/\s/g, '').toLowerCase())}
                alt = {personName}
                width = {size}
                height = {size}
                /* className="rounded-full object-cover" */
            />
        </>
    )
}

function Profile({ personName, grade, /* latestMatchesList */ } : { personName: string, grade: string, /* latestMatchesList: Match[] */ }) {
    return (
        <div className="flex items-center space-x-4">
                <Avatar 
                    personName={personName}
                    size={100}
                />
                <div className="min-w-0">
                    <h2 className="font-bold text-2xl truncate">{personName}</h2>
                    <h3 className="text-gray-500 text-sm truncate">{grade}</h3>
                </div>
            
               {/*  { latestMatchesList.length > 0 ? (
                    latestMatchesList.map((match,index) => {
                        const [opponent, score] = Object.entries(match)[0];
                        return (
                            <li key={index}>{personName} vs {opponent}. Score: {score}</li>
                        );
                    })
                ) : (<li>No matches available.</li>)} */}
        </div>
    );
}

export default function Gallery() {
    const playersSortedByElo = playersData.sort((a, b) => b.elo - a.elo);
  
    return (
      <section className="w-full px-4 sm:px-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-center">Players</h1>
        <div className="space-y-4">
          {playersSortedByElo.map((player) => (
            <div
              key={player.id}
              className="w-full flex items-center justify-between space-x-4 sm:space-x-6 p-4 border-b overflow-hidden"
            >
              <div className="flex-grow overflow-hidden">
                <Profile personName={player.fullName} grade={player.grade} />
              </div>
              <div className="text-right whitespace-nowrap">
                <h4 className="text-gray-100 font-bold text-xl">{player.elo}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}  