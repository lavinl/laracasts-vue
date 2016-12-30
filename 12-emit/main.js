Vue.component('coupon', {

	template: `
		<div>
			<input type="text" placeholder="enter coupon code">
			<button @click="onCouponApplied">apply coupon</button>
		</div>
	`,

	methods: {
		onCouponApplied: function(){
			this.$emit('applied');
		}
	}

});

new Vue({

	el: '#root',

	data: {
		couponApplied: false
	},

	methods: {
		onCouponApplied: function(){
			this.couponApplied = true;
		}
	}

});