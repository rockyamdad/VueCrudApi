<template>
  <div>
    <h1>Edit posts</h1>
    <form v-on:submit="savePost()">
      User id
      <input type="text" name="userId" v-model="post.userId"/><br><br>
      title
      <input type="text" name="title" v-model="post.title"/><br><br>
      body
      <input type="text" name="body" v-model="post.body"/><br><br>

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
    export default {
    data(){
        return {
            postId:null,
            post: {
                userId: '',
                title: '',
                body: ''
            }
        }
    },
        mounted(){
          let app = this;
          let id = app.$route.params.id;

          app.postId = id;

          axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
              .then(function (res) {
                  app.post = res.data;
              })
              .catch(function (res) {
                  alert('No data loaded');
              });
        },
        methods:{
            savePost(){
                event.preventDefault();
                let app = this;
                axios.put('https://jsonplaceholder.typicode.com/posts/' + app.postId, app.post)
                    .then(function (res) {
                        console.log(res.data);
                        app.$router.push({path:'/'});
                    })
                    .catch(function (res) {
                        alert('not save');
                    });
            }
        }

}
</script>
