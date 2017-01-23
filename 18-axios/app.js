new Vue({
	el: '#app',

	data: {
		users: []
	},
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/users').then(response => this.users = response.data);
	}
});