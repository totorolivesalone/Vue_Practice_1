const app=Vue.createApp({
    data(){
        return{
            InputTask:"",
            Tasks:[],
            captionState:true,
            captionValue:"Hide"

        }

    },
    methods:{
    addTask(){
        this.Tasks.push(this.InputTask)
        this.InputTask=""
    },
    updateCaption(){
       this.captionState= !this.captionState
       this.captionValue= this.captionState ? "Hide" : "Show"

    }

    }
})
app.mount("#assignment")