import Vue from 'vue'
import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from 'vee-validate'

Validator.localize('es', es)

const config = {
  locale: 'es',
  classes: true,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'is-valid', // model is valid
    invalid: 'is-invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  }
}

Vue.use(VeeValidate, config)
