<template>
    <div class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/detail">Detail</router-link>
        <router-link to="/">???</router-link>
    </div>

    <router-view :onerooms="onerooms"></router-view>

</template>

<script>
import onerooms from './post';

export default {
    name: 'App',
    data(){
        return {
            menus : ['home', 'detail', 'carar'],
            onerooms : onerooms,
        }
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
