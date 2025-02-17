<script>
    import articles from "$lib/articles.js";
    import Button from "$lib/components/Button.svelte";
    import {slide} from "svelte/transition";

    export let data;
</script>

<div class="w-full m-auto py-2 -z-10" transition:slide>
    <div class="max-w-3xl mx-auto backdrop-blur-xl bg-gray-800 bg-opacity-50 p-5 rounded-2xl">
        <Button icon="/icons/back.png" href="/" className="w-min self-start mb-5">Back</Button>
        <h1 class="text-5xl">{data.title}</h1>
        <h3>{data.description}</h3>
        <h4 class="text-gray-400 mb-2">{data.date.toLocaleDateString()}</h4>
        <hr class="my-5">
        {@html data.content}
        <hr class="my-5">
        <Button icon="/icons/back.png" href="/" className="w-min self-start">Back</Button>
    </div>
</div>