import Vue from 'vue';
import Router from 'vue-router';
const Home = r => require.ensure([], () => r(require('@/pages/Home')), 'Home');
const ComponentCore = r => require.ensure([], () => r(require('@/pages/component/Core')), 'Core');
const ComponentAdvanced = r => require.ensure([], () => r(require('@/pages/component/Advanced')), 'Advanced');
const ComponentBusiness = r => require.ensure([], () => r(require('@/pages/component/Business')), 'Business');
const Demo = r => require.ensure([], () => r(require('@/pages/Demo')), 'Demo');
const Donate = r => require.ensure([], () => r(require('@/pages/Donate')), 'Donate');
const Card = r => require.ensure([], () => r(require('@/pages/example/Card')), 'Card');
const DateTime = r => require.ensure([], () => r(require('@/pages/example/DateTime')), 'DateTime');
const Selector = r => require.ensure([], () => r(require('@/pages/example/Selector')), 'Selector');
const Picker = r => require.ensure([], () => r(require('@/pages/example/Picker')), 'Picker');
const Tab = r => require.ensure([], () => r(require('@/pages/example/Tab')), 'Tab');
const Table = r => require.ensure([], () => r(require('@/pages/example/Table')), 'Table');
const Preview = r => require.ensure([], () => r(require('@/pages/example/Preview')), 'Preview');
const List = r => require.ensure([], () => r(require('@/pages/example/List')), 'List');
const Cell = r => require.ensure([], () => r(require('@/pages/example/Cell')), 'Cell');
const Button = r => require.ensure([], () => r(require('@/pages/example/Button')), 'Button');
const Swiper = r => require.ensure([], () => r(require('@/pages/example/Swiper')), 'Swiper');
const Ly = r => require.ensure([], () => r(require('@/pages/project/Ly')), 'Ly');
const Auto = r => require.ensure([], () => r(require('@/pages/component/Auto')), 'Auto');
const AH = r => require.ensure([], () => r(require('@/pages/component/AH')), 'AH');
const GI = r => require.ensure([], () => r(require('@/pages/component/GI')), 'GI');
const Switch = r => require.ensure([], () => r(require('@/pages/example/Switch')), 'Switch');
const Input = r => require.ensure([], () => r(require('@/pages/example/Input')), 'Input');
const Textarea = r => require.ensure([], () => r(require('@/pages/example/Textarea')), 'Textarea');
const Actionsheet = r => require.ensure([], () => r(require('@/pages/example/Actionsheet')), 'Actionsheet');
const Panel = r => require.ensure([], () => r(require('@/pages/example/Panel')), 'Panel');
const Row = r => require.ensure([], () => r(require('@/pages/example/Row')), 'Row');
const Divider = r => require.ensure([], () => r(require('@/pages/example/Divider')), 'Divider');
const Grid = r => require.ensure([], () => r(require('@/pages/example/Grid')), 'Grid');
const Header = r => require.ensure([], () => r(require('@/pages/example/Header')), 'Header');
const Icon = r => require.ensure([], () => r(require('@/pages/example/Icon')), 'Icon');
const Image = r => require.ensure([], () => r(require('@/pages/example/Image')), 'Image');
const Page = r => require.ensure([], () => r(require('@/pages/example/Page')), 'Page');
const Toast = r => require.ensure([], () => r(require('@/pages/example/Toast')), 'Toast');
const TabBar = r => require.ensure([], () => r(require('@/pages/example/TabBar')), 'TabBar');
const Popup = r => require.ensure([], () => r(require('@/pages/example/Popup')), 'Popup');
const Step = r => require.ensure([], () => r(require('@/pages/example/Step')), 'Step');
const Checker = r => require.ensure([], () => r(require('@/pages/example/Checker')), 'Checker');
const Spinner = r => require.ensure([], () => r(require('@/pages/example/Spinner')), 'Spinner');
const Dialog = r => require.ensure([], () => r(require('@/pages/example/Dialog')), 'Dialog');
const Search = r => require.ensure([], () => r(require('@/pages/example/Search')), 'Search');
const Msg = r => require.ensure([], () => r(require('@/pages/example/Msg')), 'Msg');
const Alert = r => require.ensure([], () => r(require('@/pages/example/Alert')), 'Alert');
const Confirm = r => require.ensure([], () => r(require('@/pages/example/Confirm')), 'Confirm');
const Loading = r => require.ensure([], () => r(require('@/pages/example/Loading')), 'Loading');
const Marquee = r => require.ensure([], () => r(require('@/pages/example/Marquee')), 'Marquee');
const Badge = r => require.ensure([], () => r(require('@/pages/example/Badge')), 'Badge');
const PlanSelection = r => require.ensure([], () => r(require('@/pages/project/components/PlanSelection')), 'PlanSelection');
const InsuranceDurationShortTerm = r => require.ensure([], () => r(require('@/pages/project/components/InsuranceDurationShortTerm')), 'InsuranceDurationShortTerm');
const ProposalClauseConfirm = r => require.ensure([], () => r(require('@/pages/project/components/ProposalClauseConfirm')), 'ProposalClauseConfirm');
const InsuredInfoEntryNormal = r => require.ensure([], () => r(require('@/pages/project/proposal/gi/InsuredInfoEntryNormal')), 'InsuredInfoEntryNormal');
const ProductInfoEntryNormal = r => require.ensure([], () => r(require('@/pages/project/proposal/gi/ProductInfoEntryNormal')),'ProductInfoEntryNormal');
const ProductInfoEntryShortTerm = r => require.ensure([],() => r(require('@/pages/project/proposal/gi/ProductInfoEntryShortTerm'),'ProductInfoEntryShortTerm'));
const InsuredInfoEntryShortTerm = r => require.ensure([],() => r(require('@/pages/project/proposal/gi/InsuredInfoEntryShortTerm'),'InsuredInfoEntryShortTerm'));
const InsuredInfoConfirmNormal = r => require.ensure([],() => r(require('@/pages/project/proposal/gi/InsuredInfoConfirmNormal'),'InsuredInfoConfirmNormal'));
const test1 = r => require.ensure([],() => r(require('@/pages/project/proposal/gi/InsuredInfoConfirmNormal'),'InsuredInfoConfirmNormal'));

