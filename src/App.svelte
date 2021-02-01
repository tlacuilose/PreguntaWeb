<script>
  import Title from './Title.svelte';
  import QuestionsHeader from './QuestionsHeader.svelte';
  import Questions from './Questions.svelte';
  import InfoMenu from './InfoMenu.svelte';

  import { isShowingAnswered } from './stores';
  import { fs } from './firebase';

  const pagUnit = 1;

  let ansRef = fs.collection('questions').where('answered', '==', true);
  let unansRef = fs.collection('questions').where('answered', '==', false);

  let answered = [];
  let sizeAns = 0;
  let totalAns = 0;
  let extraAns = [];

  let unanswered = [];
  let sizeUnans = 0;
  let totalUnans = 0;
  let extraUnans = [];

  fs.collection('niches').doc('estudia-en-casa').onSnapshot(docSnapshot => {
    let niche = docSnapshot.data();
    totalAns = niche.answered;
    totalUnans = niche.unanswered;
  });

  ansRef.orderBy('usefulness.ranking', 'desc').orderBy('createdAt', 'desc').limit(pagUnit).onSnapshot(querySnapshot => {
    let docs = [];
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    answered = [...docs];
    sizeAns = answered.length + extraAns.length;
  });


  unansRef.orderBy('usefulness.ranking', 'desc').orderBy('createdAt', 'desc').limit(pagUnit).onSnapshot(querySnapshot => {
    let docs = [];
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    unanswered = [...docs];
    sizeUnans = unanswered.length + extraUnans.length;
  });

  async function showExtraAns() {
    const lastAns = extraAns ? extraAns[extraAns.length - 1] : answered[answered.length - 1];
    let docs = [];
    const snapshot = await ansRef
      .orderBy('usefulness.ranking', 'desc')
      .orderBy('createdAt', 'desc')
      .startAfter(lastAns.usefulness.ranking, lastAns.createdAt)
      .limit(pagUnit)
      .get();

    snapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    extraAns = [...extraAns, ...docs];
    sizeAns = answered.length + extraAns.length;
  }

  async function showExtraUnans() {
    const lastUnans = extraUnans.length > 0 ? extraUnans[extraUnans.length - 1] : unanswered[unanswered.length - 1];
    let docs = [];
    const snapshot = await unansRef
      .orderBy('usefulness.ranking', 'desc')
      .orderBy('createdAt', 'desc')
      .startAfter(lastUnans.usefulness.ranking, lastUnans.createdAt)
      .limit(pagUnit)
      .get();

    snapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    extraUnans = [...extraUnans, ...docs];
    sizeUnans = unanswered.length + extraUnans.length;
  }
</script>

<svelte:head>
  <style src="./mystyles.scss"/>
</svelte:head>

<main>
  <Title></Title>
  <section class="section pt-0">
    <div class="container">
      <QuestionsHeader numAns={totalAns} numUnans={totalUnans}></QuestionsHeader>
      <div class="columns">
        <div class="column">
          {#if $isShowingAnswered}
            <Questions questions={answered}></Questions>
            <Questions questions={extraAns}></Questions>
            {#if sizeAns < totalAns}
              <button class="button is-fullwidth" on:click={showExtraAns}>Mostrar m&aacute;s preguntas</button>
            {/if}
          {:else}
            <Questions questions={unanswered}></Questions>
            <Questions questions={extraUnans}></Questions>
            {#if sizeUnans < totalUnans}
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
