<script>
    /**
    * @type {string[]}
    */
    export let options;
    export let name = "radio-direct";
    export let selected = -1;
    export let onchecked = (/** @type {number} */ i) => {
        selected = i;
    }
</script>

<div class="space-y-2 mt-2">
    {#each options as option, i}
	    <label class="flex items-center space-x-2">
	    	<input class="radio" type="radio" {name} value={i} on:click={()=>onchecked(i)} />
	    	<p>{@html option}</p>
	    </label>
    {/each}
</div>