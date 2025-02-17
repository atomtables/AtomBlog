<script>
    import {slide} from "svelte/transition";
    import Button from "$lib/components/Button.svelte";
</script>

<div class="w-full m-auto py-2 -z-10" transition:slide>
    <div class="max-w-3xl mx-auto backdrop-blur-xl bg-gray-800 bg-opacity-50 p-5 rounded-2xl">
        <Button icon="/icons/back.png" href="/" className="w-min self-start mb-5">Back</Button>
        <hr class="my-0 mb-5">
        <h1>Welcome to the atom blog!</h1>
        <p>I'm Adithiya Venkatakrishnan, a 15 year old interested in the world of computers, software development,
        and music. You can check me out at <a href="//atomtables.dev" class="underline">atomtables.dev</a>.</p>
        <p>This blog is a collection of my personal projects, opinions, thoughts, etc. It's by no means meant to be
            factual, exact, or anything else. It's just my experience as a young teen in a world of cool stuff.</p>
        <p>I don't stick to a single topic. After all this is just about my random thoughts and projects, so there's
        just a whole lot of information I'm putting out there.</p>
        <p>This website was made using SvelteKit and Svelte 4.</p>
    </div>
</div>