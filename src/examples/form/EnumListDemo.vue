<template>
  <div>
    <DataForm label-width="120px" :readonly="isReadonly">
      <EnumList type="checkbox" v-model="form.skill" label="语言技能" :options="langOptions" />
      <EnumList label="兴趣"  v-model="form.hobbies" :options="hobbiesOptions" />
    </DataForm>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      langOptions: [
        {
          label: 'javascript',
          value: 'javascript'
        },
        {
          label: 'java',
          value: 'java'
        },
        {
          label: 'haskell',
          value: 'haskell',
          disabled: true
        }
      ],
      hobbiesOptions: [
        {
          label: '足球',
          value: 'football'
        },
        {
          label: '音乐',
          value: 'music'
        },
        {
          label: '网球',
          value: 'tennis'
        }
      ],
      form: {
        skill: [],
        hobbies: ['music']
      }
    }
  }

}
</script>
