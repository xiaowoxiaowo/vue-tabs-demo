let commonMixin
commonMixin = {
  methods: {
    pushNamePage (name, param) {
      if (param) {
        this.$router.push({ name: name, params: param })
      } else {
        this.$router.push({ name: name })
      }
    },
    pushPage (name, param) {
      if (param) {
        this.$router.push({ path: '/home/' + name, query: param })
      } else {
        this.$router.push({ path: '/home/' + name })
      }
    },
    pushPage3 (url, param) {
      if (param) {
        this.$router.push({ path: `/home/${url}/${param}` })
      } else {
        this.$router.push({ path: `/home/${url}` })
      }
    },
    addTagPage (name, url, text, param) {
      this.pushPage3(url, param)
      if (this.$store.state.tagList[0] === undefined) {
        let arr = { text: text, url: url, param: param }
        if (param) {
          this.$store.state.includePageNames.push(`/home/${name}/${param}`)
        } else {
          this.$store.state.includePageNames.push(`/home/${name}`)
        }
        this.$store.state.tagList.push(arr)
        this.$store.state.tagSelected = (this.$store.state.tagList.length - 1) + ''
      } else {
        for (let [index, cur] of this.$store.state.tagList.entries()) {
          if (cur.text === text) {
            this.$store.state.tagSelected = index + ''
            return
          } else {
            if (index === this.$store.state.tagList.length - 1) {
              let arr = { text: text, url: url, param: param }
              if (param) {
                this.$store.state.includePageNames.push(`/home/${name}/${param}`)
              } else {
                this.$store.state.includePageNames.push(`/home/${name}`)
              }
              this.$store.state.tagList.push(arr)
              this.$store.state.tagSelected = (this.$store.state.tagList.length - 1) + ''
            }
          }
        }
      }
    }
  }
}
export default commonMixin
