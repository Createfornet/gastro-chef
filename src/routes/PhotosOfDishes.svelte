<script>
	import { onMount } from 'svelte';
	import pic from '$lib/images/instence.png';

	const apiKey = '9f937ec05729480e8d9a38f9ae7e71fc';
	const API = `https://api.spoonacular.com/food/menuItems/search?query=kebab&number=3&apiKey=${apiKey}&includeNutrition=true`;

	let menuItems = [pic, pic, pic, pic, pic];

	console.log(menuItems);
	onMount(function () {
		async function fetchData() {
			for (let i = 0; i < 3; i++) {
				const res = await fetch('https://foodish-api.com/api/');
				const data = await res.json();

				menuItems = [...menuItems];
			}

			// const res = await fetch(API);
			// const data = await res.json();

			// menuItems = data.menuItems;
			console.log(menuItems);
		}
		// fetchData();
	});
</script>

<ul class="w-full p-3">
	{#each menuItems as item}
		<li>
			<div class="img-blob">
				<img src={item} alt={1} />
			</div>
		</li>
	{:else}
		<li>Loading...</li>
	{/each}
</ul>

<style>
	.img-blob {
		border-radius: 2rem;
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		margin-inline: auto;
	}

	img {
		width: 100%;
	}
</style>
