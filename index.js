$( document ).ready(function() {
    const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    $('#submit').click(function() {
        var note = notes.indexOf($('#cuerda').find(":selected").val());
        for (let i = 0; i < $('#traste').val(); i++) {   
            note = note == 11 ? 0 : note+1;
        }
        $('#answer').html("Note is: <strong>" + notes[note] + '</strong>');
    });  
});