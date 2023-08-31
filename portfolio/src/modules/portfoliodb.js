import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref([
        {
            id: 'productOne',
            portfolioimage: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Fmockup-website-1.png?alt=media&token=c10b471f-0d41-49a5-a8c3-9e6e24a1479b',
            detailimg: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Fimage-1.jpg?alt=media&token=f2244fb0-e700-4bb4-9973-8c3f9155c598',
            
            // image or video shown next to problem and solution
            probImg1: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2FUser_persona.jpg?alt=media&token=6ae79d74-38ef-4d16-a562-f049e1a8341c',
            probImg12: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2FUser_persona%20%E2%80%93%201.jpg?alt=media&token=58ae19d6-7cce-4ee3-a882-5215237b3496',
            probImg13: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2FMoSCoW.jpg?alt=media&token=c8489b2e-d117-46ca-852b-ec990a226094',
            probVideo1: '',
            probVideo2: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Feventlist.mp4?alt=media&token=f9c2832d-6605-4735-b2f7-7704b42cab82',
            probVideo3: '',

            // images or video shown on its own to demonstrate the product without context
            product1: '',
            product2: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Fcommentsection-mockup.png?alt=media&token=2731d8c0-ceca-499d-bb2f-378b2dcdc6d9',
            product3: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Feventunderside-mockup.png?alt=media&token=ffc7923a-ac08-418d-bd0f-9b77cca4e967',
            product4: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Fabout-mockup.png?alt=media&token=4f2c10ca-52f9-407a-aac9-6bf50ebb32fc',
            footerImg: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Ffooter-mockup.png?alt=media&token=33f71b75-e3c0-4855-b0de-a33f6d22f2d7',
            footer: '',
            // videos
            video1: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fwebsite-video-kanten-1.mp4?alt=media&token=5d93e051-4242-46e3-b13f-c78cc1abcd8c&_gl=1*1szvspr*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTk1ODM2OS41Mi4xLjE2ODU5NTg2MDQuMC4wLjA.',
            video2: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Fnewsletter.mp4?alt=media&token=80b735e5-7a28-4bc5-ba4a-1c044c6a5962',
            video3: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Ftickets-and-location.mp4?alt=media&token=ed594345-f5db-4f11-ab95-66fdbb20a680',
            video4: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-1%2Fcollage.mp4?alt=media&token=e6ea8e18-d72c-4afa-980a-372127558081',
            
            // content text
            number: '.01',
            // title: 'Hjemmeside',
            title: 'Website',
            category: 'Webdesign- & development',
            // description: 'Jeg har designet og kodet en hjemmeside for virksomheden Kanten.',
            description: 'I have designed and coded a website for the company Kanten.',
            // furtherDescription: 'Hjemmesiden har til formål at vise virksomhedens events.',
            furtherDescription: 'The websites purpose is to show the companies events.',
            tech: 'HTML, CSS, Javascript & Vue',
            status: 'Færdig',
            status: 'Completed',
            date: '2023',
            // problem: 'Virksomheden har to hovedsegmenter i deres målgruppe som er gæsterne og de frivillige. Dette gav et bredt udvalg af funktioner som ville være relevant at lave en hjemmeside over. Dog eftersom at dette er et skoleprojekt med tidsbegrænsning, måtte jeg prioritere hvad der var vigtigst at have med på siden. Og ud fra dette, vælge min persona.',
            problem: 'The company has two main personas in their target group who are the guests and the volunteers. This gave a wide range of functions which would be relevant to make a website about. Though since this is a school project with a deadline and time limit, I had to prioritise the key factors on the website. And from this, choose my persona.',
            // solution: 'Jeg opstillede derfor to relevante personaer og lavede derefter user stories som ville være funktioner, der ville ramme personaernes behov og ønsker. Ud fra user storiesene lavede jeg en prioriteringsliste med MoSCoW modellen, for at begrænse mig. Vha. dette værktøj valgte jeg at fokuserer på eventdelen af hjemmesiden og dermed bruge Oscar som min persona, da eventene er Kantens værditilbud, samt begge personaer også søger fællesskabet i Kanten, hvor eventene er hovedfællesskabet.',
            solution: 'I therefore set up two relevant personas and then created user stories which would be functions that would meet the needs and wishes of the personas. Based on the user stories, I made a priority list using the MoSCoW model, to limit myself. By the help of this tool, I chose to focus on the event part of the website and thus use Oscar as my persona, since the events are Kantens value proposition, and both personas also seek the community in Kanten, where the events are the main community.',
            // problem2: 'Eventene er dynamiske. Derfor skal Kanten kunne tilføje og slette events uden at lave et nyt HTML blok for det nye event m.v. hver gang der sker en ændring af eventene.',
            problem2: 'The events are dynamic. Therefore, Kanten must be able to add and delete events without creating a new HTML block for the new event, etc. every time there is a change to the events.',

            // solution2: 'Jeg brugte derfor javascript til at opsætte en loop og kode HTML og CSS for i princippet ét event, således at så snart Kanten skal have tilføjet et nyt event, så skal de bare udfylde et nyt array. Eller hvis de vil slette et event, så kan de bare slette arrayet og ikke alt HTML til eventet. Dette gør at de sparer en masse tid.',
            solution2: 'I therefore used javascript to set up a loop and code HTML and CSS for basically one event, so that as soon as Kanten needs to add a new event, they just have to fill in a new array. Or if they want to delete an event, they can just delete the array and not all the HTML for the event. This saves them a lot of time.',
        },
        {
            id: 'productTwo',
            portfolioimage: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fmockup-website-2.png?alt=media&token=61b856b8-bdc8-466d-a213-1d7257421830&_gl=1*14ituqp*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTg4NjYzOC40Ny4xLjE2ODU4ODY3MDUuMC4wLjA.',
            detailimg: '',
            detailvid: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-2%2Ffront-page.mp4?alt=media&token=db3d0215-2a62-4166-b583-c3df46d00076&_gl=1*1s3l21j*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NjQ5NjQ4Ni41NS4xLjE2ODY0OTgyNDYuMC4wLjA.',
            
            // image or video shown next to problem and solution
            probImg1: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-2%2Fnews.png?alt=media&token=a825c7a8-c1b0-4123-a83e-a9c128c887f7&_gl=1*e8hyv3*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NjQyOTk0NC41NC4xLjE2ODY0MzA3MjkuMC4wLjA.',
            probImg2: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-2%2Fchoose.png?alt=media&token=d2b0895e-872a-4bf5-9037-4d88468bfce2&_gl=1*1sbt228*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NjQyOTk0NC41NC4xLjE2ODY0MzA3NDcuMC4wLjA.',
            probImg3: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-2%2Fjoin.png?alt=media&token=60be9608-0390-48e6-99ba-a6728d1d7c0d&_gl=1*tre7p4*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NjQyOTk0NC41NC4xLjE2ODY0MzA3NjIuMC4wLjA.',
            
            // images or video shown on its own to demonstrate the product without context
            product1: '',
            product2: '',
            product3: '',
            product4: '',
            footerImg: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-2%2Ffooter.png?alt=media&token=14048ae9-ce7b-4b0d-9022-d5a869dc83f3',
            // videos
            video1: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-2%2Fnews-page.mp4?alt=media&token=35a75415-5496-4853-be11-5386828fc643&_gl=1*uxdz4c*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NjQ5NjQ4Ni41NS4xLjE2ODY0OTgyODQuMC4wLjA.',
            video2: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-2%2Fwelcome-page.mp4?alt=media&token=65eeab4d-09a0-4364-aef1-291f49b58023&_gl=1*1w8zkd7*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NjQ5NjQ4Ni41NS4xLjE2ODY0OTgyOTIuMC4wLjA.',
            
            // content text
            number: '.02',
            
            // title: 'Hjemmeside',
            title: 'Website',
            category: 'Webdesign- & development',
            
            // description: 'Jeg har designet og kodet min version af hjemmesiden Overwatch.com.',
            description: 'I have designed and coded my version of the website www.overwatch.com.',
            tech: 'HTML, CSS & Bootstrap',
            
            // status: 'Færdig',
            status: 'Completed',
            date: '2022',
            
            // problem: 'Jeg havde en del sektioner jeg ville vise på hjemmesiden, men hvilken rækkefølge skulle de vises i? Størstedelen af målgruppen, der besøger hjemmesiden ville være nye eller eventuelle spillere, som ønsker at forstå mere om spillet. Hvad ville give mest mening overvejede jeg. Brugerne er både nye og gamle spillere, så derfor skal hjemmesiden give mening for begge segmenter, så ingen forbrugerer bliver frustreret. De gamle spillere skal kunne besøge hjemmesiden uden at bladre helt til bunden for at finde relevant informationer for dem.',
            problem: 'I had quite a few sections I wanted to display on the website, but in what order should they appear? Most of the target audience visiting the website are new or potential players who want to understand more about the game. What would make the most sense, I considered. The users are both new and old players, so the website must make sense for both segments, so that no consumer gets frustrated. The old players must be able to visit the website without scrolling all the way to the bottom to find relevant information.',
            
            // problem2: '”Choose your hero” sektionen var færdig designet på XD, men da jeg begyndte at kode og style hjemmesiden, havde jeg for meget plads på siden og så blev mit indhold for adskilt til at man kunne se at det hørte sammen.',
            problem2: 'I had completed the "Choose your hero" section on XD, but when I started to code and style the website, I had too much space on the page and then my content became too separate for you to see that it belonged together.',

            // problem3: 'Sektionen: ”The future is worth fighting for. Join us!” havde jeg problemer med kontrasten mellem baggrundsbilledet og teksten. Teksten var ikke læselig ligegyldig om teksen var hvid eller sort. Dette skyldes at billedet havde stor kontrast mellem shadows og highlights, dermed havde nogle bogstaver nok kontrast, mens andre ikke havde.',
            problem3: 'The section: "The future is worth fighting for. Join us!” I had problems with the contrast between the background image and the text. The text was not legible regardless of whether the text was white or black. This is because the image had a large contrast between shadows and highlights, thus some letters had enough contrast, while others did not.',

            // solution: 'Jeg valgte at fokusere på segmentet ”nye eller potentielle spillere” på hjemmesiden, da segmenterne der allerede spiller spillet, vil tilbringe mest af deres tid på selve spillet. Jeg valgte også at placere ”Latest news” sektionen som en af de første sektioner på hjemmesiden, så de gamle spillere hurtigt finder noget relevant for dem.',
            solution: 'I chose to focus on the "new or potential players" segment of the website, as the segments that are already playing the game will spend most of their time on the game itself. I also chose to place the "Latest news" section as one of the first sections on the website, so that the old players quickly find something relevant to them.',

            // solution2: 'Jeg valgte at placere indholdet for ”Choose your hero” i en række fremfor kolonner, så de hører mere sammen. På samme tid er det mere behageligt, at man kan se alt indholdet på sin skærm på en gang uden at der skal scrolles ned og op for at se det hele. Jeg sørgede samtidig for, at indholdet ikke var for klemt sammen og lagde vægt på at skabe nok white space.',
            solution2: 'I chose to place the content for "Choose your hero" in a row rather than columns, so that they belong together more. At the same time, it is more pleasant that you can see all the content on your screen at once without having to scroll down and up to see it all. At the same time, I made sure that the content was not too compressed and emphasized creating enough white space.',

            // solution3: 'For at skabe nok kontrast mellem teksten og baggrundsbilledet i sektionen ”The future is worth fighting for. Join us!”, så ændrede jeg billedets overordnet lysstyrke med exposure, istedet for kun at formindske highlists. Dermed blev billedets shadows og highlights mørkere i samme mængde, så billedet beholdte i stor stil sin kontrast. Eftersom jeg ville forholde mig til min farvepalette og ikke ændre min tekst farve kun for denne sektion - så ville hjemmesiden ikke være så konsekvent.',
            solution3: 'To create enough contrast between the text and the background image in the section "The future is worth fighting for. Join us!”, I changed the overall brightness of the image using exposure, instead of just reducing the highlights. Thus, the images shadows and highlights were darkened by the same amount, so that the image largely retained its contrast. Since I would stick to my color palette and not change my text color just for this section - the website would not be as consistent.',

        },
        {
            id: 'productThree',
            portfolioimage: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-3%2Fphoto-1.jpg?alt=media&token=8c87d53f-c523-4edb-8c5f-525e17465458',
            detailimg: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-3%2Fphoto-1.jpg?alt=media&token=8c87d53f-c523-4edb-8c5f-525e17465458',
            
            // image or video shown next to problem and solution
            probImg1: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-3%2Fphoto-1-rot.jpg?alt=media&token=d27f730d-dbcd-48d8-badc-a6a12b42b167',
            probImg2: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-3%2Fphoto-1-image1.jpg?alt=media&token=0cc6bc3b-0f76-452c-a530-ee5a001baabb',
            
            // images or video shown on its own to demonstrate the product without context
            product1: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fproject-3%2Fphoto-11.png?alt=media&token=6f1f7dbb-3bdb-436d-9bdf-70bd5cecdd29',
            
            // context text
            number: '.03',
            // title: 'Fotografi',
            title: 'Photography',
            // category: 'Fotografering & fotoredigering',
            category: 'Photography & photo editing',
            // description: 'Et foto, hvor formålet er at forvirre modtageren.',
            description: 'A photo where the purpose is to confuse the reciever.',

            tech: 'Photoshop',
            // status: 'Færdig',
            status: 'Completed',
            date: '2022',
            // problem: 'Hvis fotoet forvirrer dig ved første øjekast, så var det mit mål! Jeg ønskede at tage et foto med ingen billede manipulation, hvor modtageren bliver fanget ved at ville finde ud af hvad de ser. Men jeg vidste ikke hvor og hvordan jeg skulle starte, da jeg måtte tænke ud af boksen.',
            problem: 'If the photo confuses you at first glance, that was my goal! I wanted to take a photo with no image manipulation, where the recipient wants to find out what they see. But I did not know where and how to start, since I had to think outside the box.',

            // problem2: 'Vinklen og kompositionen var også noget jeg skulle fokusere meget på mens jeg tog billedet. Det var nemlig svært at tage billedet og samtidig skulle forholde sig til, at det endelige billede ville være spejlvendt, fordi jeg måtte skabe billedet i mit hoved, fremfor at se det endelige billede. I det endelige billede måtte der ikke være sand i toppen af billedet, da vandet skulle ligne himlen.',
            problem2: 'The angle and composition was also something I had to focus a lot on while taking the picture. It was difficult to take the picture and at the same time have to deal with the fact that the final picture would be mirrored, because I had to create the picture in my head, rather than seeing the final picture. In the final image, there had to be no sand at the top of the image, since the water had to look like the sky.',

            // solution: 'For at det endelige billede så rigtigt ud, brugte jeg rule of thirds, og placerede subjektets fødder i toppen af billedet, således at man ser reflektionen mest. Og jeg sørgede for, at sandet rækkede til midten af billedet, sådan så at himlen er fri for sand.',
            solution: 'In order for the final image to look right, I used the rule of thirds, and placed the subjects feet at the top of the image so that you see the reflection the most. And I made sure that the sand reached the center of the image, so that the sky is free of sand',

            // solution2: 'Normalt ses hele subjektet, og så er det tydeligt, at det er en spejlreflektion i vandet, men jeg flippede billedet horionsontalt, og havde subjektets spejlreflektion som fokuspunktet for at skabe forvirring. Faktisk ser man næsten ikke subjektet. Bølgerne i vandet giver subjektet en anderledes krop, så det ikke ligner et normalt menneske. Kroppen får nemlig dermed forskellige former, som gør at hver modtager kan se forskellige ting. Blandt andet har en modtager sagt, at de ser en alien med det forlængede hovedet. Og en anden der ser en ond mand der griner. Det forvirrer også modtageren, at det ikke nødvendigvis ser ud til, at billedet er flippet horisontalt, da det er tydeligt, at hovedet er i toppen og benene er i bunden.',
            solution2: 'Normally the entire subject is seen, and then it is clear that it is a mirror reflection in the water, but I flipped the image horizontally, and had the subjects mirror reflection be the focal point to create confusion. In fact, you hardly see the subject. The waves in the water give the subject a different body, so that it does not look like a normal person. The body thus takes on different shapes, which means that each recipient can see different things. Among other things, a recipient has said that they see an alien with an elongated head. And another who sees an evil man laughing. It also confuses the receiver that it does not necessarily appear that the image is flipped horizontally, as it is clear that the head is at the top and the legs are at the bottom.',
        },
        {
            id: 'productFour',
            portfolioimage: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fplakat-1.jpg?alt=media&token=a4628e6b-2fe9-490f-8ad9-907787086e29&_gl=1*qclej6*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0NDYuMC4wLjA.',
            detailimg: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fplakat-1.jpg?alt=media&token=a4628e6b-2fe9-490f-8ad9-907787086e29&_gl=1*qclej6*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0NDYuMC4wLjA.',
            
            // image or video shown next to problem and solution
            probImg1: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fplakat-1.jpg?alt=media&token=a4628e6b-2fe9-490f-8ad9-907787086e29',
            
            // context text
            number: '.04',
            title: 'Poster',
            // category: 'Grafisk Design',
            category: 'Graphic Design',
            // description: 'Et personligt projekt. Her havde jeg frie hænder.',
            description: 'A personal project. I had my hands free.',

            tech: 'InDesign',
            // status: 'Færdig',
            status: 'Completed',
            date: '2023',
            // problem: 'Jeg havde problemer med at skabe nok kontrast mellem billedet og teksten, da der er både helt mørke og lyse farver på en lille størrelse.',
            problem: 'I had problems creating enough contrast between the image and the text, as there are both completely dark and light colors on a small size.',

            // problem2: 'Teksten skulle være læselig, da teksten er en stor del af posterens design. Men tekst der ingen fill og kun strokes har, har nedsat læselighed, så det var et problem som jeg forsøgede på at løse og fokusere på. Desuden er der tekst, der både har ingen fill og står lodret, som forværrer læseligheden.',
            problem2: 'The text should be legible, as the text is a large part of the design of the poster. But text that has no fill and only strokes has reduced readability, so it was a problem that I tried to solve and focus on. In addition, there is text that both has no fill and stands vertically, which worsens readability.',

            // problem3: 'Efter teksten var på plads, manglede der noget. Teksten var det eneste design, som ikke udtrykkede min designstil ordentlig. Men med så mange elementer, så måtte der ikke være for mange linjer over hele posteren. Dette formindsker læseligheden, da øjet kan ikke bare følge linjerne fra elementer til at se de andre elementer.',
            problem3: 'After the text was in place, something was missing. The text was the only design that did not express my design style properly. But with so many elements, there should not be too many lines over the entire poster. This reduces readability, as the eye cannot simply follow the lines from elements to see the other elements.',

            // solution: 'Teksten blev både placeret og fik sin farve baseret på baggrunden, med kontrast som fokus. Eksempelvis valgte jeg at gøre teksten hvid, hvor baggrunden var mere mørk. Jeg valgte også at lægge vægt på karakterens to farver: rød og orange, som jeg brugte til farven af overskriften og de to firkantede bokse. Jeg brugte disse farver til at skabe sammenhæng mellem posteren og karakteren. Jeg valgte at bruge de to farver én gang hver, da farverne skaber mest blikfang og jeg ville fremhæve indholdet der. De orange bokse tilføjede jeg også for at skabe balance. Fordi de er meget bemærkelsesværdi pga deres contrast fra den sorte baggrund. Og ”Uchiha” teksten til venstre skaber blikfang fordi tekststørrelsen er stor, og der dermed ikke var noget i højre side, der skabte blikfang, da tekststørrelse var lille og hvid ligesom ”Uchiha”.',
            solution: 'The text was both positioned and given its color based on the background, with contrast as the focus. For example, I chose to make the text white, where the background was darker. I also chose to emphasize the two colors of the character: red and orange, which I used for the color of the header and the two square boxes. I used these colors to create a connection between the poster and the character. I chose to use the two colors once each, as the colors create the most attention and I wanted to highlight the content there. I also added the orange boxes for balance. Because they are very remarkable due to their contrast from the black background. And the "Uchiha" text on the left is eye-catching because the text size is large, and thus there was nothing on the right side that was eye-catching, as the text size was small and white just like "Uchiha".',
            
            // solution2: 'For teksterne uden fill valgte jeg at øge tekststørrelsen og gjorde stroken feddere, da dette gjorde teksterne uden fill mere læselig, eftersom de dermed bliver mere tydelige.',
            solution2: 'For the texts without fill, I chose to increase the text size and made the stroke bolder, as this made the texts without fill more readable, since the text therefor become clearer.',
            
            // solution3: 'Jeg tilføjede geometriske former som strejer og firkanter, for at skabe linjer. Jeg alignede alle elementer med andre elementer, så der var færre linjer og øgede dermed læseligheden.',
            solution3: 'I added geometric shapes like lines and squares to create lines. I aligned all elements with other elements so there were fewer lines and thus increased readability.',
        },
        {
            id: 'productFive',
            portfolioimage: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fmusic-video-thumbnail.jpg?alt=media&token=061d5bb2-e019-42c2-87b5-44dec4524a07&_gl=1*jy8sp2*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDY0MTIuMC4wLjA.',
            detailvid: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fmusic-video-1.mp4?alt=media&token=10e86b07-5e9d-4980-8af5-12c8d1135405&_gl=1*19vj71z*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDYzODYuMC4wLjA.',
            
            // images or video shown on its own to demonstrate the product without context
            // video
            video1: 'https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fmusic-video-1.mp4?alt=media&token=10e86b07-5e9d-4980-8af5-12c8d1135405&_gl=1*19vj71z*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgwNTc4MC40Mi4xLjE2ODU4MDYzODYuMC4wLjA.',
            
            // context text
            number: '.05',
            // title: 'Musik Video',
            title: 'Music Video',
            // category: 'Videooptagning- & redigering',
            category: 'Video recording & editing',
            // description: 'Jeg har filmet og redigeret en musik video.',
            description: 'I have filmed and edited a music video.',

            tech: 'Premiere Pro',
            // status: 'Færdig',
            status: 'Completed',
            date: '2023',
            // problem: 'Artisten manglede en musik video til sin nye sang. Han ønskede, at det skulle ligne at: "videoen er blevet taget i et andet univers".',
            problem: 'The artist needed a music video for his new song. He wanted it to look like: "the video has been taken in another universe".',
            
            // problem2: 'Siden vi ikke bare kan teleportere os til et andet univers - hvilket ville være sejt - så begyndte jeg på at brainstorme både hvad der kunne skabe denne følelse for hans seer, samt lokalition, som er begge vigtige i denne situation.',
            problem2: 'Since we can not just teleport to another universe - which would be cool - I started brainstorming both what could create this feeling for his viewer, as well as location, both of which are important in this situation.',
            
            // problem3: 'Tidspunktet af dagen, hvor vi skulle optage var et problem, da et af lokalitionerne vi valgte tvang os til at filme sent om aftenen, hvor solen var gået ned.',
            problem3: 'The times of the day when we had to shoot were an issue as one of the locations we chose forced us to film late at night when the sun had set.',
            
            // solution: 'Jeg kom op med ideen om at filme dele af videoen under en bro, hvor om aftenen lyser en masse lamper i alle regnbuens farver. Jeg valgte lokalitionen som inspiration fra filmen The Matrix, da inde i "The Matrix" er hele verdenen grøn. Og samtidig fordi det ikke er noget man ser hver dag.',
            solution: 'I came up with the idea of filming parts of the video under a bridge, where in the evening a lot of lamps are lit in all the colors of the rainbow. I chose the location as inspiration from the movie The Matrix, as inside "The Matrix" the whole world is green. And at the same time because it is not something you see every day.',
            
            // solution2: 'Jeg redigerede effekterne og klippede videoerne efter teksten og/eller musikkens beat. Fx tilføje en effekt eller et skift mellem klippene ved bass eller når artisten lægger tryk på et ord. På denne made fremhævede jeg et punkt i sangen, som har mere vægt på. Redigeringen skulle forstærke, at videoen foregik i et andet univers, så derfor lavede jeg en masse effekter med kloner, blitz, stærk motion blur m.v. da effekterne forstærkede farverne, og det er ikke noget vi ser på den måde med mindre det er teknologi.',
            solution2: 'I edited the effects and cut the videos according to the lyrics and/or the beat of the music. For example, add an effect or a change between the clips at bass or when the artist puts pressure on a word. In this way I highlighted a point in the song that has more weight. The editing had to reinforce that the video took place in another universe, so therefore I made a lot of effects with clones, flash, strong motion blur, etc. as the effects enhanced the colors and it is not something we see that way unless it is technology.',
            
            // solution3: 'Eftersom min eneste lyskilde var lamperne, gjorde dette, at jeg måtte lege med mit kameras indstillinger ift. blænde, lukker og ISO. Efter at have justeret min blænde og lukker, så de stadig gav en fin belysning, sat min ISO højere op, for at få det ekstra belysning.',
            solution3: 'Since my only light source was the lamps, this meant that I had to play with my cameras aperture, shutter and ISO settings. After adjusting my aperture and shutter so that they still gave a nice exposure, then i set my ISO higher to get that extra exposure.',
        },
    ])


    return {
        state
    }

}


export default getPortfolio
