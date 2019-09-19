function successCallback(result){
  console.log("Audio file ready at URL" + result);
}

function failureCallback(error){
  console.error('Error generating audio file' + error);
}


const promsie = createAudioFileAsync(audioSettings);
promsie.then(successCallback, failureCallback);
//createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
