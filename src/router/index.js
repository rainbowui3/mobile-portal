import Vue from 'vue';
import Router from 'vue-router';
const Login = r => require.ensure([], () => r(require('@/pages/Login')), 'Login');
const Home = r => require.ensure([], () => r(require('@/pages/Home')), 'Home');
const ComponentCore = r => require.ensure([], () => r(require('@/pages/component/core/Core')), 'Core');
const ComponentAdvanced = r => require.ensure([], () => r(require('@/pages/component/advanced/Advanced')), 'Advanced');
const ComponentBusiness = r => require.ensure([], () => r(require('@/pages/component/business/Business')), 'Business');
const Demo = r => require.ensure([], () => r(require('@/pages/demo/Demo')), 'Demo');
const Donate = r => require.ensure([], () => r(require('@/pages/Donate')), 'Donate');
const Card = r => require.ensure([], () => r(require('@/pages/component/core/Card')), 'Card');
const DateTime = r => require.ensure([], () => r(require('@/pages/component/core/DateTime')), 'DateTime');
const Selector = r => require.ensure([], () => r(require('@/pages/component/core/Selector')), 'Selector');
const Picker = r => require.ensure([], () => r(require('@/pages/component/core/Picker')), 'Picker');
const Tab = r => require.ensure([], () => r(require('@/pages/component/core/Tab')), 'Tab');
const Table = r => require.ensure([], () => r(require('@/pages/component/core/Table')), 'Table');
const Preview = r => require.ensure([], () => r(require('@/pages/component/advanced/Preview')), 'Preview');
const RNumber = r => require.ensure([], () => r(require('@/pages/component/advanced/Number')), 'RNumber');
const List = r => require.ensure([], () => r(require('@/pages/component/core/List')), 'List');
const Cell = r => require.ensure([], () => r(require('@/pages/component/core/Cell')), 'Cell');
const Button = r => require.ensure([], () => r(require('@/pages/component/core/Button')), 'Button');
const Swiper = r => require.ensure([], () => r(require('@/pages/component/core/Swiper')), 'Swiper');
const Auto = r => require.ensure([], () => r(require('@/pages/demo/Auto')), 'Auto');
const AH = r => require.ensure([], () => r(require('@/pages/demo/AH')), 'AH');
const GI = r => require.ensure([], () => r(require('@/pages/demo/GI')), 'GI');
const Switch = r => require.ensure([], () => r(require('@/pages/component/core/Switch')), 'Switch');
const Input = r => require.ensure([], () => r(require('@/pages/component/core/Input')), 'Input');
const Textarea = r => require.ensure([], () => r(require('@/pages/component/core/Textarea')), 'Textarea');
const Actionsheet = r => require.ensure([], () => r(require('@/pages/component/core/Actionsheet')), 'Actionsheet');
const Panel = r => require.ensure([], () => r(require('@/pages/component/core/Panel')), 'Panel');
const Row = r => require.ensure([], () => r(require('@/pages/component/core/Row')), 'Row');
const Divider = r => require.ensure([], () => r(require('@/pages/component/core/Divider')), 'Divider');
const Grid = r => require.ensure([], () => r(require('@/pages/component/core/Grid')), 'Grid');
const Header = r => require.ensure([], () => r(require('@/pages/component/core/Header')), 'Header');
const Icon = r => require.ensure([], () => r(require('@/pages/component/core/Icon')), 'Icon');
const Image = r => require.ensure([], () => r(require('@/pages/component/core/Image')), 'Image');
const Page = r => require.ensure([], () => r(require('@/pages/component/core/Page')), 'Page');
const Toast = r => require.ensure([], () => r(require('@/pages/component/core/Toast')), 'Toast');
const TabBar = r => require.ensure([], () => r(require('@/pages/component/core/TabBar')), 'TabBar');
const Popup = r => require.ensure([], () => r(require('@/pages/component/core/Popup')), 'Popup');
const Step = r => require.ensure([], () => r(require('@/pages/component/core/Step')), 'Step');
const Checker = r => require.ensure([], () => r(require('@/pages/component/core/Checker')), 'Checker');
const Spinner = r => require.ensure([], () => r(require('@/pages/component/core/Spinner')), 'Spinner');
const Dialog = r => require.ensure([], () => r(require('@/pages/component/core/Dialog')), 'Dialog');
const Search = r => require.ensure([], () => r(require('@/pages/component/advanced/Search')), 'Search');
const Msg = r => require.ensure([], () => r(require('@/pages/component/advanced/Msg')), 'Msg');
const Alert = r => require.ensure([], () => r(require('@/pages/component/core/Alert')), 'Alert');
const Confirm = r => require.ensure([], () => r(require('@/pages/component/core/Confirm')), 'Confirm');
const Loading = r => require.ensure([], () => r(require('@/pages/component/core/Loading')), 'Loading');
const Marquee = r => require.ensure([], () => r(require('@/pages/component/core/Marquee')), 'Marquee');
const Badge = r => require.ensure([], () => r(require('@/pages/component/core/Badge')), 'Badge');
const PlanSelection = r => require.ensure([], () => r(require('@/pages/project/components/PlanSelection')), 'PlanSelection');
const InsuranceDurationShortTerm = r => require.ensure([], () => r(require('@/pages/project/components/InsuranceDurationShortTerm')), 'InsuranceDurationShortTerm');
const ChooseRelationship = r => require.ensure([], () => r(require('@/pages/project/components/ChooseRelationship')), 'ChooseRelationship');
const ProposalClauseConfirm = r => require.ensure([], () => r(require('@/pages/project/components/ProposalClauseConfirm')), 'ProposalClauseConfirm');
const CarInfo = r => require.ensure([], () => r(require('@/pages/project/components/CarInfo')), 'CarInfo');
const CarOwner = r => require.ensure([], () => r(require('@/pages/project/components/CarOwner')), 'CarOwner');
const TreeTest = r => require.ensure([], () => r(require('@/pages/project/components/TreeTest')), 'TreeTest');

