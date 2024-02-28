<template>
    <div class="discount">
        <h4>지금 결제하면 20% 할인</h4>
        <p>{{ onerooms[selectedNum].content }}</p>
        <button @click="$emit('closeModal', onerooms[selectedNum].id)">모달창 끄기</button>
    </div>
</template>

<script>
    export default {
        name : 'DiscountModal',
        props : {
            onerooms : Array,
            selectedNum : Number
        } 
    }
</script>

<style>
    .discount {
        background-color: white;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
    }
</style>