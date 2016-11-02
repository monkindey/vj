var data = {
	name: 'monkindey',
	age: 23,
	// skills: ['basketball', 'code'],
	// private: {
	// 	mobile: '18826***154',
	// 	birthday: '07*6'
	// }
};

// data = {
// 	name: 'monkindey',
// 	age: 23
// }

// data = [1,2,3];

Vue.component('Oj', {
	template: '#object-tpl',
	props: ['parsed'],
	computed: {
		wrap: function() {
			if (Array.isArray(this.parsed)) {

			} else {
				return {
					first: '{',
					last: '}'
				}
			}
		},

		keys: function() {
			return Object.keys(this.parsed);
		},

		values: function() {
			return this.keys.map(function(k) {
				return this.parsed[k]
			}.bind(this))
		}
	},
	methods: {
		isObject: function() {
			return typeof this.parsed === 'object'
		}
	}
})

var vm = new Vue({
	el: '#app',
	data: {
		json: JSON.stringify(data)
	},
	computed: {
		parsed: function() {
			return JSON.parse(this.json);
		}
	},
	mounted: function() {
		console.log(this.wrap);
		console.log('mounted');
	}
})