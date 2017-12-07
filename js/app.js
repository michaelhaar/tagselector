Vue.component('tag-item', {
  props: ['tag'],
  template: `
  <button class="tag-item" v-on:click="toggleSelect" v-bind:class="{ selected: tag.selected }">
    <i class="fa fa-check" aria-hidden="true" v-bind:class="{ hidden: !tag.selected }"></i>
    <span>{{ tag.name }}</span>
  </button>
  `,
  methods: {
    toggleSelect: function () {
      this.tag.selected = !this.tag.selected;
      console.log(this.tag.selected);
    }
  }
})

var vm = new Vue({
  el: '#tag-selector',
  data: {
    searchString: '',
    hint: 'Most popular Tags:',
    tagList: []
  },
})


// receive an array of tags for our database
var tagsFromDB = [
  { id: 0, name: 'Bouldern', count: 3000, percent: 50},
  { id: 1, name: 'Gemütlich', count: 1500, percent: 25},
  { id: 2, name: 'Adrenalin', count: 1500, percent: 25},
  { id: 3, name: 'Schönwetter', count: 1500, percent: 25},
  { id: 4, name: 'Sommer', count: 1500, percent: 25},
  { id: 5, name: 'Sonne', count: 1500, percent: 25},
  { id: 6, name: 'Baden', count: 1500, percent: 25},
  { id: 7, name: 'Kinder', count: 1500, percent: 25},
  { id: 8, name: 'Action', count: 1500, percent: 25},
  { id: 9, name: 'Romantisch', count: 1500, percent: 25},
  { id: 10, name: 'Weihnachten', count: 1500, percent: 25},
  { id: 11, name: 'Shopping', count: 1500, percent: 25},
  { id: 12, name: 'Tagesausflug', count: 1500, percent: 25},
  { id: 12, name: 'Brettspiele', count: 1500, percent: 25},
  { id: 12, name: 'Kulinarik', count: 1500, percent: 25},
  { id: 12, name: 'Party', count: 1500, percent: 25},
  { id: 12, name: 'Kulturell', count: 1500, percent: 25},
  { id: 12, name: 'PC Games', count: 1500, percent: 25},
  { id: 12, name: 'Adrenalin', count: 1500, percent: 25},
]

// set selected to false
for (var i = 0; i < tagsFromDB.length; i++) {
    tagsFromDB[i].selected = false;
}

vm.tagList = tagsFromDB;
