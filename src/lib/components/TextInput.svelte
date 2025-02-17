<script>
    export let label;
    export let name;
    export let placeholder;
    export let value;
    export let type;
    export let className;
</script>

<label class="flex-1">
    {label}
    {#if type === 'email'}
        <input name={name} type="email" placeholder={placeholder} bind:value={value}
               class="p-2 rounded-xl w-full my-2 {className}" required/>
    {:else if type === 'password'}
        <input name={name} type="password" placeholder={placeholder} bind:value={value}
               class="p-2 rounded-xl w-full my-2 {className}" required/>
    {:else if type === 'text'}
        <input name={name} type="text" placeholder={placeholder} bind:value={value} class="p-2 rounded-xl w-full my-2 {className}" required/>
    {/if}
</label>