Vue.use(Router);
const router = new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: Home,
    },
    {
      path: '/component/example/badge',
      name: 'Badge',
      component: Badge,
    },
    {
      path: '/component/example/marquee',
      name: 'Marquee',
      component: Marquee,
    },
    {
      path: '/component/example/loading',
      name: 'Loading',
      component: Loading,
    },
    {
      path: '/component/example/confirm',
      name: 'Confirm',
      component: Confirm,
    },
    {
      path: '/component/example/alert',
      name: 'Alert',
      component: Alert,
    },
    {
      path: '/component/example/msg',
      name: 'Msg',
      component: Msg,
    },
    {
      path: '/component/example/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/component/example/dialog',
      name: 'Dialog',
      component: Dialog,
    },
    {
      path: '/component/example/spinner',
      name: 'Spinner',
      component: Spinner,
    },
    {
      path: '/component/example/checker',
      name: 'Checker',
      component: Checker,
    },
    {
      path: '/component/example/step',
      name: 'Step',
      component: Step,
    },
    {
      path: '/component/example/popup',
      name: 'Popup',
      component: Popup,
    },
    {
      path: '/component/example/tabBar',
      name: 'TabBar',
      component: TabBar,
    },
    {
      path: '/component/example/toast',
      name: 'Toast',
      component: Toast,
    },
    {
      path: '/component/example/page',
      name: 'Page',
      component: Page,
    },
    {
      path: '/component/example/img',
      name: 'Image',
      component: Image,
    },
    {
      path: '/component/example/icon',
      name: 'Icon',
      component: Icon,
    },
    {
      path: '/component/example/header',
      name: 'Header',
      component: Header,
    },
    {
      path: '/component/example/grid',
      name: 'Grid',
      component: Grid,
    },
    {
      path: '/component/example/divider',
      name: 'Divider',
      component: Divider,
    },
    {
      path: '/component/example/row',
      name: 'Row',
      component: Row,
    },
    {
      path: '/component/example/panel',
      name: 'Panel',
      component: Panel,
    },
    {
      path: '/component/example/swiper',
      name: 'Swiper',
      component: Swiper,
    },
    {
      path: '/component/example/button',
      name: 'Button',
      component: Button,
    },
    {
      path: '/component/example/cell',
      name: 'Cell',
      component: Cell,
    },
    {
      path: '/component/example/list',
      name: 'List',
      component: List,
    },
    {
      path: '/component/example/preview',
      name: 'Preview',
      component: Preview,
    },
    {
      path: '/component/example/table',
      name: 'Table',
      component: Table,
    },
    {
      path: '/component/example/tab',
      name: 'Tab',
      component: Tab,
    },
    {
      path: '/component/example/picker',
      name: 'Picker',
      component: Picker,
    },
    {
      path: '/component/example/selector',
      name: 'Selector',
      component: Selector,
    },
    {
      path: '/component/example/card',
      name: 'Card',
      component: Card,
    },
    {
      path: '/component/example/datetime',
      name: 'DateTime',
      component: DateTime,
    },
    {
      path: '/component/example/switch',
      name: 'Switch',
      component: Switch,
    },
    {
      path: '/component/example/input',
      name: 'Input',
      component: Input,
    },
    {
      path: '/component/example/texarea',
      name: 'Textarea',
      component: Textarea,
    },
    {
      path: '/component/example/actionsheet',
      name: 'Actionsheet',
      component: Actionsheet,
    },
    {
      path: '/component/core',
      name: 'ComponentCore',
      component: ComponentCore,
    },
    {
      path: '/component/advanced',
      name: 'ComponentAdvanced',
      component: ComponentAdvanced,
    },
    {
      path: '/component/business',
      name: 'ComponentBusiness',
      component: ComponentBusiness,
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
    },
    {
      path: '/demo/auto',
      name: 'Auto',
      component: Auto,
    },
    {
      path: '/demo/AH',
      name: 'AH',
      component: AH,
    },
    {
      path: '/demo/GI',
      name: 'GI',
      component: GI,
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate,
    },
    {
      path: '/project/ly',
      name: 'Ly',
      component: Ly,
    },
    {
      path: '/templateComponents/planSelection',
      name: 'PlanSelection',
      component: PlanSelection
    },
    {
      path: '/templateComponents/insuranceDurationShortTerm',
      name: 'InsuranceDurationShortTerm',
      component: InsuranceDurationShortTerm
    }, {
      path: '/templateComponents/proposalClauseConfirm',
      name: 'ProposalClauseConfirm',
      component: ProposalClauseConfirm
    }, {
      path: '/project/proposal/gi/insuredInfoEntryNormal',
      name: 'InsuredInfoEntryNormal',
      component: InsuredInfoEntryNormal
    },{
      path: '/project/proposal/gi/productInfoEntryNormal',
      name: 'ProductInfoEntryNormal',
      component: ProductInfoEntryNormal
    },{
      path: '/project/proposal/gi/productInfoEntryShortTerm',
      name: 'ProductInfoEntryShortTerm',
      component: ProductInfoEntryShortTerm
    },{
      path: '/project/proposal/gi/insuredInfoEntryShortTerm',
      name: 'InsuredInfoEntryShortTerm',
      component: InsuredInfoEntryShortTerm
    },{
      path: '/project/proposal/gi/InsuredInfoConfirmNormal',
      name: 'InsuredInfoConfirmNormal',
      component: InsuredInfoConfirmNormal
    },
  ],
});

export default router;
