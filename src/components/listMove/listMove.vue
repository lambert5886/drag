<template>
    <div class="list-wrapper">
        <input type="text" v-model="item.text">
        <button @click="addData">添加</button>
        <!-- <ul class="lists" id="lists" >
            <li v-for="(item, index) in listArray"
                :key="index">
                {{item.text}}
            </li>
        </ul> -->
        <draggable v-model="listArray" :options="{animation: 300,draggable:'.item'}"
                     @end="onEnd">
            <div v-for="element in listArray" :key="element.index" class="item">
                {{element.text}}
            </div>
            <button slot="footer" @click="addData">Add</button>
        </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      item: {}
    };
  },
  mounted() {

  },
  methods: {
    addData() {
      this.$store.dispatch("add_item", this.item);
    },
    onEnd(evt){
        console.log( 'from event >>> ', evt)
    }

  },
  computed: {
    listArray: {
        get(){
            return this.$store.state.lists.lists;
        },
        set(value) {
            this.$store.dispatch('updateList', value)
        }
    }
  },
  components: {
    draggable
  }
};
</script>
<style scoped>
.list-wrapper {
  width: 400px;
  margin: auto;
  border: 1px solid #ccc;
  font-size: 24px;
}
.lists {
  width: 100%;
}
.lists li {
  list-style-type: none;
  margin-bottom: 5px;
}
.lists li:hover {
  background: skyblue;
}
</style>


