<script>
  import { slide } from 'svelte/transition';

  import { fs } from './firebase';
  import { reportItemID, reportItemType, reportItemLegend } from './stores';

  export let isShown;

  let report = {
    reason: ""
  }

  async function addReport() {
    await fs.collection('reports').doc().set({
      ...report,
      createdAt: Date.now(),
      itemId: $reportItemID,
      itemType: $reportItemType
    });
  }

  function handleSubmit() {
    addReport();
    report = { reason: '' };
    isShown = false;
  }
</script>

<article class="media" 
  in:slide="{{delay: 50, duration: 300}}"
  out:slide="{{delay: 0, duration: 300}}">
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Agrega la razón del reporte..." bind:value={report.reason}></textarea>
      </p>
    </div>
    <div class="field">
      <div class="control">
        <div class="buttons is-right">
          <button class="button is-light" on:click={() => isShown = false}>Cancelar</button>
          <button class="button is-danger is-light" disabled={report.reason.length === 0} on:click={handleSubmit}>Reportar {$reportItemLegend}</button>
        </div>
      </div>
    </div>
  </div>
</article>
