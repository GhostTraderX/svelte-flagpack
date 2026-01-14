<script lang="ts">
	import Flag from 'svelte-flagpack';
	
	const sizes = ['s', 'm', 'l'] as const;
	const gradients = ['', 'top-down', 'real-linear', 'real-circular'] as const;
	const countries = [
		{ code: 'NL', name: 'Netherlands' },
		{ code: 'US', name: 'United States' },
		{ code: 'GB-UKM', name: 'United Kingdom' },
		{ code: 'FR', name: 'France' },
		{ code: 'DE', name: 'Germany' },
		{ code: 'JP', name: 'Japan' },
		{ code: 'BR', name: 'Brazil' },
		{ code: 'CA', name: 'Canada' },
		{ code: 'AU', name: 'Australia' },
		{ code: 'IT', name: 'Italy' }
	];

	// For local development, use the local flags from the linked package
	const localFlagsBaseUrl = '/node_modules/svelte-flagpack/dist/flags';
</script>

<main>
	<h1>Svelte Flagpack Demo</h1>
	<p>Beautiful flag components for Svelte 5 and SvelteKit</p>

	<section>
		<h2>Sizes</h2>
		<div class="demo-row">
			{#each sizes as size}
				<div class="demo-item">
					<Flag code="NL" {size} flagsBaseUrl={localFlagsBaseUrl} />
					<span class="label">Size: {size}</span>
				</div>
			{/each}
		</div>
	</section>

	<section>
		<h2>Gradients</h2>
		<div class="demo-row">
			{#each gradients as gradient}
				<div class="demo-item">
					<Flag code="NL" size="l" {gradient} flagsBaseUrl={localFlagsBaseUrl} />
					<span class="label">{gradient || 'none'}</span>
				</div>
			{/each}
		</div>
	</section>

	<section>
		<h2>Borders & Shadows</h2>
		<div class="demo-row">
			<div class="demo-item">
				<Flag code="NL" size="l" hasBorder={true} flagsBaseUrl={localFlagsBaseUrl} />
				<span class="label">With Border</span>
			</div>
			<div class="demo-item">
				<Flag code="NL" size="l" hasBorder={false} flagsBaseUrl={localFlagsBaseUrl} />
				<span class="label">No Border</span>
			</div>
			<div class="demo-item">
				<Flag code="NL" size="l" hasDropShadow={true} flagsBaseUrl={localFlagsBaseUrl} />
				<span class="label">With Shadow</span>
			</div>
			<div class="demo-item">
				<Flag code="NL" size="l" hasBorderRadius={false} flagsBaseUrl={localFlagsBaseUrl} />
				<span class="label">No Radius</span>
			</div>
		</div>
	</section>

	<section>
		<h2>Country Collection</h2>
		<div class="country-grid">
			{#each countries as country}
				<div class="country-item">
					<Flag code={country.code} size="l" flagsBaseUrl={localFlagsBaseUrl} />
					<span class="country-name">{country.name}</span>
				</div>
			{/each}
		</div>
	</section>

	<section>
		<h2>Advanced Example</h2>
		<div class="demo-row">
			<div class="demo-item">
				<Flag 
					code="US" 
					size="l" 
					gradient="real-linear" 
					hasDropShadow={true}
					class="custom-flag"
					flagsBaseUrl={localFlagsBaseUrl}
				/>
				<span class="label">Combined effects</span>
			</div>
		</div>
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		background: #f5f5f5;
	}

	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
		min-height: 100vh;
	}

	h1 {
		color: #333;
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	h2 {
		color: #555;
		font-size: 1.5rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
		border-bottom: 2px solid #eee;
		padding-bottom: 0.5rem;
	}

	p {
		color: #666;
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}

	section {
		margin-bottom: 3rem;
	}

	.demo-row {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
		align-items: flex-start;
	}

	.demo-item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
		padding: 1rem;
		background: #fafafa;
		border-radius: 8px;
		min-width: 100px;
	}

	.label {
		font-size: 0.875rem;
		color: #666;
		text-align: center;
	}

	.country-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 1.5rem;
	}

	.country-item {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: center;
		padding: 1.5rem;
		background: #fafafa;
		border-radius: 8px;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.country-item:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.country-name {
		font-size: 0.875rem;
		color: #444;
		font-weight: 500;
		text-align: center;
	}

	:global(.custom-flag) {
		transition: transform 0.3s;
	}

	:global(.custom-flag:hover) {
		transform: scale(1.1);
	}
</style>
