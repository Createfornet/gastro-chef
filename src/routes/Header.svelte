<script>
	import logo from '$lib/images/logo.png';
	import phone from '$lib/images/phone.svg';
	import menu from '$lib/images/menu.svg';

	function handleOpenMenu() {
		isMenuOpen = true;
	}

	function handleCloseMenu() {
		isMenuOpen = false;
	}

	let isMenuOpen = false;
</script>

<header class="p-5 h-24">
	<div class="h-8 flex items-center justify-between rounded-full bg-navbar">
		<div class="bg-white rounded-full size-32 flex items-center justify-center drop-shadow-2xl">
			<img src={logo} alt="The site logo" />
		</div>

		<div class="bg-white size-16 rounded-full flex items-center justify-center p-4 drop-shadow-2xl">
			<img src={phone} alt="phone logo" />
		</div>

		<button
			on:click={handleOpenMenu}
			class="bg-white size-16 rounded-full flex items-center justify-center p-4 drop-shadow-2xl"
		>
			<img src={menu} alt="menu logo" />
		</button>
	</div>

	{#if isMenuOpen}
		<nav class="px-5 absolute top-0 left-0 bg-white z-20 w-full rounded-b-3xl overflow-hidden">
			<div class="w-full border-2 flex flex-row justify-between">
				<ul class="">
					<li class="">
						<a class="" href="/"> Nutrition programs </a>
					</li>

					<li class="">
						<a class="" href="/"> Business lunch </a>
					</li>

					<li class="">
						<a class="" href="/"> Gastro Shop </a>
					</li>

					<li class="">
						<a class="" href="/"> About Us </a>
					</li>

					<li class="">
						<a class="" href="/"> Blog </a>
					</li>
				</ul>

				<div class="w-16 flex flex-col justify-between">
					<button
						on:click={handleCloseMenu}
						class="bg-white size-16 rounded-full flex items-center justify-center p-4 drop-shadow-2xl"
						>x</button
					>

					<ul class="flex flex-col items-center">
						<li><button>EN</button></li>
						<li><button>RU</button></li>
						<li><button>UA</button></li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="absolute top-0 w-full bg-backlay h-screen"></div>
	{/if}
</header>
