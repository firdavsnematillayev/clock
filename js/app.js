// Рекурсия - это функция которая вызывает сама себя!
// setTimeout(функцию, задержка (ms)) - планировщик. Функция которая делает  вызов единоразово функции с задержкой. Планировщик сначала дождеться выполнения кода, потом сделает вызов.
// setInterval(функцию, задержка (ms)) - делает вызов с указанным интервалом. Выполняет запуск функции не дожидаясь выполнения кода
// id - индефикатор (ключ) планировщика
// clearTimeout() - очищает setTimeout
// clearInterval() - очищает setInterval

// let id; 
// let i = 0;
// function recurs() {
//     if(i < 5) {
//         console.log(i);
//         i++;
//         setInterval(recurs, 1000);
//     }
//     // if(i === 3) clearInterval(id);
// }
// recurs();

// let id = setInterval(function() {
//     console.log('Hello from setTimeout!');
// }, 1000);

// clearInterval(id);

// setInterval(function() {
//     console.log('Hello from setTimeout!');
// }, 1000);

// document - отдает всю HTML разметку
// .querySelector() - выводит селектор указанный в скобках. Если нету совпадений отдает null
// console.dir() - выводит элемент в качестве объекта
// console.log(document.body);
// console.log(document.body.querySelector('.tabsPanel'));
// console.log(document.body.querySelector('.text'));
// console.dir(document.querySelector('.tabsPanel'));


const s = document.querySelector('.s'),
      m = document.querySelector('.m'),
      h = document.querySelector('.h'),  
      hoursBlock = document.querySelector('.hours'),
      minutesBlock = document.querySelector('.minutes');
// new Date() - отдает строку с текущим временем устройства
// console.dir(new Date());

// -------------------Clock-------------------
function clock() {
    let time = new Date(),
        sec = time.getSeconds(),  /* получаем секунды */
        min = time.getMinutes(), /* получаем минуты */
        hor = time.getHours(); /* получаем часы */
        
        s.style = `transform: rotate(${sec * 6}deg)`;
        m.style = `transform: rotate(${min * 6}deg)`;
        h.style = `transform: rotate(${hor * 30}deg)`;
        
        // console.log(s.style.transform = `rotate(45deg)`);
        // console.log(s.style = `transform: rotate(70deg)`);
        // .innerHTML - возвращает содержимое элемента и может изменить его
        
        
        hoursBlock.innerHTML = hor < 10 ? '0' + hor : hor;
        minutesBlock.innerHTML = min < 10 ? '0' + min : min;
        
        
        setTimeout(clock, 1000);
}
clock();

// console.dir(new Date());
// console.log(hor, min, sec);
// console.log(hoursBlock.innerHTML = 'Victor');

const links = document.querySelectorAll('.tabsItem'),
      tabs = document.querySelectorAll('.tabsContentItem');
for(let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {/* вешаем на каждый элемент обработчик событий */
                for(let x = 0; x < links.length; x++) {
                        links[x].classList.remove('active'); /* удаляем класс active */
                        tabs[x].classList.remove('active');
                }  
                tab(this, tabs[i]);
        }) 
}
function tab(linkItem, tabItem) {
     linkItem.classList.add('active');   
     tabItem.classList.add('active');   
}
      
      
//  .addEventListener(event, callbackFn) - обработчик событий
//       console.log(links);
//       console.log(tabs);
// --------------------------Секундомер----------------------

let stopHours = document.querySelector('.stopwatch__hours'),
    stopMinutes = document.querySelector('.stopwatch__minutes'),    
    stopSeconds = document.querySelector('.stopwatch__seconds'),    
    stopMlSeconds = document.querySelector('.stopwatch__ml-seconds'),    
    stopBtn = document.querySelector('.stopwatch__btn'),
    indicator = document.querySelector('.tabsLink__span'),
    interval;
    
    
stopBtn.addEventListener('click', function() {
        indicator.classList.remove('active');
        indicator.classList.remove('active_clear');
        
        if(this.innerHTML === 'start') {
                this.innerHTML = 'stop';
                stopwatch();
                indicator.classList.add('active');
        }
        else if(this.innerHTML === 'stop') {
                this.innerHTML = 'clear';
                clearTimeout(interval);
                indicator.classList.add('active_clear');
        }
        else if(this.innerHTML === 'clear') {
                this.innerHTML = 'start';
                stopHours.innerHTML = 0;
                stopMinutes.innerHTML = 0;
                stopSeconds.innerHTML = 0;
                stopMlSeconds.innerHTML = 0;
        }
})
function stopwatch() {
        if(stopMlSeconds.innerHTML < 10) {
                stopMlSeconds.innerHTML++;
        }
        if(stopMlSeconds.innerHTML == 10) {
                stopSeconds.innerHTML++;
                stopMlSeconds.innerHTML = 0;
        }
        if(stopSeconds.innerHTML == 60) {
                stopMinutes.innerHTML++;
                stopSeconds.innerHTML = 0; 
        }
        if(stopMinutes.innerHTML == 60) {
                stopMinutes.innerHTML = 0;
                stopHours.innerHTML++; 
        }
        interval = setTimeout(stopwatch, 100);
}
