<template>
   <r-image :list="images"/>
</template>

<script>
import { Card ,RImage } from "rainbow-mobile-core";
import Dialog from "../../../assets/dialog.jpg";

export default {
  components: {
    RImage,
    Card
  },
  data() {
    return {
     images:[
          // {"class":"image","src":Ly,'onClick':this.goto,'param':'/project/ly'},
     ]
    };
  },
  methods:{
      
  }
};
</script>