// ah
const InsuredInfoEntryNormal = r => require.ensure([], () => r(require('@/pages/project/quote/InsuredInfoEntryNormal')), 'InsuredInfoEntryNormal');
const ProductInfoEntryNormal = r => require.ensure([], () => r(require('@/pages/project/proposal/ProductInfoEntryNormal')), 'ProductInfoEntryNormal');
const ProductInfoEntryShortTerm = r => require.ensure([], () => r(require('@/pages/project/proposal/ProductInfoEntryShortTerm'), 'ProductInfoEntryShortTerm'));
const InsuredInfoEntryShortTerm = r => require.ensure([], () => r(require('@/pages/project/quote/InsuredInfoEntryShortTerm'), 'InsuredInfoEntryShortTerm'));
const InsuredInfoConfirmNormal = r => require.ensure([], () => r(require('@/pages/project/bind/InsuredInfoConfirmNormal'), 'InsuredInfoConfirmNormal'));
const PayStatus = r => require.ensure([], () => r(require('@/pages/project/issue/PayStatus')), 'PayStatus');
const InsuredInfoEntryPassenger = r => require.ensure([], () => r(require('@/pages/project/quote/InsuredInfoEntryPassenger'), 'InsuredInfoEntryPassenger'));
const InsuredInfoConfirmPassenger = r => require.ensure([], () => r(require('@/pages/project/bind/InsuredInfoConfirmPassenger'), 'InsuredInfoConfirmPassenger'));
const InsuredInfoStudyRisk = r => require.ensure([], () => r(require('@/pages/project/quote/InsuredInfoStudyRisk'), 'InsuredInfoStudyRisk'));
const InsuredInfoConfirmStudyRisk = r => require.ensure([], () => r(require('@/pages/project/bind/InsuredInfoConfirmStudyRisk'), 'InsuredInfoConfirmStudyRisk'));
const InsuredInfoAccident = r => require.ensure([], () => r(require('@/pages/project/quote/InsuredInfoAccident'), 'InsuredInfoAccident'));
const InsuredInfoConfirmAccident = r => require.ensure([], () => r(require('@/pages/project/bind/InsuredInfoConfirmAccident'), 'InsuredInfoConfirmAccident'));
const ProductInfoEntryHealth = r => require.ensure([], () => r(require('@/pages/project/proposal/ProductInfoEntryHealth'), 'ProductInfoEntryHealth'));
const InsuredInfoEntryHealth = r => require.ensure([], () => r(require('@/pages/project/quote/InsuredInfoEntryHealth'), 'InsuredInfoEntryHealth'));
const InsuredInfoEntryHealthSub = r => require.ensure([], () => r(require('@/pages/project/quote/InsuredInfoEntryHealthSub'), 'InsuredInfoEntryHealthSub'));
const InsuredInfoConfirmHealthSub = r => require.ensure([], () => r(require('@/pages/project/bind/InsuredInfoConfirmHealthSub'), 'InsuredInfoConfirmHealthSub'));
const HealthInform = r => require.ensure([], () => r(require('@/pages/project/quote/HealthInform'), 'HealthInform'));
const HealthInformConfirm = r => require.ensure([], () => r(require('@/pages/project/bind/HealthInformConfirm'), 'HealthInformConfirm'));
const InsuredInfoConfirmHealth = r => require.ensure([], () => r(require('@/pages/project/bind/InsuredInfoConfirmHealth'), 'InsuredInfoConfirmHealth'));

