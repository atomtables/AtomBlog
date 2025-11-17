<script>
    import { page } from '$app/stores'
</script>

<div class="grid w-screen place-items-center relative transition-all" id="content-onepage">
    <div class="text-center">
        <h3>Oopsie Daisy!</h3>
        <h1><code>Error {$page.status}</code></h1>
        <h1 class="text-5xl">{$page.error.message}!</h1>
        <img src="/Tom%20and%20Jerry%20Tom%20crashing.gif" alt="Tom and Jerry crashing" class="w-full mx-auto p-4 rounded-3xl" />
    </div>
</div>