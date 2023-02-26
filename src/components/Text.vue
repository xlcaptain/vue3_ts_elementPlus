<template>
  <div class="center">
    <div class="content">
      <input type="text" name="" id="">
    </div>
    <div class="textarea-input-left">
      <p>例子：</p>
      <el-input
      
        v-model="input"
        rows="10"
        type="textarea"
        placeholder="Your message starts with…"
        show-word-limit
        maxlength="200"
      />
      <el-button id="button-left" class="btn slide"  @click="print" >清空</el-button>
      <el-button id="button-right" class="btn slide"  @click="print" >开始</el-button>
      
    </div>
    <el-input
      v-model="output"
      :autosize="{ minRows: 2, maxRows: 10 }"
      type="textarea"
      placeholder="Your message starts with…"
      class="textarea-output-right"
      show-word-limit
      readonly
    />
  </div>


    




</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
const output = ref('在我自己，本以为现在是已经并非一个切迫而不能已于言的人了，但或者也还未能忘怀于当日自己的寂寞的悲哀罢，所以有时候仍不免呐喊几声，聊以慰藉那在寂寞里奔驰的猛士，使他不惮于前驱。至于我的喊声是勇猛或是悲哀，是可憎或是可笑，那倒是不暇顾及的;但既然是呐喊，则当然须听将令的了，所以我往往不恤用了曲笔，在《药》的瑜儿的坟上平空添上一个花环，在《明天》里也不叙单四嫂子竟没有做到看见儿子的梦，因为那时的主将是不主张消极的。至于自己，却也并不愿将自以为苦的寂寞，再来传染给也如我那年青时候似的正做着好梦的青年')

const print = ()=>{
  console.log('你好')
}

</script>

<style>
.content{
  width: 20%;
  display: inline-block;
}
#button-right{
  margin-left: 68%;
}

.textarea-input-left,.textarea-output-right{
  vertical-align:top;
  width: 30%;
  padding-left: 2%;
  display: inline-block;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  float: none;
  z-index: auto;
  height: 45%;
  position: static;
  cursor: default;
  opacity: 0.77;
  margin: 0;
  padding: 10px 20px;
  overflow: visible;
  border: 1px solid #b7b7b7;
  -webkit-border-radius: 3px; 
  border-radius: 3px;
  font: normal 16px/normal "Times New Roman", Times, serif;
  color: #b3e19d;
  -o-text-overflow: clip;
  text-overflow: clip;
  background: rgba(252,252,252,1);
  -webkit-box-shadow: 0 0 6px 2px rgba(0,0,0,0.5) inset, 0 0 2px 2px rgba(0,0,0,0.5) ;
  box-shadow: 0 0 6px 2px rgba(0,0,0,0.5) inset, 0 0 2px 2px rgba(0,0,0,0.5) ;
  text-shadow: 1px 1px 0 rgba(255,255,255,0.66) ;
  -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -webkit-transform: none;
  transform: none;
  -webkit-transform-origin: 50% 50% 0;
  transform-origin: 50% 50% 0;
  text-align:left;
}
.textarea-output-right{
  margin-left: 10%;
}

.btn {
    text-align: center;
    width: 16%;
    height: 40px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    user-select: none;
    letter-spacing: 1rem;
    text-indent: 1rem;
    border-radius: 20px;
    box-sizing: border-box;
    margin-top: 10px;
}

.slide {
    border: 2px solid #b3e19d;
    color: #b3e19d;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: .5s;
}

.slide::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 0;
    height: 100%;
    left: 0;
    background-color: #b3e19d;
    transition: ease-in-out .5s;
}

.slide:hover::before {
    width: 100%;
}









</style>

