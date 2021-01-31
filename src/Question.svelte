<script>
  import { fade } from 'svelte/transition';
  import { quartIn } from 'svelte/easing';
  import Answer from './Answer.svelte';
  import NewAnswer from './NewAnswer.svelte';

  import { fs } from './firebase';

  export let question;

  $: readableDate = formatDate(question.createdAt);

  var showsAns = false;

  var showsNewAns = false;

  let answers = [];

  function formatDate(numDate) {
    let options = { year: 'numeric', month: '2-digit', day: '2-digit'};
    return new Intl.DateTimeFormat('es', options).format(numDate);
  }

  function showAnswers() {
    showsAns = true;
    fs.collection('questions').doc(question.id)
      .collection('answers').onSnapshot(querySnapshot => {
        let docs = [];
        querySnapshot.forEach(doc => {
          docs.push(doc.data());
        });

        answers = [...docs];
    });
  }

  function hideAnswers() {
    showsAns = false;
  }

</script>

<article class="media box" transition:fade={{duration: 300, easing: quartIn}}>
  <div class="media-content">
    <div class="content is-medium">
      <h1 class="title is-3">{question.question}</h1>
      <p class="has-text-justified">
        {question.description}
      </p>
      <small><a>Reportar</a> · Preguntada en  {readableDate} · <a>Me sirvio</a></small>
    </div>
    {#if answers && showsAns}
      {#each answers as answer}
        <Answer answer={answer}></Answer>
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
      <button class="button is-link level-right" disabled={showsNewAns} on:click={() => showsNewAns = true}>Responder</button>
    </div>
  </div>
</article>
{#if showsNewAns}
  <NewAnswer bind:isShown={showsNewAns} question={question}></NewAnswer>
{/if}
