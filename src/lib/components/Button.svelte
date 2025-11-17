<script>
    let innerWidth;
    let innerHeight;

    export let href = "";
    export let action = null;
    export let className = "";

    export let icon;

    export let selected;
</script>

{#if !href}
    <button on:click={action}
       class="inline-block text-base text-center transition-all duration-250
           bg-green-950 bg-opacity-50 backdrop-blur-xl rounded-full shadow-2xl
           text-nowrap overflow-ellipsis cursor-pointer hover:bg-scheme-green-200 {selected && 'animatedbackground'}
           active:bg-scheme-green-300 h-inherit {className}">
        <span class="flex content-center align-middle h-12">
            <span class="place-self-center h-full rounded-full grid place-items-center aspect-square border-white">
                <img src={icon} alt="icon" class="block h-8"/>
            </span>
            <span class="border-gray-800 py-4 pr-4 text-2xl place-self-center font-bold">
                <slot/>
            </span>
        </span>
    </button>
{:else}
    <a {href} on:click={action}
       class="inline-block text-base text-center transition-all duration-250
           bg-green-950 bg-opacity-50 backdrop-blur-xl rounded-full shadow-2xl
           text-nowrap overflow-ellipsis cursor-pointer hover:bg-scheme-green-200 {selected && 'animatedbackground'}
           active:bg-scheme-green-300 h-inherit {className}">
        <span class="flex content-center align-middle h-12">
            <span class="place-self-center h-full rounded-full grid place-items-center aspect-square border-white">
                <img src={icon} alt="icon" class="block h-8"/>
            </span>
            <span class="border-gray-800 py-4 pr-4 text-2xl place-self-center font-bold">
                <slot/>
            </span>
        </span>
    </a>
{/if}

<style lang="postcss">
    @keyframes osxcolor {
        0% {
            @apply bg-scheme-green-100
        }
        50% {
            @apply bg-scheme-green-200
        }
        100% {
            @apply bg-scheme-green-100
        }
    }

    /*noinspection CssUnusedSymbol*/
    .animatedbackground {
        animation: osxcolor 2s ease-in-out infinite;
    }
</style>