// auto2e
const ProductInfoEntryAuto = r => require.ensure([], () => r(require('@/pages/project/proposal/ProductInfoEntryAuto')), 'ProductInfoEntryAuto');
const ChooseHandler = r => require.ensure([], () => r(require('@/pages/project/proposal/ChooseHandler'), 'ChooseHandler'));
const AutoPlan = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/AutoPlan'), 'AutoPlan'));
const CarAndOwnerInfoEntry = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/CarAndOwnerInfoEntry'), 'CarAndOwnerInfoEntry'));
const CarAndOwnerInfoEntryOneWay = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/CarAndOwnerInfoEntryOneWay'), 'CarAndOwnerInfoEntryOneWay'));
const ChooseCar = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/ChooseCar'), 'ChooseCar'));
const AutoVehicleAndVesselTax = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/AutoVehicleAndVesselTax'), 'AutoVehicleAndVesselTax'));
const CarDetails = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/CarDetails'), 'CarDetails'));
const CarDetailsMotor = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/CarDetailsMotor'), 'CarDetailsMotor'));
const CarDetailsOneWay = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/CarDetailsOneWay'), 'CarDetailsOneWay'));
const AutoSupplementInfo = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/AutoSupplementInfo'), 'AutoSupplementInfo'));
const AutoPremiumInfo = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/AutoPremiumInfo'), 'AutoPremiumInfo'));
const AutoCFeeInfo = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/AutoCFeeInfo'), 'AutoCFeeInfo'));
const AutoFloatRateInfo = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/AutoFloatRateInfo'), 'AutoFloatRateInfo'));
const VehicleLoss = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/VehicleLoss'), 'VehicleLoss'));
const ThirdDutyMian = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/ThirdDutyMian'), 'ThirdDutyMian'));
const CarRobberyMain = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/CarRobberyMain'), 'CarRobberyMain'));
const DriverDutyMian = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/DriverDutyMian'), 'DriverDutyMian'));
const PassengerDutyMian = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/PassengerDutyMian'), 'PassengerDutyMian'));
const GlassCrushAdditional = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/GlassCrushAdditional'), 'GlassCrushAdditional'));
const NaturalDamage = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/NaturalDamage'), 'NaturalDamage'));
const NewEquipmenLoss = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/NewEquipmenLoss'), 'NewEquipmenLoss'));
const CarBodyScratchLoss = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/CarBodyScratchLoss'), 'CarBodyScratchLoss'));
const EngineWadLoss = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/EngineWadLoss'), 'EngineWadLoss'));
const RepairPayment = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/RepairPayment'), 'RepairPayment'));
const CarGoods = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/CarGoods'), 'CarGoods'));
const MetalDamage = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/MetalDamage'), 'MetalDamage'));
const AppointRepairShop = r => require.ensure([], () => r(require('@/pages/project/quote/auto/risks/AppointRepairShop'), 'AppointRepairShop'));
const AutoPay = r => require.ensure([], () => r(require('@/pages/project/issue/AutoPay'), 'AutoPay'));
const AutoSendUnderwriting = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2e/AutoSendUnderwriting'), 'AutoSendUnderwriting'));
const AutoProposalInfoConfirm = r => require.ensure([], () => r(require('@/pages/project/bind/AutoProposalInfoConfirm'), 'AutoProposalInfoConfirm'));
// auto2c
const Auto2cProposalInfoConfirm = r => require.ensure([], () => r(require('@/pages/project/bind/Auto2cProposalInfoConfirm'), 'Auto2cProposalInfoConfirm'));
const Auto2cUserAddr = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2c/Auto2cUserAddr'), 'Auto2cUserAddr'));
const Auto2cDrivingLicenseInfo = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2c/Auto2cDrivingLicenseInfo'), 'Auto2cDrivingLicenseInfo'));
const Auto2cPlan = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2c/Auto2cPlan'), 'Auto2cPlan'));
const Auto2cUserInfo = r => require.ensure([], () => r(require('@/pages/project/proposal/Auto2cUserInfo'), 'Auto2cUserInfo'));
const Auto2cCustomPlan = r => require.ensure([], () => r(require('@/pages/project/quote/auto/auto2c/Auto2cCustomPlan'), 'Auto2cCustomPlan'));

