<script lang="ts">
	import { test } from '$lib';
	import Head from '$lib/Head.svelte';

	function onclick() {
		test();
	}
</script>

<Head home={true} title={'Template'} />

<button {onclick}>test</button>
