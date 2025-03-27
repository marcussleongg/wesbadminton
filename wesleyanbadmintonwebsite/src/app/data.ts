type Match = {
    [opponent: string] : number;
};

interface Player {
    id: number;
    fullName: string;
    elo: number;
    latestMatches: Match[];
}

export const playersData : Player[] = [
{
    id: 0,
    fullName: "Kevin Zhao",
    elo: 1000,
    latestMatches: [
        { "Tina Chen": 15 },
        { "Xiran Tan": 19 },
    ],
}, {
    id: 1,
    fullName: "Tina Chen",
    elo: 2000,
    latestMatches: [
        { "Kevin Zhao": 21 },
        { "Xiran Tan": 21 },
    ],
}, {
    id: 2,
    fullName: "Xiran Tan",
    elo: 1500,
    latestMatches: [
        { "Kevin Zhao": 21 },
        { "Tina Chen": 18 }
    ],
}
]