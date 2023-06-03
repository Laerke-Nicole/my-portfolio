import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 'product-one',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-5a046.appspot.com/o/webpage-1.jpg?alt=media&token=ea7c501f-a3e4-4985-a0d2-cae6537e6537',
            video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-5a046.appspot.com/o/webpage-1.mp4?alt=media&token=5bd078cc-8b70-459f-a5d4-f749d3083846',
            number: '.01',
            title: 'Overwatch',
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
            id: 'product-two',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-5a046.appspot.com/o/photo-1.jpg?alt=media&token=5fb1a38e-fcef-4ea2-8a30-2243912585dc',
            detail: 'https://firebasestorage.googleapis.com/v0/b/portfolio-5a046.appspot.com/o/photo-1.jpg?alt=media&token=5fb1a38e-fcef-4ea2-8a30-2243912585dc',
            number: '.02',
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
            id: 'product-three',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-5a046.appspot.com/o/illustration-1.svg?alt=media&token=91aae6bd-2c7a-4707-9b80-da6dedc7460f',
            detail: 'https://firebasestorage.googleapis.com/v0/b/portfolio-5a046.appspot.com/o/illustration-1.svg?alt=media&token=91aae6bd-2c7a-4707-9b80-da6dedc7460f',
            number: '.03',
            title: 'Mini me',
            category: 'Grafisk Design',
            description: 'Jeg har lavet et selvportræt i en lille udgave.',
            tech: 'Illustrator',
            status: 'Færdig',
            date: '2022',
            problem: 'Mit selvportræt skulle vise min tegnestil, og være et samlet billede af mine indre og ydre træk og interesser. Hver for sig er de til at forklare, men samlet - samt visuelt - var det en udfordring for mig. Jeg ønskede nemlig at visuelt fortælle modtageren hvem er jeg som person, ved at indbringe flere ting i tegningen uden at overvælde modtageren. Jeg har mange interesser, så hvor skulle jeg starte? Og på samme tid koge det hele sammen.',
            problem2: 'Kroppens proportion var også en udfordring for mig. Hvor lang skal armen række ned? Hvor skal munden placeres på ansigtet, og hvilken form skal den have for at give det rigtige udtryk? Osv. Alt dette var problemer jeg skulle finde en løsning på.',
            solution: 'Jeg brainstormede og gav mig selv spørgsmålet: "hvem er jeg?". Jeg kom med flere ideer som fx rolig, elsker anime m.v. som jeg overvejede om ville være realistisk. Karakterens kropssprog er åben idet armene er ud fra kroppen. Og øjne, øjenbryn og mund giver et roligt udtryk, idet de ikke har store udtryk og samtidig en lettere smilende mund.',   
            solution2: 'Jeg havde et referencebillede for at sammenligne det med min karakters proportion, således at min tegning er realistisk til en vis grad. Min tegnestil er inspireret af anime, så derfor har min karakter store øjne, håret er ikke detalieret og et stort hovedet. Alt dette gør, at karakteren ser mere sød ud, for at give indtryk af at jeg er en sød person.',
        },
        {
            id: 'product-four',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-5a046.appspot.com/o/plakat-1.jpg?alt=media&token=de883980-2405-445e-8ac1-b7a9a9e8d002',
            detail: 'https://firebasestorage.googleapis.com/v0/b/portfolio-5a046.appspot.com/o/plakat-1.jpg?alt=media&token=de883980-2405-445e-8ac1-b7a9a9e8d002',
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
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-5a046.appspot.com/o/music-video-thumbnail.jpg?alt=media&token=02735bc7-7b42-4b02-ab80-33a4d8e5b37f',
            video: 'https://firebasestorage.googleapis.com/v0/b/portfolio-5a046.appspot.com/o/music-video-1.mp4?alt=media&token=37fee229-9b01-4527-88a5-313145316f14',
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
