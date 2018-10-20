// // Створити масиви і вивести їх в консоль:
// // - з 20 випадкових дробових чисел від 0 до 1;
// // - з 30 випадкових цілих чисел від 1 до 100;
// // - з трьох строк тексту випадкової довжини від 8 до 16 символів;
// // - з 6-и чисел, що відповідають кодам символів строки "Hello!"

(function task1(){

	console.groupCollapsed("Масив з 20 випадкових дробових чисел від 0 до 1");

	let arr1 = [];

	for(let i = 0; i<20; i++){

		arr1.push(Math.random());
	}

	console.log(arr1);

	console.groupEnd();

	console.groupCollapsed("Масив з 30 випадкових цілих чисел від 1 до 100");

	let arr2 = [];

	for(let i = 0; i<30; i++){

		arr2.push(Math.floor(Math.random() * 99) + 1);
	}

	console.log(arr2);

	console.groupEnd();

	console.groupCollapsed("Масив з трьох строк тексту випадкової довжини від 8 до 16 символів");

	let arr3 = [];

	for(let i = 0; i<3; i++){

		let s = "";
		let l = Math.floor(Math.random() * 9 + 8);

		for (let j = 0; j < l; j++) {
			s+=String.fromCharCode((Math.floor(Math.random() * 25 + 97)));
		}

		arr3.push(s);
	}

	console.log(arr3);

	console.groupEnd();

	console.groupCollapsed("Масив з 6-и чисел, що відповідають кодам символів строки 'Hello!'");

	let arr4 = [];
	let str = "Hello!";

	for(let i = 0; i<str.length; i++){

		arr4.push(str.charCodeAt(i));
	}

	console.log(arr4);

	console.groupEnd();

})();

// Створіть циклом масив з цифр [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024].
// Спробуйте створити цей масив використовуючи тільки лічильник, без додаткових змінних.

(function task2(){

	console.groupCollapsed("Масив з цифр [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]");

	let arr = [];

	for(let i = 1; i<=1024;  ){

		arr.push(i);
		i*=2;
	}

console.log(arr);

console.groupEnd();
	
})();

// Створити двовимірний масив 10х10 випадкових чисел від 1 до 10.
// Підрахувати: середнє значення всіх цифр, мінімальне та максимальне значення сумм цифр у колонках і рядках.

(function task3(){

	console.groupCollapsed("Двовимірний масив 10х10");

	let mas = [];

	for(let i = 0; i<10; i++){

		mas[i] = [];

		for(let j = 0; j<10; j++){

			mas[i][j]= Math.floor(Math.random() * 9 + 1);
		}
	}

	console.log(mas);

	let count = 0;
	let sum = 0;
	let sumCol = [];
	let sumLine = [];

	for(let k = 0; k<mas.length; k++){

		count+=mas[k].length;
		sumLine[k] = 0;
		sumCol[k] = 0;

		for(let n = 0; n<mas[k].length; n++){

			sum+=mas[k][n];
			sumLine[k] +=mas[k][n];
			sumCol[k] +=mas[n][k];
		}
	}

	console.log('Середнє значення всіх цифр = '+(sum/count));
	console.log('Сумми цифр у рядках : '+sumLine);
	console.log('Сумми цифр у колонках : '+sumCol);
	console.log('Мінімальне значення сумм цифр у рядках : '+getMinInArray(sumLine));
	console.log('Максимальне значення сумм цифр у рядках : '+getMaxInArray(sumLine));
	console.log('Мінімальне значення сумм цифр у колонках : '+getMinInArray(sumCol));
	console.log('Максимальне значення сумм цифр у колонках : '+getMaxInArray(sumCol));

	function getMinInArray(arr){

		let res = arr[0];

		for(let i = 1; i<arr.length; i++){

			if(arr[i]<res){
				res = arr[i];
			}
		}
		return res;
	}

	function getMaxInArray(arr){

		let res = arr[0];

		for(let i = 1; i<arr.length; i++){

			if(arr[i]>res){
				res = arr[i];
			}
		}
		return res;
	}

	console.groupEnd();

})();

// Перевірте, що ваша функція, яка видає випадкове число від 50 до 100, працює правильно: викличте її 50 мільйонів разів та переконайтеся, що кожне число випало приблизно 1 мільйон разів.
// Особливу увагу приділіть першому та останньому числу (50 та 100).
// Строго кажучи, в даному випадку вірогідність випадання кожного числа - 980 тисяч, оскільки в проміжку [50..100] є 51 число і 50 млн. / 51 = 0,98 млн.

