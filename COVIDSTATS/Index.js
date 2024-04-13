$.ajax({
    type:'get',
    url:'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true',
    success:function(response)
    {
        console.log(response)

        for(var i=0;i<response.length;i++)
        {
            var tablerow=`<tr><td>${response[i].country}</td><td>${response[i].infected}</td><td>${response[i].tested}</td><td>${response[i].recovered}</td><td>${response[i].deceased}</td></tr>`
            $('#tbody').append(tablerow)
        }
        $('#covidtable').DataTable()
    },
     
    error:function(error)
    {
        console.log(error)
    }
})