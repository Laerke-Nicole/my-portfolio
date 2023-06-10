<template>
    <main>
                <div>
                    <!-- button to go back to last page -->
                    <button id="button1" class="button1" @click="goBack()">&larr; Gå tilbage</button>

                    <!-- page about each project -->
                    <div v-if="portfolioDetails" class="portfolio-item">
                            <!-- show image -->
                            <div v-if="portfolioDetails.detail">
                                <img :src="portfolioDetails.detail">
                            </div>

                            <!-- or show video -->
                            <div v-else="portfolioDetails.video">
                                <video autoplay loop muted plays-inline :src="portfolioDetails.video" type="video/mp4"></video>
                            </div>
                        
                        <div class="bright-frame">
                            <div class="bright-frame-inside">
                                <!-- further short information about project -->
                                <h2 class="title">{{ portfolioDetails.title }}</h2>

                                <hr>

                                <div class="p-content">
                                    <div>
                                        <h4 class="p-date">{{ portfolioDetails.date }}</h4>
                                    </div>
                                    
                                    <div>
                                        <h4>Beskrivelse</h4>
                                        <p class="pr-6">{{ portfolioDetails.description }} <br>Læs nedenfor om problemer og løsninger jeg fandt.</p>
                                        <h4 class="h4Buttom">Status</h4>
                                        <p>{{ portfolioDetails.status }}</p>
                                    </div>
                                    
                                    <div>
                                        <h4>Kategori</h4>
                                        <p :class="portfolioDetails.category">{{ portfolioDetails.category }}</p>

                                        <h4 class="h4Buttom">Tech</h4>
                                        <p>{{ portfolioDetails.tech }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div v-else>...loading</div>
            
                </div>
        
        <!-- information about my design process -->
        <div v="item in state" :key="item" class="portfolio-item">
            <div class="secondary-frame">
                <div class="secondary-frame-inside">
                    <div class="designProcess flex flex-row">
                        <div class="problem-solution-box flex flex-col w-3/6">
                            <!-- problems i had -->
                            <div>
                                <h3>.01 Problemer jeg havde med denne {{ portfolioDetails.title }}</h3>
                                <p>{{ portfolioDetails.problem }}</p>
                            </div>
                            <div class="pt-5">
                                <!-- solutions to the problems -->
                                <h3>.01 Løsningen på problemerne</h3>
                                <p>{{ portfolioDetails.solution }}</p>
                            </div>
                        </div>
                        
                        <div class="flex w-3/6">
                            <img :src="portfolioDetails.image">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v="item in state" :key="item" class="portfolio-item">
            <div class="primary-frame">
                <div class="primary-frame-inside">   
                    <div class="product-demonstration flex flex-col">
                        <div class="product-demonstration-box flex w-3/6">
                            <img :src="portfolioDetails.image">
                        </div>
                        <div class="product-demonstration-box flex w-3/6">
                            <img :src="portfolioDetails.image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            <div v="item in state" :key="item" class="portfolio-item">
                <div class="secondary-frame">
                    <div class="secondary-frame-inside">
                        <div class="designProcess flex flex-row"> 
                            <div class="flex w-3/6">
                                <img :src="portfolioDetails.image">
                            </div>

                            <div class="problem-solution-box flex flex-col w-3/6">
                                <!-- problems i had -->
                                <div>
                                    <h3>.02 Problemer jeg havde med denne {{ portfolioDetails.title }}</h3>
                                    <p>{{ portfolioDetails.problem2 }}</p>
                                </div>
                                <div class="pt-5">
                                    <!-- solutions to the problems -->
                                    <h3>.02 Løsningen på problemerne</h3>
                                    <p>{{ portfolioDetails.solution2 }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v="item in state" :key="item" class="portfolio-item">
                <div class="primary-frame">
                    <div class="primary-frame-inside">   
                        <div class="product-demonstration flex flex-col">
                            <div class="product-demonstration-box flex w-3/6">
                                <img :src="portfolioDetails.image">
                            </div>
                            <div class="product-demonstration-box flex w-3/6">
                                <img :src="portfolioDetails.image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

            <div v="item in state" :key="item" class="portfolio-item">
                <div class="secondary-frame">
                    <div class="secondary-frame-inside">
                        <div class="designProcess flex flex-row">
                            <div class="problem-solution-box flex flex-col w-3/6">
                                <!-- problems i had -->
                                <div>
                                    <h3>.03 Problemer jeg havde med denne {{ portfolioDetails.title }}</h3>
                                    <p>{{ portfolioDetails.problem3 }}</p>
                                </div>
                                <div class="pt-5">
                                    <!-- solutions to the problems -->
                                    <h3>.03 Løsningen på problemerne</h3>
                                    <p>{{ portfolioDetails.solution3 }}</p>
                                </div>
                            </div>
                            
                            <div class="flex w-3/6">
                                <img :src="portfolioDetails.image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v="item in state" :key="item" class="portfolio-item">
                <div class="bright-frame">
                    <div class="bright-frame-inside">
                        <div>
                            <div>
                                <h4>Næste projekt</h4>
                                <h3>{{ portfolioDetails.title }}</h3>
                            </div>

                            <div>
                                <button>Se alle projekter</button>
                            </div>
                        </div>

                        <div>
                            <img :src="portfolioDetails.image" alt="next-project-img">
                        </div>

                        <div>
                            <!-- arrow -->
                            <!-- <img src="" alt=""> --> 
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
.button1 {
    margin: 10px;
    position: fixed;
}

/* styling the either image or video */
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
    width: 100%;
    height: auto;
    overflow: hidden;
    cursor: pointer;
}
/* styling the either image or video end */


/* further short information about project */
.title {
    font-size: 28px;
    font-family: rift, sans-serif;
    font-weight: bold; 
    color: var(--black-headline);
    padding: 100px 8% 12px 8%;
}

hr {
    display: flex;
    display: block;
    border-width: 0;
    height: 1px;
    width: 84%;
    margin: 0 auto;
    background-color: #8a8a8a;
}

.p-content {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    justify-content: space-around;
    padding: 24px 0 100px 0;
}

.p-content h3 {
    font-weight: bold; 
    font-size: 20px;
    color: var(--black-headline);
}

.p-content h4 {
    font-size: 20px;
    font-weight: bold;
    color: var(--black-headline);
}

.h4Buttom {
    padding-top: 12px;
}

/* further short information about project end */


/* design process */
.designProcess{
    overflow: hidden;
}

/* problems and solution 1 */
.problem-solution-box {
    display: flex;
    flex-direction: column;
    padding: 100px 8%;
}

.problem-solution-box h3 {
    color: var(--white-headline);
    padding-bottom: 6px;
    font-style: normal;
    font-weight: bold; 
    font-size: 25px;
}

.problem-solution-box p {
    color: var(--white-text);
    padding-bottom: 16px;
}

/* design process end */


/* product demonstration */
.product-demonstration {
    padding: 100px 8%;
    gap: 200px;
}
.product-demonstration-box {
    margin: 0 auto;
    width: 100%;
}

/* responsive */
@media only screen and (max-width: 1030px) {
    #primary-frame-inside {
        min-height: 900px;
    }

    #secondary-frame-inside {
        min-height: 900px;
    }
}

@media only screen and (max-width: 970px) {
    #primary-frame-inside {
        min-height: 950px;
    }

    #secondary-frame-inside {
        min-height: 950px;
    }
}

@media only screen and (max-width: 950px) {
    video {
        margin: 0;
        padding-left: 8%;
    }

    .p-content {
        flex-direction: column;
        padding-right: 8%;
        padding-left: 8%;
    }

    .p-date {
        padding-bottom: 24px;
    }

    .designProcess{
    flex-direction: column;
    }

    .primary-frame {
        width: 100%;
    }

    .secondary-frame {
        width: 100%;
    }

    #primary-frame-inside {
        min-height: auto;
    }

    #secondary-frame-inside {
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
}
/* responsive end */



</style> 