(function task4(){

	console.groupCollapsed("Перевірка правильності роботи функції");

	let arr = [];
	arr.length = 51;
	arr.fill(0);

	for(let i = 1; i<50000000; i++){

		let res = getRandom(50, 100);
		arr[res-50]++;
	}

	let sum = 0;
	for(let i = 0; i<arr.length; i++){

		sum+=arr[i];
	}

	console.log('Середня вірогідність випадання кожного числа : '+sum/arr.length/1000000+' млн. разів');
	console.log('Перше число випало : '+arr[0]/1000000+' млн. разів');
	console.log('Останнє число випало : '+arr[arr.length-1]/1000000.+' млн. разів');

	function getRandom(min, max){

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	console.groupEnd();
	
})();

// Створіть циклом масив з 5 трійок. Змініть перший елемент на пустий масив, а другий - на слово "ківі".
// Додайте 7-й елемент, виведіть масив в консоль.
// Ініціалізуйте 6-й елемент підмасивом з 5 трійок найоптимальнішим способом.
// Результат виведіть в консоль.

(function task5(){

	console.groupCollapsed("Завдання з масивом з 5 трійок");

	let arr = [];
	for(let i = 0; i<5; i++){
		arr[i] = 3;
	}

	arr[0] = [];
	arr[1] = "ківі";

	arr[6] = 3;
	console.log(arr);

	arr[5] = [];
	arr[5].length = 5;
	arr[5].fill(3);

	console.groupEnd();

})();

// Дано масив чисел:
// [5, 10, 15, 7, 9, 12, 4, 2, 1]
// Виведіть в консоль масив посортований в прямому та зворотньому порядку не застосовуючи метод .reverse().
// Створіть масив строк кольорів райдуги, посортуйте їх у прямому та зворотньому напрямку.

(function task6(){

	console.groupCollapsed("Відсортовані масиви чисел");

	let arr = [5, 10, 15, 7, 9, 12, 4, 2, 1];

	arr.sort(function(a,b){
		return a-b;
	});

	console.log(arr);

	arr.sort(function(a,b){
		return b-a;
	});

	console.log(arr);

	console.groupEnd();

	console.groupCollapsed("Відсортовані масиви кольорів райдуги");

	let color = ['red','orange', 'yellow', 'green', 'light blue', 'blue', 'purple'];

	color.sort();
	console.log(color);

	color.sort(function(a,b){

		if (a<b) {
			return 1;
		}

		return -1;

	});

	console.log(color);

	console.groupEnd();
	
})();

// Прграмно створіть двовимірний масив mAs 3*3 заповнений числами - результатом множення номера рядка на номер колонки (комірки).
// В другий рядок добавте на початок 5, а в кінець - 7.
// Переберіть масив методом forEach, виведіть в консоль матрицю з цифр 0 чи 1 в залежності від того - непарне чи парне число.
// Виведіть в консоль.
// З першого рядка вилучіть та збережіть у змінну останній елемент, а з третього рядка - другий елемент.
// З середнього рядка вилучіть другий елемент і замініть його двома новими елементами, які ви вилучили перед цими.
// В консоль виведіть масив, а також добуток третього вилученого елемента з дргим елементом, який піднятий до степеня першого елемента.

(function task7(){

	console.groupCollapsed("Двовимірний масив 3*3");

	let arr = [];

	for(let i = 0; i<3; i++){

		arr[i] = [];

		for(let j = 0; j<3; j++){

			arr[i][j] = (i+1)*(j+1);
		}
	}

	arr[1].unshift(5);
	arr[1].push(7);

	let mat = [];

	arr.forEach(function(item,i){

		mat[i] = [];

		item.forEach(function(e,n){

			if(e%2===0){

				mat[i][n] = 0;
			}
			else{

				mat[i][n] = 1;
			}
		});
	});

	console.log(mat);

	let x = arr[0].pop();
	let y = arr[2].splice(1,1)[0];
	let z = arr[1].splice(1,1,x,y)[0];

	console.log(arr);
	console.log('Добуток третього вилученого елемента з дргим елементом, який піднятий до степеня першого елемента = '+ Math.pow(z*y, x)
);

	console.groupEnd();

})();

// Створіть масив строк з обласних центрів України. Посортуйте їх в прямому порядку по другій літері, в зворотньому напрямку - по останній, результати виведіть в консоль.

(function task8(){

	console.groupCollapsed("Масив обласних центрів");

	let alph = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя';

	let arr = ["Вінниця","Дніпро","Донецьк","Житомир","Запоріжжя",
	"Івано-Франківськ","Київ","Кропивницький","Луганськ","Луцьк",
	"Львів","Миколаїв","Одеса","Полтава","Рівне","Суми","Тернопіль",
	"Ужгород","Харків","Херсон","Хмельницький","Черкаси","Чернівці","Чернігів"];

	arr.sort(function(a,b){

		let x = alph.indexOf(a[1]);
		let y = alph.indexOf(b[1]);

		if(x===y){

			x = alph.indexOf(a[2]);
			y = alph.indexOf(b[2]);

			if(x===y){

				x = alph.indexOf(a[3]);
				y = alph.indexOf(b[3]);
			}
		}
		return x-y;
	});

	console.log(arr);

	arr.sort(function(a,b){

		let x = alph.indexOf(a[a.length-1]);
		let y = alph.indexOf(b[b.length-1]);

		if(x===y){

			x = alph.indexOf(a[a.length-2]);
			y = alph.indexOf(b[b.length-2]);

			if(x===y){

				x = alph.indexOf(a[b.length-3]);
				y = alph.indexOf(b[b.length-3]);
			}
		}
		return y-x;
	});

	console.log(arr);

	console.groupEnd();
	
})();

// Задано масив:
// [7, 2, "35", 1, 16, 8, "html", 's', 99]
// Потрібно:
// - видалити з масива строкові дані (пошук строкових значень здійснити програмно);
// - добавити числа 5 і 40;
// - відсортувати масив за зростанням;
// - вивести результат в консоль.

(function task9(){

	console.groupCollapsed("Масив без строкових даних");

	let arr = [7, 2, "35", 1, 16, 8, "html", 's', 99];

	arr = arr.filter(function(e) {

		if (typeof (e)!=="string") return e;
	});

	arr.push(5,40);

	arr.sort(function(a,b){

		return a-b;
	});

	console.log(arr);

	console.groupEnd();
	
})();

// Дано 2 масива з 5 елементів кожен, в яких знаходяться строкові значення кольорів (виберіть довільні, але щоб не дублювалися на одних і тих же місцях в обох масивах).
// В html створіть список <ul id="list"> з п'ятьох елементів, з іменами героїв вашого улюбленого телешоу, серіалу, улюблених страв...
// Програмно добавте нумерацію рядків до списка і крапку з комою - в кінці рядка:
// 1) Minecraft;
// 2) Counter Strike;
// ...
// Спробуйте зробити, щоб останній пункт закінчувався крапкою.
// Доступ до елементів списку здійсніть так:
// let li = document.getElementById('list').children;
// Пофарбуйте колір тексту елементів списку у кольори з першого масиву, а бекграунди задайте кольорами з другого масиву:
// element.style.color = "green";
// element.style.backgroundColor = "white";
// Добавте ще елементів у список та модифікуйте скрипт, щоб він циклічно зафарбовував елементи (достатньо мінімальних змін).

(function task10(){

	let color1 = ['yellow', 'red', 'green', 'blue', 'orange'];
	let color2 = ['pink', 'grey ', 'brown', 'purple', 'green'];
	let li = document.getElementById('list').children;

	for(let i = 0; i<li.length; i++){

		if(i!==li.length-1){

			li[i].innerText = i+1+') '+li[i].innerText+';';
		}
		else{

			li[i].innerText = i+1+') '+li[i].innerText+'.';
		}
	}

	for (let i = 0; i < li.length; i++){
		
		li[i].style.color = color1[i];
		if(i>=color1.length){
			li[i].style.color = color1[i%color1.length];
		}
		li[i].style.backgroundColor = color2[i];
		if(i>=color2.length){
			li[i].style.backgroundColor = color2[i%color2.length];
		}
	}	
	
})();

// Створити 3-вимірний масив 4*4*4 елементів, записати в нього перші 64 простих чисел, починаючи з 13.
// Функцію пошуку простих чисел постарайтесь оптимізувати, щоб вона не перевіряла парні числа, і ті, що діляться на 3 та 5.

(function task11(){

	console.groupCollapsed("3-вимірний масив 4*4*4 елементів, що містить перші 64 простих числа, починаючи з 13");

	let arr = [];
	let c = 13;
	let res = 0;

	for(let i = 0; i<4; i++){

		arr[i] = [];

		for(let j = 0; j<4; j++){

			arr[i][j] = [];

			for(let k = 0; k<4; k++){

				do{

					res = PrimeNumber(c);
					c++;
				}
				while(res===0);

				arr[i][j][k] = res;
			}
		}
	}

	console.log(arr);

	function PrimeNumber(n){

		if(n%2===0||n%3===0||n%5===0){
			return 0;
		}
		for(let i = 2; i<n;i++){

			if(n%i===0){

				return 0;
			}
		};
		return n;
	};

	console.groupEnd();

})();