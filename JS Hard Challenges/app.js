// Q.1 Show rating. 
// Given a rating, display a star (*) for each full rating and a full -stop (.) for each half rating. 
// function showRating(rating) {
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings = ratings + "*"
//         if (i !== Math.floor(rating) - 1) {
//         ratings = ratings + " "
//         }
//     }
//     if (!Number.isInteger(ratings)) {
//         ratings = ratings + " ."
//         }
//     return ratings
// }
// console.log(showRating(7.5))

// function showRating(rating) {
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings += "*"
//         if (i !== Math.floor(rating) - 1) {
//         ratings += " "
//         }
//     }
//     if (!Number.isInteger(ratings)) {
//         ratings += " ."
//         }
//     return ratings
// }
// console.log(showRating(7.5))

/**
 * Initiate an empty string
 * loop through the rounded down rating
 * add a star for every iteration
 * if its not the last iteration add a space
 * if the number is not an integer
 * add a full stop
 * return it
 */

// Q.2 sort by lowest to highest price
// Given an array of numbers, return the prices shorted by low to high.

// function sortLowToHigh(arr) {
//     return arr.sort((a, b) => a - b);
// }
// console.log(sortLowToHigh([20, 40, 10, 30, 50, 10, 1000, 2000]))

// Q3. Sort by highest to lowest price
// Given an array of objects, return the prices sorted by high to low.

// function sortHighToLow(numbers) {
//     return numbers.sort((a, b) => {
//         return b.price - a.price
//     });
// }
// console.log(
//     sortHighToLow([
//     { id: 1, price: 50 }, 
//     { id: 2, price: 30 }, 
//     { id: 3, price: 60 }, 
//     { id: 4, price: 10 },
//     ])
// );

// function sortHighToLow(numbers) {
//     return numbers.sort((a, b) => b.price - a.price);
// }
// console.log(
//     sortHightToLow([
//     { id: 1, price: 50 }, 
//     { id: 2, price: 30 }, 
//     { id: 3, price: 60 }, 
//     { id: 4, price: 10 },
//     ])
// );

// Q4. Promises
// On Youtube, watch:

// "The Async Await Episode I Promised"
// - Fireship

// ASYNC AWAIT
// - Event loop
// - Demos with angular

// "Async Await JavaScript ES7"
// - Techsith (1.5x Speed)

// console.log('person1: shows ticket')
// console.log('person2: shows ticket')
 
// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000)
// });

// // const getPopcorn = promiseWifeBringingTicks.then((t) => {
// //     console.log('wife: i have the ticks');
// //     console.log('husband: we should go in');
// //     console.log('wife: no i am hungry');
// //     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
// // })

// // const getButter = getPopcorn.then((t) => {
// //     console.log('husband: i got some popcorn');
// //     console.log('husband: we should go in');
// //     console.log('wife: i need butter on my popcorn');
// //     return new Promise((resolve, reject) => resolve(`${t} butter`))
// // })

// // getButter.then((t) => console.log(t));

// const preMovie = async () => console.log('preMovie')

// preMovie().then(() => c);

// console.log('person4: shows ticket');
// console.log('person5: shows ticket')


// "Async JS Crash Course - Callbacks, Promises, Async Await"
// - Travsery Media (1.5x Speed)

// const posts = [
//     { title: 'Post One', body: 'This is post one'},
//     { title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// const posts = [
//     { title: 'Post One', body: 'This is post one'},
//     { title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post,) {
// return new Promise((resolve, reject) => {
//      setTimeout(() => {
//         posts.push(post);

//         const error = false

//         if(!error) {
//             resolve();
//         }
//         else(
//             reject('Error: Something went wrong')
//         )
//     }, 2000);
// })
// }

// // createPost({ title: 'Post Three', body: 'This is Post three' })
// //     .then(getPosts);
// //     .catch(err => console.log(err));

// async / Await

// async function init() {
//     await createPost({ title: 'Post Three', body: 'This is Post three' });

//     getPosts();
// }
// init();

// Async / await / Fetch
// async function fetchUsers() {
//     const res = await fetch
//     ('https://jsonplaceholder.typicode.com/users');
//     const data = await res.jason();
    
//     console.log(data)
// }

// fetchUsers();

// // Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//     setTimeout(resolve, 2000, 'Goodbye'))
// const promise4 = fetch
// ('https://jsonplaceholder.typicode.com/users').then( res => res.jason())

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values))

// function postsByUser(userId){
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(res => {
//             console.log(res);
//             console.log(userId)
//         })
// }

// postsByUser(4)

// Using Async / Await
// async function postsByUser(userId){
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

//     const result = await promise.json();

//     const posts = result.filter(element => element.userId === userId)

//     console.log(posts)
// }

// postsByUser(4)

// Q6. First 6 incomplete Todos
// Call this API “https://jsonplaceholder.typicode.com/todos” and return the first 6 incomplete todo’s from the result. 

// firstSixIncomplete() ——> 

async function firstSixIncomplete(userID){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json();

    const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6)

    console.log(incompleteTasks)
}

firstSixIncomplete(6)




