/*let lesson = ['Maths', 'History','Biology','English']

console.log(lesson)
console.log(lesson[0])
console.log(lesson[1])
console.log(lesson.length)

lesson[0]-'Geography'
console.log(lesson)

lesson[4]-'Maths'
console.log(lesson)

console.log('удалить',lesson.pop())
console.log(lesson)

lesson.push('Maths')
console.log(lesson)


lesson.shift()
console.log(lesson)


lesson.unshift('Geography')
console.log(lesson)

lesson.splice(1,4)
console.log(lesson)*/


let body = document.querySelector('body')

let button = document.createElement('div')
button.classList = ('button')


let box = document.createElement('div')
box.classList = ('block')
body.append(button)
body.append(box)


let colors = [ 'red','green','blue']

button.addEventListener('click', () => createColor())

let index = 0
function createColor() {
    if (index<=2){    
    let box = document.querySelector('.block')
    box.style.backgroundColor = colors[index]
    index++
    }
  else {
      index = 0
    }

}