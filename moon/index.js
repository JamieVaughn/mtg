const { header, h1, h2, h3, h5, h6, article, div, span, footer }
	= Moon.view.m;

const updateTodo = ({ data, view }) => {
	const dataNew = {
		...data,
		todo: view.target.innerText
	};
    console.log(view.target.innerText, data, dataNew)
	return {
		data: dataNew,
		view: <viewTodos data=dataNew/>
	};
};

const createTodo = ({ data, view }) => {
	const dataNew = {
		todo: "",
		todos: [...data.todos, data.todo]
	};
    view.target.previousElementSibling.innerText = ''
	return {
		data: dataNew,
		view: <viewTodos data=dataNew/>
	};
};

const removeTodo = index => ({ data }) => {
	const dataNew = {
		...data,
		todos: data.todos.filter(
			(todo, todoIndex) =>
				todoIndex !== index
		)
	};

	return {
		data: dataNew,
		view: <viewTodos data=dataNew/>
	};
};

const viewTodos = ({ data }) => (
	<div>
        <myHeader></myHeader>
        <myLoader></myLoader>
            <myCards></myCards>
        </div>
        <div contentEditable=true @input=updateTodo></div>
		<h2 @click=createTodo>Create Todo Item</h2>
		<div children=(data.todos.map((todo, index) =>
			<div @click=(removeTodo(index))>
				{todo}
			</div>
		))/>
	</div>
);
var cards = fetch('../json/backup.json').then(resp=>resp.json()).then(data=>data.cards)
const myHeader = () => <h1>MTG: Booster Pack Showcase</h1>;
const myLoader = () => <h2>Loading...</h2>;
const myCards = 
<div class='showcase' children=(cards.map(c =>
    <div class='card' @click=console.log('hover')>
        <div class='content'>
        <img src='../img/card_back.jpeg' class='back'/>
        <article title='Card Set: ${c.setName}' class='front'>
            <div class='${c.colors[0] || c.colorIdentity[0]} ${c.types.join(' ')} ${c.text && c.text.includes('Devoid') ? 'Devoid' : ''} border ${c.rarity}'>
                <header>
                    <span class='name' title='${c.name}'>${c.name}</span>
                    <span class='cost'>{c.manaCost ? renderMana(c.manaCost) : ''}</span>
                </header>
                <img
                class='magic portrait'
                src=c.imageUrl ? c.imageUrl : 'https://via.placeholder.com/200/d3d3d3/222?text=IMAGE+NOT+FOUND' />
                <h3>
                    <span class='type' title='Type: ${c.type}'>${c.type}</span>
                </h3>
                <div class=c.text && c.text.length > 160 ? 'card-text small-font' : 'card-text'>
                    {c.text ? c.text && c.text.match(/[\{\}]+/) ? renderMana(c.text) : c.text : c.flavor}
                </div>
                <footer class='footnote'>
                    <span class='illus' title='${c.artist}'>Illus. @ ${c.artist}</span>
                    <span class='p-t'>{c.types.includes('Creature') ? c.power + ' / ' + c.toughness : ''}</span>
                </footer>
            </div>
        </article>
        </div>
        </div>
    ))/>

Moon.use({
	data: Moon.data.driver,
	view: Moon.view.driver("#root")
});

Moon.run(() => {
	const data = {
		todo: "",
		todos: [
			"Learn Moon",
			"Take a nap",
			"Go shopping"
		]
	};

	return {
		data,
		view: <viewTodos data=data/>
	};
});