<script>
    import {goto, invalidate} from "$app/navigation";
    import "$lib/app.css"

    import {slide} from "svelte/transition";
    import {sineInOut} from "svelte/easing";
    import BackgroundLaggers from "$lib/components/BackgroundLaggers.svelte";
    import Button from "$lib/components/Button.svelte";
    import {page} from "$app/stores";

    let innerWidth, innerHeight

    let collapsed = true;
</script>

<svelte:window bind:innerHeight bind:innerWidth/>

<BackgroundLaggers/>

<div class="h-full z-50 text-lg">
    <div class="w-full p-10 backdrop-blur-xl bg-[#001220] bg-opacity-45 flex justify-between fixed z-50">
        <a href="/">
            <img src="/atom blog.png" alt="the atom blog's logo" class="h-16">
        </a>
        <div class="flex-row space-x-3 h-min mt-auto hidden md:flex">
            <Button icon={$page.url.pathname === "/" ? "/icons/down.png" : "/icons/back.png"} href="/">Home</Button>
            <Button icon={$page.url.pathname === "/about" ? "/icons/down.png" : "/icons/forward.png"} href="/about">About</Button>
            <Button icon="/icons/external.png" href="//atomtables.dev">Portfolio</Button>
        </div>
    </div>
    <div class="min-h-screen w-full">
        <div class="pt-[154px]"></div>
        <slot/>
    </div>
    <footer class="relative w-full bg-neutral-800 mt-24 p-12 h-max">
        the atom blog: my personal statuses and projects
        <br>
        check me out at <a href="//atomtables.dev" class="text-blue-400">atomtables.dev</a>
        <br>
    </footer>
</div>