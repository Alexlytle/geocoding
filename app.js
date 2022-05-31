    
  
    const geocode = () => {
    
        let location = '2573 claybank rd farifield ca'
        axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
            params:{
                address:location,
                key:''
            }
        }).then((res=>{
            console.log(res.data)
            //formated address
            console.log(res.data.results[0].formatted_address)
        }))
        .catch((err)=>{
            console.log(err)
        })
    }
    geocode()
