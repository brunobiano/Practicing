export type Level = {
    title: string,
    color: string,
    icon: "down" | "up",
    teamScore: number[],
    yourScore?: number
}

export const importancy: Level[] = [
    {title: 'COLOSSAL', color: '#27AE60', icon: 'up', teamScore: [0.1, 0.2]},
    {title: 'Grande', color: '#2874A6', icon: 'up', teamScore: [0.05, 0.1]},
    {title: 'Médio', color: '#D4AC0D', icon: 'down', teamScore: [0.04, 0.05]},
    {title: 'Pequeno', color: '#D81A1A', icon: 'down', teamScore: [0, 0.04]},
];

export const teamImportancy = (titles: number, years: number) => {
    const soccerScore = titles / years;

    for (let i in importancy){
        if(soccerScore >= importancy[i].teamScore[0] && soccerScore < importancy[i].teamScore[1]) {
            let importancyCopy = {...importancy[i]};
            
            importancyCopy.yourScore = parseFloat(soccerScore.toFixed(2));
            return importancyCopy;
        }
    }

    return null;
}