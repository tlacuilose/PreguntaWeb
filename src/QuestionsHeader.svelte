<script>
  import { isShowingAnswered } from './stores';

  export let numAns;
  export let numUnans;

  function showAnswered() {
    isShowingAnswered.set(true);
  }

  function hideAnswered() {
    isShowingAnswered.set(false);
  }
</script>
  
<div class="content">
  <div class="tabs is-boxed">
    <ul>
      <li class:is-active={$isShowingAnswered}>
        <a on:click={showAnswered}>
          <span>
            Respondidas
          </span>
          <span class="tag {$isShowingAnswered ? 'is-primary' : 'is-light'} is-rounded ml-2">
            {numAns}
          </span>
        </a>
      </li>
      <li class:is-active={!$isShowingAnswered}>
        <a on:click={hideAnswered}>
          <span>
            No respondidas
          </span>
          <span class="tag {!$isShowingAnswered ? 'is-primary' : 'is-light'} is-rounded ml-2">
            {numUnans}
          </span>
        </a>
      </li>
    </ul>
  </div>
</div>
