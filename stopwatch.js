//Creating Stop Watch

function Stopwatch(){

    let startTime,endTTime,running,duration=0;

    this.start=function(){
        if(running){
            throw new Error('Already running!');
        }

        running=true;
        startTime = new Date();
    };

    this.stop=function(){

        if(!running){
            throw new Error('Stop Watch was not started!');
        }

        running=false;
        endTTime = new Date();

        const seconds = (endTTime.getTime() - startTime.getTime())/1000;
        duration+=seconds;
   
    };

    this.reset=function(){
        startTime=null;
        endTTime=null;
        running=false;
        duration=0;
        
    };

    Object.defineProperty(this,'duration',{

        get:function(){
            return duration;
        }
    })

}

