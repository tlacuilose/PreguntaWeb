<script>
  import NewQuestion from './NewQuestion.svelte';
  export let numAns;
  export let numUnans;
  export let isShowingAnswered;

  let isShowingNewQuestion;

  function showAnswered() {
    isShowingAnswered = true;
  }

  function hideAnswered() {
    isShowingAnswered = false;
  }
</script>
  
<div class="columns">
  <div class="column">
    {#if isShowingNewQuestion}
      <NewQuestion bind:isShown={isShowingNewQuestion}></NewQuestion>
    {/if}
    <div class="tabs is-boxed">
      <ul>
        <li class:is-active={isShowingAnswered}>
          <a on:click={showAnswered}>
            <span>
              Respondidas
            </span>
            <span class="tag {isShowingAnswered ? 'is-primary' : 'is-light'} is-rounded ml-2">
              {numAns}
            </span>
          </a>
        </li>
        <li class:is-active={!isShowingAnswered}>
          <a on:click={hideAnswered}>
            <span>
              No respondidas
            </span>
            <span class="tag {!isShowingAnswered ? 'is-primary' : 'is-light'} is-rounded ml-2">
              {numUnans}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="column is-one-fifth has-text-centered">
    <button class="button is-link is-outlined" on:click={() => isShowingNewQuestion = true} disabled={isShowingNewQuestion}>Añadir pregunta</button>
  </div>
</div>
