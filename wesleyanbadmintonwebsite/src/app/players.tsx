import Image from "next/image";
import { playersData } from "./data";
import { getImageDirectory } from "./getPlayerPhoto";

type Match = {
    [opponent: string] : number;
};

function Avatar({ personName, size} : { personName: string, size: number }) {
    return (
        <>
            <Image
                src = {getImageDirectory(personName.replace(/\s/g, '').toLowerCase())}
                alt = {personName}
                width = {size}
                height = {size}
            />
        </>
    )
}

function Profile({ personName, grade, latestMatchesList } : { personName: string, grade: string, latestMatchesList: Match[] }) {
    return (
        <>
            <Avatar 
                personName={personName}
                size={100}
            />
            <h2><span style={{ fontWeight: 'bold' }}>{personName}</span> {grade}</h2>
                { latestMatchesList.length > 0 ? (
                    latestMatchesList.map((match,index) => {
                        const [opponent, score] = Object.entries(match)[0];
                        return (
                            <li key={index}>{personName} vs {opponent}. Score: {score}</li>
                        );
                    })
                ) : (<li>No matches available.</li>)}
        </>
    );
}

export default function Gallery() {
    const playersSortedByElo = playersData.sort((a, b) => b.elo - a.elo);
    const playerItems = playersSortedByElo.map(player => 
        <div key={player.id}>
            <Profile personName={player.fullName} grade={player.grade} latestMatchesList={player.latestMatches} />
        </div>);
    return (
        <section>
            <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Players</h1>
            <ul>{playerItems}</ul>

        </section>
    );
}