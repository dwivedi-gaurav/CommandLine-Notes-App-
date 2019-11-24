const fs=require('fs');

const fetchNotes=()=>{
    try{
        var notes=JSON.parse(fs.readFileSync('notes-data.json'));
     }catch(e){
         var notes=[];
     }
    return notes;
}

const saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

const addNotes=(title,body)=>{
    var notes=fetchNotes();
    var duplicates=notes.filter((note)=>{
        return note.title===title
    })
    if(duplicates.length>0){
        console.log(`A note with title "${title}" already exists.`);
    }else{
        var note={title,body};
        notes.push(note);
        saveNotes(notes);
        console.log("Notes added:",note);
    }
}

const getAll=()=>{
    var notes=fetchNotes();
    if(notes.length===0){
        console.log("No notes available.");
    }else{
        console.log(notes);
    }
}

const getNote=(title)=>{
    var notes=fetchNotes();
    debugger;
    var note=notes.filter((note)=>{
        return note.title===title
    });
    if(note.length!==0){
        console.log(note[0]);
    }else{
        console.log(`No note found with title "${title}".`);
    }
}

const removeNote=(title)=>{
    var notes=fetchNotes();
    var filteredNotes=notes.filter((note)=>{
        return note.title!==title
    });
    if(notes.length===filteredNotes.length){
        console.log(`No note found with title "${title}".`);
    }else{
        saveNotes(filteredNotes);
        console.log(`Note with title "${title}" is removed.`);
    }
}

module.exports={addNotes,getAll,getNote,removeNote};