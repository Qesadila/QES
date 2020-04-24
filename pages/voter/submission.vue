<template>
  <div>
    <h1>Submission of the vote</h1>
    <v-simple-table
      ><template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Property</th>
            <th class="text-left">Value</th>
          </tr>
        </thead>
        <tbody v-if="$store.state.voter.lastSubmittedVoteResult.voterVallotId">
          <tr>
            <th>voterVallotId</th>
            <td>
              {{ $store.state.voter.lastSubmittedVoteResult.voterVallotId }}
            </td>
          </tr>
          <tr>
            <th>fileHash</th>
            <td>
              {{ $store.state.voter.lastSubmittedVoteResult.fileHash }}
            </td>
          </tr>
          <tr>
            <th>globalIncrement</th>
            <td>
              {{ $store.state.voter.lastSubmittedVoteResult.globalIncrement }}
            </td>
          </tr>
          <tr>
            <th>votingFormIncrement</th>
            <td>
              {{
                $store.state.voter.lastSubmittedVoteResult.votingFormIncrement
              }}
            </td>
          </tr>
          <tr>
            <th>signatureVerified</th>
            <td>
              {{ $store.state.voter.lastSubmittedVoteResult.signatureVerified }}
            </td>
          </tr>
          <tr>
            <th>timeReceived</th>
            <td>
              {{ $store.state.voter.lastSubmittedVoteResult.timeReceived }}
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <th colspan="">
              Please submit vote firts. Here you can see result of your last
              submittion.
            </th>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  mounted() {}
}
</script>
