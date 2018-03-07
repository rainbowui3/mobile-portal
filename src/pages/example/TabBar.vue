<template>
  <page>
       <top :title="$t('component.tabbar')" :showBack="true"/>
        <r-body>
       <div class='footer'>
         <tab-bar :tabItems="tabItem1" />
       </div>

       <div class='footer'>
         <tab-bar :tabItems="tabItems" type="image"/>
       </div>

       <div class='footer'>
         <tab-bar :tabItems="tabItem2" type="icon"/>
       </div>

        <tab-bar>
              <cell type='row' :vertical="true">
                  <cell>
                      <box>
                          <r-button link='BACK'>{{$t('common.back') }}</r-button>
                      </box>  
                  </cell> 
              </cell>  
        </tab-bar>
        </r-body>
  </page>
</template>

<script>
import { Page, RHeader, TabBar, Cell, Box, RButton ,RBody} from "rainbow-mobile-core";
import Bottom from "../../components/Bottom";
import Top from "../../components/Top";
import home_on from "../../assets/home_on.svg";
import home_off from "../../assets/home_off.svg";
import component_off from "../../assets/component_off.svg";
import component_on from "../../assets/component_on.svg";
import donation_off from "../../assets/donation_off.svg";
import donation_on from "../../assets/donation_on.svg";
import example_off from "../../assets/example_off.svg";
import example_on from "../../assets/example_on.svg";
export default {
  components: {
    Bottom,
    Top,
    Page,
    RHeader,
    TabBar,
    Cell,
    Box,
    RButton,
    RBody
  },
  computed: {
    tabItems() {
      return [
        {
          icon: home_on,
          selected: true,
          showdot: false,
          link: "/",
          badge: "",
          text: this.$t("common.home")
        },
        {
          icon: component_off,
          selected: false,
          showdot: true,
          link: "/component/core",
          badge: "",
          text: this.$t("component.component")
        },
        {
          icon: example_off,
          selected: false,
          showdot: false,
          link: "/demo",
          badge: "2",
          text: this.$t("home.exapmle")
        },
        {
          icon: donation_off,
          selected: false,
          showdot: false,
          link: "/donate",
          badge: "",
          text: this.$t("home.donate")
        }
      ];
    },
    tabItem1() {
      return [
        {
          selected: true,
          showdot: false,
          link: "/",
          badge: "",
          text: this.$t("common.home")
        },
        {
          selected: false,
          showdot: true,
          link: "/component/core",
          badge: "",
          text: this.$t("component.component")
        },
        {
          selected: false,
          showdot: false,
          link: "/demo",
          badge: "2",
          text: this.$t("home.exapmle")
        },
        {
          selected: false,
          showdot: false,
          link: "/donate",
          badge: "",
          text: this.$t("home.donate")
        }
      ];
    },
    tabItem2() {
      return [
        {
          icon: "fa fa-home",
          selected: false,
          showdot: false,
          link: "/",
          badge: "",
          text: this.$t("common.home")
        },
        {
          icon: "fa fa-gears",
          selected: true,
          showdot: true,
          link: "/component/core",
          badge: "",
          text: this.$t("component.component")
        },
        {
          icon: "fa fa-automobile",
          selected: false,
          showdot: false,
          link: "/demo",
          badge: "2",
          text: this.$t("home.exapmle")
        },
        {
          icon: "fa fa-heart",
          selected: false,
          showdot: false,
          link: "/donate",
          badge: "",
          text: this.$t("home.donate")
        }
      ];
    }
  }
};
</script>
<style>
.footer .weui-tabbar {
  position: relative !important;
  margin-top: 15px;
}
</style>
