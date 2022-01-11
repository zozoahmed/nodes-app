const yargs =require('yargs');
const student =require('./student');
yargs.command({
    command:'add',
    describe :'add student',  
    builder :{
     id : {
         describe :'describe id student',
         demandOption:true,
         type :'number'
     },
     username:{
        describe :'describe username student',
        type :'string'
     }
    },
    gread:{
        describe :'describe gread student',
        demandOption:true,
        type: 'array'
    },
    handler : (x)=>{
        student.addStudents(x.id,x.username,x.gread);
    } 

});
yargs.command({
    command:'delet',
    describe :'delet student',  
    builder :{
     id : {
         describe :'descibe id student',
         demandOption:true,
         type :'number'
     },
     username:{
        describe :'describe username student',
        type :'string'
     }
    },
    gread:{
        type: 'array'
    },
    handler : (x)=>{
        student.deleteStudents(x.id);
              }
});
yargs.command({
    command:'read',
    describe :'read student',  
    builder :{
     id : {
         describe :'descibe id student',
         demandOption:true,
         type :'number'
     },
     username:{
        describe :'describe username student',
        type :'string'
     }
    },
    gread:{
        type: 'array'
    },
    handler : (x)=>{
        student.readStudents(x.id);
             }

});
yargs.command({
    command:'list',
    describe :'list students',  
    builder :{
     id : {
         describe :'descibe id student',
          type :'number'
     },
     username:{
        describe :'describe username student',
        type :'string'
     }
    },
    gread:{
        type: 'array'
    },
    handler : (x)=>{
        console.log("list students");  
        student.listStudents(x.id,x.username,x.gread);
}

});
  yargs.parse();

