<template>
  <div class="roll-dice-page">
    <div>备选:{{ bakHeroes }}</div>
    <div class="content">
      <div class="hero-list">
        <div v-for="item in leftHeroes" :key="item.id">{{ item.name }}</div>
        <button @click="changeHero(item)">random</button>
      </div>
      <div class="hero-list">
        <div v-for="item in rightHeroes" :key="item.id">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import allHero from './heroes.json'; // 根据实际路径调整

export default {
  data() {
    return {
      playerNum:10,
      selectedHeroes:[],
      bakHeroes:[]
    };
  },
  computed:{
    leftHeroes(){
      return this.selectedHeroes.slice(0,5)
    },
    rightHeroes(){
      return this.selectedHeroes.slice(5,10)
    },
  },
  mounted(){
    this.getAllHero()
  },
  methods: {
    getAllHero(){
      let count = 0;
      do {
        let hero = this.getHero()
        this.selectedHeroes.push(hero)
        count++
      } while (count<this.playerNum);
    },
    getHero() {
      const randomIndex = Math.floor(Math.random() * allHero.length);
      let _hero = allHero[randomIndex]

      // 避免重复
      if(!this.selectedHeroes.some(item=>item.id === _hero.id)){
        return _hero;
      }else{
        return this.getHero()
      }
    },
    changeHero(curHero){
      this.bakHeroes.push(curHero);
      const index = this.selectedHeroes.findIndex(item=>item.id === curHero.id)
      this.selectedHeroes.splice(index,1)
    }
  },
};
</script>

<style scoped>
.content{
  width: 100%;
  display: flex;
}
.hero-list{
  flex:1
}
</style>