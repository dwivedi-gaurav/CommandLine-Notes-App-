const fs=require('fs');
const _ =require('lodash');
const yargs=require('yargs');

const notes=require('./notes');

const title={
    describe:'Title of the note',
    demand:true,
    alias:'t'
}
const body={
    describe:'Body of the note',
    demand:true,
    alias:'b'
}

const argv=yargs
    .command('add','Add a new note',{title,body})
    .command('list','List all notes')
    .command('read','Gets a note whth given title',{title})
    .command('remove','Removes note with given title',{title})
    .help()
    .argv;
const command=argv._[0];
console.log("command:",command);

if(command==='add'){
    notes.addNotes(argv.title,argv.body);
}else if(command==='list'){
    notes.getAll();
}else if(command==='remove'){
    notes.removeNote(argv.title);
}else if(command==='read'){
    notes.getNote(argv.title);
}else{
    console.log("Command not found");
}
