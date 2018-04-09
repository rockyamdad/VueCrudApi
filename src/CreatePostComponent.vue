<template>
  <div>
    <h1>Create posts</h1>
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
            post: {
                userId: '',
                title: '',
                body: ''
            }
        }
    },
        methods:{
            savePost(){
                event.preventDefault();
                let app = this;
                axios.post('https://jsonplaceholder.typicode.com/posts', app.post)
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
