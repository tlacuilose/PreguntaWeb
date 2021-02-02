<script>
  import { slide } from 'svelte/transition';
  import { quartOut } from 'svelte/easing';

  import { fs } from './firebase';
  import { reportItemID, reportItemType, reportItemLegend } from './stores';

  export let showsNewReport;
  export let showsNewAns;
  export let question_id;
  export let answer;

  $: readableDate = formatDate(answer.createdAt);

  function formatDate(numDate) {
    let options = { year: 'numeric', month: '2-digit', day: '2-digit'};
    return new Intl.DateTimeFormat('es', options).format(numDate);
  }

  function callNewReport() {
    showsNewReport = true;
    showsNewAns = false;
    const compID = ''.concat('quest:', question_id, 'ans:', answer.id);
    reportItemID.set(compID);
    reportItemType.set('answer');
    reportItemLegend.set('respuesta');
  }

  function handleUseful() {
    let one_hour = 60 * 60 * 1000;
    if (Date.now() - answer.usefulness.last_updated > one_hour) {
      updateRanking();
    }
  }

  async function updateRanking() {
    await fs.collection('questions').doc(question_id)
      .collection('answers').doc(answer.id).update({
        usefulness: {
          ranking: answer.usefulness.ranking + 1,
          last_updated: Date.now()
        }
      });
  }
</script>
  
<article class="media" transition:slide={{duration: 300, easing: quartOut}}>
  <div class="media-content">
    <div class="content">
      <p class="has-text-justified">
        {answer.answer}
        <br>
        <small><a on:click={callNewReport} disabled={showsNewReport}>Reportar</a> · {readableDate} · <a on:click={handleUseful}>Es &uacute;til</a> · {answer.usefulness.ranking > 0 ? answer.usefulness.ranking : ""}</small>
      </p>
    </div>
  </div>
</article>
