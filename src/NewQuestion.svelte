<script>
  import { slide } from 'svelte/transition';
  export let isShown;
</script>
  
<div class="content" transition:slide>
  <div class="field">
    <label class="label">Pregunta</label>
    <div class="control">
      <input class="input" type="text" placeholder="Escribe tu pregunta..."/>
    </div>
    <p class="help">Recuerda que las preguntas no son academicas, si no tecnicas.</p>
  </div>
  <div class="field">
    <label class="label">Descripci&oacute;n</label>
    <div class="control">
      <textarea class="textarea" placeholder="Escribe una preve descripcion..."></textarea>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <div class="buttons is-right">
        <button class="button is-primary" on:click={() => isShown = false}>Cancelar</button>
        <button class="button is-link">Enviar pregunta</button>
      </div>
    </div>
  </div>
</div>
