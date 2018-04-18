<template>
    <div class="mine">
        <div class="mianTop">
            <div>
                <img :src="src">
            </div>
            <span>Broker's Name</span>
        </div>
        <div class="mainfooter">
            <div>
                <p class="mainNumber">7</p>
                <p class="mainContent">我的报价单</p>
            </div>
            <div>
                <p class="mainNumber">32</p>
                <p class="mainContent">我的保单</p>
            </div>
            <div>
                <p class="mainNumber">4</p>
                <p class="mainContent">我的理赔</p>
            </div>
            <div>
                <p class="mainNumber">6</p>
                <p class="mainContent">将续保保单</p>
            </div>
        </div>
    </div>
</template>
<script>
import profile from '../../../../assets/u758.png';
export default {
    props: {},
    data() {
        return {
            src: profile
        };
    }
};
</script>
<style>
.mine {
    width: 100%;
    height: 240px;
    background-color: rgba(255, 148, 20, 1);
}
.page {
    padding-top: 0px;
}
.mianTop {
    height: 150px;
    margin: 0px auto;
    text-align: center;
    padding-top: 25px;
    color: #fff;
}
.mianTop > div {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    margin: 0px auto;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mianTop > span {
    line-height: 50px;
}
.mainfooter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 13px;
    color: #FFFFFF
}
.mainfooter > div {
    height: 65px;
    width: 24%;
    background-image: url("../../../../assets/u748.png");
}
.mainNumber{
    font-size: 20px;
    height: 25px;
    line-height: 40px;
}
.mainContent{
    height: 40px;
    line-height: 45px;
}

</style>