// business
const ProjectHolderInfo = r => require.ensure([], () => r(require('@/pages/component/business/HolderInfo')), 'HolderInfo');
const ProjectInsuranceDurationCurrency = r => require.ensure([], () => r(require('@/pages/component/business/InsuranceDurationCurrency')), 'InsuranceDurationCurrency');
const ProjectInsuredInfo = r => require.ensure([], () => r(require('@/pages/component/business/InsuredInfo')), 'InsuredInfo');
const ProjectPlanSelection = r => require.ensure([], () => r(require('@/pages/component/business/PlanSelection')), 'PlanSelection');
const ProjectProductTop = r => require.ensure([], () => r(require('@/pages/component/business/ProductTop')), 'ProductTop');
const ProjectProposalClauseConfirm = r => require.ensure([], () => r(require('@/pages/component/business/ProposalClauseConfirm')), 'ProposalClauseConfirm');
const ProjectProposalConfirm = r => require.ensure([], () => r(require('@/pages/component/business/ProposalConfirm')), 'ProposalConfirm');
const ProjectProposalCopies = r => require.ensure([], () => r(require('@/pages/component/business/ProposalCopies')), 'ProposalCopies');
const HomeContent = r => require.ensure([], () => r(require('@/pages/component/business/HomeContent')), 'HomeContent');
const BusinessPlan = r => require.ensure([], () => r(require('@/pages/component/business/BusinessPlan')), 'BusinessPlan');
const BusinessNavTab = r => require.ensure([], () => r(require('@/pages/component/business/BusinessNavTab')), 'BusinessNavTab');

//  pay
const Payment = r => require.ensure([], () => r(require('@/pages/component/business/Payment')), 'Payment');
// home
const BusinessThumbnail = r => require.ensure([], () => r(require('@/pages/component/business/BusinessThumbnail')), 'BusinessThumbnail');
// logn in
const BusinessSignIn = r => require.ensure([], () => r(require('@/pages/component/business/BusinessSignIn')), 'BusinessSignIn');

// businessPage
const BusinessPayment = r => require.ensure([], () => r(require('@/pages/project/issue/BusinessPayment')), 'BusinessPayment');

// loading
const LoadingPage = r => require.ensure([], () => r(require('@/pages/project/LoadingPage')), 'LoadingPage');

// businessDetail
const BusinessDetail = r => require.ensure([], () => r(require('@/pages/project/proposal/BusinessDetail')), 'BusinessDetail');
// BusinessFillIn
const BusinessFillIn = r => require.ensure([], () => r(require('@/pages/project/quote/BusinessFillIn')), 'BusinessFillIn');
// BusinessConfirm
const BusinessConfirm = r => require.ensure([], () => r(require('@/pages/project/bind/BusinessConfirm')), 'BusinessConfirm');
// BusinessCategory
const BusinessCategory = r => require.ensure([], () => r(require('@/pages/BusinessCategory')), 'BusinessCategory');
// Mine
const Mine = r => require.ensure([], () => r(require('@/pages/Mine')), 'Mine');

// AHRouters
const ProposalTemplate = r => require.ensure([], () => r(require('@/pages/project/proposal/AHRouterProduct')), 'ProposalTemplate');
const QuoteTemplate = r => require.ensure([], () => r(require('@/pages/project/quote/AHRouterEntry')), 'QuoteTemplate');
const BindTemplate = r => require.ensure([], () => r(require('@/pages/project/bind/AHRouterConfirm')), 'BindTemplate');
const IssueTemplate = r => require.ensure([], () => r(require('@/pages/project/issue/AHRouterPay')), 'IssueTemplate');

