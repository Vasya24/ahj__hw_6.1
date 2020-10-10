
let cards = document.querySelectorAll('.task_list_item');
let lists = document.querySelectorAll('.task_list');
let dragged = null;

cards.forEach((card) => {
card.addEventListener('dragstart', dragstart);
card.addEventListener('dragend', dragend)
card.addEventListener('drop', drop)
const dragstart = function() {
    dragged = card
    setTimeout(() => {
        this.classList.add('hide')
    }, 0)
}

const dragend = function() {
    this.classList.remove('hide')
}
const dragover = function(e) {
    e.preventDefault()
}
const dragenter = function(e) {
    e.preventDefault();
    this.classList.add('hovered')
}
const dragleave = function() {
    this.classList.remove('hovered')
}
const drop = function() {
    this.append(card);
    this.classList.remove('hovered')
}

lists.forEach((list) => {
    list.addEventListener('dragover', dragover);
    list.addEventListener('dragenter', dragenter);
    list.addEventListener('dragleave', dragleave)
    list.addEventListener('drop', drop)
})
})