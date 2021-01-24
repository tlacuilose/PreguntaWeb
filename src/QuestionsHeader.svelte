<script lang="typescript">
  export let questions: string[];

  let isShowingAnswered: boolean = true;

  function showAnswered() {
    isShowingAnswered = true;
  }

  function hideAnswered() {
    isShowingAnswered = false;
  }
</script>
  
<div class="columns">
  <div class="column">
    <div class="tabs is-boxed">
      <ul>
        <li class:is-active={isShowingAnswered}>
          <a on:click={showAnswered}>
            <span>
              Respondidas
            </span>
            <span class="tag is-primary is-rounded ml-2">
              {questions.length}
            </span>
          </a>
        </li>
        <li class:is-active={!isShowingAnswered}>
          <a on:click={hideAnswered}>
            <span>
              No respondidas
            </span>
            <span class="tag is-light is-rounded ml-2">
              0
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="column is-one-fifth has-text-centered">
      <button class="button is-link is-outlined">Añadir pregunta</button>
  </div>
</div>
