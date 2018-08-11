<template>
    <div class="cont">
        <list 
            :typemark="test"
            :list = 'testlistData'></list>
            <br>
            <br>
            <br>
            <br>
        <list 
            :typemark="test1"
            :list = 'test1listData'></list>
    </div>
</template>
<script>
import list from './list';
import { EventBus } from "@/tools/eventBus.js";

export default {
    data(){
        return {
            test: 'test',
            test1: 'test1',
            testlistData: {
                items: []
            },
            test1listData: {
                items: []
            }
        }
    },
    mounted(){
        EventBus.$on('test-delete-item', this.deleteItemHandle);
        EventBus.$on('test-add-item', this.addItemHandle);
         EventBus.$on('test1-delete-item', this.deleteItemHandle);
        EventBus.$on('test1-add-item', this.addItemHandle);
    },
    methods: {
        deleteItemHandle(info){
            if(this[info.type + 'listData']){

            
            let _list = this[info.type + 'listData'].items;
            let newList =  _list.filter(function(item, index){
                console.log(item.index!==info.index)
                if(item.index !== info.index){
                    return true
                }
            });
          
            this[info.type + 'listData'] = Object.assign({}, {items: newList});
           }
        },
        addItemHandle(info){
           
            if(this[info.type + 'listData']){
                this[info.type + 'listData'].items.push(info);
            }
           
        },
        deleteItemHandle1(info){
            let _list = this.listData1.items;
            let newList =  _list.filter(function(item, index){
                console.log(item.index!==info.index)
                if(item.index !== info.index){
                    return true
                }
            });
            console.log('delete item ', info);
            console.log(newList)
            this.listData1 = Object.assign({}, {items: newList});
           
        },
        addItemHandle1(info){
            this.listData1.items.push(info);
        }
    },
    components: {
        list
    }
}
</script>

<style scoped>
    .cont{
        width: 300px;
        margin: auto;
    }
</style>


