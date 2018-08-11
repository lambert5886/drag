<template>
    <div class="input-wrapper">
        <p class="inputs" 
           v-for="(item, index) in list.items"
           :key="index">
            <Input  :value="item.name">
       
                 <Button :style="error"
                         slot="append"
                         @click="deleteItem(item)">删除</Button>
            </Input>
        </p>
        <Input v-model="val">
            <Button type="success"
                    slot="append"
                    @click="addItem">添加</Button>
        </Input>
        
    </div>
    
</template>

<script>
import { EventBus } from "@/tools/eventBus.js";
export default {
  props: {
    typemark: {
      type: String
    },
    list: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
        val: '',
        datas: {

        }
    };
  },
  mounted() {
      this.datas[this.typemark] = { index: 0,
                                    value: ''};
  },
  methods: {
      deleteItem(info){
          let _info = Object.assign({}, {type: this.typemark}, info);
          EventBus.$emit(this.typemark + '-delete-item', _info);
      },
      addItem(){
          let value = {};
              value.index = parseFloat(this.datas[this.typemark].index);
              value.name = this.val;
              console.log(this.datas)
          let _value = Object.assign({}, {type: this.typemark}, value);
          EventBus.$emit(this.typemark + '-add-item', _value);
              this.datas[this.typemark].index = value.index + 1;
              this.val = '';
      }
  },
  computed: {
      error(){
          return {'background': '#f16643', 'border-color': '#f16643', 'color': 'white'};
      }
  }
};
</script>

<style scoped>
.inputs{
    margin-bottom: 5px;
}
</style>


