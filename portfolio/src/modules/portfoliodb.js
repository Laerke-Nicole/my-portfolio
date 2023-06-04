import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 'product-one',
            image: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fmockup-website-1.png?alt=media&token=40c6408f-8d25-4660-91e0-71cb12d5d8ac&_gl=1*u7fflu*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTg4Mzk3Ny40Ni4xLjE2ODU4ODQyMjUuMC4wLjA.',
            video: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fkanten-web-vid.mp4?alt=media&token=9592b246-10bb-4870-9492-095cb4fc7a88&_gl=1*tg5kj7*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgxMDI3NC40My4xLjE2ODU4MTA4MjIuMC4wLjA.',
            number: '.01',
            title: 'Hjemmeside',
            category: 'Webdesign- & development',
            description: 'Jeg har designet og kodet en hjemmeside for min klient.',
            tech: 'HTML, CSS, Javascript & Vue',
            status: 'Færdig',
            date: '2023',
            problem: 'Jeg havde en del sektioner jeg ville vise på hjemmesiden, men hvilken rækkefølge skulle de vises i? Størstedelen af målgruppen, der besøger hjemmesiden ville være nye eller eventuelle spillere, som ønsker at forstå mere om spillet. Hvad ville give mest mening overvejede jeg. Brugerne er både nye og gamle spillere, så derfor skal hjemmesiden give mening for begge segmenter, så ingen forbrugerer bliver frustreret. De gamle spillere skal kunne besøge hjemmesiden uden at bladre helt til bunden for at finde relevant informationer for dem.',
            solution: 'Jeg valgte at fokusere på segmentet ”nye eller potentielle spillere” på hjemmesiden, da segmenterne der allerede spiller spillet, vil tilbringe mest af deres tid på selve spillet. Jeg valgte også at placere ”Latest news” sektionen som en af de første sektioner på hjemmesiden, så de gamle spillere hurtigt finder noget relevant for dem.',
        },
        {
            id: 'product-two',
            image: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fmockup-website-2.png?alt=media&token=134f6c58-8f20-4614-b430-5ab80b12512f&_gl=1*10g95b3*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTg4Mzk3Ny40Ni4xLjE2ODU4ODQ1MjEuMC4wLjA.',
            video: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fwebpage-1.mp4?alt=media&token=293bd0c5-c0e7-488a-9178-e23a39d9a25f&_gl=1*1azdz94*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0ODkuMC4wLjA.',
            number: '.02',
            title: 'Hjemmeside',
            category: 'Webdesign- & development',
            description: 'Jeg har designet og kodet min version af Overwatch.com.',
            tech: 'HTML, CSS & Bootstrap',
            status: 'Færdig',
            date: '2022',
            problem: 'Jeg havde en del sektioner jeg ville vise på hjemmesiden, men hvilken rækkefølge skulle de vises i? Størstedelen af målgruppen, der besøger hjemmesiden ville være nye eller eventuelle spillere, som ønsker at forstå mere om spillet. Hvad ville give mest mening overvejede jeg. Brugerne er både nye og gamle spillere, så derfor skal hjemmesiden give mening for begge segmenter, så ingen forbrugerer bliver frustreret. De gamle spillere skal kunne besøge hjemmesiden uden at bladre helt til bunden for at finde relevant informationer for dem.',
            problem2: '”Choose your hero” sektionen var færdig designet på XD, men da jeg begyndte at kode og style hjemmesiden, havde jeg for meget plads på siden og så blev mit indhold for adskilt til at man kunne se at det hørte sammen.',
            problem3: 'Sektionen: ”The future is worth fighting for. Join us!” havde jeg problemer med kontrasten mellem baggrundsbilledet og teksten. Teksten var ikke læselig ligegyldig om teksen var hvid eller sort. Dette skyldes at billedet havde stor kontrast mellem shadows og highlights, dermed havde nogle bogstaver nok kontrast, mens andre ikke havde.',
            solution: 'Jeg valgte at fokusere på segmentet ”nye eller potentielle spillere” på hjemmesiden, da segmenterne der allerede spiller spillet, vil tilbringe mest af deres tid på selve spillet. Jeg valgte også at placere ”Latest news” sektionen som en af de første sektioner på hjemmesiden, så de gamle spillere hurtigt finder noget relevant for dem.',
            solution2: 'Jeg valgte at placere indholdet for ”Choose your hero” i en række fremfor kolonner, så de hører mere sammen. På samme tid er det mere behageligt, at man kan se alt indholdet på sin skærm på en gang uden at der skal scrolles ned og op for at se det hele. Jeg sørgede samtidig for, at indholdet ikke var for klemt sammen og lagde vægt på at skabe nok white space.',
            solution3: 'For at skabe nok kontrast mellem teksten og baggrundsbilledet i sektionen ”The future is worth fighting for. Join us!”, så ændrede jeg billedets overordnet lysstyrke med exposure, istedet for kun at formindske highlists. Dermed blev billedets shadows og highlights mørkere i samme mængde, så billedet beholdte i stor stil sin kontrast. Eftersom jeg ville forholde mig til min farvepalette og ikke ændre min tekst farve kun for denne sektion - så ville hjemmesiden ikke være så konsekvent.',
        },
        {
            id: 'product-three',
            image: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fphoto-1.jpg?alt=media&token=5f8b994c-06e1-4e84-93cc-f54474a9c530&_gl=1*7b13uc*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0MjYuMC4wLjA.',
            detail: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fphoto-1.jpg?alt=media&token=5f8b994c-06e1-4e84-93cc-f54474a9c530&_gl=1*7b13uc*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0MjYuMC4wLjA.',
            number: '.03',
            title: 'Confusing Creature',
            category: 'Fotografering & fotoredigering',
            description: 'Et foto, hvor formålet er at forvirre modtageren.',
            tech: 'Photoshop',
            status: 'Færdig',
            date: '2022',
            problem: 'Hvis fotoet forvirrer dig ved første øjekast, så var det mit mål! Jeg ønskede at tage et foto med ingen billede manipulation, hvor modtageren bliver fanget ved at ville finde ud af hvad de ser. Men jeg vidste ikke hvor og hvordan jeg skulle starte, da jeg måtte tænke ud af boksen.',
            problem2: 'Vinklen og kompositionen var også noget jeg skulle fokusere meget på mens jeg tog billedet. Det var nemlig svært at tage billedet og samtidig skulle forholde sig til, at det endelige billede ville være spejlvendt, fordi jeg måtte skabe billedet i mit hoved, fremfor at se det endelige billede. I det endelige billede måtte der ikke være sand i toppen af billedet, da vandet skulle ligne himlen.',
            solution: 'For at det endelige billede så rigtigt ud, brugte jeg rule of thirds, og placerede subjektets fødder i toppen af billedet, således at man ser reflektionen mest. Og jeg sørgede for, at sandet rækkede til midten af billedet, sådan så at himlen er fri for sand.',
            solution2: 'Normalt ses hele subjektet, og så er det tydeligt, at det er en spejlreflektion i vandet, men jeg flippede billedet horionsontalt, og havde subjektets spejlreflektion som fokuspunktet for at skabe forvirring. Faktisk ser man næsten ikke subjektet. Bølgerne i vandet giver subjektet en anderledes krop, så det ikke ligner et normalt menneske. Kroppen får nemlig dermed forskellige former, som gør at hver modtager kan se forskellige ting. Blandt andet har en modtager sagt, at de ser en alien med det forlængede hovedet. Og en anden der ser en ond mand der griner. Det forvirrer også modtageren, at det ikke nødvendigvis ser ud til, at billedet er flippet horisontalt, da det er tydeligt, at hovedet er i toppen og benene er i bunden.',
        },
        {
            id: 'product-four',
            image: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fplakat-1.jpg?alt=media&token=a4628e6b-2fe9-490f-8ad9-907787086e29&_gl=1*qclej6*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0NDYuMC4wLjA.',
            detail: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fplakat-1.jpg?alt=media&token=a4628e6b-2fe9-490f-8ad9-907787086e29&_gl=1*qclej6*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0NDYuMC4wLjA.',
            number: '.04',
            title: 'Poster',
            category: 'Grafisk Design',
            description: 'Et personligt projekt. Her havde jeg frie hænder.',
            tech: 'InDesign',
            status: 'Færdig',
            date: '2023',
            problem: 'Jeg havde problemer med at skabe nok kontrast mellem billedet og teksten, da der er både helt mørke og lyse farver på en lille størrelse.',
            problem2: 'Teksten skulle være læselig, da teksten er en stor del af posterens design. Men tekst der ingen fill og kun strokes har, har nedsat læselighed, så det var et problem som jeg forsøgede på at løse og fokusere på. Desuden er der tekst, der både har ingen fill og står lodret, som forværrer læseligheden.',
            problem3: 'Efter teksten var på plads, manglede der noget. Teksten var det eneste design, som ikke udtrykkede min designstil ordentlig. Men med så mange elementer, så måtte der ikke være for mange linjer over hele posteren. Dette formindsker læseligheden, da øjet kan ikke bare følge linjerne fra elementer til at se de andre elementer.',
            solution: 'Teksten blev både placeret og fik sin farve baseret på baggrunden, med kontrast som fokus. Eksempelvis valgte jeg at gøre teksten hvid, hvor baggrunden var mere mørk. Jeg valgte også at lægge vægt på karakterens to farver: rød og orange, som jeg brugte til farven af overskriften og de to firkantede bokse. Jeg brugte disse farver til at skabe sammenhæng mellem posteren og karakteren. Jeg valgte at bruge de to farver én gang hver, da farverne skaber mest blikfang og jeg ville fremhæve indholdet der. De orange bokse tilføjede jeg også for at skabe balance. Fordi de er meget bemærkelsesværdi pga deres contrast fra den sorte baggrund. Og ”Uchiha” teksten til venstre skaber blikfang fordi tekststørrelsen er stor, og der dermed ikke var noget i højre side, der skabte blikfang, da tekststørrelse var lille og hvid ligesom ”Uchiha”.',
            solution2: 'For teksterne uden fill valgte jeg at øge tekststørrelsen og gjorde stroken feddere, da dette gjorde teksterne uden fill mere læselig, eftersom de dermed bliver mere tydelige.',
            solution3: 'Jeg tilføjede geometriske former som strejer og firkanter, for at skabe linjer. Jeg alignede alle elementer med andre elementer, så der var færre linjer og øgede dermed læseligheden.',
        },
        {
            id: 'product-five',
            image: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fmusic-video-thumbnail.jpg?alt=media&token=061d5bb2-e019-42c2-87b5-44dec4524a07&_gl=1*jy8sp2*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0MTIuMC4wLjA.',
            video: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fmusic-video-1.mp4?alt=media&token=10e86b07-5e9d-4980-8af5-12c8d1135405&_gl=1*19vj71z*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDYzODYuMC4wLjA.',
            number: '.05',
            title: 'Musik Video',
            category: 'Videooptagning- & redigering',
            description: 'Jeg har filmet og redigeret en musik video.',
            tech: 'Premiere Pro',
            status: 'Færdig',
            date: '2023',
            problem: 'Artisten manglede en musik video til sin nye sang. Han ønskede, at det skulle ligne at: "videoen er blevet taget i et andet univers".',
            problem2: 'Siden vi ikke bare kan teleportere os til et andet univers - hvilket ville være sejt - så begyndte jeg på at brainstorme både hvad der kunne skabe denne følelse for hans seer, samt lokalition, som er begge vigtige i denne situation.',
            problem3: 'Tidspunktet af dagen, hvor vi skulle optage var et problem, da et af lokalitionerne vi valgte tvang os til at filme sent om aftenen, hvor solen var gået ned.',
            solution: 'Jeg kom op med ideen om at filme dele af videoen under en bro, hvor om aftenen lyser en masse lamper i alle regnbuens farver. Jeg valgte lokalitionen som inspiration fra filmen The Matrix, da inde i "The Matrix" er hele verdenen grøn. Og samtidig fordi det ikke er noget man ser hver dag.',
            solution2: 'Jeg redigerede effekterne og klippede videoerne efter teksten og/eller musikkens beat. Fx tilføje en effekt eller et skift mellem klippene ved bass eller når artisten lægger tryk på et ord. På denne made fremhævede jeg et punkt i sangen, som har mere vægt på. Redigeringen skulle forstærke, at videoen foregik i et andet univers, så derfor lavede jeg en masse effekter med kloner, blitz, stærk motion blur m.v. da effekterne forstærkede farverne, og det er ikke noget vi ser på den måde med mindre det er teknologi.',
            solution3: 'Eftersom min eneste lyskilde var lamperne, gjorde dette, at jeg måtte lege med mit kameras indstillinger ift. blænde, lukker og ISO. Efter at have justeret min blænde og lukker, så de stadig gav en fin belysning, sat min ISO højere op, for at få det ekstra belysning.',
        },
    ])


    return {
        state
    }

}


export default getPortfolio
