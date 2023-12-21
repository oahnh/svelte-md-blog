<script lang="ts">
	export let data;
  const {title, date, Content} = data;
</script>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<!-- <svelte:component this={data.content} /> if not destructuring data, creates an arbitrary component-->
  <Content />
</article>
