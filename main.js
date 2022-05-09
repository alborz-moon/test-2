
const userData = [
    {name : 'Alborz', age : 26},
    {name : 'ali', age : 22},
    {name : 'amir' , age : 25},
]
function generateCart(name , age) {
    const cart = React.createElement('div',{className : 'cart'},

        React.createElement('span' , null , `name : ${name}`),
        React.createElement('span' , null , `age : ${age}`));

    return cart;
}
const dataBase = userData.map(data =>{
    generateCart(data.name,data.age)
});

const container = React.createElement('div',{className : 'container'},dataBase);

// ReactDOM.createRoot(container,document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(container);