//$(document).ready(function() {
  Dropzone.options.mydropzone = {
  	acceptedFiles: ".csv",
    paramName: 'file',
    uploadMultiple: true,
    maxFileSize: 2,
    /*accept: function(file, done) {
        if (file.name == "justinbieber.jpg") {
          done("Naha, you don't.");
        }
        else { 
        	done();
        	console.log(file.name);
        }
      }
      init: function() {
          this.on("addedfile", function(file) { alert("Added file."); });
        }*/
    };
//});