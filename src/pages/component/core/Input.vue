<template>
  <r-page>
       <top :title="$t('component.input')" :showBack="true"/>
       <r-body>
            <r-card :title="$t('component.basic')">
                <r-input :title="$t('preview.title')" :model="policy" value="value1"/>
                <r-input :title="$t('input.placeholder')" :placeholder="$t('component.basic')" :model="policy" value="value2"/>
                <r-input :title="$t('input.showClear')" :showClear="false" :model="policy" value="value3"/>
            </r-card>
            <r-card :title="$t('input.iconType')">
                <r-input :title="$t('common.success')" iconType="success" :model="policy" value="value4"/>
                <r-input :title="$t('common.error')" iconType="error" :model="policy" value="value5"/>
            </r-card>
            <r-card :title="$t('common.validate')">
                <r-input :title="$t('input.validate')" :model="policy" value="value6" :validator="validateInput" :novalidate="false"/>
                <r-input :title="$t('picker.phone')" :model="policy" value="value7" :isPhone="true" :novalidate="false"/>
                <r-input :title="$t('input.email')" :model="policy" value="value8" :isEmail="true" :novalidate="false"/>
                <r-input :title="$t('input.number')" :model="policy" value="value9" :isNumber="true"  :novalidate="false"/>
                <r-input :title="$t('input.required')" :model="policy" value="value10" :required="true" :novalidate="false"/>

            </r-card>
            <r-card :title="$t('input.mask')">
                <r-input :title="$t('picker.phone')" :model="policy" value="value11" :isPhone="true" mask="999 9999 9999" />
                <r-input :title="$t('picker.phone')" :model="policy" value="value12" mask="(99) 9-99" />
            </r-card>
             <r-card :title="$t('component.icon')">
                <r-input  :model="policy" value="value13" :placeholder="$t('input.userHolder')">
                    <span class="fa fa-user"/>
                </r-input>
                <r-input  :model="policy" value="value14" :placeholder="$t('input.passwordHolder')" :isPassword="true" :validate="false">
                    <span class="fa fa-eye-slash"/>
                </r-input>
            </r-card>
             <r-card :title="`${$t('input.max')}${$t('input.min')}`">
                <r-input :title="$t('picker.phone')" :max="13" :model="policy" value="value15" :isPhone="true" mask="999 9999 9999" :validate="false"/>
                <r-input :title="$t('picker.phone')" :min="11" :model="policy" value="value16" />
            </r-card>
             <r-card :title="$t('common.disable')">
                <r-input :title="$t('component.basic')" :disabled="true" :model="policy" value="value17"/>
                <r-input :title="$t('input.placeholder')" :placeholder="$t('component.basic')" :disabled="true" :model="policy" value="value18"/>
            </r-card>
            <r-card :title="$t('common.readonly')">
                <r-input :title="$t('component.basic')" :readonly="true" :model="policy" value="value19"/>
            </r-card>
            <r-card :title="$t('common.event')">
                <r-input :title="$t('input.onFocus')" :onFocus="onFocus" :model="policy" value="value20"/>
                <r-input :title="$t('input.onBlur')" :onBlur="onBlur" :model="policy" value="value21"/>
                <r-input :title="$t('input.onChange')" :onChange="onChange" :model="policy" value="value22"/>
                <r-input :title="$t('input.onEnter')" :onEnter="onEnter" :model="policy" value="value23"/>
            </r-card>
            <r-card :title="$t('common.right')">
                <r-input :title="$t('input.vcode')" :model="policy" value="value24" :right="true">
                    <img class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg"/>
                </r-input>
                 <r-input :title="$t('input.vcode')" :model="policy" value="value25" :right="true">
                    <r-button class="weui-vcode" type="primary" >eeee</r-button>
                </r-input>     
            </r-card>
       </r-body>

       <bottom :index="2"/>
  </r-page>
</template>

<script>
import '../../../i18n/component';
import '../../../i18n/preview';
import '../../../i18n/input';
import '../../../i18n/picker';
export default {
  data() {
    return {
      policy: {
      value19: '12345'
      }
    };
  },
  methods: {
    validateInput(value) {
      return {
        valid: value === '12345',
        msg: this.$t('input.validate')
      };
    },
    onFocus() {
        /* eslint-disable */
      console.log('this is onFocus');
      /* eslint-disable */
    },
    onBlur() {
        /* eslint-disable */
      console.log('this is onBlur');
      /* eslint-disable */
    },
    onChange(value) {
        /* eslint-disable */
      console.log('this is onChange', value);
      /* eslint-disable */
    },
    onEnter() {
        /* eslint-disable */
      console.log('this is onEnter');
      /* eslint-disable */
    },
    _onClick() {

    }
  }
};
</script>
