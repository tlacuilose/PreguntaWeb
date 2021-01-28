<script lang="typescript">
  import { slide } from 'svelte/transition';
  export let isShown: boolean;
</script>
<article class="media" transition:slide>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Agrega una respuesta"></textarea>
      </p>
    </div>
    <div class="field">
      <div class="control">
        <div class="buttons is-right">
          <button class="button is-primary" on:click={() => isShown = false}>Cancelar</button>
          <button class="button is-link">Enviar respuesta</button>
        </div>
      </div>
    </div>
  </div>
</article>
