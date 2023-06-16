<template>
    <main>
            <div>
                <!-- page about each project -->
                <div v-if="portfolioDetails" class="portfolio-item">
                        <!-- show image -->
                        <div v-if="portfolioDetails.detailimg">
                            <img :src="portfolioDetails.detailimg">
                        </div>

                        <!-- or show video -->
                        <div v-else="portfolioDetails.detailvid">
                            <video autoplay loop muted plays-inline :src="portfolioDetails.detailvid" type="video/mp4"></video>
                        </div>
                    
                    <div class="bright-frame">
                        <div class="bright-frame-inside content">
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
                            <h3>.01 Problemstilling jeg havde med denne {{ portfolioDetails.title }}</h3>
                            <p>{{ portfolioDetails.problem }}</p>
                        </div>
                        <div class="pt-5">
                            <!-- solutions to the problems -->
                            <h3>.01 Løsningen på problemet</h3>
                            <p>{{ portfolioDetails.solution }}</p>
                        </div>
                    </div>
                    
                    <div class="problem-solution-image right-image flex w-3/6 items-center">
                        <img :src="portfolioDetails.image1">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="portfolioDetails.product1 || portfolioDetails.product2 || portfolioDetails.video1 || portfolioDetails.video2">
        <div v="item in state" :key="item" class="portfolio-item">
            <div class="primary-frame">
                <div class="primary-frame-inside">   
                    <div class="product-demonstration flex flex-col gap-16">

                        <!-- show image -->
                        <div v-if="portfolioDetails.product1" class="product-demonstration-box flex w-3/6">
                            <img :src="portfolioDetails.product1">
                        </div>

                        <div v-if="portfolioDetails.product2" class="product-demonstration-box flex w-3/6">
                            <img :src="portfolioDetails.product2">
                        </div>

                        <!-- or show video -->
                        <div v-if="portfolioDetails.video1" class="product-demonstration-box flex w-3/6">
                            <video autoplay loop muted plays-inline :src="portfolioDetails.video1" type="video/mp4"></video>
                        </div>

                        <div v-if="portfolioDetails.video2" class="product-demonstration-box flex w-3/6">
                            <video autoplay loop muted plays-inline :src="portfolioDetails.video2" type="video/mp4"></video>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
        <div v="item in state" :key="item" class="portfolio-item">
            <div class="secondary-frame">
                <div class="secondary-frame-inside">
                    <div class="designProcess psi-flip flex flex-row"> 
                        <div class="problem-solution-image left-image flex w-3/6 items-center">
                            <img :src="portfolioDetails.image2">
                        </div>

                        <div class="problem-solution-box flex flex-col w-3/6">
                            <!-- problems i had -->
                            <div>
                                <h3>.02 Problemstilling jeg havde med denne {{ portfolioDetails.title }}</h3>
                                <p>{{ portfolioDetails.problem2 }}</p>
                            </div>
                            <div class="pt-5">
                                <!-- solutions to the problems -->
                                <h3>.02 Løsningen på problemet</h3>
                                <p>{{ portfolioDetails.solution2 }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="portfolioDetails.product3 || portfolioDetails.product4 || portfolioDetails.video3 || portfolioDetails.video4">
            <div v="item in state" :key="item" class="portfolio-item">
                <div class="primary-frame">
                    <div class="primary-frame-inside">   
                        <div class="product-demonstration flex flex-col">

                            <!-- show image -->
                            <div v-if="portfolioDetails.product3" class="product-demonstration-box flex w-3/6">
                                <img :src="portfolioDetails.product3">
                            </div>

                            <div v-if="portfolioDetails.product4" class="product-demonstration-box flex w-3/6">
                                <img :src="portfolioDetails.product4">
                            </div>

                            <!-- or show video -->
                            <div v-if="portfolioDetails.video3" class="product-demonstration-box flex w-3/6">
                                <video autoplay loop muted plays-inline :src="portfolioDetails.video3" type="video/mp4"></video>
                            </div>

                            <div v-if="portfolioDetails.video4" class="product-demonstration-box flex w-3/6">
                                <video autoplay loop muted plays-inline :src="portfolioDetails.video4" type="video/mp4"></video>
                            </div>

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

        <div v-if="portfolioDetails.problem3">
            <div v="item in state" :key="item" class="portfolio-item">
                <div class="secondary-frame">
                    <div class="secondary-frame-inside">
                        <div class="designProcess flex flex-row">
                            <div class="problem-solution-box flex flex-col w-3/6">
                                <!-- problems i had -->
                                <div>
                                    <h3>.03 Problemstilling jeg havde med denne {{ portfolioDetails.title }}</h3>
                                    <p>{{ portfolioDetails.problem3 }}</p>
                                </div>
                                <div class="pt-5">
                                    <!-- solutions to the problems -->
                                    <h3>.03 Løsningen på problemet</h3>
                                    <p>{{ portfolioDetails.solution3 }}</p>
                                </div>
                            </div>
                            
                            <div class="problem-solution-image right-image flex w-3/6 items-center">
                                <img :src="portfolioDetails.image3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v="item in state" :key="item" class="portfolio-item">
            <div class="bright-frame">
                <div class="bright-frame-inside flex flex-col">
                    <div class="flex flex-col">
                        <div class="next-project-title flex flex-col">
                            <h4>Se næste projekt</h4>
                            <h3>{{ portfolioDetails.title }}</h3>
                        </div>
                    </div>

                    <div>
                        <img :src="portfolioDetails.portfolioimage" alt="next-project-img">
                    </div>

                    <div class="flex flex-col">
                        <p class="pl-6 pb-2">eller</p>
                        <div class="pl-6 pb-6">
                            <RouterLink to='/'>
                                <!-- button to go back to last page -->
                                <button id="button1" @click="goBack()">&larr; Gå tilbage</button>
                            </RouterLink>
                            
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
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

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

/* styling the either image or video */
img {
    display: flex;
    margin: 0 auto;
    max-height: 600px;
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
    justify-content: space-between;
    padding: 24px 8% 100px 8%;
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

.right-image {
    padding-right: 8%;
}

.left-image {
    padding-left: 8%;
}

/* design process end */


/* product demonstration */
.product-demonstration {
    padding: 100px 8%;
}
.product-demonstration-box {
    margin: 0 auto;
    width: 100%;
}


/* next project */
.next-project-title{
    padding: 100px 8% 18px 8%;
}

.next-project-title h4 {
    font-size: 22px;
    font-family: "condor", sans-serif;
}

.next-project-title h3 {
    font-size: 40px;
    font-weight: bold;
    line-height: 1;
}

/* responsive */
@media only screen and (max-width: 950px) {
    .title {
        padding-top: 60px;
    }

    .p-content {
        flex-direction: column;
        padding-right: 8%;
        padding-bottom: 60px;
        padding-left: 8%;
    }

    .p-date {
        padding-bottom: 24px;
    }

    .designProcess{
    flex-direction: column;
    }

    .problem-solution-box {
        width: 100%;
        padding-top: 60px;
        padding-bottom: 20px;
    }

    .psi-flip {
        flex-direction: column-reverse;
    }

    .problem-solution-image {
        width: 100%;
        padding-bottom: 60px;
    }

    .primary-frame {
        width: 100%;
    }

    .secondary-frame {
        width: 100%;
    }

    .primary-frame-inside {
        min-height: auto;
    }

    .secondary-frame-inside {
        min-height: auto;
    }

    .product-demonstration {
        padding-top: 60px;
        padding-bottom: 60px;
    }
}
/* responsive end */



</style> 