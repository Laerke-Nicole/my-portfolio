<template>
    <main>
        <div class="portfolioDetailBorder">
            <div class="portfolioDetailContainer">
                <div>
                    <!-- button to go back to last page -->
                    <button id="button1" class="button1" @click="goBack()">&larr; Gå tilbage</button>

                    <!-- page about each project -->
                    <div v-if="portfolioDetails" class="portfolio-item">
                        <div class="p-detail">
                            <!-- show image -->
                            <div v-if="portfolioDetails.detail">
                                <img :src="portfolioDetails.detail">
                            </div>

                            <!-- or show video -->
                            <div v-else="portfolioDetails.video">
                                <video controls :src="portfolioDetails.video"></video>
                                <p class="watchVid">&#8593;Klik på videoen for at se hele mit arbejde.</p>
                            </div>
                        </div>
                        
                        <!-- further short information about project -->
                        <div class="p-content">
                            <div>
                                <h1>{{ portfolioDetails.title }}</h1>
                                <p class="p-date">{{ portfolioDetails.date }}</p>
                            </div>
                            
                            <div>
                                <h2>Beskrivelse</h2>
                                <p>{{ portfolioDetails.description }}</p>
                                <h2 class="h2Buttom">Status</h2>
                                <p>{{ portfolioDetails.status }}</p>
                            </div>
                            
                            <div>
                                <h2>Kategori</h2>
                                <p :class="portfolioDetails.category">{{ portfolioDetails.category }}</p>

                                <h2 class="h2Buttom">Tech</h2>
                                <p>{{ portfolioDetails.tech }}</p>
                            </div>
                        </div>
                    </div>

                    <div v-else>...loading</div>
                    
                </div>
            </div>
        </div>
        
        <!-- information about my design process -->
        <div v="item in state" :key="item" class="portfolio-item">
            <div class="designProcess">
                <!-- problems i had -->
                <div class="infoBorder1">
                    <div id="infoSection1">
                        <div class="infoSection1Content">
                            <h1>Problemer jeg havde</h1>
                            <p>{{ portfolioDetails.problem }}</p>
                            <p>{{ portfolioDetails.problem2 }}</p>
                            <p>{{ portfolioDetails.problem3 }}</p>
                        </div>
                    </div>
                </div>
                
                <!-- solutions to the problems -->
                <div class="infoBorder2">
                    <div id="infoSection2">
                        <div class="infoSection2Content">
                            <h1>Løsningen på problemerne</h1>
                            <p>{{ portfolioDetails.solution }}</p>
                            <p>{{ portfolioDetails.solution2 }}</p>
                            <p>{{ portfolioDetails.solution3 }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>  
</template>

<script setup>
import { toRefs, computed } from 'vue'
import { RouterLink } from 'vue-router';
import portfoliodb from '../modules/portfoliodb'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    router.go(-1)
}

const { state } = portfoliodb()

const props = defineProps({
    id: String
})

const { id } = toRefs(props)

const portfolioDetails = computed(() => {
    return state.value.find(item => item.id == id.value)
})

</script>

<style scoped>
main {
    padding-top: 96px;
}

/* first section styling of container */
.portfolioDetailBorder {
    padding: 15px;
    background-color: var(--white-headline);
}

.portfolioDetailContainer {
    border: var(--dark-border);
    background-color: var(--white-headline);
}

.button1 {
    margin: 10px;
    position: fixed;
}

/* styling the either image or video */
.p-detail {
    padding: 70px 0 20px 0;
}

img {
    display: flex;
    margin: 0 auto;
    max-height: 300px;
    max-inline-size: 100%;
    block-size: auto;
    object-fit: contain;
    overflow: hidden;
}

video {
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    height: auto;
    overflow: hidden;
    cursor: pointer;
}
/* styling the either image or video end */

.watchVid {
    display: flex;
    justify-content: center;
    align-content: center;
    padding-top: 12px;
}


/* further short information about project */
.p-content {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    justify-content: space-around;
    padding: 45px 0 70px 0;
}

.p-content h2 {
    font-size: 20px;
    font-weight: bold;
    color: var(--black-headline);
}

.h2Buttom {
    padding-top: 12px;
}

/* further short information about project end */


/* design process */
.designProcess{
    display: flex;
    flex-direction: row;
    overflow: hidden;
}

/* problem */
.infoBorder1 {
    width: 50%;
    padding: 15px;
    background-color: var(--primary-color);
}

#infoSection1 {
    background-color: var(--primary-color);
    border: var(--bright-border);
    min-height: 750px;
}

.infoSection1Content {
    display: flex;
    flex-direction: column;
    padding: 45px 8% 60px 8%;
}

.infoSection1Content h1 {
    color: var(--white-headline);
    padding-bottom: 12px;
}

.infoSection1Content p {
    color: var(--white-text);
    padding-bottom: 16px;
}


/* solution */
.infoBorder2 {
    width: 50%;
    padding: 15px;
    background-color: var(--secondary-color);
}

#infoSection2 {
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: row;
    border: var(--bright-border);
    min-height: 750px;
}

#infoSection2 .infoSection2Content {
    padding: 45px 8% 60px 8%;
}

.infoSection2Content h1 {
    color: var(--white-headline);
    padding-bottom: 12px;
}

.infoSection2Content p {
    color: var(--white-text);
    padding-bottom: 16px;
}
/* design process end */


/* responsive */
@media only screen and (max-width: 1030px) {
    #infoSection1 {
        min-height: 900px;
    }

    #infoSection2 {
        min-height: 900px;
    }
}

@media only screen and (max-width: 970px) {
    #infoSection1 {
        min-height: 950px;
    }

    #infoSection2 {
        min-height: 950px;
    }
}

@media only screen and (max-width: 950px) {
    .p-content {
        flex-direction: column;
        padding-right: 45px;
        padding-left: 70px;
    }

    .p-date {
        padding-bottom: 24px;
    }

    .designProcess{
    flex-direction: column;
    }

    .infoBorder1 {
        width: 100%;
    }

    .infoBorder2 {
        width: 100%;
    }

    #infoSection1 {
        min-height: auto;
    }

    #infoSection2 {
        min-height: auto;
    }
}

@media only screen and (max-width: 800px) {
    video {
        max-width: 400px;
    }
}

@media only screen and (max-width: 500px) {
    video {
        max-width: 300px;
    }

    .p-detail {
        padding-bottom: 0;
    }
}
/* responsive end */



</style> 