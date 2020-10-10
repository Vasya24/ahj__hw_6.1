const listItems = document.querySelectorAll('.task_list_item');
const lists = document.querySelectorAll('.task_list');

let draggedItem = null;

for (let i = 0; i < listItems.length; i++) {
	const item = listItems[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function() {
			item.classList.add('hide')
		}, 0)
	});

	item.addEventListener('dragend', function() {
		setTimeout(function() {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function(e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function(e) {
			e.preventDefault();
			this.classList.add('hovered')
		});

		list.addEventListener('dragleave', function() {
			this.classList.remove('hovered');
		});

		list.addEventListener('drop', function() {
            this.append(draggedItem);
            this.classList.remove('hovered')
		});
	}
}
