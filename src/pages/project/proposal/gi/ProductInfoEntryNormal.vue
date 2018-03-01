<<template>
   <page>
       <top :title="$t('project.jtyw')" :showBack="true" />
       <card>
           <product-top></product-top>
       </card>
       <card>
           <insurance-duration-currency></insurance-duration-currency>
       </card>
       <card>
           <plan-selection></plan-selection>
       </card>
       <card>
           <proposal-copies></proposal-copies>
       </card>
       <tab-bar>
           <proposal-confirm></proposal-confirm>
       </tab-bar>

   </page>

  
</template>

<<script>
import {Page,Card,RImage,RButton,Swiper,RSwitch,DateTime,Tab,SwiperItem,RTable,List,Selector,TabBar,Cell} from 'rainbow-mobile-core';
import Top from "../../../../components/Top";
import Bottom from "../../../../components/Bottom";
import ProductTop from "../../components/ProductTop";
import InsuranceDurationCurrency from "../../components/InsuranceDurationCurrency";
import PlanSelection from "../../components/PlanSelection";
import ProposalCopies from "../../components/ProposalCopies";
import ProposalConfirm from "../../components/ProposalConfirm";
export default {
    components:{
        Page,
        Card,
        TabBar,
        Top,
        Bottom,
        ProductTop,
        InsuranceDurationCurrency,
        PlanSelection,
        ProposalCopies,
        ProposalConfirm
    }
  
}
</script>

<<style>

</style>
