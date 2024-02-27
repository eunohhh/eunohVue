<template>
    <div class="menu">
        <a v-for="menu in menus" :key="menu">{{ menu }}</a>
    </div>
    <div v-for="(oneroom, i) in onerooms" :key="oneroom">
        <img :src="oneroom.image" class="room-img">
        <h4>{{ oneroom.title }}</h4>
        <p>{{ oneroom.price }}원</p>
        <button @click="increase(i)">허위매물신고</button>
        <span>신고수 : {{ reports[i] }}</span>
        <button @click="setIsModal(i)">상세페이지보기</button>
    </div>

    <Transition name="fade">
        <div class="black-bg" v-if="isModal === true">
            <div class="white-bg">
                <h4>상세페이지</h4>
                <p>{{ onerooms[selectedNum].content }}</p>
                <input @input="month = $event.target.value">
                <input v-model="month">
                <p>{{ month }}개월 선택함 : {{ onerooms[selectedNum].price * month }}원</p>
                <Discount :onerooms="onerooms" :selectedNum="selectedNum" @closeModal="isModal=false; selectedNum=$event "/>
            </div>
        </div>
    </Transition>

</template>

<script>
import onerooms from './post';
import Discount from './discountModal.vue';

export default {
    name: 'App',
    data(){
        return {
            reports : [0, 0, 0],
            menus: ['Home', 'Products', 'About'],
            products : ['역삼동', '천호동', '마포구'],
            prices : [50, 60, 70],
            images : ['./assets/room0.jpg', './assets/room1.jpg', './assets/room2.jpg'],
            isModal : false,
            onerooms : onerooms,
            selectedNum : null,
            month : 0
        }
    },
    components: {
        Discount,
    },
    methods : {
        increase(i){
            this.reports[i]++;
        },
        setIsModal(i){
            this.isModal = !this.isModal;
            this.selectedNum = i;
        }
    },
    watch : {
        month(data, beforeData){
            if(data > 12){
                this.month = 12;
                alert('하지마', beforeData)
            }
        }
    }
}
</script>

<style>
    #app {
        position: relative;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body {
        margin : 0;
    }
    div {
        box-sizing: border-box;
    }
    .menu {
        background : darkslateblue;
        padding : 15px;
        border-radius : 5px;
    }
    .menu a {
        color : white;
        padding : 10px;
    }
    .room-img{
        width: 100%;
        margin-top: 40px;
    }
    .black-bg {
        width: 100%; 
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: fixed; 
        padding: 20px;
        top: 0;
    }
    .white-bg {
        width: 100%; background: white;
        border-radius: 8px;
        padding: 20px;
    }
    .fade-enter-from {
        transform: translateY(-1000px);
    }
    .fade-enter-active {
        transition: all 1s linear;
    }
    .fade-enter-to {
        transform: translateY(0px);
    }
    .fade-leave-from {
        opacity: 1;
    }
    .fade-leave-active {
        transition: all 1s linear;
    }
    .fade-leave-to {
        opacity: 0;
    }
    
</style>
