<script lang="ts">
    import { RESUME } from "$lib/params";

    const { item, title } = RESUME;

</script>

<div class="resume" style="justify-content: center;" >
    {#if item}
    <iframe title="Resume" src={item} width=100% height=1000px  allow="autoplay">
    </iframe>
    {:else}
        <p>Ooops! no CV at the moment.</p>
    {/if}
</div>