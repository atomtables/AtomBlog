<script>
    import Button from "$lib/components/Button.svelte";
    import articles from "$lib/articles.js";
    import {slide} from "svelte/transition";
    import {goto} from "$app/navigation";

    let moved = false;
    let slug = "";

    let navSlug = "";

    let filter = new Date();

    $: articless = articles.filter(article => filter > article.date).reverse()
    function click(s) {
        moved = true;
        slug = s;
        navSlug = s;
        setTimeout(() => {
            slug = ""
        }, 500);
    }
</script>

<div class="w-full m-auto py-2" transition:slide={{duration: 500}}>
    <div class="max-w-3xl mx-auto" >
        <div class="flex flex-col w-full bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-lg shadow-lg p-4 mb-4" transition:slide={{duration: 600}}>
            <span>
                Listing
                <b class="font-black">{articless.length} {#if !filter || articles.length === articless.length}(all){/if}</b>
                article{#if articless.length !== 1}s{/if} published before
                <input type="date" value={`${new Date().getFullYear()}-${(new Date().getMonth() + 1) < 10 ? `0${(new Date().getMonth() + 1)}` : (new Date().getMonth() + 1)}-${(new Date().getDate()) < 10 ? `0${(new Date().getDate())}` : (new Date().getDate())}`} on:input={e => filter = new Date(e.target.value)} />.
            </span>
        </div>
        {#each articless as article (article.slug)}
            {#if !(moved && article.slug !== slug)}
                <div class="flex flex-col w-full bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-lg shadow-lg p-4 mb-4" transition:slide={{duration: 250}}>
                    <h2 class="text-3xl font-bold mb-2">{article.title}</h2>
                    <h3 class="text-gray-400 mb-2 -mt-1">{article.date.toLocaleDateString()}</h3>
                    <p class="text-gray-300 mb-4 line-clamp-3">{@html article.description}</p>
                    <Button href={article.slug} action={() => click(article.slug)} icon="/icons/forward.png" className="w-min self-end">Read More</Button>
                </div>
            {/if}
        {/each}
    </div>
</div>
