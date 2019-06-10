(function (window) {
	'use strict';
  // bind中聚焦会失败,只有聚焦需要写在inserted中
	// Vue.directive('focus', {
	// 	// 当被绑定的元素插入到 DOM 中时……
	// 	bind: function (el) {
	// 		// 聚焦元素
	// 		el.focus()
	// 	}
	// })

	Vue.directive('focus', {
		// 当被绑定的元素插入到 DOM 中时……
		inserted: function (el) {
			// 聚焦元素
			el.focus()
		}
	})
	Vue.directive('todofocus', {
		update(el,binding){
			// 聚焦只能聚焦一个
			// el.fouse()
			// 能确定那个聚焦
			if(binding.value){
				el.focus()
			}
		}
	})
  window.app = new Vue({
		data:{
			currentEditing: null,
			todos:JSON.parse(window.localStorage.getItem('todos') || '[]'),
			filterText: 'all'
		},
		computed:{
			// remainingCount(){
			// 	return this.todos.filter(t => !t.completed).length
			// },
			remainingCount:{
				get(){
					return this.todos.filter(t => !t.completed).length
				},
				set(){

				}
			},
			clearCompleted(){
				return this.todos.some(t => t.completed)
			},
			toggleAllStat:{
				get(){
				 return this.todos.every(t => t.completed)
				},
				set(){
				 const checked = !this.toggleAllStat
				 this.todos.forEach(item => item.completed = checked)
				}
			},
			filterTodos(){
				switch(this.filterText){
					case 'active':
					return this.todos.filter(t => !t.completed)
					case 'completed':
					return this.todos.filter(t => t.completed)
					default:
					return this.todos

				}
			}

		},
		watch:{
			todos: {
				handler(){
					console.log(1)
					// 这里为this.todos
					window.localStorage.setItem('todos',JSON.stringify(this.todos))
				},
				deep: true,
				// immediate: true 上来就执行一次
			}
		},
		methods:{
			handleNewTodoKeyDown(e){
				const value = e.target.value.trim()
				if(!value.length){
					return
				}
				// console.log(this.todos)

				const todos = this.todos  //这句话很关键 
				todos.push({
					id: todos.length ? todos[todos.length - 1].id + 1 : 1,
					title: value,
					completed: false
				})
				// window.localStorage.setItem('todos',JSON.stringify(todos))
				e.target.value = ''
			},
			// handleToggleAllChange(e){
			// 	const checked = e.target.checked
			// 	this.todos.forEach(item => item.completed = checked)
			// },
			handleRemoveTodoClick(index){
				this.todos.splice(index,1)
			},
			handleGetEditingDblclick(item){
				this.currentEditing = item
			},
			handleSaveEditKeyDown(e, index ,item){
				const value = e.target.value.trim()
				if(!value.length){
				return	this.todos.splice(index, 1)
				}
				item.title = value
				this.currentEditing = null
			},
			handleCancleEditEsc(){
				this.currentEditing = null
			},
			handleClickAllDown(){
				//数组的索引会变,需要减一
				// for(let i = 0; i < this.todos.length; i ++){
				// 	if(this.todos[i].completed == true){
				// 		this.todos.splice(i, 1)
				// 		i --
				// 	}
				// }
				this.todos = this.todos.filter(t => !t.completed)
			}
			// ,
			// getRemainingCount(){
			// 	return this.todos.filter(t => !t.completed).length
			// }
		}
	}).$mount('#app')
	// 页面初始化调用一次
	window.onhashchange = handleHashChange

	handleHashChange()

	function handleHashChange(){
		app.filterText = window.location.hash.substr(2)
	}
	

})(window);
