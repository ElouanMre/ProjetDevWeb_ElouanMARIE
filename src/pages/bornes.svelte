<script>
  import { supabase } from "../lib/supabaseClient";
  import { onMount } from "svelte";

  let bornes = null;

  onMount(async () => {
    let { data } = await supabase.from("bornes").select(`
                                name,
                                address,
                                emplacements (
                                  id,
                                  free
                                )
                              `);

    console.log(data);
    bornes = data;
  });

  const updateEmplacement = async (id, free) => {
    const { data, error } = await supabase
      .from("emplacements")
      .update({ free: free })
      .eq("id", 1);
  };
</script>

<div>
  <button on:click|once={() => updateEmplacement(1, true)}>
    Click me
  </button>
  {#if bornes}
    {#each bornes as borne}
      <div>{borne.name}</div>
    {/each}
  {:else}
    <p>Loading ...</p>
  {/if}
</div>