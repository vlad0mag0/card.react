import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div>
	<Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/434279main_soviet_rovers_lunokhod.jpg/267px-434279main_soviet_rovers_lunokhod.jpg" 
	title="Moon rover 1" text="The world's first moon rover, successfully working on the Moon" more="Learn more" learn="https://ru.wikipedia.org/wiki/%D0%9B%D1%83%D0%BD%D0%BE%D1%85%D0%BE%D0%B4-1"></Card>


	<Card img="https://images1.popmeh.ru/upload/img_cache/974/974c9e999779f51eabc46268550ef9c6_fitted_800x3000.jpg" 
	title="Apollo 15" text="The first manned lunar rover on the moon, on which David Scott and Jim Irwin rode" more="Learn more" learn="https://ru.wikipedia.org/wiki/%D0%90%D0%BF%D0%BE%D0%BB%D0%BB%D0%BE%D0%BD-15"></Card>

	<Card img="https://defence.ru/assets/content/paragraph/53086/43466/nasa-apollo-17-lunar-roving-vehicle-fotor.jpg?nocache=555245" 
	title="Apollo 16" text="The second American lunar rover. The astronauts traveled 27 kilometers on it." 
	more="Learn more" 
	learn="https://ru.wikipedia.org/wiki/%D0%90%D0%BF%D0%BE%D0%BB%D0%BB%D0%BE%D0%BD-15"></Card>
	
	<Card img="https://images1.popmeh.ru/upload/img_cache/258/258bb5ff289e94391a8648fe9bc58c5d_fitted_800x3000.jpg" 
	title="Apollo 17" text="The rover of the seventeenth Apollo developed a record 18 km / h at that time." more="Learn more" learn="https://ru.wikipedia.org/wiki/%D0%90%D0%BF%D0%BE%D0%BB%D0%BB%D0%BE%D0%BD-15"></Card>
	</div>
	, document.getElementById('root'))
	
	

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
