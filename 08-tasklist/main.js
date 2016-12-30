Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in tasks">{{ task.task }}</task>
		</div>
	`,

	data(){
		return {	
			tasks: [
				{ task: 'go here', complete: true },
				{ task: 'go there', complete: false },
				{ task: 'go up', complete: true },
				{ task: 'go down', complete: false }
			]
		};
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

new Vue({
	el: '#root'
});