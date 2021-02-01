<script>
  import Title from './Title.svelte';
  import NewQuestion from './NewQuestion.svelte';
  import QuestionsHeader from './QuestionsHeader.svelte';
  import Questions from './Questions.svelte';
  import InfoMenu from './InfoMenu.svelte';

  import { isShowingAnswered } from './stores';
  import { fs } from './firebase';

  const pageUnit = 10;

  const ansRef = fs.collection('questions').where('answered', '==', true);
  const unansRef = fs.collection('questions').where('answered', '==', false);

  let answered = [];
  let numAnsPage = 1;
  let totalAns = 0;

  let unanswered = [];
  let numUnansPage = 1;
  let totalUnans = 0;

  let newquestion = "";
  let isShowingNewQuestion = false;

  fs.collection('niches').doc('estudia-en-casa').onSnapshot(docSnapshot => {
    let niche = docSnapshot.data();
    totalAns = niche.answered;
    totalUnans = niche.unanswered;
  });

  let subAns = ansRef.orderBy('usefulness.ranking', 'desc').orderBy('createdAt', 'desc').limit(pageUnit).onSnapshot(querySnapshot => {
    let docs = [];
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    answered = [...docs];
  });


  let subUnans = unansRef.orderBy('usefulness.ranking', 'desc').orderBy('createdAt', 'desc').limit(pageUnit).onSnapshot(querySnapshot => {
    let docs = [];
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    unanswered = [...docs];
  });

  async function showExtraAns() {
    subAns();
    numAnsPage += 1;
    subAns = ansRef.orderBy('usefulness.ranking', 'desc').orderBy('createdAt', 'desc').limit(pageUnit * numAnsPage).onSnapshot(querySnapshot => {
      let docs = [];
      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id});
      });

      answered = [...docs];
    });
  }

  async function showExtraUnans() {
    subUnans();
    numUnansPage += 1;
    subUnans = unansRef.orderBy('usefulness.ranking', 'desc').orderBy('createdAt', 'desc').limit(pageUnit * numUnansPage).onSnapshot(querySnapshot => {
      let docs = [];
      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id: doc.id});
      });

      unanswered = [...docs];
    });
  }
</script>

<svelte:head>
  <style src="./mystyles.scss"/>
</svelte:head>

<main>
  <Title bind:showsNewQuestion={isShowingNewQuestion} bind:newquestion={newquestion}></Title>
  <section class="section pt-0">
    <div class="container">
      <div class="columns">
        <div class="column">
          {#if isShowingNewQuestion}
            <div class="content">
              <NewQuestion bind:isShown={isShowingNewQuestion} bind:newquestion={newquestion}></NewQuestion>
            </div>
          {/if}
          <QuestionsHeader numAns={totalAns} numUnans={totalUnans}></QuestionsHeader>
          {#if $isShowingAnswered}
            <Questions questions={answered}></Questions>
            {#if answered.length < totalAns}
              <button class="button is-fullwidth" on:click={showExtraAns}>Mostrar m&aacute;s preguntas</button>
            {/if}
          {:else}
            <Questions questions={unanswered}></Questions>
            {#if unanswered.length < totalUnans}
              <button class="button is-fullwidth" on:click={showExtraUnans}>Mostrar m&aacute;s preguntas</button>
            {/if}
          {/if}
        </div>
        <div class="column is-one-fifth">
          <InfoMenu></InfoMenu>
        </div>
      </div>
    </div>
  </section>
</main>
