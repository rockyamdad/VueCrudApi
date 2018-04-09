<template>
  <div id="app">
    <h1>All the posts</h1>
    <router-link :to="{name:'createPost'}">Create Post</router-link>
    <table border="2" width="800px">
      <thead>
        <tr>
            <td><b>User Id</b></td>
            <td><b>Title</b></td>
            <td><b>Body</b></td>
            <td><b>Action</b></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts">
            <td>{{post.userId}}</td>
            <td>{{post.title}}</td>
            <td>{{post.body}}</td>
            <td>
                <router-link :to="{name:'editPost', params:{id: post.id }}">Edit</router-link>
                <a style="color:red" href="#"
                   class="btn btn-xs btn-danger"
                   v-on:click="deletePost(post.id)">
                    Delete
                </a>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
    data(){
        return {
            posts: []
        }
    },
    mounted(){
        let app = this;
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (res) {
                app.posts = res.data;
            })
            .catch(function (res) {
                alert('Not get any data');
            })
    },
        methods:{

            deletePost(id){
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
                        .then(function (resp) {
                            console.log(res.data);
                        })
                        .catch(function (resp) {
                            alert("Could not delete post");
                        });
                }
            }
        }
}
</script>
