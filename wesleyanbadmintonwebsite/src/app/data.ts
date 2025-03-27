type Match = {
    [opponent: string] : number;
};

interface Player {
    id: number;
    fullName: string;
    grade: string;
    elo: number;
    latestMatches: Match[];
}

export const playersData : Player[] = [
{
    id: 0,
    fullName: "Kevin",
    grade: "2026",
    elo: 1000,
    latestMatches: [
        { "Tina Chen": 15 },
        { "Xiran Tan": 19 },
    ],
}, {
    id: 1,
    fullName: "Tina Chen",
    grade: "2027",
    elo: 2000,
    latestMatches: [
        { "Kevin Zhao": 21 },
        { "Xiran Tan": 21 },
    ],
}, {
    id: 2,
    fullName: "Xiran",
    grade: "GRAD",
    elo: 1500,
    latestMatches: [
        { "Kevin Zhao": 21 },
        { "Tina Chen": 18 }
    ],
}, {
    id: 3,
    fullName: "Long",
    grade: "2026",
    elo: 0,
    latestMatches: [],
}, {
    id: 4,
    fullName: "Rakib",
    grade: "GRAD",
    elo: 0,
    latestMatches: [],
}, {
    id: 5,
    fullName: "Marco",
    grade: "2026",
    elo: 0,
    latestMatches: [],
}, {
    id: 6,
    fullName: "Alina",
    grade: "2027",
    elo: 0,
    latestMatches: [],
}, {
    id: 7,
    fullName: "Maggie",
    grade: "2027",
    elo: 0,
    latestMatches: [],
}, {
    id: 8,
    fullName: "Tina Wei",
    grade: "2027",
    elo: 0,
    latestMatches: [],
}, {
    id: 9,
    fullName: "Fiona",
    grade: "2027",
    elo: 0,
    latestMatches: [],
}, {
    id: 10,
    fullName: "Iris",
    grade: "2026",
    elo: 0,
    latestMatches: [],
}, {
    id: 11,
    fullName: "Wyna",
    grade: "2028",
    elo: 0,
    latestMatches: [],
}, {
    id: 12,
    fullName: "Virgil",
    grade: "2028",
    elo: 0,
    latestMatches: [],
}, {
    id: 13,
    fullName: "Duy",
    grade: "2028",
    elo: 0,
    latestMatches: [],
}, {
    id: 14,
    fullName: "Marcus",
    grade: "2028",
    elo: 0,
    latestMatches: [],
},
]