<template>
    <main class="contactPage">

        <!-- left contact -->
        <div class="contactBorder1">
            <div id="contactSection1">
                <div class="contactSection1Content">
                    <h1>Kom og sig hej</h1>
                    <div class="contactInput">
                        <input class="input" name="name" placeholder="Navn" type="name">
                        <input class="input" name="email" placeholder="E-mail" type="email">
                        <form>
                            <textarea name="text" placeholder="Hvordan kan jeg hjælpe dig?" type="text"></textarea>
                            <br>
                        </form>

                        <RouterLink to="/">
                            <button id="button1">Send</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- right contact -->
        <div class="contactBorder2">
            <div id="contactSection2">
                <div class="contactSection2Content">
                    <h1>Arbejdshenvendelser</h1>
                    <h3>Kontakt mig venligst på</h3>
                    <p>laenie01@easv365.dk</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>

<style scoped>
/* contact container */
.contactPage {
    display: flex;
    padding-top: 16vh;
}

.contactBorder1 {
    width: 50%;
    padding: 15px 15px 15px 15px;
    background-color: var(--white-headline);
}
/* contact container end */


/* left side contact */
#contactSection1 {
    background-color: var(--white-headline);
    border: var(--dark-border);
    min-height: 475px;
}

.contactSection1Content {
    display: flex;
    flex-direction: column;
    padding: 0 60px 60px 60px;
}

.contactSection1Content h1 {
    color: var(--secondary-color);
    font-size: 40px;
    padding-top: 45px;
}

.input {
    display: flex;
    flex-direction: column;
    width: 250px;
    background-color: var(--white-text);
    min-height: 40px;
    outline: none;
    box-shadow: 0px 10px 20px -18px;
    border: 1px solid var(--secondary-color);
    border-bottom: 2px solid var(--secondary-color);
    padding: 12px 20px;
    margin: 12px 0;
}

input:focus {
  border-bottom: 2px solid var(--tertiary-color);
}

input:hover {
  outline: 1px solid lightgrey;
}

input::placeholder{
  color: var(--black-headline);
  font-family: "condor", sans-serif;
font-weight: 400;
font-style: normal;
}

textarea {
    max-width: 250px;
    min-width: 250px;
    max-height: 400px;
    min-height: 60px;
    color: var(--black-headline);
    font-family: "condor", sans-serif;
font-weight: 400;
font-style: normal;
    background-color: var(--white-text);
    outline: none;
    box-shadow: 0px 10px 20px -18px;
    border: 1px solid var(--secondary-color);
    border-bottom: 2px solid var(--secondary-color);
    padding: 12px 20px;
    margin-bottom: 12px;    
    overflow: hidden;
}

textarea:focus {
  border-bottom: 2px solid var(--tertiary-color);
}

textarea:hover {
  outline: 1px solid lightgrey;
}

textarea::placeholder {
    color: var(--black-headline);
    font-family: "condor", sans-serif;
font-weight: 400;
font-style: normal;
}
/* left side contact end */

/* right side contact */
.contactBorder2 {
    width: 50%;
    padding: 15px 15px 15px 15px;
    background-color: var(--secondary-color);
}

#contactSection2 {
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: row;
    border: var(--bright-border);
    min-height: 475px;
}

#contactSection2 .contactSection2Content {
    padding: 0 60px 60px 60px;
}

#contactSection2 h1 {
    color: var(--white-headline);
    font-size: 40px;
    padding-top: 45px;
}

#contactSection2 h3, p {
    color: var(--white-text);  
}
/* right side contact end */


/* responsive */
@media only screen and (max-width: 900px) {
    .contactPage h1 {
        font-size: 30px;
    }
    #contactSection2 h1 {
        font-size: 30px;
    }
}

@media only screen and (max-width: 780px) {
    .contactPage {
        flex-direction: column;
        width: 100%;
    }
    .contactBorder1 {
        width: 100%;
    }

    .contactPage h1 {
        font-size: 40px;
    }

    .input {
        width: 100%;
    }

    textarea {
        min-width: 100%;
    }

    .contactBorder2 {
        width: 100%;
    }

    #contactSection2 h1 {
        font-size: 40px;
    }
}

@media only screen and (max-width: 460px) {
    .contactSection1Content {
    padding: 0 30px 60px 30px;
    }

    .contactPage h1 {
        font-size: 30px;
    }

    .input {
        width: 100%;
    }

    textarea {
        min-width: 100%;
    }

    #contactSection2 .contactSection2Content {
        padding: 0 30px 60px 30px;
    }

    #contactSection2 h1 {
        font-size: 30px;
    }
    #contactSection2 p {
        font-size: 15px;
    }  
}
/* responsive end */


</style>