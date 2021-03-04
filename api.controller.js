var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://gr.kiwilimon.com/v6/recipe?language=es&key=999',
    headers: { }
  };


  

  exports.getRecipe = async (req, res) => {
      try {
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          res.status(200).json({ data: response.data });

        })
        .catch(function (error) {
          console.log(error);
        });


      } catch (error) {
          
      }
  }