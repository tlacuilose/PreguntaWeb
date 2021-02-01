<script>
  import { fade, slide } from 'svelte/transition';
  import { quartIn } from 'svelte/easing';
  import Answer from './Answer.svelte';
  import NewAnswer from './NewAnswer.svelte';
  import NewReport from './NewReport.svelte';

  import { fs } from './firebase';
  import { reportItemID, reportItemType, reportItemLegend } from './stores';

  export let question;

  $: readableDate = formatDate(question.createdAt);

  const limitShown = 10;
  let showsAns = false;

  let showsNewAns = false;
  let showsNewReport = false;

  let answers = [];

  function formatDate(numDate) {
    let options = { year: 'numeric', month: '2-digit', day: '2-digit'};
    return new Intl.DateTimeFormat('es', options).format(numDate);
  }

  function showAnswers() {
    showsAns = true;
    if (answers) {
      fs.collection('questions').doc(question.id)
        .collection('answers')
        .orderBy('usefulness.ranking', 'desc')
        .limit(limitShown)
        .onSnapshot(querySnapshot => {
          let docs = [];
          querySnapshot.forEach(doc => {
            docs.push({...doc.data(), id: doc.id});
          });

          answers = [...docs];
      });
    }
  }

  function hideAnswers() {
    showsAns = false;
  }

  function showNewAns() {
    showsNewAns = true;
    showsNewReport = false;
  }

  function callNewReport() {
    showsNewReport = true;
    showsNewAns = false;
    reportItemID.set(question.id);
    reportItemType.set('question');
    reportItemLegend.set('pregunta');
  }

  function handleUseful() {
    let one_hour = 60 * 60 * 1000;
    if (Date.now() - question.usefulness.last_updated > one_hour) {
      updateRanking();
    }
  }

  async function updateRanking() {
    await fs.collection('questions').doc(question.id).update({
      usefulness: {
        ranking: question.usefulness.ranking + 1,
        last_updated: Date.now()
      }
    });
  }
</script>

<article class="media box" transition:fade={{duration: 300, easing: quartIn}}>
  <div class="media-content">
    <div class="content is-medium">
      <h1 class="title is-3">{question.question}</h1>
      <p class="has-text-justified">
        {question.description}
      </p>
      <small><a on:click={callNewReport} disabled={showsNewReport}>Reportar</a> · {readableDate} · <a on:click={handleUseful}>Es &uacute;til</a> · {question.usefulness.ranking > 0 ? question.usefulness.ranking : ""}</small>
    </div>
    {#if answers && showsAns}
      {#each answers as answer}
        <Answer question_id={question.id} answer={answer} bind:showsNewReport={showsNewReport} bind:showsNewAns={showsNewAns}></Answer>
      {/each}
    {/if}
    <div class="level mt-4">
      {#if question.times_ans > 0}
        {#if showsAns}
          <button class="button is-text level-left" on:click={hideAnswers}>Mostrar menos</button>
        {:else}
          <button class="button is-text level-left" on:click={showAnswers}>Mostrar respuestas ({question.times_ans})</button>
        {/if}
      {:else}
        <div class="level-left" disabled=true>Sin respuestas</div>
      {/if}
      <button class="button is-link level-right" disabled={showsNewAns} on:click={showNewAns}>Responder</button>
    </div>
  </div>
</article>
{#if showsNewAns}
  <div class="content" 
    in:slide="{{delay: 0, duration: 50}}"
    out:slide="{{delay: 300, duration: 50}}">
    <NewAnswer bind:isShown={showsNewAns} question={question}></NewAnswer>
  </div>
{/if}
{#if showsNewReport}
  <div class="content" 
    in:slide="{{delay: 0, duration: 50}}"
    out:slide="{{delay: 300, duration: 50}}">
    <NewReport bind:isShown={showsNewReport}></NewReport>
  </div>
{/if}