Vue.use(Router);
const router = new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/component/example/badge',
    name: 'Badge',
    component: Badge
  },
  {
    path: '/component/example/marquee',
    name: 'Marquee',
    component: Marquee
  },
  {
    path: '/component/example/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/component/example/confirm',
    name: 'Confirm',
    component: Confirm
  },
  {
    path: '/component/example/alert',
    name: 'Alert',
    component: Alert
  },
  {
    path: '/component/example/msg',
    name: 'Msg',
    component: Msg
  },
  {
    path: '/component/example/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/component/example/dialog',
    name: 'Dialog',
    component: Dialog
  },
  {
    path: '/component/example/spinner',
    name: 'Spinner',
    component: Spinner
  },
  {
    path: '/component/example/checker',
    name: 'Checker',
    component: Checker
  },
  {
    path: '/component/example/step',
    name: 'Step',
    component: Step
  },
  {
    path: '/component/example/popup',
    name: 'Popup',
    component: Popup
  },
  {
    path: '/component/example/tabBar',
    name: 'TabBar',
    component: TabBar
  },
  {
    path: '/component/example/toast',
    name: 'Toast',
    component: Toast
  },
  {
    path: '/component/example/page',
    name: 'Page',
    component: Page
  },
  {
    path: '/component/example/img',
    name: 'Image',
    component: Image
  },
  {
    path: '/component/example/icon',
    name: 'Icon',
    component: Icon
  },
  {
    path: '/component/example/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/component/example/grid',
    name: 'Grid',
    component: Grid
  },
  {
    path: '/component/example/divider',
    name: 'Divider',
    component: Divider
  },
  {
    path: '/component/example/row',
    name: 'Row',
    component: Row
  },
  {
    path: '/component/example/panel',
    name: 'Panel',
    component: Panel
  },
  {
    path: '/component/example/swiper',
    name: 'Swiper',
    component: Swiper
  },
  {
    path: '/component/example/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/component/example/cell',
    name: 'Cell',
    component: Cell
  },
  {
    path: '/component/example/list',
    name: 'List',
    component: List
  },
  {
    path: '/component/example/preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/component/example/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/component/example/tab',
    name: 'Tab',
    component: Tab
  },
  {
    path: '/component/example/picker',
    name: 'Picker',
    component: Picker
  },
  {
    path: '/component/example/selector',
    name: 'Selector',
    component: Selector
  },
  {
    path: '/component/example/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/component/example/datetime',
    name: 'DateTime',
    component: DateTime
  },
  {
    path: '/component/example/switch',
    name: 'Switch',
    component: Switch
  },
  {
    path: '/component/example/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/component/example/texarea',
    name: 'Textarea',
    component: Textarea
  },
  {
    path: '/component/example/actionsheet',
    name: 'Actionsheet',
    component: Actionsheet
  },
  {
    path: '/component/core',
    name: 'ComponentCore',
    component: ComponentCore
  },
  {
    path: '/component/advanced',
    name: 'ComponentAdvanced',
    component: ComponentAdvanced
  },
  {
    path: '/component/example/number',
    name: 'RNumber',
    component: RNumber
  },
  {
    path: '/component/business',
    name: 'ComponentBusiness',
    component: ComponentBusiness
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/demo/auto',
    name: 'Auto',
    component: Auto
  },
  {
    path: '/demo/AH',
    name: 'AH',
    component: AH
  },
  {
    path: '/demo/GI',
    name: 'GI',
    component: GI
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
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
    path: '/templateComponents/chooseRelationship',
    name: 'ChooseRelationship',
    component: ChooseRelationship
  }, {
    path: '/templateComponents/carInfo',
    name: 'CarInfo',
    component: CarInfo
  }, {
    path: '/templateComponents/carOwner',
    name: 'CarOwner',
    component: CarOwner
  }, {
    path: '/project/proposal/payStatus',
    name: 'PayStatus',
    component: PayStatus
  }, {
    path: '/templateComponents/TreeTest',
    name: 'TreeTest',
    component: TreeTest
  },
  // loadingPage
  {
    path: '/proposal/loadingPage',
    name: 'LoadingPage',
    component: LoadingPage
  },

  // ahRouters
  {
    path: '/proposal',
    name: 'ProposalTemplate',
    component: ProposalTemplate,
    children: [{
      path: 'normal',
      name: 'AHRouterProductNormal',
      component: ProductInfoEntryNormal
    },
    {
      path: 'shortTerm',
      name: 'AHRouterProductShortTerm',
      component: ProductInfoEntryShortTerm
    },
    {
      path: 'health',
      name: 'AHRouterProductHealth',
      component: ProductInfoEntryHealth
    },
    {
      path: 'yellow',
      component: BusinessDetail
    }
    ]
  },
  {
    path: '/quote',
    name: 'QuoteTemplate',
    component: QuoteTemplate,
    children: [{
      path: 'normal',
      name: 'AHRouterEntryNormal',
      component: InsuredInfoEntryNormal
    },
    {
      path: 'shortTerm',
      component: InsuredInfoEntryShortTerm
    },
    {
      path: 'health',
      component: InsuredInfoEntryHealth
    },
    {
      path: 'healthSub',
      component: InsuredInfoEntryHealthSub
    },
    {
      path: 'accident',
      component: InsuredInfoAccident
    },
    {
      path: 'studyRisk',
      component: InsuredInfoStudyRisk
    },
    {
      path: 'passenger',
      component: InsuredInfoEntryPassenger
    },
    {
      path: 'yellow',
      component: BusinessFillIn
    }
    ]
  },
  {
    path: '/bind',
    name: 'BindTemplate',
    component: BindTemplate,
    children: [{
      path: 'normal',
      component: InsuredInfoConfirmNormal
    },
    {
      path: 'health',
      component: InsuredInfoConfirmHealth
    },
    {
      path: 'healthSub',
      component: InsuredInfoConfirmHealthSub
    },
    {
      path: 'accident',
      component: InsuredInfoConfirmAccident
    },
    {
      path: 'studyRisk',
      component: InsuredInfoConfirmStudyRisk
    },
    {
      path: 'passenger',
      component: InsuredInfoConfirmPassenger
    },
    {
      path: 'yellow',
      component: BusinessConfirm
    }
    ]
  },
  {
    path: '/issue',
    name: 'IssueTemplate',
    component: IssueTemplate,
    children: [{
      path: 'normal',
      component: PayStatus
    },
    {
      path: 'yellow',
      component: BusinessPayment
    }
    ]
  },
  // ah
  {
    path: '/project/proposal/ah/insuredInfoEntryNormal',
    name: 'InsuredInfoEntryNormal',
    component: InsuredInfoEntryNormal
  }, {
    path: '/project/proposal/ah/productInfoEntryNormal',
    name: 'ProductInfoEntryNormal',
    component: ProductInfoEntryNormal
  }, {
    path: '/project/proposal/ah/productInfoEntryShortTerm',
    name: 'ProductInfoEntryShortTerm',
    component: ProductInfoEntryShortTerm
  }, {
    path: '/project/proposal/ah/insuredInfoEntryShortTerm',
    name: 'InsuredInfoEntryShortTerm',
    component: InsuredInfoEntryShortTerm
  }, {
    path: '/project/proposal/ah/InsuredInfoConfirmNormal',
    name: 'InsuredInfoConfirmNormal',
    component: InsuredInfoConfirmNormal
  }, {
    path: '/project/proposal/ah/InsuredInfoEntryPassenger',
    name: 'InsuredInfoEntryPassenger',
    component: InsuredInfoEntryPassenger
  }, {
    path: '/project/proposal/ah/InsuredInfoConfirmPassenger',
    name: 'InsuredInfoConfirmPassenger',
    component: InsuredInfoConfirmPassenger
  }, {
    path: '/project/proposal/ah/InsuredInfoStudyRisk',
    name: 'InsuredInfoStudyRisk',
    component: InsuredInfoStudyRisk
  }, {
    path: '/project/proposal/ah/InsuredInfoConfirmStudyRisk',
    name: 'InsuredInfoConfirmStudyRisk',
    component: InsuredInfoConfirmStudyRisk
  }, {
    path: '/project/proposal/ah/InsuredInfoAccident',
    name: 'InsuredInfoAccident',
    component: InsuredInfoAccident
  }, {
    path: '/project/proposal/ah/InsuredInfoConfirmAccident',
    name: 'InsuredInfoConfirmAccident',
    component: InsuredInfoConfirmAccident
  }, {
    path: '/project/proposal/ah/ProductInfoEntryHealth',
    name: 'ProductInfoEntryHealth',
    component: ProductInfoEntryHealth
  }, {
    path: '/project/proposal/ah/InsuredInfoEntryHealth',
    name: 'InsuredInfoEntryHealth',
    component: InsuredInfoEntryHealth
  }, {
    path: '/project/proposal/ah/InsuredInfoEntryHealthSub',
    name: 'InsuredInfoEntryHealthSub',
    component: InsuredInfoEntryHealthSub
  }, {
    path: '/project/proposal/ah/InsuredInfoConfirmHealthSub',
    name: 'InsuredInfoConfirmHealthSub',
    component: InsuredInfoConfirmHealthSub
  }, {
    path: '/project/proposal/ah/HealthInform',
    name: 'HealthInform',
    component: HealthInform
  }, {
    path: '/project/proposal/ah/HealthInformConfirm',
    name: 'HealthInformConfirm',
    component: HealthInformConfirm
  }, {
    path: '/project/proposal/ah/InsuredInfoConfirmHealth',
    name: 'InsuredInfoConfirmHealth',
    component: InsuredInfoConfirmHealth
  },

  // auto2e
  {
    path: '/project/proposal/auto2e/ChooseHandler',
    name: 'ChooseHandler',
    component: ChooseHandler
  }, {
    path: '/project/proposal/auto2e/ProductInfoEntryAuto',
    name: 'ProductInfoEntryAuto',
    component: ProductInfoEntryAuto
  }, {
    path: '/project/proposal/auto2e/AutoPlan',
    name: 'AutoPlan',
    component: AutoPlan
  }, {
    path: '/project/proposal/auto2e/CarAndOwnerInfoEntry',
    name: 'CarAndOwnerInfoEntry',
    component: CarAndOwnerInfoEntry
  }, {
    path: '/project/proposal/auto2e/CarAndOwnerInfoEntryOneWay',
    name: 'CarAndOwnerInfoEntryOneWay',
    component: CarAndOwnerInfoEntryOneWay
  }, {
    path: '/project/proposal/auto2e/ChooseCar',
    name: 'ChooseCar',
    component: ChooseCar
  }, {
    path: '/project/proposal/auto2e/AutoVehicleAndVesselTax',
    name: 'AutoVehicleAndVesselTax',
    component: AutoVehicleAndVesselTax
  }, {
    path: '/project/proposal/auto2e/CarDetails',
    name: 'CarDetails',
    component: CarDetails
  }, {
    path: '/project/proposal/auto2e/CarDetailsMotor',
    name: 'CarDetailsMotor',
    component: CarDetailsMotor
  }, {
    path: '/project/proposal/auto2e/CarDetailsOneWay',
    name: 'CarDetailsOneWay',
    component: CarDetailsOneWay
  }, {
    path: '/project/proposal/auto2e/AutoSupplementInfo',
    name: 'AutoSupplementInfo',
    component: AutoSupplementInfo
  }, {
    path: '/project/proposal/auto2e/AutoPremiumInfo',
    name: 'AutoPremiumInfo',
    component: AutoPremiumInfo
  }, {
    path: '/project/proposal/auto2e/AutoCFeeInfo',
    name: 'AutoCFeeInfo',
    component: AutoCFeeInfo
  }, {
    path: '/project/proposal/auto2e/AutoFloatRateInfo',
    name: 'AutoFloatRateInfo',
    component: AutoFloatRateInfo
  }, {
    path: '/project/proposal/auto2e/VehicleLoss',
    name: 'VehicleLoss',
    component: VehicleLoss
  }, {
    path: '/project/proposal/auto2e/ThirdDutyMian',
    name: 'ThirdDutyMian',
    component: ThirdDutyMian
  }, {
    path: '/project/proposal/auto2e/CarRobberyMain',
    name: 'CarRobberyMain',
    component: CarRobberyMain
  }, {
    path: '/project/proposal/auto2e/DriverDutyMian',
    name: 'DriverDutyMian',
    component: DriverDutyMian
  }, {
    path: '/project/proposal/auto2e/PassengerDutyMian',
    name: 'PassengerDutyMian',
    component: PassengerDutyMian
  }, {
    path: '/project/proposal/auto2e/GlassCrushAdditional',
    name: 'GlassCrushAdditional',
    component: GlassCrushAdditional
  }, {
    path: '/project/proposal/auto2e/NaturalDamage',
    name: 'NaturalDamage',
    component: NaturalDamage
  }, {
    path: '/project/proposal/auto2e/NewEquipmenLoss',
    name: 'NewEquipmenLoss',
    component: NewEquipmenLoss
  }, {
    path: '/project/proposal/auto2e/CarBodyScratchLoss',
    name: 'CarBodyScratchLoss',
    component: CarBodyScratchLoss
  }, {
    path: '/project/proposal/auto2e/EngineWadLoss',
    name: 'EngineWadLoss',
    component: EngineWadLoss
  }, {
    path: '/project/proposal/auto2e/RepairPayment',
    name: 'RepairPayment',
    component: RepairPayment
  }, {
    path: '/project/proposal/auto2e/CarGoods',
    name: 'CarGoods',
    component: CarGoods
  }, {
    path: '/project/proposal/auto2e/MetalDamage',
    name: 'MetalDamage',
    component: MetalDamage
  }, {
    path: '/project/proposal/auto2e/AppointRepairShop',
    name: 'AppointRepairShop',
    component: AppointRepairShop
  }, {
    path: '/project/proposal/auto2e/AutoPay',
    name: 'AutoPay',
    component: AutoPay
  }, {
    path: '/project/proposal/auto2e/AutoSendUnderwriting',
    name: 'AutoSendUnderwriting',
    component: AutoSendUnderwriting
  }, {
    path: '/project/proposal/auto2e/AutoProposalInfoConfirm',
    name: 'AutoProposalInfoConfirm',
    component: AutoProposalInfoConfirm
  },
  // auto2c
  {
    path: '/project/proposal/auto2c/Auto2cProposalInfoConfirm',
    name: 'Auto2cProposalInfoConfirm',
    component: Auto2cProposalInfoConfirm
  }, {
    path: '/project/proposal/auto2c/Auto2cUserAddr',
    name: 'Auto2cUserAddr',
    component: Auto2cUserAddr
  }, {
    path: '/project/proposal/auto2c/Auto2cDrivingLicenseInfo',
    name: 'Auto2cDrivingLicenseInfo',
    component: Auto2cDrivingLicenseInfo
  }, {
    path: '/project/proposal/auto2c/Auto2cPlan',
    name: 'Auto2cPlan',
    component: Auto2cPlan
  }, {
    path: '/project/proposal/auto2C/Auto2cUserInfo',
    name: 'Auto2cUserInfo',
    component: Auto2cUserInfo
  }, {
    path: '/project/proposal/auto2C/Auto2cCustomPlan',
    name: 'Auto2cCustomPlan',
    component: Auto2cCustomPlan
  },

  // business
  {
    path: '/component/business/HolderInfo',
    name: 'ProjectHolderInfo',
    component: ProjectHolderInfo
  },
  {
    path: '/component/business/InsuranceDurationCurrency',
    name: 'ProjectInsuranceDurationCurrency',
    component: ProjectInsuranceDurationCurrency
  },

  {
    path: '/component/business/InsuredInfo',
    name: 'ProjectInsuredInfo',
    component: ProjectInsuredInfo
  },
  {
    path: '/component/business/PlanSelection',
    name: 'ProjectPlanSelection',
    component: ProjectPlanSelection
  },
  {
    path: '/component/business/ProductTop',
    name: 'ProjectProductTop',
    component: ProjectProductTop
  },
  {
    path: '/component/business/ProposalClauseConfirm',
    name: 'ProjectProposalClauseConfirm',
    component: ProjectProposalClauseConfirm
  },
  {
    path: '/component/business/ProposalConfirm',
    name: 'ProjectProposalConfirm',
    component: ProjectProposalConfirm
  },
  {
    path: '/component/business/ProposalCopies',
    name: 'ProjectProposalCopies',
    component: ProjectProposalCopies
  },
  {
    path: '/component/business/Payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/component/business/BusinessThumbnail',
    name: 'businessThumbnail',
    component: BusinessThumbnail
  },
  {
    path: '/component/business/BusinessSignIn',
    name: 'BusinessSignIn',
    component: BusinessSignIn
  },
  {
    path: '/component/example/HomeContent',
    name: 'HomeContent',
    component: HomeContent
  },
  {
    path: '/component/business/BusinessPlan',
    name: 'BusinessPlan',
    component: BusinessPlan
  },
  {
    path: '/component/business/BusinessNavTab',
    name: 'BusinessNavTab',
    component: BusinessNavTab
  },
  {
    path: '/project/businessPage/BusinessPayment',
    name: 'BusinessPayment',
    component: BusinessPayment
  },
  {
    path: '/project/businessPage/BusinessDetail',
    name: 'BusinessDetail',
    component: BusinessDetail
  },
  {
    path: '/project/businessPage/BusinessFillIn',
    name: 'BusinessFillIn',
    component: BusinessFillIn
  },
  {
    path: '/project/businessPage/BusinessConfirm',
    name: 'BusinessConfirm',
    component: BusinessConfirm
  },
  {
    path: '/project/businessPage/BusinessCategory',
    name: 'BusinessCategory',
    component: BusinessCategory
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  }

  ]
});

export default router;
