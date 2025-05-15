class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super(); // Inherit everything from HTMLElement

		// EXPOSE - START (All expose numbers start with A)
		// A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
		this.attachShadow({ mode: 'open' });

		// A2. TODO - Create an <article> element - This will hold our markup once our data is set
		this.article = document.createElement('article');

		// A3. TODO - Create a style element - This will hold all of the styles for the Web Component
		this.styleElement = document.createElement('style');

		// A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything INSIDE the <style> tag>)
		this.styleElement.textContent = `
		article {
			background-color: white;
			border-radius: 8px;
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
			overflow: hidden;
			width: 250px;
			transition: transform 0.3s ease;
			cursor: pointer;
		}
		
		article:hover {
			transform: scale(1.05);
		}
		
		img {
			width: 100%;
			height: 150px;
			object-fit: cover;
		}
		
		.card-content {
			padding: 16px;
		}
		
		h2 {
			margin-top: 0;
			margin-bottom: 8px;
			font-size: 1.2rem;
		}
		
		a {
			color: inherit;
			text-decoration: none;
		}
		
		.organization {
			color: #666;
			font-size: 0.9rem;
			margin-bottom: 8px;
		}
		
		.details {
			display: flex;
			justify-content: space-between;
			margin-bottom: 8px;
			color: #666;
			font-size: 0.8rem;
		}
		
		.ingredients {
			color: #666;
			font-size: 0.9rem;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		
		.rating {
			color: #ff6b00;
		}`;

		// A5. TODO - Append the <style> and <article> elements to the Shadow DOM
		this.shadowRoot.appendChild(this.styleElement);
		this.shadowRoot.appendChild(this.article);
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;

		// A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
		const article = this.article;

		// A7. TODO - Set the contents of the <article> with the <article> template given in
		//           cardTemplate.html and the data passed in (You should only have one <article>,
		//           do not nest an <article> inside another <article>). You should use template
		//           literals (template strings) and element.innerHTML for this.
		// 			 Do NOT include the <article> tags within the innerHTML of the element you create.
		//           Remember to replace all the placeholders in the template with the data passed in.
		//           i.e. imgSrc, titleLnk, etc
		article.innerHTML = `
			<img src="${data.imgSrc}" alt="${data.imgAlt}">
			<div class="card-content">
				<h2><a href="${data.titleLnk}">${data.titleTxt}</a></h2>
				<div class="organization">${data.organization}</div>
				<div class="details">
					<div class="rating">★ ${data.rating} (${data.numRatings})</div>
					<div class="time">${data.lengthTime}</div>
				</div>
				<div class="ingredients">${data.ingredients}</div>
			</div>
		`;
	}
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);