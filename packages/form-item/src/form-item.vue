<template>
    <div>
        <label v-if="label" :class="{'zm-form-item-label-required': isRequired}">{{label}}</label>
        <div>
            <slot></slot>
            <div v-if="validateState === 'error'" class="zm-form-item-message">{{validateMessage}}</div>
        </div>
    </div>
</template>
<script>
    import Emitter from '../../../mixins/emitter';
    import AsyncValidator from "async-validator";

    export default {
        name: 'ZmFormItem',
        mixins: [Emitter],
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: '',
            },
            prop: {
                type: String
            }
        },
        data() {
            return {
                isRequired: false,
                validateState: '', // 校验状态
                validateMessage: '', // 校验不通过时的提示信息
            }
        },
        computed: {
            // 从form的model中动态得到当前表单组件的数据
            fieldValue() {
                return this.form.model[this.prop];
            }
        },
        // 组件渲染时，将实例缓存在Form中
        mounted() {
            // 如果没有传入Prop，则无需校验，也就无需缓存
            if (this.prop) {
                this.dispatch('ZmForm', 'on-form-item-add', this);
                // 设置初始值，以便在充值时恢复默认值
                this.initialValue = this.fieldValue;

                this.setRules();
            }
        },
        methods: {
            setRules() {
                let rules = this.getRules();
                if (rules.length) {
                    rules.every(rule => {
                        this.isRequired = rule.required;
                    })
                }
                this.$on("on-form-blur", this.onFieldBlur);
                this.$on("on-form-change", this.onFieldChange);
            },
            // 从Form的rules属性中，获取当前FormItem的校验规则
            getRules() {
                let formRules = this.form.rules;
                formRules = formRules?formRules[this.prop]:[];
                return [].concat(formRules || []);
            },
            // 重置数据
            resetField() {
                this.validateState = '';
                this.validateMessage = '';

                this.form.model[this.prop] = this.initialValue;
            },
            // 只支持blur和change，所以过滤出符合要求的rules规则
            getFilteredRule(trigger) {
                const rules = this.getRules();
                return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
            },
            validate(trigger, callback = function() {}) {
                let rules = this.getFilteredRule(trigger);

                if (!rules || rules.length === 0) {
                    return true;
                }

                // 设置状态为校验中
                this.validateState = 'validating';

                // 以下为async-validator库的调用方法
                let descriptor = {};
                descriptor[this.prop] = rules;

                const validator = new AsyncValidator(descriptor);
                let model = {};

                model[this.prop] = this.fieldValue;
                validator.validate(model, {firstFields: true}, errors => {
                    this.validateState = !errors ? 'success': 'error';
                    this.validateMessage = errors ? errors[0].message: '';

                    callback(this.validateMessage);
                })
            },
            onFieldBlur() {
                this.validate('blur');
            },
            onFieldChange() {
                this.validate('change');
            }
        },
        // 组件销毁前，将实例从Form的缓存中移除
        beforeDestroy() {
            this.dispatch('ZmForm', 'on-form-item-remove', this);
        }
    }
</script>