var data = {
	name: 'monkindey',
	age: '2*',
	skills: [
		'basketball',
		'code'
	],
	private: {
		mobile: '18826***154',
		birthday: '07*6'
	}
};

Vue.component('Oj', {
	template: '#object-tpl',
	props: ['parsed', 'init'],
	computed: {
		wrap: function() {
			if (Array.isArray(this.parsed)) {
				return {
					first: '[',
					last: ']'
				}
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
		isObject: function(k) {
			return typeof this.parsed[k] === 'object'
		},
		wrapFirst: function(k) {
			if (Array.isArray(this.parsed[k])) {
				return '['
			} else {
				return '{'
			} 
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
		},
		wrapFirst: function() {
			if (Array.isArray(this.parsed)) {
				return '['
			} else {
				return '{'
			} 
		}
	},
	mounted: function() {
		// console.log('mounted');
	}
})