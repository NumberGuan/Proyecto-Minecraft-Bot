
  module.exports = {
    name: 'random',
    description: "prueba",
    execute(message, args){

        var names = [
            "**Bill Gates**: ",
            "**Ken Kaneki**: ",
            "**Steve Jobs**: ",
            "**Joe Mama**: ",
            "**Lonely hobo on the streets**: "
          ]
          
         
        
          let randomAnswer = Math.floor(Math.random() * names.length)


          
         

     message.channel.send(names[randomAnswer]);
    }}