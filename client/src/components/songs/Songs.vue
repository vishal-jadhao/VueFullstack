<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center row fill-height>
      <Panel title='Songs' class="songs-panel">
        <v-list two-line>
          <v-list-tile
            v-for="song in songs"
            :key="song.id"
            avatar
          >
            <v-list-tile-content>
              <v-list-tile-title v-html="song.title"></v-list-tile-title>
              <v-list-tile v-html="song.artist"></v-list-tile>
              <v-list-tile v-html="song.album"></v-list-tile>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </Panel>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '@/components/common/Panel'
import AlbumService from '@/services/AlbumService'
export default {
  name: 'Songs',
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // Best place for AJAX call

    // Album promise
    this.songs = (await AlbumService.index()).data
  },
  components: {
    Panel
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
  .songs-panel .panel-content {
    height: 300px;
    overflow: auto;
  }
</style>
