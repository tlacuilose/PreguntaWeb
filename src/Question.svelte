<script lang="typescript">
  import { fade } from 'svelte/transition';
  import { quartIn } from 'svelte/easing';
  import Answer from './Answer.svelte';
  import NoAnswers from './NoAnswers.svelte';
  import NewAnswer from './NewAnswer.svelte';

  import type { QuestionType } from './models';
  import type { svg_element } from 'svelte/internal';

  export let question: QuestionType;

  const maxShown: number = 2; // Two answers shown;
  const limitMax: number = 6; // Up to 10 answers;
  let shownAns: number = maxShown;
  let showsNew: boolean = false;

  function showMoreAns() {
    let amountAns = question.answers.length > limitMax ? limitMax : question.answers.length;
    shownAns = amountAns;
  }

  function hideMoreAns() {
    shownAns = maxShown;
  }

</script>

<article class="media box" transition:fade={{duration: 300, easing: quartIn}}>
  <div class="media-content">
    <div class="content is-medium">
      <h1 class="title is-3">{question.question}</h1>
      <p class="has-text-justified">
        {question.description}
      </p>
      <small><a>Reportar</a> · Preguntada en {question.date} · <a>Me sirvio</a></small>
    </div>
    {#if question.answers}
      {#each question.answers.slice(0, shownAns) as answer}
        <Answer answer={answer}></Answer>
      {/each}
    {:else}
      <NoAnswers></NoAnswers>
    {/if}
    <div class="level mt-4">
      {#if question.answers && question.answers.length > shownAns && shownAns == maxShown}
        <button class="button is-text level-left" on:click={showMoreAns}>M&aacute;s respuestas ({question.answers.length < limitMax ? question.answers.length - maxShown : limitMax - maxShown})</button>
      {:else if shownAns > maxShown}
        <button class="button is-text level-left" on:click={hideMoreAns}>Mostrar menos</button>
      {:else}
        <div class="level-right"></div>
      {/if}
      <button class="button is-link level-right" disabled={showsNew} on:click={() => showsNew = true}>Responder</button>
    </div>
  </div>
</article>
{#if showsNew}
  <NewAnswer bind:isShown={showsNew}></NewAnswer>
{/if}
