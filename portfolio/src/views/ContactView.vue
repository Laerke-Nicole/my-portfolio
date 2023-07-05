<template>
    <main class="contactPage">

        <!-- left contact -->
        <div class="bright-frame">
            <div class="bright-frame-inside">
                <div class="bright-frame-insideContent">
                    <h2>Kom og sig hej</h2>
                    <div class="contactInput">
                        <form>
                            <input class="input" name="name" placeholder="Fulde navn" type="name" id="name" required>
                            <input class="input" name="email" placeholder="E-mail" type="email" id="email" required>
                                <textarea name="text" placeholder="Hvordan kan jeg hjælpe dig?" type="text" id="message" required></textarea>
                                <br>

                            <!-- <RouterLink to="/"> -->
                            <button id="button1" type="submit">Send</button>
                            <!-- </RouterLink> -->
                        </form>
                        

                        
                        <input class="input" name="name" placeholder="Fulde navn" type="name">
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
        <div class="secondary-frame">
            <div class="secondary-frame-inside">
                <div class="secondary-frame-insideContent">
                    <h2>Arbejdshenvendelser</h2>
                    <p>Kontakt mig venligst på</p>
                    <p>laenie01@easv365.dk</p>
                    <p class="pt-2 pb-2">eller</p>
                    <a href="https://www.linkedin.com/in/l%C3%A6rke-nicole-nielsen/" target="_blank"><p class="linkedin-link underline">Linkedin</p></a>
                    
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
/* contact container */
.contactPage {
    display: flex;
    padding-top: 96px;
}

.bright-frame {
    width: 50%;
    padding: 15px 15px 15px 15px;
    background-color: var(--white-headline);
}
/* contact container end */


/* left side contact */
.bright-frame-inside {
    background-color: var(--white-headline);
    border: var(--dark-border);
    min-height: 475px;
}

.bright-frame-insideContent {
    display: flex;
    flex-direction: column;
    padding: 60px 8% 60px 8%;
}

.bright-frame-insideContent h2 {
    color: var(--secondary-color);
    font-size: 40px;
    font-style: normal;
    font-weight: bold; 
}

.input {
    display: flex;
    flex-direction: column;
    width: 100%;
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
    width: 100%;
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
.secondary-frame {
    width: 50%;
    padding: 15px 15px 15px 15px;
    background-color: var(--secondary-color);
}

.secondary-frame-inside {
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: row;
    border: var(--bright-border);
    min-height: 475px;
}

.secondary-frame-inside .secondary-frame-insideContent {
    padding: 60px 8% 60px 8%;
}

.secondary-frame-inside h2 {
    color: var(--white-headline);
    font-size: 40px;
    font-style: normal;
    font-weight: bold; 
}

#secondary-frame-inside h3, p {
    color: var(--white-text);  
}

.linkedin-link:hover {
    color: var(--primary-hover);
}
/* right side contact end */


/* responsive */
@media only screen and (max-width: 950px) {
    .contactPage {
        flex-direction: column;
        width: 100%;
    }
    .bright-frame {
        width: 100%;
    }

    .contactPage h2 {
        font-size: 40px;
    }

    .input {
        width: 100%;
    }

    textarea {
        min-width: 100%;
    }

    .secondary-frame {
        width: 100%;
    }

    .secondary-frame-inside h2 {
        font-size: 40px;
    }
}

@media only screen and (max-width: 460px) {
    .bright-frame-insideContent {
    padding: 60px 30px 60px 30px;
    }

    .contactPage h2 {
        font-size: 30px;
    }

    .input {
        width: 100%;
    }

    textarea {
        min-width: 100%;
    }

    .secondary-frame-inside .secondary-frame-insideContent {
        padding: 60px 30px 60px 30px;
    }

    .secondary-frame-inside h2 {
        font-size: 30px;
    }
    .secondary-frame-inside p {
        font-size: 15px;
    }  
}
/* responsive end */


</style>