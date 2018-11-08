import Vue from 'vue'
Vue.directive('n',{
    bind(el,bind){
        console.log('bind',el)
        console.log('bind',bind)
        el.textContent = Math.pow(bind.value, 2)
    },
    update(el,bind){
        console.log(el)
        console.log('p',bind)
        el.textContent = Math.pow(bind.value,2)
    }
})