function getRes(requestOptions){
    var myHeaders = new Headers();
myHeaders.append("apikey", "OrNjTtH0GdrVSlpn8iHHNqdv2B1Ow912");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

    let amount = document.getElementById('amount').value;
    let to = document.getElementById('to').value;
    let form = document.getElementById('form').value;
    let res = document.getElementById('res');
    let time = document.getElementById('time');
    
    if (amount && to && form) { 
   fetch("https://api.apilayer.com/exchangerates_data/convert?to="+form+"&from="+to+"&amount="+amount, requestOptions)
      .then(response =>  response.text())
      .then( (result)=>{ 
        let data  = JSON.parse(result);
        converted_currency = data.result;
        timestamp = data.info.timestamp;
        res.innerHTML = converted_currency; 
      }  ); 
    }
}