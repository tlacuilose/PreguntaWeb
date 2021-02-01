<script>
  import { slide } from 'svelte/transition';

  import { fs } from './firebase';
  import { showsNewReport, reportItemID, reportItemType, reportItemLegend } from './stores';

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
    showsNewReport.set(false);
  }
</script>

<article class="media" transition:slide>
  <form class="media-content" on:submit|preventDefault={handleSubmit}>
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Agrega la razón del reporte..." bind:value={report.reason}></textarea>
      </p>
    </div>
    <div class="field">
      <div class="control">
        <div class="buttons is-right">
          <button class="button is-light" on:click={() => showsNewReport.set(false)}>Cancelar</button>
          <button type="submit" class="button is-danger is-light" disabled={report.reason.length === 0}>Reportar {$reportItemLegend}</button>
        </div>
      </div>
    </div>
  </form>
</article>
