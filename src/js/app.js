let cards = document.getElementsByClassName('task_card');
let lists = document.getElementsByClassName('task_list')
for (let card of cards) {
card.addEventListener('dragstart', (e) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('Text', e.target.getAttribute('id'))
    e.dataTransfer.setDragImage(e.target,10,10);
    return true;
});

card.addEventListener('dragend', () => {
    console.log('Эх тыыыы')
})

}
for (let list of lists) {
list.addEventListener('dragenter', (e) => {
    e.preventDefault();
    return true
    
});
list.addEventListener('dragover', (e) => {
    e.preventDefault();
})
list.addEventListener('drop', (e) => {
    let data = e.dataTransfer.getData('Text');
    e.target.appendChild(document.getElementById(data));
    e.stopPropagation();
    return false
})
}